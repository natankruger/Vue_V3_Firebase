import firebase from 'firebase/app'

import 'firebase/database'

// Get your own firebase configuration
const firebaseConfig = {
}

firebase.initializeApp(firebaseConfig)

const Database = firebase.database()

export { Database }
