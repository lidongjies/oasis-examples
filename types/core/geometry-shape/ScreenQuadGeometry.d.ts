import { Engine } from "../Engine";
import { ShapeGeometry } from "./ShapeGeometry";
/**
 * A rectangle covering the entire screen.
 * @private
 */
export declare class ScreenQuadGeometry extends ShapeGeometry {
    constructor(engine: Engine);
    _initialize(engine: Engine, vertices: Float32Array, indices: Uint16Array): void;
}
