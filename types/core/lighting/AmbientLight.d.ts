import { Color } from "@oasis-engine/math";
import { Entity } from "../Entity";
import { Light } from "./Light";
/**
 * Ambient light.
 */
export declare class AmbientLight extends Light {
    private static _colorProperty;
    /**
     * Ambient light color.
     */
    get color(): Color;
    set color(value: Color);
    /**
     * Ambient light intensity.
     */
    get intensity(): number;
    set intensity(value: number);
    /**
     * Get the final light color.
     * @readonly
     */
    get lightColor(): Color;
    private _color;
    private _intensity;
    private _lightColor;
    constructor(entity: Entity);
}
