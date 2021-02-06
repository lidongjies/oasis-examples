import { Camera, Entity, RenderTarget, Script } from "oasis-engine";
import { ColorRenderPass } from "./ColorRenderPass";
/**
 * Framebuffer picker.
 * @remarks Can pick up renderer at pixel level.
 */
export declare class FramebufferPicker extends Script {
    colorRenderTarget: RenderTarget;
    colorRenderPass: ColorRenderPass;
    private _camera;
    private _needPick;
    private _pickPos;
    /**
     * Camera.
     */
    get camera(): Camera;
    set camera(value: Camera);
    constructor(entity: Entity);
    /**
     * Set the callback function after pick up.
     * @param {Function} fun Callback function. if there is an renderer selected, the parameter 1 is {component, primitive }, otherwise it is undefined
     */
    set onPick(fun: Function);
    /**
     * Pick the object at the screen coordinate position.
     * @param offsetX Relative X coordinate of the canvas
     * @param offsetY Relative Y coordinate of the canvas
     */
    pick(offsetX: number, offsetY: number): void;
    onUpdate(deltaTime: number): void;
    onDestroy(): void;
}
