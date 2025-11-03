//menambah library firabase 
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'

//menambah/mengimpor library firestore
import{
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js'


// menambah konfigurasi 
const firebaseConfig = {
  apiKey: "AIzaSyBWzqA3FYUA3m3Y_C1c8fgIERYQzod6WwU",
  authDomain: "insancemerlang-75559.firebaseapp.com",
  projectId: "insancemerlang-75559",
  storageBucket: "insancemerlang-75559.firebasestorage.app",
  messagingSenderId: "276076065109",
  appId: "1:276076065109:web:55214f37cb4c9c7357bfdc"
};

// insialisasi firabase 
const app = initializeApp(firebaseConfig);

//menambah firestore
const db = getFirestore(app)

//
export async function tambahData () {
    try {
        // menyimpan data ke firestore
        const referensiDokumen = await addDoc(collection(db, "siswa"),
            {
                nama: 'Agus',
                kelas: 'XI RPL'
            }
        )

        // menampilkan pesan berhasil
        console.log('Berhasil menambah data siswa')
    } catch (error) {
        // menampilkan pesan error
        console.log(error)
    }
}

