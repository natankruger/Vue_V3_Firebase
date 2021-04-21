import { putExample, getExamples } from './example.firebase'

export class ChallengeApi {
  static EXAMPLE = { put: putExample, get: getExamples }
}
