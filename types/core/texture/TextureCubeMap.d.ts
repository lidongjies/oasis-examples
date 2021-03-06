import { Engine } from "../Engine";
import { TextureCubeFace } from "./enums/TextureCubeFace";
import { TextureFormat } from "./enums/TextureFormat";
import { Texture } from "./Texture";
/**
 * Cube texture.
 */
export declare class TextureCubeMap extends Texture {
    private _format;
    /** Backward compatible with WebGL1.0. */
    private _compressedFaceFilled;
    /**
     * Texture format.
     */
    get format(): TextureFormat;
    /**
     * Create TextureCube.
     * @param engine - Define the engine to use to render this texture
     * @param size - Texture size. texture width must be equal to height in cube texture
     * @param format - Texture format,default TextureFormat.R8G8B8A8
     * @param mipmap - Whether to use multi-level texture
     */
    constructor(engine: Engine, size: number, format?: TextureFormat, mipmap?: boolean);
    /**
     * Setting pixels data through cube face,color buffer data, designated area and texture mipmapping level,it's also applicable to compressed formats.
     * @remarks When compressed texture is in WebGL1, the texture must be filled first before writing the sub-region
     * @param face - Cube face
     * @param colorBuffer - Color buffer data
     * @param mipLevel - Texture mipmapping level
     * @param x - X coordinate of area start
     * @param y -  Y coordinate of area start
     * @param width - Data width.if it's empty, width is the width corresponding to mipLevel minus x , width corresponding to mipLevel is Math.max(1, this.width >> mipLevel)
     * @param height - Data height.if it's empty, height is the height corresponding to mipLevel minus y , height corresponding to mipLevel is Math.max(1, this.height >> mipLevel)
     */
    setPixelBuffer(face: TextureCubeFace, colorBuffer: ArrayBufferView, mipLevel?: number, x?: number, y?: number, width?: number, height?: number): void;
    /**
     * Setting pixels data through cube face, TexImageSource, designated area and texture mipmapping level.
     * @param face - Cube face
     * @param imageSource - The source of texture
     * @param mipLevel - Texture mipmapping level
     * @param flipY - Whether to flip the Y axis
     * @param premultipltAlpha - Whether to premultiply the transparent channel
     * @param x - X coordinate of area start
     * @param y - Y coordinate of area start
     */
    setImageSource(face: TextureCubeFace, imageSource: TexImageSource, mipLevel?: number, flipY?: boolean, premultiplyAlpha?: boolean, x?: number, y?: number): void;
    /**
     * Get the pixel color buffer according to the specified cube face and area.
     * @param face - You can choose which cube face to read
     * @param x - X coordinate of area start
     * @param y - Y coordinate of area start
     * @param width - Area width
     * @param height - Area height
     * @param out - Color buffer
     */
    getPixelBuffer(face: TextureCubeFace, x: number, y: number, width: number, height: number, out: ArrayBufferView): void;
}
