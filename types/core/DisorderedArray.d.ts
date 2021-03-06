/**
 * High-performance unordered array, delete uses exchange method to improve performance, internal capacity only increases.
 */
export declare class DisorderedArray<T> {
    _elements: T[];
    length: number;
    constructor(count?: number);
    add(element: T): void;
    delete(element: T): void;
    /**
     *
     * @param index
     * @returns The replaced item is used to reset its index.
     */
    deleteByIndex(index: number): T;
    garbageCollection(): void;
}
