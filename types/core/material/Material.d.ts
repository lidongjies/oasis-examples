import { IClone } from "@oasis-engine/design";
import { RefObject } from "../asset/RefObject";
import { Engine } from "../Engine";
import { Shader } from "../shader/Shader";
import { ShaderData } from "../shader/ShaderData";
import { RenderState } from "../shader/state/RenderState";
import { RenderQueueType } from "./enums/RenderQueueType";
/**
 * Material.
 */
export declare class Material extends RefObject implements IClone {
    /** Shader used by the material. */
    shader: Shader;
    /** Render queue type. */
    renderQueueType: RenderQueueType;
    /** Shader data. */
    readonly shaderData: ShaderData;
    /** Render state. */
    readonly renderState: RenderState;
    /**
     * Create a material instance.
     * @param engine - Engine to which the material belongs
     * @param shader - Shader used by the material
     */
    constructor(engine: Engine, shader: Shader);
    /**
     * Clone and return the instance.
     */
    clone(): Material;
    /**
     * Clone to the target material.
     * @param target - target material
     */
    cloneTo(target: Material): void;
    /**
     * @override
     */
    _addRefCount(value: number): void;
    /**
     * @override
     */
    protected _onDestroy(): void;
}
