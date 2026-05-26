// ======================================================
// กรอก Firebase Project ของคุณที่นี่
// วิธีหา: Firebase Console → Project Settings → Your apps
// ======================================================
const firebaseConfig = {
  apiKey: "AIzaSyAI6IOkgZ388mERJylH9vlZdr5YuG2eMrI",
  authDomain: "tmt-issue-tracker.firebaseapp.com",
  projectId: "tmt-issue-tracker",
  storageBucket: "tmt-issue-tracker.firebasestorage.app",
  messagingSenderId: "848414004186",
  appId: "1:848414004186:web:1ebf821c8a2dbe89e566e3",
  measurementId: "G-ZJ24K9PB7L"
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
