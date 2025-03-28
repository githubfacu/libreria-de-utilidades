
import { isString } from "../isString"

describe('is string ->', () => {

    it('should return true if param is ""', () => {
        expect(isString('')).toBe(true)
    })
    it('should return true if param is null', () => {
        expect(isString(null)).toBe(false)
    })
    it('should return true if param is undefined', () => {
        expect(isString(undefined)).toBe(false)
    })
    it('should return true if param is number', () => {
        expect(isString(4)).toBe(false)
    })
})