import { Vector2, Vector3, Vector4 } from "@oasis-engine/math";
/**
 * @private
 */
export declare class GLSprite {
    private gl;
    private _vbo;
    private _maxBatchCount;
    private _vertBuffer;
    private _vertCursor;
    private _drawSpriteCount;
    private _vertAttributes;
    constructor(gl: any);
    setMaxBatchCount(count: any): void;
    beginDraw(count: any): void;
    drawSprite(positionQuad: any, uvRect: any, tintColor: any): void;
    endDraw(shaderProgram: any): void;
    _initVertexAttributes(gl: any): void;
    _pushVertex(pos: Vector3, uv: Vector2, color: Vector4): void;
    finalize(): void;
}
