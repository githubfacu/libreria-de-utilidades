
type AnyFunction = (...args: unknown[]) => unknown

export function throttle<T extends AnyFunction> (fn: T, delay : number = 500) : (...args: Parameters<T>) => void {
    let timeOutId : ReturnType<typeof setTimeout> | undefined = undefined

    return function throttledFunction(...args: Parameters<T>){
        if (timeOutId !== undefined) {
            return
        }
        timeOutId = setTimeout(() => {
            timeOutId = undefined
        }, delay)
        return fn(...args)
    }
}