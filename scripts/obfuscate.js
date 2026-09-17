const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const JavaScriptObfuscator = require('javascript-obfuscator');

const obfuscationOptions = {
  compact: true,
  controlFlowFlattening: false,
  deadCodeInjection: false,
  identifierNamesGenerator: 'hexadecimal',
  log: false,
  renameGlobals: false,
  selfDefending: false,
  simplify: true,
  splitStrings: true,
  stringArray: true,
  stringArrayCallsTransform: true,
  stringArrayEncoding: ['base64'],
  stringArrayThreshold: 0.75,
  unicodeEscapeSequence: false
};

const JS_MIME_TYPES = new Set([
  'text/javascript', 'application/javascript', 'application/ecmascript', 'text/ecmascript'
]);

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    // vendor/ 放的是第三方套件的建置產物(three.js、GSAP、Lenis),原始碼本來就是公開的,
    // 混淆它只會拖慢部署、把體積吹大,還多一份壞掉的風險。tests/ 不是給玩家跑的。
    if (file === '.git' || file === 'node_modules' || file === '.github' || file === 'scripts' ||
        file === 'vendor' || file === 'tests') {
      return;
    }

    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

function processFiles(rootDirectory) {
  console.log(`🔍 開始掃描與混淆目錄: ${rootDirectory}`);
  const allFiles = getAllFiles(rootDirectory);

  let obfuscatedJsCount = 0;
  let obfuscatedHtmlCount = 0;

  allFiles.forEach((filePath) => {
    const ext = path.extname(filePath).toLowerCase();

    if (ext === '.js') {
      try {
        const code = fs.readFileSync(filePath, 'utf-8');
        if (code.trim()) {
          const obfuscated = JavaScriptObfuscator.obfuscate(code, obfuscationOptions).getObfuscatedCode();
          fs.writeFileSync(filePath, obfuscated, 'utf-8');
          obfuscatedJsCount++;
        }
      } catch (err) {
        console.error(`⚠️ 混淆 JS 檔案失敗 [${filePath}]:`, err.message);
      }
    } else if (ext === '.html') {
      try {
        const html = fs.readFileSync(filePath, 'utf-8');
        const $ = cheerio.load(html, { decodeEntities: false });
        let hasChanges = false;

        $('script').each((i, el) => {
          const src = $(el).attr('src');
          const scriptContent = $(el).html();
          // 只混淆真正的 JS:importmap、JSON、模板等資料型 <script> 不是程式碼,丟進混淆器會解析失敗
          const type = ($(el).attr('type') || '').trim().toLowerCase();
          const isJs = type === '' || type === 'module' || JS_MIME_TYPES.has(type);

          if (!src && isJs && scriptContent && scriptContent.trim()) {
            try {
              const obfuscated = JavaScriptObfuscator.obfuscate(scriptContent, obfuscationOptions).getObfuscatedCode();
              $(el).html(obfuscated);
              hasChanges = true;
            } catch (inlineErr) {
              console.error(`⚠️ 混淆 Inline Script 失敗 [${filePath} line ${i}]:`, inlineErr.message);
            }
          }
        });

        if (hasChanges) {
          fs.writeFileSync(filePath, $.html(), 'utf-8');
          obfuscatedHtmlCount++;
        }
      } catch (err) {
        console.error(`⚠️ 處理 HTML 檔案失敗 [${filePath}]:`, err.message);
      }
    }
  });

  console.log(`✅ 混淆完成！已成功混淆 ${obfuscatedJsCount} 個 JS 檔案與 ${obfuscatedHtmlCount} 個 HTML 內嵌腳本。`);
}

processFiles(path.resolve(__dirname, '..'));
