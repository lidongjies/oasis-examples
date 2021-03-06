import { Matrix, Vector2 } from "@oasis-engine/math";
import { Light } from "../lighting/Light";
import { RenderColorTexture } from "../texture/RenderColorTexture";
import { RenderTarget } from "../texture/RenderTarget";
/**
 * Shadow manager.
 */
export declare class LightShadow {
    private static _viewMatFromLightProperty;
    private static _projMatFromLightProperty;
    private static _shadowBiasProperty;
    private static _shadowIntensityProperty;
    private static _shadowRadiusProperty;
    private static _shadowMapSizeProperty;
    private static _shadowMapsProperty;
    /**
     * Clear all shadow maps.
     */
    static clearMap(): void;
    private static _maxLight;
    private static _combinedData;
    private _mapSize;
    private _renderTarget;
    /**
     * Shadow's light.
     */
    readonly light: Light;
    /**
     * Shadow bias.
     */
    bias: number;
    /**
     * Shadow intensity, the larger the value, the clearer and darker the shadow.
     */
    intensity: number;
    /**
     * Pixel range used for shadow PCF interpolation.
     */
    radius: number;
    /**
     * Generate the projection matrix used by the shadow map.
     */
    projectionMatrix: Matrix;
    constructor(light: Light, props?: {
        engine: any;
        width: number;
        height: number;
    });
    /**
     * The RenderTarget corresponding to the shadow map.
     * @readonly
     */
    get renderTarget(): RenderTarget;
    /**
     * Shadow map's color render texture.
     * @readonly
     */
    get map(): RenderColorTexture;
    /**
     * Shadow map size.
     * @readonly
     */
    get mapSize(): Vector2;
    /**
     * Initialize the projection matrix for lighting.
     * @param light - The light to generate shadow
     */
    initShadowProjectionMatrix(light: Light): void;
    appendData(lightIndex: number): void;
}
