# 牽風箏的人｜品牌介紹網站

青少年表演藝術聯盟「牽風箏的人」品牌網站，以「用戲劇，陪伴少年飛向自己」為主軸，呈現計畫理念、服務成果、2.0 教師培育與贊助支持。

- Vercel 網址：https://kiteproject-silk.vercel.app/
- 原始碼：https://github.com/aagghhgffddssa/kiteproject
- 本次匯入版本：2026-09-17，已移除公開頁面的資料來源說明。

## 專案結構

| 路徑 | 用途 |
| --- | --- |
| `dist/index.html` | 所有頁面文案、區塊、導覽與支持連結 |
| `dist/style.css` | 色彩、排版、手機版與響應式樣式 |
| `dist/interaction.js` | 桌機風箏游標與微互動；觸控裝置及減少動態效果設定不啟用 |
| `dist/assets/` | 網站照片與官方 Logo 圖檔 |
| `vercel.json` | Vercel 部署設定，將 `dist/` 發布為網站根目錄 |
| `AGENTS.md` | Codex 接續工作的專案指引 |
| `PROJECT_CONTEXT.md` | 目前狀態、重要決策、最近修改與跨 AI 交接紀錄 |
| `.github/workflows/deploy-pages.yml` | 既有 GitHub Pages workflow；目前正式發布改由 Vercel 處理 |

這是純 HTML/CSS/JavaScript 靜態網站，沒有套件安裝或編譯步驟。`dist/` 是直接編輯並提交的原始碼目錄，不是可刪除的編譯產物。

## 在電腦開啟

安裝 Git 後，執行：

```sh
git clone https://github.com/aagghhgffddssa/kiteproject.git
cd kiteproject
```

直接用瀏覽器開啟 `dist/index.html` 即可。若已安裝 Python，也可以在專案根目錄執行：

```sh
python -m http.server 8000 --directory dist
```

Windows 若使用 Python Launcher，可將 `python` 換成 `py`。接著開啟 http://localhost:8000 。

## 在另一台電腦接續

此儲存庫為公開儲存庫，任何電腦都能下載；若要提交及推送修改，需登入有寫入權限的 GitHub 帳號。Windows PowerShell 可依序執行：

```powershell
winget install --id Git.Git -e
winget install --id GitHub.cli -e
gh auth login
gh repo clone aagghhgffddssa/kiteproject
Set-Location kiteproject
git pull --ff-only origin main
```

接著在 Codex 開啟整個 `kiteproject` 資料夾，並說：

> 請先更新 main，閱讀 README.md、AGENTS.md 與 PROJECT_CONTEXT.md，再接續修改。完成後更新 PROJECT_CONTEXT.md、提交並推送 main，確認 Vercel 發布成功。

若電腦已經複製過此專案，不要再次 clone；進入既有 `kiteproject` 資料夾後執行 `git status --short` 與 `git pull --ff-only origin main`。若有未提交內容，先確認來源並保留，不要強制覆蓋。

## 用 Codex 接續修改

在可以存取此儲存庫的 Codex 對話中，提供儲存庫網址並說明需求。例如：

> 請接續修改 https://github.com/aagghhgffddssa/kiteproject 。先讀 README.md、AGENTS.md 和 PROJECT_CONTEXT.md，以 main 分支最新版本為準。這次要修改：〔需求〕。完成後更新交接紀錄、檢查文案、圖片連結、手機排版，將修改提交到 GitHub，並說明變更。

若使用本機工具，先複製儲存庫，再開啟整個 `kiteproject` 資料夾。開始下一次修改前，先檢查未提交變更，再更新遠端內容，避免覆蓋自己的工作。

`AGENTS.md` 用於保存專案指引，可參考 [OpenAI 官方說明](https://learn.chatgpt.com/docs/agent-configuration/agents-md)。

## 維護與發布

以此儲存庫 `main` 分支為唯一原始碼來源，公開網站使用 **Vercel** 發布。Vercel 透過 `vercel.json` 將 `dist/` 作為網站輸出目錄；推送 `main` 後會自動重新部署。不再同步或發布到先前由 GPT Sites 產生的網站。

### 第一次啟用

1. 在 Vercel 匯入 GitHub 儲存庫 `aagghhgffddssa/kiteproject`。
2. Framework Preset 選擇 **Other**。
3. Root Directory 保持儲存庫根目錄 `.`；輸出目錄由 `vercel.json` 指定為 `dist`。
4. 部署成功後開啟 Vercel 提供的 Production Domain。

### 日常更新

修改並推送到 `main` 後，Vercel 會自動發布 `dist/`。若採用分支與 PR，合併到 `main` 後才會更新正式網站。以 Vercel Deployment 的成功狀態及實際頁面確認發布完成；失敗時不要將儲存庫更新誤認為線上更新。

後續可以對 Codex 說：

> 請接續修改 aagghhgffddssa/kiteproject，先讀 README.md、AGENTS.md 與 PROJECT_CONTEXT.md，以 GitHub main 最新版本為準。完成後更新 PROJECT_CONTEXT.md、提交到 GitHub，確認 Vercel 發布結果，不要同步到 GPT Sites。

## 內容維護

- 網頁使用繁體中文，數據須保留年份。
- 已依需求移除網頁中的資料來源、參考文件與影像出處說明。
- 捐款按鈕連至青藝盟官方支持頁；企業合作連至青藝盟電子郵件。
- 圖片來自本專案提供的青藝盟素材，請維持原本用途；本儲存庫不另行授予第三方素材授權。
- 不包含原始 PDF、金鑰、帳密或其他內部文件。

## Logo 使用

- 頁首與頁尾使用使用者提供的「牽風箏的人」彩色橫式完整版；分頁圖示使用獨立風箏圖案（06 版）。
- 頁尾使用青藝盟粉紅色橫式 Logo，連至官方網站。
- PNG 保留原始比例與色彩；CSS 僅框住橫式 Logo 的多餘畫布留白，不裁切標誌內容。
