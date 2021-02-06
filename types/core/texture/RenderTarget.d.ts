import { EngineObject } from "../base";
import { Engine } from "../Engine";
import { RenderBufferDepthFormat } from "./enums/RenderBufferDepthFormat";
import { TextureCubeFace } from "./enums/TextureCubeFace";
import { RenderColorTexture } from "./RenderColorTexture";
import { RenderDepthTexture } from "./RenderDepthTexture";
/**
 * The render target used for off-screen rendering.
 */
export declare class RenderTarget extends EngineObject {
    _frameBuffer: WebGLFramebuffer;
    _MSAAFrameBuffer: WebGLFramebuffer | null;
    private _rhi;
    private _width;
    private _height;
    private _antiAliasing;
    private _colorTextures;
    private _depthTexture;
    private _depthRenderBuffer;
    private _MSAAColorRenderBuffers;
    private _MSAADepthRenderBuffer;
    private _oriDrawBuffers;
    private _blitDrawBuffers;
    /**
     * Render target width.
     * @readonly
     */
    get width(): number;
    /**
     * Render target height.
     * @readonly
     */
    get height(): number;
    /**
     * Render color texture count.
     * @readonly
     */
    get colorTextureCount(): number;
    /**
     * Depth texture.
     * @readonly
     */
    get depthTexture(): RenderDepthTexture | null;
    /**
     * Anti-aliasing level.
     * @remarks If the anti-aliasing level set is greater than the maximum level supported by the hardware, the maximum level of the hardware will be used.
     * @readonly
     */
    get antiAliasing(): number;
    /**
     * Create a render target through color texture and depth format.
     * @param engine - Define the engine to use for this off-screen rendering
     * @param width - Render target width
     * @param height - Render target height
     * @param colorTexture - Render color texture
     * @param depthFormat - Depth format. default RenderBufferDepthFormat.Depth, engine will automatically select the supported precision
     * @param antiAliasing - Anti-aliasing level, default is 1
     */
    constructor(engine: Engine, width: number, height: number, colorTexture: RenderColorTexture, depthFormat?: RenderBufferDepthFormat | null, antiAliasing?: number);
    /**
     * Create a render target through color texture and depth format.
     * @remarks If the color texture is not transmitted, only the depth texture is generated.
     * @param engine - Define the engine to use for this off-screen rendering
     * @param width - Render target width
     * @param height - Render target height
     * @param colorTexture - Render color texture
     * @param depthTexture - Render depth texture
     * @param antiAliasing - Anti-aliasing level, default is 1
     */
    constructor(engine: Engine, width: number, height: number, colorTexture: RenderColorTexture | null, depthTexture: RenderDepthTexture, antiAliasing?: number);
    /**
     * Create a render target with color texture array and depth format.
     * @param engine - Define the engine to use for this off-screen rendering
     * @param width - Render target width
     * @param height - Render target height
     * @param colorTextures - Render color texture array
     * @param depthFormat - Depth format. default RenderBufferDepthFormat.Depth,engine will automatically select the supported precision
     * @param antiAliasing - Anti-aliasing level, default is 1
     */
    constructor(engine: Engine, width: number, height: number, colorTextures: RenderColorTexture[], depthFormat?: RenderBufferDepthFormat | null, antiAliasing?: number);
    /**
     * Create a render target with color texture array and depth texture.
     * @param engine - Define the engine to use for this off-screen rendering
     * @param width - Render target width
     * @param height - Render target height
     * @param colorTextures - Render color texture array
     * @param depthTexture - Depth texture
     * @param antiAliasing - Anti-aliasing level, default is 1
     */
    constructor(engine: Engine, width: number, height: number, colorTextures: RenderColorTexture[], depthTexture: RenderDepthTexture, antiAliasing?: number);
    /**
     * Get the render color texture by index.
     * @param index
     */
    getColorTexture(index?: number): RenderColorTexture | null;
    /**
     * Destroy render target.
     */
    destroy(): void;
    /**
     * Activate this RenderTarget.
     * @remarks
     * If MSAA is turned on, MSAA FBO is activated, and then this._blitRenderTarget() is performed to exchange FBO.
     * If MSAA is not turned on, activate the main FBO.
     */
    _activeRenderTarget(): void;
    /**
     * Set which face of the cube texture to render to.
     * @param faceIndex - Cube texture face
     */
    _setRenderTargetFace(faceIndex?: TextureCubeFace): void;
    /**
     * Blit FBO.
     */
    _blitRenderTarget(): void;
    /**
     * Bind main FBO.
     */
    private _bindMainFBO;
    /**
     * Bind MSAA FBO.
     */
    private _bindMSAAFBO;
    /**
     * Check FBO.
     */
    private _checkFrameBuffer;
}
