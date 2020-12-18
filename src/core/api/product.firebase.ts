import { Product } from '../entities'
import { Database } from '@/libs/firebase'

async function putProduct (product: Product) {
  let newProductKey = Database.ref().child('products').push().key || ''
  newProductKey = newProductKey?.substr(1, newProductKey.length - 1)

  return await Database.ref(`products/${newProductKey}`).set(product)
}

async function getProducts () {
  return await Database.ref('products').once('value').then((snapshot) => {
    return snapshot.val()
  })
}

async function getProduct (productFid: string) {
  return await Database.ref(`products/${productFid}`).get().then((snapshot) => {
    return snapshot.val()
  })
}

async function updateProduct (ref: string, product: Product) {
  return await Database.ref(`products/${ref}`).set(product)
}

export { putProduct, getProducts, updateProduct, getProduct }
