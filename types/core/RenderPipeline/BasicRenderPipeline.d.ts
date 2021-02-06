import { Vector4 } from "@oasis-engine/math";
import { Camera } from "../Camera";
import { Component } from "../Component";
import { Layer } from "../Layer";
import { Material } from "../material/Material";
import { TextureCubeFace } from "../texture/enums/TextureCubeFace";
import { RenderTarget } from "../texture/RenderTarget";
import { RenderContext } from "./RenderContext";
import { RenderElement } from "./RenderElement";
import { RenderPass } from "./RenderPass";
import { RenderQueue } from "./RenderQueue";
/**
 * Basic render pipeline.
 */
export declare class BasicRenderPipeline {
    _defaultSpriteMaterial: Material;
    protected _camera: Camera;
    private _queue;
    private _defaultPass;
    protected _renderPassArray: Array<RenderPass>;
    private _canvasDepthPass;
    private _separateSpritePass;
    /**
     * Create a basic render pipeline.
     * @param camera - Camera
     */
    constructor(camera: Camera);
    /**
     * Default render pass.
     */
    get defaultRenderPass(): RenderPass;
    /**
     * Add render pass.
     * @param nameOrPass - The name of this Pass or RenderPass object. When it is a name, the following parameters need to be provided
     * @param priority - Priority, less than 0 before the default pass, greater than 0 after the default pass
     * @param renderTarget - The specified Render Target
     * @param replaceMaterial -  Replaced material
     * @param mask - Perform bit and operations with Entity.Layer to filter the objects that this Pass needs to render
     * @param clearParam - Clear the background color of renderTarget
     */
    addRenderPass(nameOrPass: string | RenderPass, priority?: number, renderTarget?: RenderTarget, replaceMaterial?: Material, mask?: Layer, clearParam?: Vector4): void;
    /**
     * Remove render pass by name or render pass object.
     * @param nameOrPass - Render pass name or render pass object
     */
    removeRenderPass(nameOrPass: string | RenderPass): void;
    /**
     * Get render pass by name.
     * @param  name - Render pass name
     */
    getRenderPass(name: string): RenderPass;
    /**
     * Render queue.
     */
    get queue(): RenderQueue;
    /**
     * Destroy internal resources.
     */
    destroy(): void;
    /**
     * Perform scene rendering.
     * @param context - Render context
     * @param cubeFace - Render surface of cube texture
     */
    render(context: RenderContext, cubeFace?: TextureCubeFace): void;
    private _drawRenderPass;
    /**
     * Push a render element to the render queue.
     * @param element - Render element
     */
    pushPrimitive(element: RenderElement): void;
    pushSprite(component: Component, positionQuad: any, uvRect: any, tintColor: any, texture: any, renderMode: any, camera: Camera): void;
}
