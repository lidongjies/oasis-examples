import { Engine } from "@oasis-engine/core";
import { WebCanvas } from "./WebCanvas";
import { WebGLRendererOptions } from "./WebGLRenderer";
/**
 * WebGL platform engine,support includes WebGL1.0 and WebGL2.0.
 */
export declare class WebGLEngine extends Engine {
    /**
     * Create an engine suitable for the WebGL platform.
     * @param canvas - Native web canvas
     * @param webGLRendererOptions - WebGL renderer options
     */
    constructor(canvas: string | HTMLCanvasElement | OffscreenCanvas, webGLRendererOptions?: WebGLRendererOptions);
    /**
     * Web canvas.
     */
    get canvas(): WebCanvas;
}
