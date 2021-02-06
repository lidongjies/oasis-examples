import { Camera } from "./Camera";
import { Scene } from "./Scene";
/**
 * Scene feature plug-in.
 * @deprecated
 */
export declare abstract class SceneFeature {
    /**
     * Callback before every scene update.
     * @param scene - Scene
     */
    preUpdate(scene: Scene): void;
    /**
     * Callback after every scene update.
     * @param scene - Scene
     */
    postUpdate(scene: Scene): void;
    /**
     * Callback before scene rendering.
     * @param scene - Scene
     * @param camera - Camera
     */
    preRender(scene: Scene, camera: Camera): void;
    /**
     * Callback after scene rendering.
     * @param scene - Scene
     * @param camera - Camera
     */
    postRender(scene: Scene, camera: Camera): void;
    /**
     * Callback after the scene is destroyed.
     * @param scene - Scene
     */
    destroy(scene: Scene): void;
}
