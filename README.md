# 遊戲小閣 · Ludi

閒暇時鍛造的網頁小玩具 —— 遊戲與氛圍小品,皆可直接遊玩。

**▶ 線上遊玩:https://rowing195.github.io/html-games/**

全部都是純前端(HTML / CSS / JavaScript),不需安裝、不需後端,點開就跑。

---

## 🎮 遊戲

| 作品 | 說明 |
|------|------|
| [🧙 肉鴿倖存者 Rogue Survivor](rogue-survivor/) | 以一敵千的生存肉鴿:七位角色各擅一種武器,升級選牌、武器進化、永久強化,撐過十五分鐘。([說明文件](rogue-survivor/README.md)) |
| [🎮 Subway Run 3D — 方塊人](subway-run-3d.html) | 酷跑的 3D 進化版,操控方塊小人在立體軌道上飛馳。 |
| [🏰 方塊塔防 Block Defense](tower-defense.html) | 在軌道旁佈署四種砲塔,擋下一波波湧來的方塊敵人。 |
| [⚜️ 祕法王國 Arcane Realm](arcane-realm/) | 中世紀魔法風掛機遊戲:建設城市、指派領民、與鄰國貿易。出征是即時戰術制 —— 排陣型、算兵種相剋、臨陣下令。([說明文件](arcane-realm/README.md)) |

## 🌙 氛圍小品

不以輸贏為目的,單純的互動與氛圍體驗。

| 作品 | 說明 |
|------|------|
| [🐈‍⬛ 星夜下的貓](cat-stargazing.html) | 陪一隻貓靜靜坐在屋頂上,仰望流轉的星空。 |
| [🌧 雨夜模擬器](rain-sim.html) | 聆聽雨聲、看雨滴落在窗上。可調節雨勢的沉浸式雨夜場景。 |

---

## 結構

大多數作品是**單一 HTML 檔**,所有樣式與程式都內嵌其中,方便單獨分享。
規模較大的作品會獨立成資料夾:

```
index.html            小閣首頁(作品選單)
cat-stargazing.html   單檔作品
rain-sim.html
subway-run-3d.html
tower-defense.html
assets/towers/        方塊塔防的塔圖(選用,見該資料夾的 README)
rogue-survivor/       多檔案專案(index.html + css/ + js/)
arcane-realm/         多檔案專案(index.html + css/ + js/)
```

`assets/` 裡的圖是**選用**的:方塊塔防找不到圖時會自動退回程式畫的方塊,
單獨把 `tower-defense.html` 拿走分享,一樣能正常遊玩。

## 本機執行

直接用瀏覽器打開 `index.html` 即可(雙擊,或拖進瀏覽器視窗)。
不需要伺服器、不需要建置步驟。
