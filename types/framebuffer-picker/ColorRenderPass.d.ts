import { Camera, Engine, Layer, RenderPass, RenderTarget } from "oasis-engine";
/**
 * Color render Pass, used to render marker.
 */
declare class ColorRenderPass extends RenderPass {
    private _needPick;
    private onPick;
    private _pickPos;
    constructor(name: string, priority: number, renderTarget: RenderTarget, mask: Layer, engine?: Engine);
    /**
     * Determine whether need to render pass, reset state.
     * @override
     */
    preRender(camera: any, queue: any): void;
    /**
     * Determine whether to pick up.
     * @override
     */
    postRender(camera: Camera, queue: any): void;
    /**
     * Pick up coordinate pixels.
     */
    pick(x: number, y: number): void;
    /**
     * Get pixel color value from framebuffer.
     */
    readColorFromRenderTarget(camera: Camera): Uint8Array;
}
export { ColorRenderPass };
