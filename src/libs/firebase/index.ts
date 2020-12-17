import firebase from 'firebase/app'

import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyApBEsIqgcZXxZsaTyDkvmBTiRLhxli-YU',
  authDomain: 'fesc-challenge.firebaseapp.com',
  databaseURL: 'https://fesc-challenge-default-rtdb.firebaseio.com',
  projectId: 'fesc-challenge',
  storageBucket: 'fesc-challenge.appspot.com',
  messagingSenderId: '523001779258',
  appId: '1:523001779258:web:dda4f277d3372494fa9103'
}

firebase.initializeApp(firebaseConfig)

const Database = firebase.database()

export { Database }
