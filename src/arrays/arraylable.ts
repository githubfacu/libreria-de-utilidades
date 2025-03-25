export const arraylable = ( value: unknown[] | null ) : unknown[] => {
    return Array.isArray(value) ? value : []
}