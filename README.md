<div align="center" id="top">

# 玩具箱 · Ludi

<em>點開就玩的網頁遊戲與氛圍小品</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/rowing195/game-hub?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/rowing195/game-hub?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/rowing195/game-hub?style=flat&color=0080ff" alt="repo-language-count">

<em>使用的技術：</em>

<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=html5&logoColor=white" alt="HTML5">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/three.js-000000.svg?style=flat&logo=threedotjs&logoColor=white" alt="three.js">
<img src="https://img.shields.io/badge/Node.js-339933.svg?style=flat&logo=nodedotjs&logoColor=white" alt="Node.js">
<img src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=flat&logo=githubactions&logoColor=white" alt="GitHub Actions">
<img src="https://img.shields.io/badge/GitHub%20Pages-222222.svg?style=flat&logo=githubpages&logoColor=white" alt="GitHub Pages">

**▶ 線上遊玩：https://rowing195.github.io/game-hub/**

</div>
<br>

---

### 目錄

- [總覽](#總覽)
- [作品一覽](#作品一覽)
- [功能特色](#功能特色)
- [專案結構](#專案結構)
- [發布流程](#發布流程)
- [本機執行](#本機執行)
- [授權](#授權)
- [致謝](#致謝)

---

## 總覽

閒暇時浪費 token 做出來的網頁小玩具總集 —— 遊戲與氛圍小品，全部是純前端（HTML / CSS / JavaScript），不需安裝、不需後端，點開就跑。本 repo 是門戶首頁，透過 Git Submodules 把各個獨立專案組合起來，再由 GitHub Actions 統一發布到 GitHub Pages。

**為什麼是 Ludi？**

- 🕹️ **零門檻**：每個作品都是靜態頁面，瀏覽器打開即可遊玩。
- 🧩 **模組化收錄**：每款遊戲是各自的 repo，以 submodule 掛進來，互不干擾。
- 🚀 **自動發布**：任何一個遊戲 repo push 到 `main`，約一分鐘內網站就會更新，不需手動同步 submodule。
- 🔒 **發布前混淆**：部署時自動混淆 JS 與內嵌腳本，第三方套件與素材則略過。
- 🤖 **標註模型**：首頁卡片標出每個作品由哪個 AI 模型協作完成。

> [!NOTE]
> 各遊戲的 submodule repo 目前**沒有公開**，所以下方作品連結在 GitHub 上點不進去，`git clone --recursive` 也拉不到子模組。請直接到[線上版](https://rowing195.github.io/game-hub/)遊玩。

---

## 作品一覽

### 🎮 遊戲

| 作品 | 模型 | 說明 |
|------|------|------|
| [🧙 肉鴿倖存者 Rogue Survivor](games/rogue-survivor/) | — | 以一敵千的生存肉鴿：七位角色各擅一種武器，升級選牌、武器進化、永久強化，撐過十五分鐘。 |
| [🎮 Subway Run 3D — 方塊人](games/html-games/subway-run-3d.html) | Fable 5 | 酷跑的 3D 進化版，操控方塊小人在立體軌道上飛馳。 |
| [🏰 方塊塔防 Block Defense](games/html-games/tower-defense.html) | — | 在軌道旁佈署四種砲塔，擋下一波波湧來的方塊敵人。 |
| [🐍 貪吃蛇](games/html-games/snake.html) | Opus 5 | 經典貪吃蛇，方向鍵 / WASD 操作，本機記錄最高分。 |
| [🧱 俄羅斯方塊](games/html-games/tetris.html) | Opus 5 | 進場可選單人練習或雙人對戰；單人消多行有分數加成、即時彈出加分動畫，並記錄本機排行榜前 10 名。雙人對戰可再選競技模式或道具模式（超載攻擊/迷霧/加速/反轉/護盾，分數越高效果越強）。 |
| [⚜️ 祕法王國 Arcane Realm](games/arcane-realm/) | — | 中世紀魔法風掛機遊戲：建設城市、指派領民、與鄰國貿易。出征採即時戰術制 —— 排陣型、算兵種相剋、臨陣下令。 |
| [🎯 FPS Arena](games/fps-arena/) | Opus 5 | three.js 的第一人稱射擊：彈道是真的在飛（有質量、初速、空氣阻力與重力），190 公尺的跑道讓下墜與提前量看得出來。五張地圖各有一種視線結構（開闊長射線 / 環形近戰 / 平行車道 / 死胡同機棚 / 沙暴轉角），三種模式（擊殺競賽 / 陣地戰 / 推進作戰）。開打前可以挑場次規模與同場人數，敵人會找掩體、蹲下、探頭。 |

### 🌙 氛圍小品

不以輸贏為目的，單純的互動、敘事與氛圍體驗。

| 作品 | 模型 | 說明 |
|------|------|------|
| [🪶 羽毛筆繪製奇幻地圖](games/html-games/fantasy_map.html) | Gemini 3.6 Flash | 看著羽毛筆在老舊羊皮紙上優雅勾勒出奇幻大陸、山脈、河流與城池標示。 |
| [🐈‍⬛ 星夜下的貓](games/html-games/cat-stargazing.html) | Fable 5 | 夜空下的草原，一隻貓在樹旁不停轉圈，螢火蟲飛舞、流星劃過；右上面板可調視角、星空與風。一段放鬆的互動小品。 |
| [🌧 雨夜模擬器](games/html-games/rain-sim.html) | Fable 5 | 聆聽雨聲、看雨滴落在窗上。可調節雨勢的沉浸式雨夜場景。 |
| [🏊 泳池水波](games/html-games/pool-ripples.html) | Opus 5.5 | 陽光下的泳池，滑鼠劃過水面拖出漣漪，甩快了會濺起水花；池底的焦散、折射與天空倒影都是即時算的。 |
| [🐦 菲比啾比與諾諾](games/html-games/fhibichubi-nono/index.html) | Opus 5 | 四張動圖一路滾成一部連續劇。捲動就是時間軸，往回捲會完整倒帶。 |

---

## 功能特色

|      | 元件 | 說明 |
| :--- | :--- | :--- |
| ⚙️  | **架構** | <ul><li>門戶首頁 + Git Submodules 組合四個獨立 repo</li><li>全靜態站，無後端、無建置步驟</li></ul> |
| 🔩 | **模組化** | <ul><li>每款遊戲獨立版控、獨立開發</li><li>`games/html-games` 收錄小品，大型專案各自獨立</li></ul> |
| 🔌 | **整合** | <ul><li>GitHub Actions 以 `SUBMODULE_PAT` 拉取私有子模組</li><li>遊戲 repo 以 `repository_dispatch` 即時通知本 repo 更新 submodule</li><li>`actions/deploy-pages` 部署到 GitHub Pages</li></ul> |
| 🛡️ | **安全** | <ul><li>部署前以 `javascript-obfuscator` 混淆 `.js` 與內嵌 `<script>`</li><li>跳過 `vendor/`、`assets/`、`tests/` 與非 JS 的 `<script>`（importmap、JSON）</li></ul> |
| 📦 | **相依** | <ul><li>執行期：無 npm 相依；three.js 由各作品自帶（Subway Run 3D 內嵌、FPS Arena 放在 <code>vendor/</code>），星夜下的貓則從 jsDelivr CDN 載入</li><li>部署期：`javascript-obfuscator`、`cheerio`（CI 內即時安裝）</li></ul> |

---

## 專案結構

```sh
└── game-hub/
    ├── .github
    │   └── workflows
    │       ├── deploy.yml
    │       └── update-submodules.yml
    ├── games
    │   ├── arcane-realm     # submodule
    │   ├── fps-arena        # submodule
    │   ├── html-games       # submodule
    │   └── rogue-survivor   # submodule
    ├── scripts
    │   └── obfuscate.js
    ├── .gitmodules
    ├── index.html
    └── README.md
```

### 專案索引

| 檔案 | 摘要 |
| --- | --- |
| [index.html](index.html) | 作品選單首頁：把遊戲與氛圍小品分組成卡片，每張卡片附圖示、協作模型標籤與簡介，連到對應子模組的入口頁。 |
| [.github/workflows/deploy.yml](.github/workflows/deploy.yml) | push 到 `main` 或手動觸發時，遞迴 checkout 所有子模組、安裝混淆工具、執行混淆腳本，再把整個 repo 當作靜態站上傳並部署到 GitHub Pages。 |
| [.github/workflows/update-submodules.yml](.github/workflows/update-submodules.yml) | 收到遊戲 repo 的 `submodule-updated` 通知或手動觸發時，把所有 submodule 更新到各自 `main` 的最新 commit；有變化才 commit、push，並派發一次 `deploy.yml`。 |
| [scripts/obfuscate.js](scripts/obfuscate.js) | 走訪整個 repo，混淆所有 `.js` 檔與 HTML 內嵌的 JS 腳本；略過第三方建置產物、素材與測試目錄，並排除 importmap、JSON 等資料型 `<script>` 以免解析失敗。 |
| [.gitmodules](.gitmodules) | 登記四個子模組 `rogue-survivor`、`arcane-realm`、`html-games`、`fps-arena` 的路徑與來源 repo。 |

---

## 發布流程

遊戲 repo push 之後不需要做任何事，整條流程會自動跑完（約一分鐘）：

```text
遊戲 repo push 到 main
  └─▶ notify-game-hub.yml        發送 repository_dispatch（submodule-updated）到 game-hub
        └─▶ update-submodules.yml  更新所有 submodule 指標 → commit「chore: 自動更新 submodule（…）」→ push
              └─▶ deploy.yml         checkout 子模組 → 混淆 → 部署到 GitHub Pages
```

- **沒有排程輪詢**：只有收到通知才會執行，沒有更新就不耗用任何 Actions 資源。
- **同時多個通知**：只保留一個排隊中的執行，其餘會顯示為 cancelled，屬正常現象；實際執行的那次會一次把所有 submodule 拉到最新。
- **手動觸發**：到 Actions → **Update Submodules** → **Run workflow**，可在通知失敗時補跑。
- **本 repo 直接 push**（例如改 `index.html`、README）則由 `deploy.yml` 的 push 觸發部署。

> [!IMPORTANT]
> 機器人會自己 commit 到 `main`，在本 repo 修改前請先同步，連同子模組資料夾一起更新：
>
> ```sh
> git pull --recurse-submodules
> ```

### 需要的 Secrets

| Secret | 放在哪裡 | 用途 | 權限 |
| --- | --- | --- | --- |
| `SUBMODULE_PAT` | game-hub | 部署與更新時讀取私有子模組 | 四個遊戲 repo 的讀取權限 |
| `GAME_HUB_DISPATCH_TOKEN` | 四個遊戲 repo | 發送通知給 game-hub | Fine-grained token，只選 `game-hub`，**Contents: Read and write** |

設定或更換 `GAME_HUB_DISPATCH_TOKEN`（會依序詢問四次，每次貼上同一個 token）：

```sh
for r in arcane-realm fps-arena html-games rogue-survivor; do gh secret set GAME_HUB_DISPATCH_TOKEN -R rowing195/$r; done
```

### 新增一個遊戲 submodule

1. 在本 repo 加入子模組：`git submodule add https://github.com/rowing195/<repo>.git games/<repo>`
2. 把任一遊戲 repo 的 `.github/workflows/notify-game-hub.yml` 複製到新 repo 並 push。
3. 在新 repo 設定 `GAME_HUB_DISPATCH_TOKEN` secret，並確認 `SUBMODULE_PAT` 能讀取新 repo。
4. 在 `index.html` 加上作品卡片，並更新本 README 的作品一覽。

---

## 本機執行

### 前置需求

- 任一現代瀏覽器（Chrome / Edge / Firefox）
- Git（需有子模組 repo 的讀取權限）

### 安裝

```sh
git clone --recursive https://github.com/rowing195/game-hub.git
```

已經 clone 過的話，補拉子模組：

```sh
git submodule update --init --recursive
```

### 使用

用瀏覽器開啟 `index.html` 即可。本機執行的是未混淆的原始碼，混淆只在 CI 部署時進行。

### 測試

本 repo 沒有測試套件。

---

## 授權

本專案目前沒有附授權檔案。

---

## 致謝

- [three.js](https://threejs.org/) —— FPS Arena 等 3D 作品的渲染引擎
- [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator) 與 [cheerio](https://cheerio.js.org/) —— 部署時的程式碼混淆

<div align="left"><a href="#top">回到頂端</a></div>

---
