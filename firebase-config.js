/* =========================================================================
   এই ফাইলে আপনার নিজের Firebase প্রজেক্টের তথ্য বসাতে হবে।
   ধাপে ধাপে নির্দেশনার জন্য HOW-TO-SETUP.md ফাইলটি দেখুন।
   ========================================================================= */

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

/* আপনার দোকান পরিচালনার (Manage Store) পাসওয়ার্ড এখানে বদলে দিন। */
const MONARCH_ADMIN_PASSWORD = "monarch123";

/* ==== নিচের লাইনগুলো পরিবর্তন করার দরকার নেই ==== */
window.MONARCH_FIREBASE_CONFIG = firebaseConfig;
window.MONARCH_ADMIN_PASSWORD = MONARCH_ADMIN_PASSWORD;
window.MONARCH_FIREBASE_CONFIGURED = firebaseConfig.apiKey !== "YOUR_API_KEY";
