import type { AnyFunction } from "@src/types/helpers"

export function debounce<T extends AnyFunction> (fn:T, delay: number = 500): (...args: Parameters<T>) => void {
    let timeOutId: ReturnType<typeof setTimeout> | undefined = undefined
    return function debouncedFn(...args: Parameters<T>) {
        if(timeOutId !== undefined) {
            clearTimeout(timeOutId)
        }
        timeOutId = setTimeout(() => fn(...args), delay)
    }
}