import { Engine } from "../Engine";
/**
 * EngineObject.
 */
export declare abstract class EngineObject {
    private static _instanceIdCounter;
    /** Engine unique id. */
    readonly instanceId: number;
    /** Engine to which the object belongs. */
    protected _engine: Engine;
    constructor(engine: Engine);
}
