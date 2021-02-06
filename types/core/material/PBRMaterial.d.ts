import { Color } from "@oasis-engine/math";
import { Engine } from "../Engine";
import { TextureCubeMap } from "../texture";
import { Texture2D } from "../texture/Texture2D";
import { AlphaMode } from "./enums/AlphaMode";
import { Material } from "./Material";
/**
 * PBR (Physically-Based Rendering) Material.
 */
export declare class PBRMaterial extends Material {
    /**
     * Base color.
     */
    get baseColor(): Color;
    set baseColor(v: Color);
    /**
     * Base color texture.
     */
    get baseColorTexture(): Texture2D;
    set baseColorTexture(v: Texture2D);
    /**
     * Transparent coefficient.
     */
    get opacity(): number;
    set opacity(val: number);
    /**
     * Transparent texture.
     * */
    get opacityTexture(): Texture2D;
    set opacityTexture(v: Texture2D);
    /**
     * Metallic factor.
     */
    get metallicFactor(): number;
    set metallicFactor(v: number);
    /**
     * Rough factor.
     */
    get roughnessFactor(): number;
    set roughnessFactor(v: number);
    /**
     * Metallic texture.
     */
    get metallicTexture(): Texture2D;
    set metallicTexture(v: Texture2D);
    /**
     * Rough texture.
     */
    get roughnessTexture(): Texture2D;
    set roughnessTexture(v: Texture2D);
    /**
     * Metallic rough texture.
     */
    get metallicRoughnessTexture(): Texture2D;
    set metallicRoughnessTexture(v: Texture2D);
    /**
     * Normal texture.
     */
    get normalTexture(): Texture2D;
    set normalTexture(v: Texture2D);
    /**
     * Normal scale factor.
     */
    get normalScale(): number;
    set normalScale(v: number);
    /**
     * Emissive texture.
     */
    get emissiveTexture(): Texture2D;
    set emissiveTexture(v: Texture2D);
    /**
     * Emissive color.
     */
    get emissiveColor(): Color;
    set emissiveColor(v: Color);
    /**
     * Occlusive texture.
     */
    get occlusionTexture(): Texture2D;
    set occlusionTexture(v: Texture2D);
    /**
     * Occlusive intensity.
     */
    get occlusionStrength(): number;
    set occlusionStrength(v: number);
    /**
     * Alpha cutoff value.
     * @remarks fragments with alpha channel lower than cutoff value will be discarded.
     */
    get alphaCutoff(): number;
    set alphaCutoff(v: number);
    /**
     * Specular color.
     */
    get specularColor(): Color;
    set specularColor(v: Color);
    /**
     * Glossiness factor.
     */
    get glossinessFactor(): number;
    set glossinessFactor(v: number);
    /**
     * Specular and glossiness texture.
     */
    get specularGlossinessTexture(): Texture2D;
    set specularGlossinessTexture(v: Texture2D);
    /**
     * Reflection texture.
     * @remarks if this texture is not set, the global environmentMapLight's specularTexture will be used.
     */
    get reflectionTexture(): TextureCubeMap;
    set reflectionTexture(v: TextureCubeMap);
    /**
     * Reflection intensity.
     */
    get envMapIntensity(): number;
    set envMapIntensity(v: number);
    /**
     * The ratio of IOR(index of refraction) from air to medium.eg. 1 / 1.33 from air to water.
     */
    get refractionRatio(): number;
    set refractionRatio(v: number);
    /**
     * The depth value of the local refraction texture, used to simulate the refraction distance.
     */
    get refractionDepth(): number;
    set refractionDepth(v: number);
    /**
     * Local refraction texture.
     */
    get refractionTexture(): Texture2D;
    set refractionTexture(v: Texture2D);
    /**
     * Perturbation texture.
     */
    get perturbationTexture(): Texture2D;
    set perturbationTexture(v: Texture2D);
    /**
     * Offset of the perturbation texture coordinate on S.
     */
    get perturbationUOffset(): number;
    set perturbationUOffset(v: number);
    /**
     * Offset of the perturbation texture coordinate on T.
     */
    get perturbationVOffset(): number;
    set perturbationVOffset(v: number);
    /**
     * Whether the frag color is affected by light.
     */
    get unLight(): boolean;
    set unLight(v: boolean);
    /**
     * Whether to use SRGB color space.
     */
    get srgb(): boolean;
    set srgb(v: boolean);
    /**
     * Whether sRGB linear correction uses approximate fast algorithm.
     * */
    get srgbFast(): boolean;
    set srgbFast(v: boolean);
    /**
     * Whether to use Gamma correction.
     */
    get gamma(): boolean;
    set gamma(v: boolean);
    /**
     * Whether to take the brightness value of the opacityTexture as the transparency.
     */
    get getOpacityFromRGB(): boolean;
    set getOpacityFromRGB(v: boolean);
    /**
     * Whether to use metallic-roughness workflow.
     * @remarks PBR renderring will use specular-glossiness workflow if this value is false.
     */
    get isMetallicWorkflow(): boolean;
    set isMetallicWorkflow(v: boolean);
    /**
     * Whether to refract global environmentMapLight, default reflection.
     * */
    get envMapModeRefract(): boolean;
    set envMapModeRefract(v: boolean);
    /**
     * Transparent mode.
     */
    get alphaMode(): AlphaMode;
    set alphaMode(v: AlphaMode);
    /**
     * Whether to render both sides.
     * @remarks Only the front side is rendered by default
     */
    get doubleSided(): boolean;
    set doubleSided(v: boolean);
    private _baseColor;
    private _metallicFactor;
    private _roughnessFactor;
    private _normalScale;
    private _emissiveColor;
    private _occlusionStrength;
    private _alphaCutoff;
    private _specularColor;
    private _glossinessFactor;
    private _envMapIntensity;
    private _refractionRatio;
    private _refractionDepth;
    private _perturbationUOffset;
    private _perturbationVOffset;
    private _PTMMatrix;
    private _baseColorTexture;
    private _opacityTexture;
    private _metallicTexture;
    private _roughnessTexture;
    private _metallicRoughnessTexture;
    private _normalTexture;
    private _emissiveTexture;
    private _occlusionTexture;
    private _specularGlossinessTexture;
    private _reflectionTexture;
    private _refractionTexture;
    private _perturbationTexture;
    private _unLight;
    private _srgb;
    private _srgbFast;
    private _gamma;
    private _getOpacityFromRGB;
    private _isMetallicWorkflow;
    private _envMapModeRefract;
    private _alphaMode;
    private _doubleSided;
    constructor(engine: Engine);
    clone(): PBRMaterial;
}
