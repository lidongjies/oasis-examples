import { SceneFeature } from "../SceneFeature";
import { Light } from "./Light";
/**
 * Determine whether there are lights in the scene.
 * @returns Has light
 */
export declare function hasLight(): boolean;
/**
 * Light plug-in.
 */
export declare class LightFeature extends SceneFeature {
    private static _ambientMacro;
    private static _envMacro;
    visibleLights: Light[];
    constructor();
    /**
     * Register a light object to the current scene.
     * @param light
     */
    attachRenderLight(light: Light): void;
    /**
     * Remove a light object from the current scene.
     * @param light
     */
    detachRenderLight(light: Light): void;
}
