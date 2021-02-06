import { Matrix, Vector4 } from "@oasis-engine/math";
import { Camera } from "../Camera";
import { Entity } from "../Entity";
import { Renderer } from "../Renderer";
import { Texture2D } from "../texture/Texture2D";
interface IRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
/**
 * Sprite renderer.
 * @class
 */
export declare class SpriteRenderer extends Renderer {
    private static _tempVec40;
    private static _tempVec41;
    private static _tempVec42;
    private static _tempVec43;
    private _uvRect;
    private _worldSize;
    private _positionQuad;
    private _rotationAngle;
    private _anchor;
    protected _texture: Texture2D;
    protected _rect: IRect;
    private _worldSizeFactor;
    /**
     * Render mode: 2D or 3D, default is 2D.
     */
    renderMode: string;
    /**
     * Rendering color for the Sprite graphic.
     */
    tintColor: Vector4;
    transformMatrix: Matrix;
    /**
     * Constructor of SpriteRenderer.
     * @param {Entity} entity
     */
    constructor(entity: Entity);
    set texture(v: Texture2D);
    get texture(): Texture2D;
    set anchor(v: number[]);
    get anchor(): number[];
    set rect(v: IRect);
    get rect(): IRect;
    protected setTexture(texture: any): void;
    /**
     * Angle of rotation.
     * @member {Vector4}
     */
    get rotationAngle(): number;
    set rotationAngle(v: number);
    protected setRect(rect?: any): void;
    protected setAnchor(anchor: any): void;
    protected setWorldSize(): void;
    protected setUvRect(): void;
    /**
     * Refresh render data and push to pipeline.
     * @param {Camera} camera
     */
    render(camera: Camera): void;
    _transformByMatrix(): void;
    /**
     * Update position.
     * @param {Camera} camera
     * @private
     */
    _updatePositionQuad(camera: Camera): void;
}
export {};
