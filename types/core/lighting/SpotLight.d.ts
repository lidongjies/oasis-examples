import { Color, Vector3 } from "@oasis-engine/math";
import { Light } from "./Light";
/**
 * Spot light.
 */
export declare class SpotLight extends Light {
    private static _colorProperty;
    private static _positionProperty;
    private static _directionProperty;
    private static _distanceProperty;
    private static _decayProperty;
    private static _angleProperty;
    private static _penumbraProperty;
    private static _penumbraCosProperty;
    private static _coneCosProperty;
    private static _combinedData;
    color: Color;
    penumbra: number;
    distance: number;
    intensity: number;
    decay: number;
    angle: number;
    private _forward;
    private _lightColor;
    private _inverseDirection;
    /**
     * Get light position.
     * @readonly
     */
    get position(): Vector3;
    /**
     * Get light direction.
     * @readonly
     */
    get direction(): Vector3;
    /**
     * Get the opposite direction of the spotlight.
     * @readonly
     */
    get reverseDirection(): Vector3;
    /**
     * Get the final light color.
     * @readonly
     */
    get lightColor(): Color;
}
