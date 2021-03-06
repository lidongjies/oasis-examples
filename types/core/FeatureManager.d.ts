import { SceneFeature } from "./SceneFeature";
import { EngineFeature } from "./EngineFeature";
import { Scene } from "./Scene";
import { Engine } from "./Engine";
/**
 * Manage a set of feature objects.
 */
export declare class FeatureManager<T extends EngineFeature | SceneFeature> {
    private _features;
    private _objects;
    /**
     * Register a feature.
     * @param {SceneFeature|EngineFeature} Feature
     */
    registerFeature(IFeature: new () => T): void;
    /**
     * Add an feature with functional characteristics.
     * @param {Scene|Engine} obj - Scene or engine
     */
    addObject(obj: Scene | Engine): void;
    /**
     * Call the specified method of the feature.
     * @param obj - Scene or engine
     * @param method - Method name
     * @param args - Function args
     */
    callFeatureMethod(obj: Scene | Engine, method: string, args: any[]): void;
    /**
     * Find feature.
     * @param obj - Scene or engine
     * @param feature - plug-in
     */
    findFeature(obj: Scene | Engine, IFeature: new () => T): T;
}
