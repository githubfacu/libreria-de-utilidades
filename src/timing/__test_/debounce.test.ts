
import { debounce } from "../debounce"

describe('debouce', () => {

    it('should debounce a mock fn and execute it 0 times', () => {
        const fn = vi.fn()
        const deboucedFn = debounce(fn, 200)
        deboucedFn(1)
        deboucedFn(1)
        deboucedFn(1)
        deboucedFn(1)
        expect(fn).not.toHaveBeenCalled()
    })

    it('should debounce a mock fn and execute it 1 time', ()=> {
        const fn = vi.fn()
        const debouncedFn = debounce(fn,200)
        debouncedFn(1)
        debouncedFn(1)
        vi.advanceTimersByTime(210)
        expect(fn).toHaveBeenCalledTimes(1)
        debouncedFn(1)
        expect(fn).toHaveBeenCalledTimes(1)
    })
})