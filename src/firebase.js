import firebase from 'firebase/app';

import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD_79qHPksFMMz4my3zTbX-segSAnh2Dro",
    authDomain: "fir-ecommerce-3fb70.firebaseapp.com",
    projectId: "fir-ecommerce-3fb70",
    storageBucket: "fir-ecommerce-3fb70.appspot.com",
    messagingSenderId: "1035516022484",
    appId: "1:1035516022484:web:04423652f7f7458cbeb541"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const db = firebase.firestore(app).collection("productos");

export const banner = firebase.firestore(app).collection("banner")

export const orders = firebase.firestore(app).collection("orders")

export const logos = firebase.firestore(app).collection("logos")

// const fb = firebase.initizalieApp(firebaseConfig);
// export const collection = fb.firestore();