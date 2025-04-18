// Importación desde Firebase CDN (consistente y modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Configuración de Firebase (corrigiendo storageBucket)
const firebaseConfig = {
  apiKey: "AIzaSyCTnvffCBwF0wyGjS0hwPyuaQWW_n0xy6M",
  authDomain: "tecstationdb.firebaseapp.com",
  projectId: "tecstationdb",
  storageBucket: "tecstationdb.appspot.com", // <- corregido
  messagingSenderId: "1031245843413",
  appId: "1:1031245843413:web:afeee8a00a0391ca4acb5c",
  measurementId: "G-284DPV2HJV"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export { db, ref, set, get, child };
