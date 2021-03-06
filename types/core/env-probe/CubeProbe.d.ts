import { Vector3 } from "@oasis-engine/math";
import { Camera } from "../Camera";
import { Probe } from "./Probe";
/**
 * Cube probe, generate cubeTexture, used for dynamic environment reflection and other effects.
 */
export declare class CubeProbe extends Probe {
    /**
     * The position of the probe can be set, the default is the origin [0,0,0].
     */
    position: Vector3;
    /**
     * @override
     */
    protected readonly _isCube: boolean;
    private oriViewMatrix;
    private _oriFieldOfView;
    /**
     * @override
     */
    onBeginRender(camera: Camera): void;
    /**
     * Store original camera parameters.
     */
    private _storeCamera;
    /**
     * Restore camera parameters.
     */
    private _restoreCamera;
    /**
     * Set camera parameters according to the rendering surface.
     */
    private _setCamera;
}
