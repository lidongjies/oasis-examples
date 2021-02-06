import { WebGLRenderer } from "./WebGLRenderer";
import { GLCapabilityType, GLCompressedTextureInternalFormat } from "@oasis-engine/core";
/**
 * GL capability.
 */
export declare class GLCapability {
    private _maxDrawBuffers;
    private _maxAnisoLevel;
    private _maxAntiAliasing;
    _rhi: WebGLRenderer;
    capabilityList: Map<GLCapabilityType, boolean>;
    get maxDrawBuffers(): number;
    /**
     * Max anisoLevel.
     */
    get maxAnisoLevel(): number;
    /**
     * Max MSAA count.
     */
    get maxAntiAliasing(): number;
    get rhi(): WebGLRenderer;
    constructor(rhi: WebGLRenderer);
    /**
     * Check device capabilities.
     */
    canIUse(capabilityType: GLCapabilityType): boolean;
    /**
     * Check if can use some compressed texture format.
     */
    canIUseCompressedTextureInternalFormat(internalType: GLCompressedTextureInternalFormat): boolean;
    /**
     * If can use more joints.
     */
    get canIUseMoreJoints(): boolean;
    /**
     *  Init capabilities.
     */
    private init;
    /**
     * If there are extensions that can supplement this ability, smooth out the difference.
     * @example
     * compatible(GLCapabilityType.depthTexture,{
     *    UNSIGNED_INT_24_8: "UNSIGNED_INT_24_8_WEBGL"
     * })
     * gl.UNSIGNED_INT_24_8 = ext.UNSIGNED_INT_24_8_WEBGL
     */
    private compatibleInterface;
    private compatibleAllInterface;
}
