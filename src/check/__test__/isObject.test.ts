
import { isObject } from "../isObject"

describe('is object ->', () => {

    it('should return true if param is an object', () => {
        expect(isObject({})).toBe(true)
    })
    it('should return false if param is null', () => {
        expect(isObject(null)).toBe(false)
    })
    it('should return false if param is not an object', () => {
        expect(isObject(4)).toBe(false)
    })
})