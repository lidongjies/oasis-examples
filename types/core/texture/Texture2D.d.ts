import { Engine } from "../Engine";
import { TextureFormat } from "./enums/TextureFormat";
import { Texture } from "./Texture";
/**
 * Two-dimensional texture.
 */
export declare class Texture2D extends Texture {
    private _format;
    /** Backward compatible with WebGL1.0. */
    private _compressedMipFilled;
    /**
     * Texture format.
     * @readonly
     */
    get format(): TextureFormat;
    /**
     * Create Texture2D.
     * @param engine - Define the engine to use to render this texture
     * @param width - Texture width
     * @param height - Texture height
     * @param format - Texture format. default  `TextureFormat.R8G8B8A8`
     * @param mipmap - Whether to use multi-level texture
     */
    constructor(engine: Engine, width: number, height: number, format?: TextureFormat, mipmap?: boolean);
    /**
     * Setting pixels data through color buffer data, designated area and texture mipmapping level,it's also applicable to compressed formats.
     * @remarks If it is the WebGL1.0 platform and the texture format is compressed, the first upload must be filled with textures.
     * @param colorBuffer - Color buffer data
     * @param mipLevel - Texture mipmapping level
     * @param x - X coordinate of area start
     * @param y - Y coordinate of area start
     * @param width - Data width. if it's empty, width is the width corresponding to mipLevel minus x , width corresponding to mipLevel is Math.max(1, this.width >> mipLevel)
     * @param height - Data height. if it's empty, height is the height corresponding to mipLevel minus y , height corresponding to mipLevel is Math.max(1, this.height >> mipLevel)
     */
    setPixelBuffer(colorBuffer: ArrayBufferView, mipLevel?: number, x?: number, y?: number, width?: number, height?: number): void;
    /**
     * Setting pixels data through TexImageSource, designated area and texture mipmapping level.
     * @param imageSource - The source of texture
     * @param mipLevel - Texture mipmapping level
     * @param flipY - Whether to flip the Y axis
     * @param premultiplyAlpha - Whether to premultiply the transparent channel
     * @param x - X coordinate of area start
     * @param y - Y coordinate of area start
     */
    setImageSource(imageSource: TexImageSource, mipLevel?: number, flipY?: boolean, premultiplyAlpha?: boolean, x?: number, y?: number): void;
    /**
     * Get the pixel color buffer according to the specified area.
     * @param x - X coordinate of area start
     * @param y - Y coordinate of area start
     * @param width - Area width
     * @param height - Area height
     * @param out - Color buffer
     */
    getPixelBuffer(x: number, y: number, width: number, height: number, out: ArrayBufferView): void;
}
