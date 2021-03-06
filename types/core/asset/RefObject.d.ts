import { EngineObject } from "../base/EngineObject";
import { Engine } from "../Engine";
import { IRefObject } from "./IRefObject";
/**
 * The base class of assets, with reference counting capability.
 */
export declare abstract class RefObject extends EngineObject implements IRefObject {
    /** Whether to ignore the garbage collection check, if it is true, it will not be affected by ResourceManager.gc(). */
    isGCIgnored: boolean;
    private _refCount;
    private _destroyed;
    /**
     * Counted by valid references.
     */
    get refCount(): number;
    /**
     * Whether it has been destroyed.
     */
    get destroyed(): boolean;
    protected constructor(engine: Engine);
    /**
     * Destroy self.
     * @param force - Whether to force the destruction, if it is fasle, refCount = 0 can be released successfully.
     * @returns Whether the release was successful.
     */
    destroy(force?: boolean): boolean;
    /**
     * Called when the resource is destroyed.
     * Subclasses can override this function.
     */
    protected abstract _onDestroy(): void;
}
