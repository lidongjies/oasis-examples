import { Color, Vector3 } from "@oasis-engine/math";
import { Light } from "./Light";
/**
 * Point light.
 */
export declare class PointLight extends Light {
    private static _colorProperty;
    private static _positionProperty;
    private static _distanceProperty;
    private static _decayProperty;
    private static _combinedData;
    color: Color;
    intensity: number;
    distance: number;
    decay: number;
    private _lightColor;
    /**
     * Get light position.
     * @readonly
     */
    get position(): Vector3;
    /**
     * Get the final light color.
     * @readonly
     */
    get lightColor(): Color;
}
