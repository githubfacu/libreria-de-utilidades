export const arraySort = (array: string[]): string[] => {
    const getWordsAndNumbers = (value: string): (string | number)[] => {
        return value.split(/(\d+)/).map(part => {
            const num = parseInt(part, 10);
            return isNaN(num) ? part.toLowerCase() : num;
        });
    };

    // Sin el uso de Set, mantenemos todos los elementos, incluso los duplicados
    return array.sort((a, b) => {
        const arrA = getWordsAndNumbers(a);
        const arrB = getWordsAndNumbers(b);

        const maxLength = Math.max(arrA.length, arrB.length);

        for (let i = 0; i < maxLength; i++) {
            const partA = arrA[i];
            const partB = arrB[i];

            if (partA === undefined) return -1;
            if (partB === undefined) return 1;

            if (typeof partA === "number" && typeof partB === "number") {
                if (partA !== partB) return partA - partB;
            } else if (typeof partA === "string" && typeof partB === "string") {
                const comp = partA.localeCompare(partB);
                if (comp !== 0) return comp;
            }
        }

        return 0;
    });
};