import { Example } from '../entities'
import { Database } from '@/libs/firebase'

const name = 'examples'

async function putExample (example: Example) {
  const newExampleKey = Database.ref().child(name).push().key
  return await Database.ref(`${name}/${newExampleKey}`).set(example)
}

async function getExamples () {
  return await Database.ref(name).once('value').then((snapshot) => {
    const arr: Example[] = []
    snapshot.forEach((item) => {
      arr.push(item.val())
    })

    return arr
  })
}

export { putExample, getExamples }
