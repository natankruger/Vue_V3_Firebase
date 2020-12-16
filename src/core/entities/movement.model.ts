import { ProductModel } from './products.model'

enum movementType {
  entry,
  out
}

export interface MovementModel {
  product: ProductModel;
  type: movementType;
  value: number;
  date: string;
  quantity: number;
}
