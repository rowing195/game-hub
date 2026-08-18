# 玩具箱 · Ludi

閒暇時浪費 token 的網頁小玩具 —— 遊戲與氛圍小品，皆可直接遊玩。

**▶ 線上遊玩：https://rowing195.github.io/game-hub/**

全部都是純前端（HTML / CSS / JavaScript），不需安裝、不需後端，點開就跑。

下方連結因為遊戲 Submodule 沒有公開，因此暫時無法使用與 clone

---

## 🎮 遊戲

| 作品 | 說明 |
|------|------|
| [🧙 肉鴿倖存者 Rogue Survivor](games/rogue-survivor/) | 以一敵千的生存肉鴿：七位角色各擅一種武器，升級選牌、武器進化、永久強化，撐過十五分鐘。 |
| [🎮 Subway Run 3D — 方塊人](games/html-games/subway-run-3d.html) | 酷跑的 3D 進化版，操控方塊小人在立體軌道上飛馳。 |
| [🏰 方塊塔防 Block Defense](games/html-games/tower-defense.html) | 在軌道旁佈署四種砲塔，擋下一波波湧來的方塊敵人。 |
| [🐍 貪吃蛇](games/html-games/snake.html) | 經典貪吃蛇，方向鍵 / WASD 操作，本機記錄最高分。 |
| [🧱 俄羅斯方塊](games/html-games/tetris.html) | 進場可選單人練習或雙人對戰；單人消多行有分數加成、即時彈出加分動畫，並記錄本機排行榜前 10 名。雙人對戰可再選競技模式或道具模式（超載攻擊/迷霧/加速/反轉/護盾，分數越高效果越強）。 |
| [⚜️ 祕法王國 Arcane Realm](games/arcane-realm/) | 中世紀魔法風掛機遊戲：建設城市、指派領民、與鄰國貿易。出征是即時戰術制 —— 排陣型、算兵種相剋、臨陣下令。 |

## 🌙 氛圍小品

不以輸贏為目的，單純的互動、敘事與氛圍體驗。

| 作品 | 說明 |
|------|------|
| [🪶 羽毛筆繪製奇幻地圖](games/html-games/fantasy_map.html) | 看著羽毛筆在老舊羊皮紙上優雅勾勒出奇幻大陸、山脈、河流與城池標示。 |
| [🐈‍⬛ 星夜下的貓](games/html-games/cat-stargazing.html) | 陪一隻貓靜靜坐在屋頂上，仰望流轉的星空。 |
| [🌧 雨夜模擬器](games/html-games/rain-sim.html) | 聆聽雨聲、看雨滴落在窗上。可調節雨勢的沉浸式雨夜場景。 |
| [🐦 菲比啾比與諾諾](games/html-games/fhibichubi-nono/index.html) | 四張動圖一路滾成一部連續劇。捲動就是時間軸，往回捲會完整倒帶。 |

---

## 🏗️ 專案結構

本 Repository (`game-hub`) 為遊戲門戶總集，透過 Git Submodules 組合各個獨立專案：

```text
index.html              小閣首頁 (作品選單)
README.md               專案說明
.github/workflows/      GitHub Actions 自動發布腳本
games/
├── rogue-survivor/     獨立專案 (Submodule)
├── arcane-realm/       獨立專案 (Submodule)
└── html-games/         小品作品集 (Submodule)
```

## 本機執行

直接下載或複製包含子模組的儲存庫後，用瀏覽器開啟 `index.html` 即可：
```bash
git clone --recursive https://github.com/rowing195/game-hub.git
```
