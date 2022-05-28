import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: Cypress.env('API_KEY'),
    authDomain: Cypress.env('AUTH_DOMAIN'),
    projectId: Cypress.env('PROJECT_ID'),
    storageBucket: Cypress.env('process.env.STORAGE_BUCKET'),
    messagingSenderId: Cypress.env('process.env.MESSAGING_SENDER_ID'),
    appId: Cypress.env('APP_ID'),
}

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
