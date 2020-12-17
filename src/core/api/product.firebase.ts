import { Product } from '../entities'
import { Database } from '@/libs/firebase'

function putProduct (product: Product) {
  Database.ref('products/1').set(product)
}

export { putProduct }
