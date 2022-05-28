import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

let firebaseConfig

if (typeof Cypress === 'object') {
    firebaseConfig = {
        apiKey: Cypress.env('API_KEY'),
        authDomain: Cypress.env('AUTH_DOMAIN'),
        projectId: Cypress.env('PROJECT_ID'),
        storageBucket: Cypress.env('process.env.STORAGE_BUCKET'),
        messagingSenderId: Cypress.env('process.env.MESSAGING_SENDER_ID'),
        appId: Cypress.env('APP_ID'),
    }
} else if (typeof import.meta.env === 'object') {
    firebaseConfig = {
        apiKey: import.meta.env.VITE_API_KEY,
        authDomain: import.meta.env.VITE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_APP_ID,
    }
} else {
    firebaseConfig = {
        apiKey: process.env.VITE_API_KEY,
        authDomain: process.env.VITE_AUTH_DOMAIN,
        projectId: process.env.VITE_PROJECT_ID,
        storageBucket: process.env.VITE_STORAGE_BUCKET,
        messagingSenderId: process.env.VITE_MESSAGING_SENDER_ID,
        appId: process.env.VITE_APP_ID,
    }
}


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
