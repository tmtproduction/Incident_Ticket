// ======================================================
// กรอก Firebase Project ของคุณที่นี่
// วิธีหา: Firebase Console → Project Settings → Your apps
// ======================================================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ======================================================
// Firestore Collections:
//   issues        — ข้อมูลปัญหาทั้งหมด
//   updates       — log การ update แต่ละ issue
//   master_lines  — ไลน์/กลุ่มเครื่องจักร (admin กำหนด)
//   master_machines — เครื่องจักรแต่ละเครื่อง
//   master_persons  — รายชื่อผู้รับผิดชอบ
// ======================================================
