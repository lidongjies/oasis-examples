import { Engine } from "../Engine";
import { ShapeGeometry } from "./ShapeGeometry";
/**
 * CuboidGeometry.
 */
export declare class CuboidGeometry extends ShapeGeometry {
    /**
     * Create a cuboid geometry.
     * @param engine - Engine
     * @param width - Cuboid width
     * @param height - Cuboid height
     * @param depth - Cuboid depth
     */
    constructor(engine: Engine, width?: number, height?: number, depth?: number);
}
