import { Camera, Engine, Material } from "@oasis-engine/core";
import "./GLSpriteMaterial";
/**
 * @private
 */
export declare class GLSpriteBatcher {
    private _gl;
    private _batchedQueue;
    private _targetTexture;
    private _glSprite;
    private _camera;
    constructor(rhi: any);
    flush(engine: Engine, material: Material): void;
    canBatch(texture: any, renderMode: any, camera: Camera): boolean;
    drawSprite(material: Material, positionQuad: any, uvRect: any, tintColor: any, texture: any, renderMode: any, camera: Camera): void;
    finalize(): void;
}
