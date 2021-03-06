import { IClone } from "@oasis-engine/design";
import { Color, Matrix, Vector2, Vector3, Vector4 } from "@oasis-engine/math";
import { IRefObject } from "../asset/IRefObject";
import { Texture } from "../texture/Texture";
import { ShaderMacro } from "./ShaderMacro";
import { ShaderProperty } from "./ShaderProperty";
export declare type ShaderPropertyValueType = number | Vector2 | Vector3 | Vector4 | Color | Matrix | Texture | Texture[] | Int32Array | Float32Array;
/**
 * Shader data collection,Correspondence includes shader properties data and macros data.
 */
export declare class ShaderData implements IRefObject, IClone {
    private _variableMacros;
    private _refCount;
    /**
     * Get float by shader property name.
     * @param propertyName - Shader property name
     * @returns Float
     */
    getFloat(propertyName: string): number;
    /**
     * Get float by shader property.
     * @param property - Shader property
     * @returns Float
     */
    getFloat(property: ShaderProperty): number;
    /**
     * Set float by shader property name.
     * @remarks Corresponding float shader property type.
     * @param propertyName - Shader property name
     * @param value - Float
     */
    setFloat(propertyName: string, value: number): void;
    /**
     * Set float by shader property.
     * @remarks Corresponding float shader property type.
     * @param property - Shader property
     * @param value - Float
     */
    setFloat(property: ShaderProperty, value: number): void;
    /**
     * Get int by shader property name.
     * @param propertyName - Shader property name
     * @returns Int
     */
    getInt(propertyName: string): number;
    /**
     * Get int by shader property.
     * @param property - Shader property
     * @returns Int
     */
    getInt(property: ShaderProperty): number;
    /**
     * Set int by shader property name.
     * @remarks Correspondence includes int and bool shader property type.
     * @param propertyName - Shader property name
     * @param value - Int
     */
    setInt(propertyName: string, value: number): void;
    /**
     * Set int by shader property.
     * @remarks Correspondence includes int and bool shader property type.
     * @param property - Shader property
     * @param value - Int
     */
    setInt(property: ShaderProperty, value: number): void;
    /**
     * Get float array by shader property name.
     * @param propertyName - Shader property name
     * @returns Float array
     */
    getFloatArray(propertyName: string): Float32Array;
    /**
     * Get float array by shader property.
     * @param property - Shader property
     * @returns Float array
     */
    getFloatArray(property: ShaderProperty): Float32Array;
    /**
     * Set float array by shader property name.
     * @remarks Correspondence includes float array、vec2 array、vec3 array、vec4 array and matrix array shader property type.
     * @param propertyName - Shader property name
     * @param value - Float array
     */
    setFloatArray(propertyName: string, value: Float32Array): void;
    /**
     * Set float array by shader property.
     * @remarks Correspondence includes float array、vec2 array、vec3 array、vec4 array and matrix array shader property type.
     * @param property - Shader property
     * @param value - Float array
     */
    setFloatArray(property: ShaderProperty, value: Float32Array): void;
    /**
     * Get int array by shader property name.
     * @param propertyName - Shader property name
     * @returns Int Array
     */
    getIntArray(propertyName: string): Int32Array;
    /**
     * Get int array by shader property.
     * @param property - Shader property
     * @returns Int Array
     */
    getIntArray(property: ShaderProperty): Int32Array;
    /**
     * Set int array by shader property name.
     * @remarks Correspondence includes bool array、int array、bvec2 array、bvec3 array、bvec4 array、ivec2 array、ivec3 array and ivec4 array shader property type.
     * @param propertyName - Shader property name
     * @param value - Int Array
     */
    setIntArray(propertyName: string, value: Int32Array): void;
    /**
     * Set int array by shader property.
     * @remarks Correspondence includes bool array、int array、bvec2 array、bvec3 array、bvec4 array、ivec2 array、ivec3 array and ivec4 array shader property type.
     * @param property - Shader property
     * @param value - Int Array
     */
    setIntArray(property: ShaderProperty, value: Int32Array): void;
    /**
     * Get two-dimensional from shader property name.
     * @param propertyName - Shader property name
     * @returns Two-dimensional vector
     */
    getVector2(propertyName: string): Vector2;
    /**
     * Get two-dimensional from shader property.
     * @param property - Shader property
     * @returns Two-dimensional vector
     */
    getVector2(property: ShaderProperty): Vector2;
    /**
     * Set two-dimensional vector from shader property name.
     * @remarks Correspondence includes vec2、ivec2 and bvec2 shader property type.
     * @param propertyName - Shader property name
     * @param value - Two-dimensional vector
     */
    setVector2(property: string, value: Vector2): void;
    /**
     * Set two-dimensional vector from shader property.
     * @remarks Correspondence includes vec2、ivec2 and bvec2 shader property type.
     * @param property - Shader property
     * @param value - Two-dimensional vector
     */
    setVector2(property: ShaderProperty, value: Vector2): void;
    /**
     * Get vector3 by shader property name.
     * @param propertyName - Shader property name
     * @returns Three-dimensional vector
     */
    getVector3(propertyName: string): Vector3;
    /**
     * Get vector3 by shader property.
     * @param property - Shader property
     * @returns Three-dimensional vector
     */
    getVector3(property: ShaderProperty): Vector3;
    /**
     * Set three dimensional vector by shader property name.
     * @remarks Correspondence includes vec3、ivec3 and bvec3 shader property type.
     * @param propertyName - Shader property name
     * @param value - Three-dimensional vector
     */
    setVector3(property: string, value: Vector3): void;
    /**
     * Set three dimensional vector by shader property.
     * @remarks Correspondence includes vec3、ivec3 and bvec3 shader property type.
     * @param property - Shader property
     * @param value - Three-dimensional vector
     */
    setVector3(property: ShaderProperty, value: Vector3): void;
    /**
     * Get vector4 by shader property name.
     * @param propertyName - Shader property name
     * @returns Four-dimensional vector
     */
    getVector4(propertyName: string): Vector4;
    /**
     * Get vector4 by shader property.
     * @param property - Shader property
     * @returns Four-dimensional vector
     */
    getVector4(property: ShaderProperty): Vector4;
    /**
     * Set four-dimensional vector by shader property name.
     * @remarks Correspondence includes vec4、ivec4 and bvec4 shader property type.
     * @param propertyName - Shader property name
     * @param value - Four-dimensional vector
     */
    setVector4(property: string, value: Vector4): void;
    /**
     * Set four-dimensional vector by shader property.
     * @remarks Correspondence includes vec4、ivec4 and bvec4 shader property type.
     * @param property - Shader property
     * @param value - Four-dimensional vector
     */
    setVector4(property: ShaderProperty, value: Vector4): void;
    /**
     * Get matrix by shader property name.
     * @param propertyName - Shader property name
     * @returns Matrix
     */
    getMatrix(propertyName: string): Matrix;
    /**
     * Get matrix by shader property.
     * @param property - Shader property
     * @returns Matrix
     */
    getMatrix(property: ShaderProperty): Matrix;
    /**
     * Set matrix by shader property name.
     * @remarks Correspondence includes matrix shader property type.
     * @param propertyName - Shader property name
     * @param value - Matrix
     */
    setMatrix(propertyName: string, value: Matrix): any;
    /**
     * Set matrix by shader property.
     * @remarks Correspondence includes matrix shader property type.
     * @param property - Shader property
     * @param value - Matrix
     */
    setMatrix(property: ShaderProperty, value: Matrix): any;
    /**
     * Get color by shader property name.
     * @param propertyName - Shader property name
     * @returns Color
     */
    getColor(propertyName: string): Color;
    /**
     * Get color by shader property.
     * @param property - Shader property
     * @returns Color
     */
    getColor(property: ShaderProperty): Color;
    /**
     * Set color by shader property name.
     * @remarks Correspondence includes vec4 shader property type.
     * @param propertyName - Shader property name
     * @param value - Color
     */
    setColor(propertyName: string, value: Color): void;
    /**
     * Set color by shader property.
     * @remarks Correspondence includes vec4 shader property type.
     * @param property - Shader property
     * @param value - Color
     */
    setColor(property: ShaderProperty, value: Color): void;
    /**
     * Get texture by shader property name.
     * @param propertyName - Shader property name
     * @returns Texture
     */
    getTexture(propertyName: string): Texture;
    /**
     * Get texture by shader property.
     * @param property - Shader property
     * @returns Texture
     */
    getTexture(property: ShaderProperty): Texture;
    /**
     * Set texture by shader property name.
     * @param propertyName - Shader property name
     * @param value - Texture
     */
    setTexture(propertyName: string, value: Texture): void;
    /**
     * Set texture by shader property.
     * @param property - Shader property
     * @param value - Texture
     */
    setTexture(property: ShaderProperty, value: Texture): void;
    /**
     * Get texture array by shader property name.
     * @param propertyName - Shader property name
     * @returns Texture array
     */
    getTextureArray(propertyName: string): Texture[];
    /**
     * Get texture array by shader property.
     * @param property - Shader property
     * @returns Texture array
     */
    getTextureArray(property: ShaderProperty): Texture[];
    /**
     * Set texture array by shader property name.
     * @param propertyName - Shader property name
     * @param value - Texture array
     */
    setTextureArray(propertyName: string, value: Texture[]): void;
    /**
     * Set texture array by shader property.
     * @param property - Shader property
     * @param value - Texture array
     */
    setTextureArray(property: ShaderProperty, value: Texture[]): void;
    /**
     * Enable macro.
     * @param macroName - Macro name
     */
    enableMacro(macroName: string): void;
    /**
     * Enable macro.
     * @param macro - Shader macro
     */
    enableMacro(macro: ShaderMacro): void;
    /**
     * Enable macro.
     * @remarks Name and value will combine one macro, it's equal the macro of "name value".
     * @param name - Macro name
     * @param value - Macro value
     */
    enableMacro(name: string, value: string): void;
    /**
     * Disable macro
     * @param macroName - Macro name
     */
    disableMacro(macroName: string): void;
    /**
     * Disable macro
     * @param macro - Shader macro
     */
    disableMacro(macro: ShaderMacro): void;
    clone(): ShaderData;
    cloneTo(target: ShaderData): void;
    private _enableVariableMacro;
    private _disableVariableMacro;
}
