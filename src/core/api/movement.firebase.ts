import { Movement } from '../entities'
import { Database } from '@/libs/firebase'

async function putMovement (movement: Movement) {
  const newMovementKey = Database.ref().child('movements').push().key
  return await Database.ref(`movements/${newMovementKey}`).set(movement)
}

async function getMovements () {
  return await Database.ref('movements').once('value').then((snapshot) => {
    return snapshot.val()
  })
}

export { putMovement, getMovements }
