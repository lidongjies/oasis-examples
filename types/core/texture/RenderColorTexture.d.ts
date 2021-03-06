import { Engine } from "../Engine";
import { RenderBufferColorFormat } from "./enums/RenderBufferColorFormat";
import { TextureCubeFace } from "./enums/TextureCubeFace";
import { Texture } from "./Texture";
/**
 * The texture is used for the output of color information in off-screen rendering.
 */
export declare class RenderColorTexture extends Texture {
    private _format;
    private _autoMipmap;
    /**
     * Render color texture format.
     * @readonly
     */
    get format(): RenderBufferColorFormat;
    /**
     * Whether to automatically generate multi-level textures.
     */
    get autoGenerateMipmaps(): boolean;
    set autoGenerateMipmaps(value: boolean);
    /**
     * Create RenderColorTexture.
     * @param engine - Define the engine to use to render this color texture
     * @param width - Texture width
     * @param height - Texture height
     * @param format - Texture format. default RenderBufferColorFormat.R8G8B8A8
     * @param mipmap - Whether to use multi-level texture
     * @param isCube - Whether it's cube texture
     */
    constructor(engine: Engine, width: number, height: number, format?: RenderBufferColorFormat, mipmap?: boolean, isCube?: boolean);
    /**
     * Get the pixel color buffer according to the specified cube face and area.
     * @param face - You can choose which cube face to read if it's cube texture
     * @param x - X coordinate of area start
     * @param y - Y coordinate of area start
     * @param width - Area width
     * @param height - Area height
     * @param out - Color buffer
     */
    getPixelBuffer(face: TextureCubeFace | null, x: number, y: number, width: number, height: number, out: ArrayBufferView): void;
}
