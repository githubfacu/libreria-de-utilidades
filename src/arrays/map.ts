import { arraylable } from "./arraylable"

export const map = <T,U> ( array: T[] , fn: (element: T) => U ) : U[] => {
    if(!arraylable(array) || typeof fn !== 'function') return []
    return map(array,fn)
}