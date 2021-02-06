import { Engine, Material, RenderElement, Vector3 } from "oasis-engine";
/**
 * Color material, render as marker.
 */
export declare class ColorMaterial extends Material {
    private _currentId;
    private _primitivesMap;
    constructor(engine: Engine);
    /**
     * Reset id and renderer element table.
     */
    reset(): void;
    /**
     * Convert id to RGB color value, 0 and 0xffffff are illegal values.
     */
    id2Color(id: number): Vector3;
    /**
     * Convert RGB color to id.
     * @param color - Color
     */
    color2Id(color: any): number;
    /**
     * Get renderer element by color.
     */
    getObjectByColor(color: any): any;
    /**
     * @override
     */
    _preRender(renderElement: RenderElement): void;
}
