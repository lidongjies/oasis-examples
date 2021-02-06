import { EngineFeature, Engine, Scene } from "oasis-engine";
/**
 * Engine Feature: Display engine status data such as FPS.
 */
export declare class Stats extends EngineFeature {
    private monitor;
    /**
     * Constructor of Stats.
     */
    constructor();
    /**
     * Tick pre-callback.
     */
    preTick(engine: Engine, currentScene: Scene): void;
    /**
     * Tick post-callback.
     */
    postTick(engine: Engine, currentScene: Scene): void;
}
