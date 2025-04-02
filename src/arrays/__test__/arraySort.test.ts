import { arraySort } from "../arraySort";

describe("arraySort", () => {
    it("should sort a simple alphabetical list", () => {
        expect(arraySort(["Banana", "Apple", "Cherry"])).toEqual(["Apple", "Banana", "Cherry"]);
    });

    it("should sort a list with numbers inside strings correctly", () => {
        expect(arraySort(["A10", "A2", "A1", "B2", "B1"])).toEqual(["A1", "A2", "A10", "B1", "B2"]);
    });

    it("should sort a mix of pure numbers and alphanumeric strings", () => {
        expect(arraySort(["100", "A1", "A2", "50"])).toEqual(["50", "100", "A1", "A2"]);
    });

    it("should sort addresses correctly", () => {
        expect(arraySort(["Calle 100", "Calle 2", "Calle 10", "Calle 1"])).toEqual([
            "Calle 1",
            "Calle 2",
            "Calle 10",
            "Calle 100",
        ]);
    });

    it("should sort movie titles correctly", () => {
        expect(arraySort(["The Godfather 2", "The Godfather", "The Godfather 10"])).toEqual([
            "The Godfather",
            "The Godfather 2",
            "The Godfather 10",
        ]);
    });

    it("should return 0 when strings are identical", () => {
        expect(arraySort(["apple", "apple", "banana"])).toEqual(["apple", "apple", "banana"]);
    });

    it("should sort a list of strings with mixed case", () => {
        expect(arraySort(["apple", "Banana", "cherry", "Apple"])).toEqual([
            "apple",
            "Apple",
            "Banana",
            "cherry",
        ]);
    });

    it("should handle empty strings", () => {
        expect(arraySort(["", "apple", "banana"])).toEqual(["", "apple", "banana"]);
    });

    it("should handle an empty array", () => {
        expect(arraySort([])).toEqual([]);
    });

    it("should sort numeric strings correctly", () => {
        expect(arraySort(["2", "1", "10", "5"])).toEqual(["1", "2", "5", "10"]);
    });

    it("should handle a large number of items", () => {
        const largeArray = Array.from({ length: 1000 }, (_, i) => `${i}`);
        const shuffledArray = largeArray.reverse();
        const sortedArray = largeArray.sort((a, b) => parseInt(a) - parseInt(b));

        expect(arraySort(shuffledArray)).toEqual(sortedArray);
    });
});