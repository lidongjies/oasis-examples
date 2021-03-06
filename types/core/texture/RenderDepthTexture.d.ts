import { Engine } from "../Engine";
import { RenderBufferDepthFormat } from "./enums/RenderBufferDepthFormat";
import { Texture } from "./Texture";
/**
 * The texture is used for the output of depth information in off-screen rendering.
 */
export declare class RenderDepthTexture extends Texture {
    private _format;
    private _autoMipmap;
    /**
     * Render depth texture format.
     */
    get format(): RenderBufferDepthFormat;
    /**
     * Whether to automatically generate multi-level textures.
     */
    get autoGenerateMipmaps(): boolean;
    set autoGenerateMipmaps(value: boolean);
    /**
     * Create RenderDepthTexture.
     * @param engine - Define the engine to use to render this depth texture
     * @param width - Texture width
     * @param height - Texture height
     * @param format - Texture format. default RenderBufferDepthFormat.Depth, engine will automatically select the supported precision
     * @param mipmap - Whether to use multi-level texture
     * @param isCube - Whether it's cube texture
     */
    constructor(engine: Engine, width: number, height: number, format?: RenderBufferDepthFormat, mipmap?: boolean, isCube?: boolean);
}
