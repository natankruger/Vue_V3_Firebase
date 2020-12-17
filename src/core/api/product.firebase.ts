import { Product } from '../entities'
import { Database } from '@/libs/firebase'

async function putProduct (product: Product) {
  const newPostKey = Database.ref().child('products').push().key
  return await Database.ref(`products/${newPostKey}`).set(product)
}

async function getProducts () {
  return await Database.ref('products').once('value').then((snapshot) => {
    return snapshot.val()
  })
}

export { putProduct, getProducts }
