import { BoundingBox } from "@oasis-engine/math";
import { EngineObject } from "../base";
import { Engine } from "../Engine";
import { PrimitiveTopology, SubPrimitive } from "../graphic";
import { Buffer } from "../graphic/Buffer";
import { IndexFormat } from "../graphic/enums/IndexFormat";
import { IndexBufferBinding } from "../graphic/IndexBufferBinding";
import { VertexBufferBinding } from "../graphic/VertexBufferBinding";
import { VertexElement } from "../graphic/VertexElement";
/**
 * BufferGeometry.
 */
export declare class BufferGeometry extends EngineObject {
    /** Geometry name */
    name: string;
    readonly bounds: BoundingBox;
    private _subGeometries;
    /**
     * Vertex buffer binding collection.
     */
    get vertexBufferBindings(): Readonly<VertexBufferBinding[]>;
    /**
     * Index buffer binding.
     */
    get indexBufferBinding(): IndexBufferBinding;
    /**
     * Vertex element collection.
     */
    get vertexElements(): Readonly<VertexElement[]>;
    /**
     * First sub-geometry. Rendered using the first material. For more details, please refer to the subGeometrys property.
     */
    get subGeometry(): SubPrimitive | null;
    /**
     * A collection of sub-geometry, each sub-geometry can be rendered with an independent material.
     */
    get subGeometries(): Readonly<SubPrimitive[]>;
    /**
     * Instanced count, 0 means disable.
     */
    get instanceCount(): number;
    set instanceCount(count: number);
    /**
     * Create buffer geometry.
     * @param engine - Engine
     * @param name - Geometry name
     */
    constructor(engine: Engine, name?: string);
    /**
     * Set vertex buffer binding.
     * @param vertexBufferBindings - Vertex buffer binding
     * @param firstIndex - First vertex buffer index, the default value is 0
     */
    setVertexBufferBinding(vertexBufferBindings: VertexBufferBinding, firstIndex?: number): void;
    /**
     * Set vertex buffer binding.
     * @param vertexBuffer - Vertex buffer
     * @param stride - Vertex buffer data stride
     * @param firstIndex - First vertex buffer index, the default value is 0
     */
    setVertexBufferBinding(vertexBuffer: Buffer, stride: number, firstIndex?: number): void;
    /**
     * Set vertex buffer binding.
     * @param vertexBufferBindings - Vertex buffer binding
     * @param firstIndex - First vertex buffer index, the default value is 0
     */
    setVertexBufferBindings(vertexBufferBindings: VertexBufferBinding[], firstIndex?: number): void;
    /**
     * Set index buffer binding.
     * @param buffer - Index buffer
     * @param format - Index buffer format
     */
    setIndexBufferBinding(buffer: Buffer, format: IndexFormat): void;
    /**
     * Set index buffer binding.
     * @param bufferBinding - Index buffer binding
     */
    setIndexBufferBinding(bufferBinding: IndexBufferBinding): void;
    /**
     * Set vertex elements.
     * @param elements - Vertex element collection
     */
    setVertexElements(elements: VertexElement[]): void;
    /**
     * Add sub-geometry, each sub-geometry can correspond to an independent material.
     * @param start - Start drawing offset, if the index buffer is set, it means the offset in the index buffer, if not set, it means the offset in the vertex buffer
     * @param count - Drawing count, if the index buffer is set, it means the count in the index buffer, if not set, it means the count in the vertex buffer
     * @param topology - Drawing topology, default is PrimitiveTopology.Triangles
     */
    addSubGeometry(start: number, count: number, topology?: PrimitiveTopology): SubPrimitive;
    /**
     * Remove sub geometry.
     * @param subGeometry - SubGeometry needs to be removed
     */
    removeSubGeometry(subGeometry: SubPrimitive): void;
    /**
     * Clear all sub geometries
     */
    clearSubGeometry(): void;
    /**
     * Destroy.
     */
    destroy(): void;
}
