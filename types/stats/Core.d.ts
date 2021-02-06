declare global {
    interface Performance {
        memory: any;
    }
}
/**
 * @class Core
 */
export default class Core {
    private gl;
    private drawCallHook;
    private textureHook;
    private shaderHook;
    private samplingFrames;
    private samplingIndex;
    private updateCounter;
    private updateTime;
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext);
    private hook;
    reset(): void;
    release(): void;
    update(): {
        fps: number;
        memory: number;
        drawCall: number;
        triangles: number;
        nodes: any;
        lines: number;
        points: number;
        textures: number;
        shaders: number;
        webglContext: string;
    };
}
