import { Engine } from "../Engine";
import { ShapeGeometry } from "./ShapeGeometry";
/**
 * CubeGeometry.
 */
export declare class PlaneGeometry extends ShapeGeometry {
    private _parameters;
    private halfWidth;
    private halfHeight;
    /**
     * @param engine - Engine
     * @param width - Plane width
     * @param height - Plane height
     * @param horizontalSegments - Plane horizontal segments
     * @param verticalSegments - Plane verticle segments
     */
    constructor(engine: Engine, width?: number, height?: number, horizontalSegments?: number, verticalSegments?: number);
    initialize(engine: Engine): void;
}
