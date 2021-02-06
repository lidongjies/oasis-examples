import { BoundingBox } from "@oasis-engine/math";
import { Camera } from "./Camera";
import { Component } from "./Component";
import { ShaderData } from "./shader/ShaderData";
/**
 * Renderable components.
 */
export declare abstract class Renderer extends Component {
    private static _localMatrixProperty;
    private static _worldMatrixProperty;
    private static _mvMatrixProperty;
    private static _mvpMatrixProperty;
    private static _mvInvMatrixProperty;
    private static _normalMatrixProperty;
    /** ShaderData related to renderer. */
    readonly shaderData: ShaderData;
    /** Whether it is clipped by the frustum, needs to be turned on camera.enableFrustumCulling。 */
    isCulled: boolean;
    protected _overrideUpdate: boolean;
    private _transformChangeFlag;
    private _bounds;
    private _mvMatrix;
    private _mvpMatrix;
    private _mvInvMatrix;
    private _normalMatrix;
    get bounds(): BoundingBox;
    abstract render(camera: Camera): void;
    update(deltaTime: number): void;
    protected _updateBounds(worldBounds: any): void;
    _onEnable(): void;
    _onDisable(): void;
    _render(camera: Camera): void;
}
