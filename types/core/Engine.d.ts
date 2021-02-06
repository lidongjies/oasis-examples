import { ResourceManager } from "./asset/ResourceManager";
import { EventDispatcher, Time } from "./base";
import { Canvas } from "./Canvas";
import { ComponentsManager } from "./ComponentsManager";
import { EngineFeature } from "./EngineFeature";
import { Entity } from "./Entity";
import { HardwareRenderer } from "./HardwareRenderer";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";
import { RenderState } from "./shader/state/RenderState";
/**
 * Engine.
 */
export declare class Engine extends EventDispatcher {
    _componentsManager: ComponentsManager;
    _hardwareRenderer: HardwareRenderer;
    _lastRenderState: RenderState;
    protected _canvas: Canvas;
    private _resourceManager;
    private _sceneManager;
    private _vSyncCount;
    private _targetFrameRate;
    private _time;
    private _isPaused;
    private _requestId;
    private _timeoutId;
    private _vSyncCounter;
    private _targetFrameInterval;
    private _animate;
    /**
     * The canvas to use for rendering.
     * @readonly
     */
    get canvas(): Canvas;
    /**
     * Get the resource manager.
     * @readonly
     */
    get resourceManager(): ResourceManager;
    /**
     * Get the scene manager.
     * @readonly
     */
    get sceneManager(): SceneManager;
    /**
     * Get the Time class.
     * @readonly
     */
    get time(): Time;
    /**
     * Whether the engine is paused.
     * @readonly
     */
    get isPaused(): boolean;
    /**
     * The number of vertical synchronization means the number of vertical blanking for one frame.
     * @remarks 0 means that the vertical synchronization is turned off.
     */
    get vSyncCount(): number;
    set vSyncCount(value: number);
    /**
     * Set the target frame rate you want to achieve.
     * @remarks
     * It only takes effect when vSyncCount = 0 (ie, vertical synchronization is turned off).
     * The larger the value, the higher the target frame rate, Number.POSITIVE_INFINIT represents the infinite target frame rate.
     */
    get targetFrameRate(): number;
    set targetFrameRate(value: number);
    /**
     * Graphics API renderer.
     * @deprecated
     */
    get renderhardware(): HardwareRenderer;
    /**
     * Create engine.
     * @param canvas - The canvas to use for rendering
     * @param hardwareRenderer - Graphics API renderer
     */
    constructor(canvas: Canvas, hardwareRenderer: HardwareRenderer);
    /**
     * Create an entity.
     * @param name - The name of the entity
     * @returns Entity
     */
    createEntity(name?: string): Entity;
    /**
     * Pause the engine.
     */
    pause(): void;
    /**
     * Resume the engine.
     */
    resume(): void;
    /**
     * Update the engine loop manually. If you call engine.run(), you generally don't need to call this function.
     */
    update(): void;
    /**
     * Execution engine loop.
     */
    run(): void;
    /**
     * Destroy engine.
     */
    destroy(): void;
    _render(scene: Scene): void;
    findFeature(Feature: any): EngineFeature;
    static registerFeature(Feature: new () => EngineFeature): void;
    features: EngineFeature[];
}
