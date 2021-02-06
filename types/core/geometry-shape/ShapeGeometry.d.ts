import { Engine } from "../Engine";
import { BufferGeometry } from "../geometry/BufferGeometry";
import { VertexElement } from "../graphic/VertexElement";
/**
 * Basic shape geometry.
 */
export declare class ShapeGeometry extends BufferGeometry {
    _initBuffer(engine: Engine, vertices: Float32Array, indices: Uint16Array, vertexStride: number, vertexElements: VertexElement[]): void;
    private _computeBounds;
}
