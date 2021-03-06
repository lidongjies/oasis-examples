import { BlendOperation } from "../enums/BlendOperation";
import { BlendFactor } from "../enums/BlendFactor";
import { ColorWriteMask } from "../enums/ColorWriteMask";
/**
 * The blend state of the render target.
 */
export declare class RenderTargetBlendState {
    /** color (RGB) blend operation. */
    colorBlendOperation: BlendOperation;
    /** alpha (A) blend operation. */
    alphaBlendOperation: BlendOperation;
    /** color blend factor (RGB) for source. */
    sourceColorBlendFactor: BlendFactor;
    /** alpha blend factor (A) for source. */
    sourceAlphaBlendFactor: BlendFactor;
    /** color blend factor (RGB) for destination. */
    destinationColorBlendFactor: BlendFactor;
    /** alpha blend factor (A) for destination. */
    destinationAlphaBlendFactor: BlendFactor;
    /** color mask. */
    colorWriteMask: ColorWriteMask;
}
