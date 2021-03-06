import { Canvas } from "@oasis-engine/core";
import { Vector2 } from "@oasis-engine/math";
/**
 * The canvas used on the web, which can support HTMLCanvasElement and OffscreenCanvas.
 */
export declare class WebCanvas implements Canvas {
    _webCanvas: HTMLCanvasElement | OffscreenCanvas;
    private _width;
    private _height;
    private _scale;
    /**
     * @inheritdoc
     */
    get width(): number;
    set width(value: number);
    /**
     * @inheritdoc
     */
    get height(): number;
    set height(value: number);
    /**
     * The scale of canvas, the value is visible width/height divide the render width/height.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */
    get scale(): Vector2;
    set scale(value: Vector2);
    /**
     * Resize the rendering size according to the clientWidth and clientHeight of the canvas.
     * @param pixelRatio - Pixel ratio
     */
    resizeByClientSize(pixelRatio?: number): void;
    /**
     * Create a web canvas.
     * @param webCanvas - Web native canvas
     */
    constructor(webCanvas: HTMLCanvasElement | OffscreenCanvas);
    /**
     * Set scale.
     * @param x - Scale along the X axis
     * @param y - Scale along the Y axis
     */
    setScale(x: number, y: number): void;
}
