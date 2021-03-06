import { AssetPromise } from "./asset/AssetPromise";
import { Engine } from "./Engine";
import { Scene } from "./Scene";
/**
 * Scene manager.
 */
export declare class SceneManager {
    readonly engine: Engine;
    _activeScene: Scene;
    /**
     * Get the activated scene.
     */
    get activeScene(): Scene;
    set activeScene(scene: Scene);
    /**
     * Load and activate scene.
     * @param url - the path of the scene
     * @param destroyOldScene - whether to destroy old scene information
     * @returns scene promise
     */
    loadScene(url: string, destroyOldScene?: boolean): AssetPromise<Scene>;
    /**
     * Merge the source scene into the target scene.
     * @remarks the global information of destScene will be used after the merge, and the lightingMap information will be merged.
     * @param sourceScene - source scene
     * @param destScene - target scene
     */
    mergeScenes(sourceScene: Scene, destScene: Scene): void;
}
