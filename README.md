# 牽風箏的人｜品牌介紹網站

青少年表演藝術聯盟「牽風箏的人」品牌網站，以「用戲劇，陪伴少年飛向自己」為主軸，呈現計畫理念、服務成果、2.0 教師培育與贊助支持。

- 公開網站：https://kite-people.aagghhgffddssa.chatgpt.site
- 原始碼：https://github.com/aagghhgffddssa/kiteproject
- 本次匯入版本：2026-09-17，已移除公開頁面的資料來源說明。

## 專案結構

| 路徑 | 用途 |
| --- | --- |
| `dist/index.html` | 所有頁面文案、區塊、導覽與支持連結 |
| `dist/style.css` | 色彩、排版、手機版與響應式樣式 |
| `dist/assets/` | 網站使用的三張 WebP 圖片 |
| `AGENTS.md` | Codex 接續工作的專案指引 |
| `.openai/hosting.json` | 既有 Sites 網站識別與發布目錄，並非金鑰 |

這是純 HTML/CSS 靜態網站，沒有套件安裝或編譯步驟。`dist/` 是直接編輯並提交的原始碼目錄，不是可刪除的編譯產物。

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

## 用 Codex 接續修改

在可以存取此儲存庫的 Codex 對話中，提供儲存庫網址並說明需求。例如：

> 請接續修改 https://github.com/aagghhgffddssa/kiteproject 。先讀 README.md 和 AGENTS.md，以 main 分支最新版本為準。這次要修改：〔需求〕。完成後檢查文案、圖片連結、手機排版，將修改提交到 GitHub，並說明變更。

若使用本機工具，先複製儲存庫，再開啟整個 `kiteproject` 資料夾。開始下一次修改前，先檢查未提交變更，再更新遠端內容，避免覆蓋自己的工作。

`AGENTS.md` 用於保存專案指引，可參考 [OpenAI 官方說明](https://learn.chatgpt.com/docs/agent-configuration/agents-md)。

## GitHub 與公開網站的關係

本儲存庫保存可編輯的完整網站版本。目前**沒有設定 GitHub 推送後自動發布**，GitHub 更新不會直接改動現有 Sites 網站，也尚未啟用 GitHub Pages。

需要更新現有公開網站時，可以說：

> 請把 aagghhgffddssa/kiteproject 的 main 最新內容發布到既有的牽風箏的人 Sites 網站，沿用 .openai/hosting.json 的 project_id，保留目前公開網址與公開權限，不要另建網站。

發布者需具備該 Sites 的存取權限及 Sites 工具。應先取得 GitHub 最新內容、檢查變更，再依 Sites 流程同步來源及發布，避免用舊的 Sites 工作副本覆蓋新版 GitHub 程式碼。

## 內容維護

- 網頁使用繁體中文，數據須保留年份。
- 已依需求移除網頁中的資料來源、參考文件與影像出處說明。
- 捐款按鈕連至青藝盟官方支持頁；企業合作連至青藝盟電子郵件。
- 圖片來自本專案提供的青藝盟素材，請維持原本用途；本儲存庫不另行授予第三方素材授權。
- 不包含原始 PDF、金鑰、帳密或其他內部文件。
