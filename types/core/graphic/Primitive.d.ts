import { IPlatformPrimitive } from "@oasis-engine/design";
import { RefObject } from "../asset/RefObject";
import { Engine } from "../Engine";
import { Buffer } from "../graphic/Buffer";
import { IndexFormat } from "./enums/IndexFormat";
import { IndexBufferBinding } from "./IndexBufferBinding";
import { VertexBufferBinding } from "./VertexBufferBinding";
import { VertexElement } from "./VertexElement";
/**
 * @private
 */
export declare class Primitive extends RefObject {
    private static _uvMacro;
    private static _normalMacro;
    private static _tangentMacro;
    private static _vertexColorMacro;
    private static _vertexAlphaMacro;
    /** Primitive name */
    name: string;
    /** Instanced count, disable instanced drawing when set zero */
    instanceCount: number;
    _vertexElementMap: object;
    _glIndexType: number;
    _platformPrimitive: IPlatformPrimitive;
    private _vertexBufferBindings;
    private _indexBufferBinding;
    private _vertexElements;
    /**
     *
     */
    get vertexBufferBindings(): Readonly<VertexBufferBinding[]>;
    /**
     * Vertex element collection.
     */
    get vertexElements(): Readonly<VertexElement[]>;
    /**
     * Index buffer binding.
     */
    get indexBufferBinding(): IndexBufferBinding;
    targets: any[];
    constructor(engine: Engine, name?: string);
    /**
     * Set vertex buffer binding.
     * @param vertexBuffer - Vertex buffer
     * @param stride - Vertex buffer stride
     * @param firstIndex - Vertex buffer binding index, default is 0
     */
    setVertexBufferBinding(vertexBuffer: Buffer, stride: number, firstIndex?: number): void;
    /**
     * Set vertex buffer binding.
     * @param vertexBufferBinding - Vertex buffer binding
     * @param firstIndex - Vertex buffer binding index, default is 0
     */
    setVertexBufferBinding(vertexBufferBinding: VertexBufferBinding, firstIndex?: number): void;
    /**
     * Set vertex buffer binding.
     * @param bufferBindings - Vertex buffer binding collection
     * @param firstIndex - First buffer binding index
     */
    setVertexBufferBindings(bufferBindings: VertexBufferBinding[], firstIndex?: number): void;
    /**
     * Set index buffer.
     * @param buffer - Index buffer
     * @param format - Index buffer format
     */
    setIndexBufferBinding(buffer: Buffer, format: IndexFormat): void;
    /**
     * Set index buffer.
     * @param bufferBinding - Index buffer binding
     */
    setIndexBufferBinding(bufferBinding: IndexBufferBinding): void;
    /**
     * Set vertex elements.
     * @param elements - Vertex element collection
     */
    setVertexElements(elements: VertexElement[]): void;
    /**
     * @override
     */
    _addRefCount(value: number): void;
    /**
     * @override
     * Destroy.
     */
    _onDestroy(): void;
    private _clearVertexElements;
    private _addVertexElement;
    private _setVertexBufferBinding;
}
