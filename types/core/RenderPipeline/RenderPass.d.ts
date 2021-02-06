import { Vector4 } from "@oasis-engine/math";
import { Camera } from "../Camera";
import { Layer } from "../Layer";
import { Material } from "../material/Material";
import { RenderTarget } from "../texture/RenderTarget";
import { RenderQueue } from "./RenderQueue";
/**
 * RednerPass.
 */
declare class RenderPass {
    name: string;
    enabled: boolean;
    priority: number;
    renderTarget: RenderTarget;
    replaceMaterial: Material;
    mask: Layer;
    renderOverride: boolean;
    clearMode: any;
    private _clearParam;
    /**
     * Create a RenderPass.
     * @param name - Pass name
     * @param priority - Priority, less than 0 before the default pass, greater than 0 after the default pass
     * @param renderTarget - The specified Render Target
     * @param replaceMaterial -  Replaced material
     * @param mask - Perform bit and operations with Entity.Layer to filter the objects that this Pass needs to render
     * @param clearParam - Clear the background color of renderTarget
     */
    constructor(name?: string, priority?: number, renderTarget?: any, replaceMaterial?: any, mask?: any, clearParam?: Vector4);
    /**
     * Canvas clear parameters, the default is to use the clearColor of RenderTarget.
     */
    get clearParam(): any;
    set clearParam(v: any);
    /**
     * Rendering callback, will be executed if renderOverride is set to true.
     * @param camera - Camera
     * @param queue - RenderQueue
     */
    render(camera: Camera, queue: RenderQueue): void;
    /**
     * Post rendering callback.
     * @param camera - Camera
     * @param queue - RenderQueue
     */
    preRender(camera: Camera, queue: RenderQueue): void;
    /**
     * Post rendering callback.
     * @param camera - Camera
     * @param queue - RenderQueue
     */
    postRender(camera: Camera, queue: RenderQueue): void;
}
export { RenderPass };
