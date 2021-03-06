import { Matrix, Ray, Vector2, Vector3, Vector4 } from "@oasis-engine/math";
import { ClearMode } from "./base";
import { Component } from "./Component";
import { Entity } from "./Entity";
import { Layer } from "./Layer";
import { ShaderData } from "./shader/ShaderData";
import { TextureCubeFace } from "./texture/enums/TextureCubeFace";
import { RenderTarget } from "./texture/RenderTarget";
/**
 * @todo
 */
declare type Sky = {};
/**
 * ClearFlag, which controls camera's background.
 */
export declare enum ClearFlags {
    DepthSky = 0,
    DepthColor = 1,
    Depth = 2,
    None = 3
}
/**
 * Camera component, as the entrance to the three-dimensional world.
 */
export declare class Camera extends Component {
    private static _viewMatrixProperty;
    private static _projectionMatrixProperty;
    private static _vpMatrixProperty;
    private static _inverseViewMatrixProperty;
    private static _inverseProjectionMatrixProperty;
    private static _cameraPositionProperty;
    /** Rendering priority - A Camera with higher priority will be rendererd on top of a camera with lower priority. */
    priority: number;
    /** Whether to enable frustum culling, it is enabled by default. */
    enableFrustumCulling: boolean;
    /**
     * Culling mask - which layers the camera renders.
     * @remarks Support bit manipulation, conresponding to Entity's layer.
     */
    cullingMask: Layer;
    /** Shader data. */
    readonly shaderData: ShaderData;
    private _isOrthographic;
    private _isProjMatSetting;
    private _clearMode;
    private _nearClipPlane;
    private _farClipPlane;
    private _fieldOfView;
    private _orthographicSize;
    private _isProjectionDirty;
    private _isInvProjMatDirty;
    private _isFrustumProjectDirty;
    private _customAspectRatio;
    private _renderTarget;
    private _frustumViewChangeFlag;
    private _transform;
    private _isViewMatrixDirty;
    private _isInvViewProjDirty;
    private _projectionMatrix;
    private _viewMatrix;
    private _backgroundColor;
    private _viewport;
    private _inverseProjectionMatrix;
    private _inverseViewMatrix;
    private _lastAspectSize;
    private _invViewProjMat;
    /**
     * Near clip plane - the cloest point to the camera when rendering occurs.
     */
    get nearClipPlane(): number;
    set nearClipPlane(value: number);
    /**
     * Far clip plane - the furthest point to the camera when rendering occurs.
     */
    get farClipPlane(): number;
    set farClipPlane(value: number);
    /**
     * The camera's view angle. activing when camera use perspective projection.
     */
    get fieldOfView(): number;
    set fieldOfView(value: number);
    /**
     * Aspect ratio. The default is automatically calculated by the viewport's aspect ratio. If it is manually set, the manual value will be kept. Call resetAspectRatio() to restore it.
     */
    get aspectRatio(): number;
    set aspectRatio(value: number);
    /**
     * Viewport, normalized expression, the upper left corner is (0, 0), and the lower right corner is (1, 1).
     * @remarks Re-assignment is required after modification to ensure that the modification takes effect.
     */
    get viewport(): Vector4;
    set viewport(value: Vector4);
    /**
     * Whether it is orthogonal, the default is false. True will use orthographic projection, false will use perspective projection.
     */
    get isOrthographic(): boolean;
    set isOrthographic(value: boolean);
    /**
     * Half the size of the camera in orthographic mode.
     */
    get orthographicSize(): number;
    set orthographicSize(value: number);
    /**
     * Clear background flags.
     */
    get clearFlags(): ClearFlags;
    /**
     * @todo Skybox refactor
     */
    set clearFlags(value: ClearFlags);
    /**
     * Clear the background color of the viewport, which takes effect when clearFlags is DepthColor.
     */
    get backgroundColor(): Vector4;
    set backgroundColor(value: Vector4);
    /**
     * Clear the background sky of the viewport, active when clearFlags is DepthSky.
     * @todo Render pipeline modification
     */
    get backgroundSky(): Sky;
    /**
     * View matrix.
     */
    get viewMatrix(): Readonly<Matrix>;
    /**
     * The projection matrix is ​​calculated by the relevant parameters of the camera by default. If it is manually set, the manual value will be maintained. Call resetProjectionMatrix() to restore it.
     */
    set projectionMatrix(value: Matrix);
    get projectionMatrix(): Matrix;
    /**
     * Whether to enable HDR.
     * @todo When render pipeline modification
     */
    get enableHDR(): boolean;
    set enableHDR(value: boolean);
    /**
     * RenderTarget. After setting, it will be rendered to the renderTarget. If it is empty, it will be rendered to the main canvas.
     */
    get renderTarget(): RenderTarget | null;
    set renderTarget(value: RenderTarget | null);
    /**
     * Create the Camera component.
     * @param entity - Entity
     */
    constructor(entity: Entity);
    /**
     * Restore the automatic calculation of projection matrix through fieldOfView, nearClipPlane and farClipPlane.
     */
    resetProjectionMatrix(): void;
    /**
     * Restore the automatic calculation of the aspect ratio through the viewport aspect ratio.
     */
    resetAspectRatio(): void;
    /**
     * Transform a point from world space to viewport space.
     * @param point - Point in world space
     * @param out - A point in the viewport space, X and Y are the viewport space coordinates, Z is the viewport depth, the near clipping plane is 0, the far clipping plane is 1, and W is the world unit distance from the camera
     * @returns Point in viewport space
     */
    worldToViewportPoint(point: Vector3, out: Vector4): Vector4;
    /**
     * Transform a point from viewport space to world space.
     * @param point - Point in viewport. X and Y are the viewport space coordinates, Z is the viewport depth. The near clipping plane is 0, and the far clipping plane is 1.
     * @param out - Point in world space
     * @returns Point in world space
     */
    viewportToWorldPoint(point: Vector3, out: Vector3): Vector3;
    /**
     * Generate a ray by a point in viewport.
     * @param point Point in viewport point.
     * @param out - Ray
     * @returns Ray
     */
    viewportPointToRay(point: Vector2, out: Ray): Ray;
    /**
     * Transform the X and Y coordinates of a point from screen space to viewport space
     * @param point - Point in screen space
     * @param out - Point in viewport space
     * @returns Point in viewport space
     */
    screenToViewportPoint<T extends Vector2 | Vector3>(point: Vector3 | Vector2, out: T): T;
    /**
     * Transform the X and Y coordinates of a point from viewport space to screen space.
     * @param point - Point in viewport space
     * @param out - Point in screen space
     * @returns Point in screen space
     */
    viewportToScreenPoint<T extends Vector2 | Vector3 | Vector4>(point: T, out: T): T;
    /**
     * Transform a point from world space to screen space.
     * @param point - Point in world space
     * @param out - Point of screen space
     * @returns Point of screen space
     */
    worldToScreenPoint(point: Vector3, out: Vector4): Vector4;
    /**
     * Transform a point from screen space to world space.
     * @param point - Screen space point
     * @param out - Point in world space
     * @returns Point in world space
     */
    screenToWorldPoint(point: Vector3, out: Vector3): Vector3;
    /**
     * Manually call the rendering of the camera.
     * @param cubeFace - Cube rendering surface collection
     */
    render(cubeFace?: TextureCubeFace): void;
    /**
     * @override
     * @inheritdoc
     */
    _onActive(): void;
    /**
     * @override
     * @inheritdoc
     */
    _onInActive(): void;
    /**
     * @override
     * @inheritdoc
     */
    _onDestroy(): void;
    private _projMatChange;
    private _innerViewportToWorldPoint;
    private _updateShaderData;
    /**
     * @private
     * The inverse matrix of view projection matrix.
     */
    get invViewProjMat(): Matrix;
    /**
     * @private
     * The inverse of the projection matrix.
     */
    get inverseProjectionMatrix(): Readonly<Matrix>;
    /**
     * @deprecated
     * View matrix inverse matrix.
     */
    get inverseViewMatrix(): Readonly<Matrix>;
    /**
     * @deprecated
     * @todo Involving the rendering pipeline to modify the rhi.clearRenderTarget method.
     * @param clearMode
     * @param backgroundColor
     */
    setClearMode(clearMode?: ClearMode, backgroundColor?: Vector4): void;
}
export {};
