import { Engine } from "../Engine";
import { ShapeGeometry } from "./ShapeGeometry";
/**
 * TorusGeometry.
 */
export declare class TorusGeometry extends ShapeGeometry {
    private parameters;
    constructor(parameters: {
        radius?: number;
        tube?: number;
        radialSegments?: number;
        tubularSegments?: number;
        arc?: number;
    }, engine: Engine);
    _initialize(engine: Engine, vertices: Float32Array, indices: Uint16Array): void;
}
