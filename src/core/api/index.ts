import { putProduct, getProducts, updateProduct, getProduct } from './product.firebase'
import { putMovement, getMovements } from './movement.firebase'

export class ChallengeApi {
  static PRODUCT = { put: putProduct, get: getProducts, update: updateProduct, getOne: getProduct }
  static MOVEMENT = { put: putMovement, get: getMovements }
}
