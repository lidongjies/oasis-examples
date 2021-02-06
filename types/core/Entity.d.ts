import { Matrix, Quaternion, Vector3 } from "@oasis-engine/math";
import { EngineObject } from "./base";
import { Component } from "./Component";
import { Engine } from "./Engine";
import { Layer } from "./Layer";
import { Scene } from "./Scene";
import { Transform } from "./Transform";
/**
 * Entity, be used as components container.
 */
export declare class Entity extends EngineObject {
    private static _entitys;
    /**
     * Find entity globally by name.
     * @param name - The name of the entity which want to be finded.
     * @returns The entity which be finded.
     */
    static findByName(name: string): Entity;
    /**
     * Find entity globally by path, use the ‘/’ symbol as the path separator.
     * @deprecated Use scene find by path instead.
     * @param scene - The scene be finded in.
     * @param path - The path fo the entity eg: /root/entity.
     * @returns The entity which be finded.
     */
    static findByPath(scene: Scene, path: string): Entity | null;
    name: string;
    /** The layer the entity belongs to. */
    layer: Layer;
    readonly transform: Transform;
    private _parent;
    private _activeChangedComponents;
    /**
     * Whether to activate locally.
     */
    get isActive(): boolean;
    set isActive(value: boolean);
    /**
     * Whether it is active in the hierarchy.
     */
    get isActiveInHierarchy(): boolean;
    /**
     * The parent entity.
     */
    get parent(): Entity;
    set parent(entity: Entity);
    /**
     * The children entities
     */
    get children(): Readonly<Entity[]>;
    /**
     * Number of the children entities
     */
    get childCount(): number;
    /**
     * The scene the entity belongs to.
     */
    get scene(): Scene;
    /**
     * The engine the entity belongs to.
     */
    get engine(): Engine;
    /**
     * Create a entity.
     * @param engine - The engine the entity belongs to.
     */
    constructor(engine: Engine, name?: string);
    /**
     * Add component based on the component type.
     * @param type - The type of the component.
     * @returns	The component which has been added.
     */
    addComponent<T extends Component>(type: new (entity: Entity) => T): T;
    /**
     * Get component which match the type.
     * @param type - The type of the component.
     * @returns	The first component which match type.
     */
    getComponent<T extends Component>(type: new (entity: Entity) => T): T;
    /**
     * Get components which match the type.
     * @param type - The type of the component.
     * @param results - The components which match type.
     * @returns	The components which match type.
     */
    getComponents<T extends Component>(type: new (entity: Entity) => T, results: T[]): T[];
    /**
     * Get the components which match the type of the entity and it's children.
     * @param type - The component type.
     * @param results - The components collection.
     * @returns	The components collection which match the type.
     */
    getComponentsIncludeChildren<T extends Component>(type: new (entity: Entity) => T, results: T[]): T[];
    /**
     * Add child entity.
     * @param child - The child entity which want to be added.
     */
    addChild(child: Entity): void;
    /**
     * Remove child entitiy.
     * @param child - The child entity which want to be removed.
     */
    removeChild(child: Entity): void;
    /**
     * Find child entity by index.
     * @param index - The index of the child entity.
     * @returns	The component which be finded.
     */
    getChild(index: number): Entity;
    /**
     * Find child entity by name.
     * @param name - The name of the entity which want to be finded.
     * @returns The component which be finded.
     */
    findByName(name: string): Entity;
    /**
     * Find the entity by path.
     * @param path - The path fo the entity eg: /entity.
     * @returns The component which be finded.
     */
    findByPath(path: string): Entity;
    /**
     * Create child entity.
     * @param name - The child entity's name.
     * @returns The child entity.
     */
    createChild(name?: string): Entity;
    /**
     * Clear children entities.
     */
    clearChildren(): void;
    /**
     * Clone
     * @returns Cloned entity.
     */
    clone(): Entity;
    /**
     * Destroy self.
     */
    destroy(): void;
    private _getComponentsInChildren;
    private _setActiveComponents;
    private _setActiveInHierarchy;
    private _setInActiveInHierarchy;
    private _setTransformDirty;
    private _invModelMatrix;
    private _inverseWorldMatFlag;
    /**
     * @deprecated
     * Use transform.position instead.
     */
    get position(): Vector3;
    set position(val: Vector3);
    /**
     * @deprecated
     * Use transform.worldPosition instead.
     */
    get worldPosition(): Vector3;
    set worldPosition(val: Vector3);
    /**
     * @deprecated
     * Use transform.rotationQuaternion instead.
     */
    get rotation(): Quaternion;
    set rotation(val: Quaternion);
    /**
     * @deprecated
     * Use transform.scale instead.
     */
    get scale(): Vector3;
    set scale(val: Vector3);
    /**
     * @deprecated
     */
    getInvModelMatrix(): Matrix;
}
