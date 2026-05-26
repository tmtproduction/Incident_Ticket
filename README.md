# TMT Issue Tracker — Setup Guide

## ไฟล์ในระบบ

| ไฟล์ | หน้าที่ |
|---|---|
| `index.html` | Dashboard + รายการปัญหาทั้งหมด |
| `report.html` | ฟอร์มรายงานปัญหาใหม่ (พนักงานหน้างาน) |
| `update.html` | อัพเดทสถานะ + timeline (ช่างซ่อม) |
| `admin.html` | จัดการ Master Data (ไลน์, เครื่องจักร, บุคลากร) |
| `firebase-config.js` | **กรอก Firebase credentials ที่นี่** |
| `shared.css` | Stylesheet รวม |

---

## วิธี Setup Firebase (ทำครั้งเดียว)

### ขั้นที่ 1: สร้าง Firebase Project
1. ไปที่ https://console.firebase.google.com
2. คลิก **Add project** → ตั้งชื่อ เช่น `tmt-issue-tracker`
3. ปิด Google Analytics (ไม่จำเป็น) → **Create project**

### ขั้นที่ 2: เปิด Firestore Database
1. ใน sidebar คลิก **Firestore Database**
2. คลิก **Create database**
3. เลือก **Start in test mode** (ระหว่าง dev)
4. เลือก region: `asia-southeast1` (Singapore)

### ขั้นที่ 3: เอา Config มาใส่
1. Project Settings (ไอคอนฟันเฟือง) → **General**
2. เลื่อนลงมาที่ **Your apps** → คลิก `</>` (Web)
3. ตั้งชื่อ app → **Register app**
4. Copy config object มาวางใน `firebase-config.js`

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "....firebaseapp.com",
  projectId: "...",
  ...
};
```

### ขั้นที่ 4: ตั้ง Firestore Rules (สำหรับ Production)
ใน Firestore → **Rules** ใส่:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;  // ไม่ต้อง login
    }
  }
}
```

---

## วิธีเปิดใช้งาน

### Option A: เปิดไฟล์โดยตรง (Local)
- เปิด `index.html` ด้วย browser ได้เลย
- ⚠️ บางเครื่องต้อง serve ผ่าน local server เพราะ CORS

```bash
# ถ้ามี Python
python -m http.server 8080
# แล้วเปิด http://localhost:8080
```

### Option B: Deploy บน GitHub Pages (แนะนำ)
1. สร้าง repo บน GitHub
2. Upload ไฟล์ทั้งหมด
3. Settings → Pages → เลือก branch main

### Option C: Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

---

## การใช้งานครั้งแรก

1. เปิด `admin.html` → เพิ่มไลน์เครื่องจักร
2. เพิ่มเครื่องจักรแต่ละตัวในแต่ละไลน์
3. เพิ่มรายชื่อบุคลากร
4. แชร์ลิงก์ให้ทีมใช้งาน

---

## Firestore Collections

| Collection | ข้อมูล |
|---|---|
| `issues` | ข้อมูลปัญหาทั้งหมด |
| `updates` | log การ update แต่ละ issue |
| `master_lines` | ไลน์/กลุ่มเครื่องจักร |
| `master_machines` | เครื่องจักรแต่ละตัว |
| `master_persons` | รายชื่อบุคลากร |
