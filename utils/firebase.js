import { initializeApp } from 'firebase/app';

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyBY0PhQN5nTSMGUpQ_kRwo7jBz77PsZjCA",

    authDomain: "cubicus-dev-9fc92.firebaseapp.com",

    databaseURL: "https://cubicus-dev-9fc92-default-rtdb.firebaseio.com",

    projectId: "cubicus-dev-9fc92",

    storageBucket: "cubicus-dev-9fc92.appspot.com",

    messagingSenderId: "608405013843",

    appId: "1:608405013843:web:bf904599f00fe90a564da6",

    measurementId: "G-G3YXX8FZND"

};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }