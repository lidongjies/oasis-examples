import { Vector3, Vector4 } from "@oasis-engine/math";
import { EngineObject } from "./base";
import { Camera } from "./Camera";
import { Engine } from "./Engine";
import { Entity } from "./Entity";
import { FeatureManager } from "./FeatureManager";
import { Layer } from "./Layer";
import { SceneFeature } from "./SceneFeature";
import { ShaderData } from "./shader/ShaderData";
/**
 * Scene.
 */
export declare class Scene extends EngineObject {
    private static _resolutionProperty;
    static sceneFeatureManager: FeatureManager<SceneFeature>;
    /** scene-related shaderdata  */
    readonly shaderData: ShaderData;
    /** scene name */
    name: string;
    /**
     * @private
     * @deprecated
     * @todo: Migrate to camera
     * Clipping surface, plane equations. The fragments below the clipping plane will be discard.
     * @example
     * ```ts
     * scene.clipPlanes = [[0,1,0,0]];
     * ```
     * */
    clipPlanes: Vector4[];
    _activeCameras: Camera[];
    _isActiveInEngine: boolean;
    private _destroyed;
    private _rootEntities;
    private _resolution;
    /**
     * Get the scene's engine.
     * @readonly
     */
    get engine(): Engine;
    /**
     * Count of root entities.
     * @readonly
     */
    get rootEntitiesCount(): number;
    /**
     * Root entity collection.
     * @readonly
     */
    get rootEntities(): Readonly<Entity[]>;
    /**
     * Whether it's destroyed.
     * @readonly
     */
    get destroyed(): boolean;
    /**
     * Create scene.
     * @param engine - Engine
     * @param name - Name
     */
    constructor(engine: Engine, name?: string);
    /**
     * Create root entity.
     * @param name - Entity name
     * @returns Entity
     */
    createRootEntity(name?: string): Entity;
    /**
     * Append an entity.
     * @param entity - The root entity to add
     */
    addRootEntity(entity: Entity): void;
    /**
     * Remove an entity.
     * @param entity - The root entity to remove
     */
    removeRootEntity(entity: Entity): void;
    /**
     * Get root entity from index.
     * @param index - Index
     * @returns Entity
     */
    getRootEntity(index?: number): Entity | null;
    /**
     * Find entity globally by name.
     * @param name - Entity name
     * @returns Entity
     */
    findEntityByName(name: string): Entity | null;
    /**
     * Find entity globally by name,use ‘/’ symbol as a path separator.
     * @param path - Entity's path
     * @returns Entity
     */
    findEntityByPath(path: string): Entity | null;
    /**
     * Destroy this scene.
     */
    destroy(): void;
    /**
     * Append a camera to this scene.
     * @param camera  - Camera
     */
    attachRenderCamera(camera: Camera): void;
    /**
     * Remove a camera from this scene.
     * @param camera - Camera
     */
    detachRenderCamera(camera: Camera): void;
    private _removeEntity;
    static registerFeature(Feature: new () => SceneFeature): void;
    findFeature<T extends SceneFeature>(Feature: {
        new (): T;
    }): T;
    features: SceneFeature[];
    /**
     * Raycast.
     * @deprecated
     * @param ray
     */
    raycast(ray: {
        origin: Vector3;
        direction: Vector3;
    }, outPos?: Vector3, tag?: Layer): any;
}
