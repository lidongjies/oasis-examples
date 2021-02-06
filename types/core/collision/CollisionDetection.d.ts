import { BoundingBox, Vector3 } from "@oasis-engine/math";
import { Event } from "../base/Event";
import { EventDispatcher } from "../base/EventDispatcher";
import { Script } from "../Script";
/**
 * Detect collisions between the Collider on the current entity and other Colliders in the scene.
 */
export declare class CollisionDetection extends Script {
    private static _tempVec3;
    private static _tempBox1;
    private static _tempBox2;
    private _colliderManager;
    private _myCollider;
    private _overlopCollider;
    private _sphere;
    private _box;
    /**
     * Constructor of the colliseion detection.
     * @param entity - Entity to which the colliseion detection belong
     */
    constructor(entity: any);
    /**
     * The collider that intersects with the collider on the current Entity.
     */
    get overlopCollider(): any;
    /**
     * When every frame is updated, calculate the collision with other collider.
     */
    onUpdate(deltaTime: any): void;
    /**
     * Calculate the boundingbox in world space from boxCollider.
     * @param boxCollider - The boxCollider to calculate
     * @param out - The caclulated boundingBox
     */
    _updateWorldBox(boxCollider: any, out: BoundingBox): void;
    /**
     * Get the sphere info of the given sphere collider in world space.
     * @param sphereCollider - The given sphere collider
     */
    _getWorldSphere(sphereCollider: any): {
        radius: any;
        center: Vector3;
    };
    /**
     * Collider and another collider do collision detection.
     * @param other - The another collider to collision detection
     */
    _boxCollision(other: any): boolean;
    /**
     * Collider and another collider do collision detection.
     * @param other - The another collider to collision detection
     */
    _sphereCollision(other: any): boolean;
    onAwake(): void;
    /**
     * Determine whether there is event monitoring.
     * @param event - The event name
     * @returns True if there is event monitoring, false otherwise
     */
    hasEvent: (event: string) => boolean;
    /**
     * Return all registered event names.
     * @returns all registered event names
     */
    eventNames: () => string[];
    /**
     * Returns the number of listener functions with the specified event name.
     * @param event - The event name
     * @returns the number of listener functions with the specified event name
     */
    listenerCount: (event: string) => number;
    /**
     * Dispatch the event with the specified event name.
     * @param event - The event name
     * @param data - The data to dispatch
     * @returns True if the dispatch is success, false otherwise
     */
    dispatch: (event: string, data?: any) => boolean;
    /**
     * Add a listener function.
     * @param event - The event name
     * @param fn - The function to add
     * @returns This
     */
    on: (event: string, fn: Function) => EventDispatcher;
    /**
     * Add a listener function that just call once.
     * @param event - The event name
     * @param fn - The function to add
     * @returns This
     */
    once: (event: string, fn: Function) => EventDispatcher;
    /**
     * @deprecated Replace with on/once.
     */
    addEventListener: (event: string, fn: Function, once?: boolean) => EventDispatcher;
    off: (event: string, fn?: Function) => EventDispatcher;
    /**
     * @deprecated Replace with off.
     */
    removeEventListener: (event: string, fn?: Function) => EventDispatcher;
    /**
     * Remove all event listeners.
     * @param event - The event name, delete all events if not passed
     */
    removeAllEventListeners: (event?: string) => void;
    /**
     * @deprecated Replace with dispatch.
     */
    trigger: (e: Event) => void;
    _clearEvent: (event: string) => void;
}
