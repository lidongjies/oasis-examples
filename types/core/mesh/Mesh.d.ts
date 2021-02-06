import { BoundingBox } from "@oasis-engine/math";
import { Engine, EngineObject } from "..";
import { Primitive } from "../graphic/Primitive";
import { SubPrimitive } from "../graphic/SubPrimitive";
/**
 * Mesh Asset Object
 */
export declare class Mesh extends EngineObject {
    name: string;
    primitives: Primitive[];
    groups: SubPrimitive[];
    weights: number[];
    readonly bounds: BoundingBox;
    /**
     * Contructor of mesh
     * @param name - Name
     */
    constructor(engine: Engine, name?: string);
    updatePrimitiveWeightsIndices(weightsIndices: number[]): void;
    destroy(): void;
}
