import { RefObject } from "../asset/RefObject";
import { Engine } from "../Engine";
import { BufferBindFlag } from "./enums/BufferBindFlag";
import { BufferUsage } from "./enums/BufferUsage";
import { SetDataOptions } from "./enums/SetDataOptions";
/**
 * Buffer.
 */
export declare class Buffer extends RefObject {
    _glBindTarget: number;
    _glBufferUsage: number;
    _nativeBuffer: WebGLBuffer;
    private _hardwareRenderer;
    private _type;
    private _byteLength;
    private _bufferUsage;
    /**
     * Engine.
     */
    get engine(): Engine;
    /**
     * Buffer binding flag.
     */
    get type(): BufferBindFlag;
    /**
     * Byte length.
     */
    get byteLength(): number;
    /**
     * Buffer usage.
     */
    get bufferUsage(): BufferUsage;
    /**
     * Create Buffer.
     * @param engine - Engine
     * @param type - Buffer binding flag
     * @param byteLength - Byte length
     * @param bufferUsage - Buffer usage
     */
    constructor(engine: Engine, type: BufferBindFlag, byteLength: number, bufferUsage?: BufferUsage);
    /**
     * Create Buffer.
     * @param engine - Engine
     * @param type - Buffer binding flag
     * @param byteLength - Byte length
     * @param bufferUsage - Buffer usage
     */
    constructor(engine: Engine, type: BufferBindFlag, data: ArrayBuffer | ArrayBufferView, bufferUsage?: BufferUsage);
    /**
     * Bind buffer.
     */
    bind(): void;
    /**
     * Set buffer data.
     * @param data - Input buffer data
     */
    setData(data: ArrayBuffer | ArrayBufferView): void;
    /**
     * Set buffer data.
     * @param data - Input buffer data
     * @param bufferByteOffset - buffer byte offset
     */
    setData(data: ArrayBuffer | ArrayBufferView, bufferByteOffset: number): void;
    /**
     * Set buffer data.
     * @param data - Input buffer data
     * @param bufferByteOffset - Buffer byte offset
     * @param dataOffset - Buffer byte offset
     * @param dataLength - Data length
     */
    setData(data: ArrayBuffer | ArrayBufferView, bufferByteOffset: number, dataOffset: number, dataLength?: number): void;
    /**
     * Set buffer data.
     * @param data - Input buffer data
     * @param bufferByteOffset - Buffer byte offset
     * @param dataOffset - Buffer byte offset
     * @param dataLength - Data length
     * @param options - Update strategy: None/Discard/NoOverwrite
     */
    setData(data: ArrayBuffer | ArrayBufferView, bufferByteOffset: number, dataOffset: number, dataLength: number, options: SetDataOptions): void;
    /**
     * Get buffer data.
     * @param data - Output buffer data
     */
    getData(data: ArrayBufferView): void;
    /**
     * Get buffer data.
     * @param data - Output buffer data
     * @param bufferByteOffset - Buffer byte offset
     */
    getData(data: ArrayBufferView, bufferByteOffset: number): void;
    /**
     * Get buffer data.
     * @param data - Output buffer data
     * @param bufferByteOffset - Buffer byte offset
     * @param dataOffset - Output data offset
     * @param dataLength - Output data length
     */
    getData(data: ArrayBufferView, bufferByteOffset: number, dataOffset: number, dataLength: number): void;
    /**
     * @override
     * Destroy.
     */
    _onDestroy(): void;
    /**
     * @deprecated
     */
    resize(dataLength: number): void;
}
