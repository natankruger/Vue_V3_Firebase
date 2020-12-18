import { putProduct, getProducts } from './product.firebase'
import { putMovement, getMovements } from './movement.firebase'

export class ChallengeApi {
  static PRODUCT = { put: putProduct, get: getProducts }
  static MOVEMENT = { put: putMovement, get: getMovements }
}
