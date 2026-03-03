import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyArb9bfKJjDEuFq3uyKX0R7erQKxwyxzpI',
  authDomain: 'breast-cancer-detection-69a09.firebaseapp.com',
  projectId: 'breast-cancer-detection-69a09',
  storageBucket: 'breast-cancer-detection-69a09.firebasestorage.app',
  messagingSenderId: '815563268454',
  appId: '1:815563268454:web:207302d053b5510605a8a7'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
