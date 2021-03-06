import { Matrix } from "@oasis-engine/math";
import { EngineObject } from "../base/EngineObject";
/**
 * Mesh skin data, equal glTF skins define
 */
export declare class Skin extends EngineObject {
    inverseBindMatrices: Matrix[];
    joints: string[];
    skeleton: string;
    /**
     * Contructor of skin
     * @param name - name
     */
    constructor(name: string);
}
