import { Primitive } from "../graphic";
import { SubPrimitive } from "../graphic/SubPrimitive";
import { Material } from "../material/Material";
import { Renderer } from "../Renderer";
/**
 * Render element.
 */
export declare class RenderElement {
    private static _elementPoolIndex;
    private static _elementPool;
    /**
     * Get render element from pool.
     * @remark The return value is only valid for the current frame, and the next frame will be automatically recycled for reuse.
     */
    static getFromPool(): RenderElement;
    /** Render component. */
    component: Renderer;
    /** Primitive. */
    primitive: Primitive;
    /** Sub primitive. */
    subPrimitive: SubPrimitive;
    /** Material. */
    material: Material;
    setValue(component: Renderer, primitive: Primitive, subPrimitive: SubPrimitive, material: Material): void;
}
