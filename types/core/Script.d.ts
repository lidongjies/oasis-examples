import { Camera } from "./Camera";
import { Component } from "./Component";
/**
 * Script class, used for logic writing.
 */
export declare class Script extends Component {
    /**
     * Called when be enabled first time, only once.
     */
    onAwake(): void;
    /**
     * Called when be enabled.
     */
    onEnable(): void;
    /**
     * Called before the frame-level loop start for the first time, only once.
     */
    onStart(): void;
    /**
     * The main loop, called frame by frame.
     * @param deltaTime - The deltaTime when the script update.
     */
    onUpdate(deltaTime: number): void;
    /**
     * Called after the onUpdate finished, called frame by frame.
     * @param deltaTime - The deltaTime when the script update.
     */
    onLateUpdate(deltaTime: number): void;
    /**
     * Called before camera rendering, called per camera.
     * @param camera - Current camera.
     */
    onBeginRender(camera: Camera): void;
    /**
     * Called after camera rendering, called per camera.
     * @param camera - Current camera.
     */
    onEndRender(camera: Camera): void;
    /**
     * Called when be diabled.
     */
    onDisable(): void;
    /**
     * Called at the end of the destroyed frame.
     */
    onDestroy(): void;
}
