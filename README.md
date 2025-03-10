# 🚀 QR Checker

## 🔍 Overview
**QR Checker** is an automated system for generating, scanning, and managing QR-based tokens using **Google Sheets**, **Google Apps Script**, and **Python**. It ensures secure token authentication by tracking scans, preventing duplicate usage, and formatting QR codes for printing.

---

## 📂 Repository Structure
```
QR-Checker/
│── google_sheets_script/
│   ├── qr_checker.gs  # Google Apps Script for QR scanning logic
│── token_generation/
│   ├── generate_tokens.py  # Python script to generate tokens
│── qr_design/
│   ├── design_qr.py  # Python script to place QR codes in token design
│── printing_layout/
│   ├── arrange_tokens.py  # Python script for print layout
README.md  # Project documentation
```

---

## 🎯 Features
✅ **Google Sheets Integration** – Tracks token usage and scan count in real-time.  
✅ **QR Code Generation** – Creates unique QR codes linked to tokens.  
✅ **Token Design** – Embeds QR codes into a predefined token layout.  
✅ **Printable Layout** – Organizes tokens in a printable format (4 rows × 2 columns per page).  

---

## 🛠️ Tech Stack
- **Google Apps Script** – Automates token validation and tracking.  
- **Python** – Handles QR code generation and layout formatting.  
- **Libraries Used:** `qrcode`, `PIL`, `reportlab`  

---

## 🚀 Getting Started
### 1️⃣ **Deploy the Google Apps Script**
- Upload `qr_checker.gs` to Google Sheets and configure permissions.  

### 2️⃣ **Generate Tokens**
- Run `generate_tokens.py` to create QR codes with token links.  

### 3️⃣ **Design QR Tokens**
- Use `design_qr.py` to embed QR codes into the token layout.  

### 4️⃣ **Arrange for Printing**
- Execute `arrange_tokens.py` to generate print-ready pages.  

---

## 👥 Contributing
Feel free to fork this repository, submit pull requests, or raise issues for improvements!  

---

## 📜 License
Licensed under the **MIT License**. Use freely and contribute!  

💡 *Automate your QR-based authentication with QR Checker!* 🚀
