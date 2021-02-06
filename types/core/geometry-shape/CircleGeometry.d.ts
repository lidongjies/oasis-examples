import { Engine } from "../Engine";
import { ShapeGeometry } from "./ShapeGeometry";
interface CircleGeometryOptions {
    radius?: number;
    segments?: number;
    thetaStart?: number;
    thetaLength?: number;
}
/**
 * CircleGeometry.
 */
export declare class CircleGeometry extends ShapeGeometry {
    private radius;
    private segments;
    private thetaStart;
    private thetaLength;
    /**
     * @param engine - Engine
     * @param radius - Circle radius
     */
    constructor(engine: Engine, options?: CircleGeometryOptions);
}
export {};
