import { Entity, Matrix, Script, Vector3 } from "oasis-engine";
/**
 * The camera's track controller, can rotate, zoom, pan, support mouse and touch events.
 */
export declare class OrbitControl extends Script {
    camera: Entity;
    domElement: HTMLElement | Document;
    mainElement: HTMLCanvasElement;
    fov: number;
    target: Vector3;
    up: Vector3;
    minDistance: number;
    maxDistance: number;
    minZoom: number;
    maxZoom: number;
    enableDamping: boolean;
    zoomFactor: number;
    enableRotate: boolean;
    keyPanSpeed: number;
    minPolarAngle: number;
    maxPolarAngle: number;
    minAzimuthAngle: number;
    maxAzimuthAngle: number;
    enableZoom: boolean;
    dampingFactor: number;
    zoomSpeed: number;
    enablePan: boolean;
    autoRotate: boolean;
    autoRotateSpeed: number;
    rotateSpeed: number;
    enableKeys: boolean;
    keys: {
        LEFT: number;
        RIGHT: number;
        UP: number;
        BOTTOM: number;
    };
    mouseButtons: {
        ORBIT: number;
        ZOOM: number;
        PAN: number;
    };
    touchFingers: {
        ORBIT: number;
        ZOOM: number;
        PAN: number;
    };
    STATE: {
        TOUCH_ROTATE: number;
        ROTATE: number;
        TOUCH_PAN: number;
        ZOOM: number;
        NONE: number;
        PAN: number;
        TOUCH_ZOOM: number;
    };
    mouseUpEvents: {
        listener: any;
        type: string;
    }[];
    constEvents: {
        listener: any;
        type: string;
        element?: Window;
    }[];
    private _position;
    private _offset;
    private _spherical;
    private _sphericalDelta;
    private _sphericalDump;
    private _zoomFrag;
    private _scale;
    private _panOffset;
    private _isMouseUp;
    private _vPan;
    private _state;
    private _rotateStart;
    private _rotateEnd;
    private _rotateDelta;
    private _panStart;
    private _panEnd;
    private _panDelta;
    private _zoomStart;
    private _zoomEnd;
    private _zoomDelta;
    private _oriTarget;
    constructor(entity: Entity);
    onDisable(): void;
    onDestroy(): void;
    onUpdate(dtime: any): void;
    /**
     * Get the radian of automatic rotation.
     */
    getAutoRotationAngle(dtime: number): number;
    /**
     * Get zoom value.
     */
    getZoomScale(): number;
    /**
     * Rotate to the left by a certain randian.
     * @param radian - Radian value of rotation
     */
    rotateLeft(radian: number): void;
    /**
     * Rotate to the right by a certain randian.
     * @param radian - Radian value of rotation
     */
    rotateUp(radian: number): void;
    /**
     * Pan left.
     */
    panLeft(distance: number, worldMatrix: Matrix): void;
    /**
     * Pan right.
     */
    panUp(distance: number, worldMatrix: Matrix): void;
    /**
     * Pan.
     * @param deltaX - The amount of translation from the screen distance in the x direction
     * @param deltaY - The amount of translation from the screen distance in the y direction
     */
    pan(deltaX: number, deltaY: number): void;
    /**
     * Zoom in.
     */
    zoomIn(zoomScale: number): void;
    /**
     * Zoom out.
     */
    zoomOut(zoomScale: number): void;
    /**
     * Rotation parameter update on mouse click.
     */
    handleMouseDownRotate(event: any): void;
    /**
     * Zoom parameter update on mouse click.
     */
    handleMouseDownZoom(event: any): void;
    /**
     * Pan parameter update on mouse click.
     */
    handleMouseDownPan(event: any): void;
    /**
     * Rotation parameter update when the mouse moves.
     */
    handleMouseMoveRotate(event: any): void;
    /**
     * Zoom parameters update when the mouse moves.
     */
    handleMouseMoveZoom(event: any): void;
    /**
     * Pan parameters update when the mouse moves.
     */
    handleMouseMovePan(event: MouseEvent): void;
    /**
     * Zoom parameter update when the mouse wheel is scrolled.
     */
    handleMouseWheel(event: MouseWheelEvent): void;
    /**
     * Pan parameter update when keyboard is pressed.
     */
    handleKeyDown(event: KeyboardEvent): void;
    /**
     * Rotation parameter update when touch is dropped.
     */
    handleTouchStartRotate(event: TouchEvent): void;
    /**
     * Zoom parameter update when touch down.
     */
    handleTouchStartZoom(event: TouchEvent): void;
    /**
     * Update the translation parameter when touch down.
     */
    handleTouchStartPan(event: TouchEvent): void;
    /**
     * Rotation parameter update when touch to move.
     */
    handleTouchMoveRotate(event: TouchEvent): void;
    /**
     * Zoom parameter update when touch to move.
     */
    handleTouchMoveZoom(event: any): void;
    /**
     * Pan parameter update when touch moves.
     */
    handleTouchMovePan(event: TouchEvent): void;
    /**
     * Total handling of mouse down events.
     */
    onMouseDown(event: MouseEvent): void;
    /**
     * Total handling of mouse movement events.
     */
    onMouseMove(event: MouseEvent): void;
    /**
     * Total handling of mouse up events.
     */
    onMouseUp(): void;
    /**
     * Total handling of mouse wheel events.
     */
    onMouseWheel(event: MouseWheelEvent): void;
    /**
     * Total handling of keyboard down events.
     */
    onKeyDown(event: KeyboardEvent): void;
    /**
     * Total handling of touch start events.
     */
    onTouchStart(event: TouchEvent): void;
    /**
     * Total handling of touch movement events.
     */
    onTouchMove(event: TouchEvent): void;
    /**
     * Total handling of touch end events.
     */
    onTouchEnd(): void;
    /**
     * Context event hiding.
     */
    onContextMenu(event: any): void;
}
