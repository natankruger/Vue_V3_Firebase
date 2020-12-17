import { putProduct, getProducts } from './product.firebase'

export class ChallengeApi {
  static PRODUCT = { put: putProduct, get: getProducts }
}
