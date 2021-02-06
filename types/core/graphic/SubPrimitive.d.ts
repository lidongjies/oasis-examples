import { PrimitiveTopology } from "./enums/PrimitiveTopology";
/**
 * Sub primitive.
 */
export declare class SubPrimitive {
    /** Start drawing offset */
    start: number;
    /** Drawing count */
    count: number;
    /** Drawing topology */
    topology: PrimitiveTopology;
    /**
     * Create sub primitive.
     * @param start - Start drawing offset
     * @param count - Drawing count
     * @param topology - Drawing topology
     */
    constructor(start?: number, count?: number, topology?: PrimitiveTopology);
}
