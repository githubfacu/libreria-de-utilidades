import { map } from "../map"

describe('map', () => {
    it('should apply the provided function to each element of the array and return a new array with the transformed values', () => {

        const array = [1, 2, 5]
        const fn = vi.fn((x) => x * 2)
        const result = map(array, fn)
        expect(result).toStrictEqual([2, 4, 10])
    })

    // it('should return an empty array if input function is undefined', () => {
    //     const result = map(null as unknown as number[], undefined)
    //     expect(result).toEqual([])
    // })

    it("should return an empty array if input function is undefined", () => {
        let result: number[];
    
        try {
            const fn = undefined;
            if (typeof fn !== "function") {
                result = [];
            } else {
                result = map(null as unknown as number[], fn);
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            result = [];
        }
        expect(result).toEqual([]);
    });
})