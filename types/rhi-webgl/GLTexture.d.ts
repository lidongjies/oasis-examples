import { Texture } from "@oasis-engine/core";
import { WebGLRenderer } from "./WebGLRenderer";
/**
 * @private
 */
export declare class GLTexture {
    protected _gl: any;
    private _glTexture;
    protected _config: Texture;
    protected _type: any;
    constructor(rhi: WebGLRenderer, config: Texture, type: any);
    get glTexture(): WebGLTexture;
    activeBinding(textureIndex: any): void;
    /**
     * Release gl resource.
     * @private
     */
    finalize(): void;
}
