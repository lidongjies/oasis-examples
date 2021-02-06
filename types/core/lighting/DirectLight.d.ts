import { Color, Vector3 } from "@oasis-engine/math";
import { Light } from "./Light";
/**
 * Directional light.
 */
export declare class DirectLight extends Light {
    private static _colorProperty;
    private static _directionProperty;
    private static _combinedData;
    color: Color;
    intensity: number;
    private _forward;
    private _lightColor;
    private _reverseDirection;
    /**
     * Get direction.
     * @readonly
     */
    get direction(): Vector3;
    /**
     * Get the final light color.
     * @readonly
     */
    get lightColor(): Color;
    /**
     * Get the opposite direction of the directional light direction.
     * @readonly
     */
    get reverseDirection(): Vector3;
}
