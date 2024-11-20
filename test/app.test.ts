import { add } from '../src/app'

describe('add function', () => {
  test('Test Add Method', () => {
    const result = add(1, 0)
      expect(result).toBe(1)
  })
})