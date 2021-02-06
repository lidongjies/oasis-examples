import { Color } from "@oasis-engine/math";
import { Engine } from "../Engine";
import { Texture2D } from "../texture/Texture2D";
import { AlphaMode } from "./enums/AlphaMode";
import { Material } from "./Material";
/**
 * Blinn-phong Material.
 */
export declare class BlinnPhongMaterial extends Material {
    /**
     * Ambient color.
     */
    get ambientColor(): Color;
    set ambientColor(value: Color);
    /**
     * Ambient texture.
     */
    get ambientTexture(): Texture2D;
    set ambientTexture(value: Texture2D);
    /**
     * Emissive color.
     */
    get emissiveColor(): Color;
    set emissiveColor(value: Color);
    /**
     * Emissive texture.
     */
    get emissiveTexture(): Texture2D;
    set emissiveTexture(value: Texture2D);
    /**
     * Diffuse color.
     */
    get diffuseColor(): Color;
    set diffuseColor(value: Color);
    /**
     * Diffuse texture.
     */
    get diffuseTexture(): Texture2D;
    set diffuseTexture(value: Texture2D);
    /**
     * Specular color.
     */
    get specularColor(): Color;
    set specularColor(value: Color);
    /**
     * Specular texture.
     */
    get specularTexture(): Texture2D;
    set specularTexture(value: Texture2D);
    /**
     * Set the specular reflection coefficient, the larger the value, the more convergent the specular reflection effect.
     */
    get shininess(): number;
    set shininess(value: number);
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
    private _ambientColor;
    private _emissiveColor;
    private _diffuseColor;
    private _specularColor;
    private _ambientTexture;
    private _emissiveTexture;
    private _diffuseTexture;
    private _specularTexture;
    private _shininess;
    private _alphaMode;
    private _doubleSided;
    constructor(engine: Engine);
    /**
     * @override
     */
    clone(): BlinnPhongMaterial;
}
