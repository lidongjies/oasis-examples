import { RefObject } from "../asset/RefObject";
import { TextureFilterMode } from "./enums/TextureFilterMode";
import { TextureWrapMode } from "./enums/TextureWrapMode";
/**
 * The base class of texture, contains some common functions of texture-related classes.
 */
export declare abstract class Texture extends RefObject {
    name: string;
    _glTexture: WebGLTexture;
    protected _width: number;
    protected _height: number;
    private _wrapModeU;
    private _wrapModeV;
    private _filterMode;
    private _anisoLevel;
    /**
     * The width of the texture.
     */
    get width(): number;
    /**
     * The height of the texture.
     */
    get height(): number;
    /**
     * Wrapping mode for texture coordinate S.
     */
    get wrapModeU(): TextureWrapMode;
    set wrapModeU(value: TextureWrapMode);
    /**
     * Wrapping mode for texture coordinate T.
     */
    get wrapModeV(): TextureWrapMode;
    set wrapModeV(value: TextureWrapMode);
    /**
     * Texture mipmapping count.
     */
    get mipmapCount(): number;
    /**
     * Filter mode for texture.
     */
    get filterMode(): TextureFilterMode;
    set filterMode(value: TextureFilterMode);
    /**
     * Anisotropic level for texture.
     */
    get anisoLevel(): number;
    set anisoLevel(value: number);
    /**
     * Generate multi-level textures based on the 0th level data.
     */
    generateMipmaps(): void;
    /**
     * @override
     */
    _onDestroy(): void;
}
