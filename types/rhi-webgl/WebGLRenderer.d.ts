import { Camera, Canvas, Engine, GLCapabilityType, HardwareRenderer, Material, Primitive, RenderTarget, SubPrimitive, TextureCubeFace } from "@oasis-engine/core";
import { IPlatformPrimitive } from "@oasis-engine/design";
import { Vector4 } from "@oasis-engine/math";
import { GLCapability } from "./GLCapability";
import { GLRenderStates } from "./GLRenderStates";
import { WebGLExtension } from "./type";
/**
 * WebGL mode.
 */
export declare enum WebGLMode {
    /** Auto, use WebGL2.0 if support, or will fallback to WebGL1.0. */
    Auto = 0,
    /** WebGL2.0. */
    WebGL2 = 1,
    /** WebGL1.0, */
    WebGL1 = 2
}
/**
 * WebGL renderer options.
 */
export interface WebGLRendererOptions extends WebGLContextAttributes {
    /** WebGL mode.*/
    webGLMode?: WebGLMode;
}
/**
 * WebGL renderer, including WebGL1.0 and WebGL2.0.
 */
export declare class WebGLRenderer implements HardwareRenderer {
    _currentBind: any;
    private _options;
    private _gl;
    private _renderStates;
    private _extensions;
    private _spriteBatcher;
    private _capability;
    private _isWebGL2;
    private _activedTextureID;
    private _activeTextures;
    get isWebGL2(): boolean;
    constructor(options?: WebGLRendererOptions);
    init(canvas: Canvas): void;
    createPlatformPrimitive(primitive: Primitive): IPlatformPrimitive;
    get gl(): WebGL2RenderingContext | (WebGLRenderingContext & WebGLExtension);
    get renderStates(): GLRenderStates;
    get capability(): GLCapability;
    requireExtension(ext: any): any;
    canIUse(capabilityType: GLCapabilityType): boolean;
    canIUseCompressedTextureInternalFormat(type: number): boolean;
    get canIUseMoreJoints(): boolean;
    viewport(x: any, y: any, width: any, height: any): void;
    colorMask(r: any, g: any, b: any, a: any): void;
    clearRenderTarget(clearMode: any, clearParam: Vector4): void;
    drawPrimitive(primitive: Primitive, subPrimitive: SubPrimitive, shaderProgram: any): void;
    drawSprite(material: any, positionQuad: any, uvRect: any, tintColor: any, texture: any, renderMode: any, camera: Camera): void;
    flushSprite(engine: Engine, material: Material): void;
    activeRenderTarget(renderTarget: RenderTarget, camera: Camera): void;
    blitRenderTarget(renderTarget: RenderTarget): void;
    setRenderTargetFace(renderTarget: RenderTarget, cubeFace: TextureCubeFace): void;
    destroy(): void;
    activeTexture(textureID: number): void;
    bindTexture(target: number, texture: WebGLTexture): void;
}
