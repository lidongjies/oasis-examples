import { Camera } from "../Camera";
import { Layer } from "../Layer";
import { Script } from "../Script";
import { RenderColorTexture } from "../texture/RenderColorTexture";
/**
 * Environmental probes, providing necessary capabilities such as reflection and refraction.
 * @example
 * ```ts
 * const probe = cameraEntity.addComponent( CubeProbe )
 * probe.onTextureChange = cubeTexture => {
 *   envLight.specularTexture = cubeTexture;
 *   skybox.specularTexture = cubeTexture;
 * }
 * ```
 */
export declare abstract class Probe extends Script {
    /**
     * Probe's layer, render everything by default.
     */
    probeLayer: Layer;
    /**
     * The width of the probe rendering target.
     */
    width: number;
    /**
     * The height of the probe rendering target.
     */
    height: number;
    /**
     * When using WebGL2, you can turn on MSAA at the hardware layer.
     */
    antiAliasing: number;
    /**
     * Whether the probe is rendered to the cube color texture.
     */
    protected readonly _isCube: boolean;
    private _oriCameraRenderTarget;
    private _renderTarget;
    private _renderTargetSwap;
    private _activeRenderTarget;
    private _camera;
    private _oriCameraCullingMask;
    private get _texture();
    /**
     * Provide hooks for users to exchange Texture.
     * @remarks Prevent issue: Feedback Loops Between Textures and the Framebuffer.
     */
    onTextureChange(renderColorTexture: RenderColorTexture): void;
    /**
     * @override
     */
    onBeginRender(camera: Camera): void;
    /**
     * @override
     */
    onEndRender(camera: Camera): void;
    protected _reset(): void;
}
