
import { isNullOrUndefined } from "../isNullOrUndefined"

describe('is null or undefined ->', () => {

    it('should return true if param is null', () => {
        expect(isNullOrUndefined(null)).toBe(true)
    })
    it('should return true if param is undefined', () => {
        expect(isNullOrUndefined(undefined)).toBe(true)
    })
    it('should return false if param is not null or undefined', () => {
        expect(isNullOrUndefined(4)).toBe(false)
    })
})