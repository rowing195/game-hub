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

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (file === '.git' || file === 'node_modules' || file === '.github' || file === 'scripts') {
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

          if (!src && scriptContent && scriptContent.trim()) {
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
