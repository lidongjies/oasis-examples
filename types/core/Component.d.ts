import { EngineObject } from "./base";
import { Engine } from "./Engine";
import { Entity } from "./Entity";
import { Scene } from "./Scene";
/**
 * The base class of the components.
 */
export declare abstract class Component extends EngineObject {
    private _enabled;
    private _awaked;
    /**
     * Enabled getter, 'enabled' indicates whether the component is enabled.
     */
    get enabled(): boolean;
    /**
     * Enabled setter, indicates whether the component is enabled.
     */
    set enabled(value: boolean);
    /**
     * Destroyed getter, 'destroyed' indicates whether the component is destroyed.
     */
    get destroyed(): boolean;
    /**
     * The entitiy which the component belongs to.
     */
    get entity(): Entity;
    /**
     * The scene which the component's entity belongs to.
     */
    get scene(): Scene;
    /**
     * The engine which the component's entity belongs to.
     */
    get engine(): Engine;
    constructor(entity: Entity);
    /**
     * Destory this instance.
     */
    destroy(): void;
    private _renderPriority;
    /**
     * @deprecated
     * Rendering priority.
     */
    get renderPriority(): number;
    set renderPriority(val: number);
}
