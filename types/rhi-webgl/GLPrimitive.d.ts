import { Primitive } from "@oasis-engine/core";
import { SubPrimitive } from "@oasis-engine/core/types/graphic/SubPrimitive";
import { IPlatformPrimitive } from "@oasis-engine/design";
import { WebGLRenderer } from "./WebGLRenderer";
/**
 * Improvement of VAO:
 * 1) WebGL2.0 must support VAO, almost all devices support vao extensions in webgl1.0, we can use PollyFill,only keep VAO mode.
 * 2) VAO implementation now has bugs, change IndexBuffer、VertexBuffer、VertexElements need to update VAO.
 */
/**
 * GL platform primtive.
 */
export declare class GLPrimitive implements IPlatformPrimitive {
    protected readonly _primitive: Primitive;
    protected attribLocArray: number[];
    protected readonly canUseInstancedArrays: boolean;
    private gl;
    private vao;
    private readonly _useVao;
    constructor(rhi: WebGLRenderer, primitive: Primitive);
    /**
     * Draw the primitive.
     */
    draw(shaderProgram: any, subPrimitive: SubPrimitive): void;
    destroy(): void;
    /**
     * Bind buffer and attribute.
     */
    protected bindBufferAndAttrib(shaderProgram: any): void;
    protected disableAttrib(): void;
    private registerVAO;
}
