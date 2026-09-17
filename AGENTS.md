# 專案工作指引

## 目標與語言
- 本專案為青藝盟「牽風箏的人」對外品牌網站；以繁體中文與使用者溝通。
- 文案應溫暖、具體，尊重特殊境遇青少年，不加入污名化描述或未經確認的成果宣稱。
- 每次開始工作都先讀 `README.md` 與 `PROJECT_CONTEXT.md`；確認 GitHub `main` 最新版本及工作目錄狀態，保留使用者尚未提交的修改。

## 跨電腦與 AI 交接
- GitHub `main` 是程式碼、公開素材、專案規則與交接資訊的唯一共同來源；不要依賴某一台電腦的聊天紀錄或記憶才能理解專案。
- 開始修改前依序執行：`git status --short`、`git pull --ff-only origin main`，再讀 `README.md`、`AGENTS.md`、`PROJECT_CONTEXT.md` 與最近的 Git 紀錄。
- 每次造成公開網站內容、設計、互動、結構、素材、連結或發布方式改變時，必須同步更新 `PROJECT_CONTEXT.md` 的「目前狀態」與「最近修改」，讓下一位 AI 能直接接手。
- 「最近修改」採新到舊排列，最多保留 10 筆；更早的細節由 Git 紀錄保存。不要把聊天逐字稿寫入交接文件。
- 若改動安裝、目錄結構或跨電腦步驟，也要同步更新 `README.md`。
- 完成時檢查差異，只提交本次相關檔案；推送 `main` 後確認對應 commit 的 GitHub Pages workflow 成功，並核對線上內容。
- 論壇手冊、影響力報告等原始附件不放入公開儲存庫；把已核准採用的內容、年份與必要脈絡記錄在網站或 `PROJECT_CONTEXT.md`，不得記錄個資與內部敏感資料。

## 編輯方式
- 直接修改 `dist/index.html`、`dist/style.css` 及 `dist/assets/`。
- `dist/` 是受版本控制的原始碼，不能當作可清除的建置產物。
- 純 HTML/CSS，無需 npm install、框架遷移或建置。除非需求需要，不增加依賴。
- 保留行動版排版、語意標籤、圖片替代文字、鍵盤焦點與 reduced-motion 支援。
- 保留成果數據的年份；不要將歷年數據寫成當前累計成果。
- 使用者已要求移除公開頁面上的資料來源說明，不要自行加回。
- 更新贊助連結或企業信箱時，以使用者提供或經確認的官方資訊為準。

## 驗證
- 檢查所有本機圖片、樣式路徑與頁內錨點可對應實際檔案或 ID。
- 確認手機版不截字、不產生水平溢出，主要按鈕與連結仍可使用。
- 有瀏覽器環境時可檢查約 390px 與 1440px 視窗。
- 不要為簡單文案修改增加測試框架。誠實說明實際完成的驗證。

## 版本與發布
- GitHub 儲存庫：aagghhgffddssa/kiteproject，主分支 main，為唯一原始碼來源。
- 唯一發布平台：GitHub Pages；預定網址 https://aagghhgffddssa.github.io/kiteproject/ 。首次啟用與部署成功前，不能宣稱網址已上線。
- 使用者已明確要求不再同步到 GPT Sites。不要呼叫 Sites 部署、不恢復 .openai/hosting.json、不新建 Sites 網站。
- `.github/workflows/deploy-pages.yml` 在 main 推送後發布 dist/，亦可手動執行。
- 設定 Pages Source 為 GitHub Actions；公開發布是否完成以對應 commit 的 workflow/deployment 結果為準。
- 保留相對路徑（如 assets/hero.webp），確保 /kiteproject/ 子目錄下正常運作。
- 若有遠端新變更，先整合再提交，不強制覆蓋 main。
- 不要將金鑰、存取權杖、原始附件、暫存壓縮檔或使用者內部文件提交到公開儲存庫。
