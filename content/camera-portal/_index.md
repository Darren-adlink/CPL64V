---
title: "相機相容性 Portal"
date: 2024-01-12T10:00:00+08:00
draft: false
description: "CPL64V 與各品牌相機的參數對應表"
---

# CPL64V 相機參數對應中心

本頁面提供 CPL64V 與各品牌線掃描相機的參數對應參考。

## 品牌列表

| 品牌 | 型號 | 連結 | 狀態 |
| :--- | :--- | :--- | :--- |
| Basler | racer series | [查看參數](#basler-racer) | 已驗證 |
| Teledyne DALSA | Linea series | [查看參數](#dalsa-linea) | 驗證中 |
| Hikrobot | CL series | [查看參數](#hikrobot-cl) | 已驗證 |

---

<a name="basler-racer"></a>
## Basler racer 系列對應

### 參數對應表
| 功能 | 相機端設定 (Pylon) | CPL64V 端設定 | 備註 |
| :--- | :--- | :--- | :--- |
| **Trigger Mode** | On | External Trigger | |
| **Trigger Source** | Line 1 | CC1 | |
| **Exposure Time** | 100us | N/A | 由相機或 CPL64V 控制 |

### 接線圖示
![Basler 接線圖](/images/basler-pinout.png)
> *圖 1：Basler racer 與 CPL64V 的實體接線參考圖*

---

<a name="hikrobot-cl"></a>
## Hikrobot CL 系列對應

### 參數對應表
| 功能 | 相機端設定 (MVS) | CPL64V 端設定 | 備註 |
| :--- | :--- | :--- | :--- |
| **Trigger Mode** | On | External | |
| **Line Rate** | 10kHz | 10000 | 需同步 |

### 設定截圖
![Hikrobot 設定](/images/hikrobot-settings.png)
> *圖 2：Hikrobot MVS 軟體中的關鍵參數設定*

---

## 如何新增相機？
1. 在 `static/images/` 上傳對應的 PNG 圖片。
2. 在 `content/camera-portal/_index.md` 中新增對應的 Markdown 區塊。
3. 提交 (Push) 到 GitHub，網站將自動更新。
