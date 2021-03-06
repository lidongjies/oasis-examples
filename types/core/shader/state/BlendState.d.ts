import { Color } from "@oasis-engine/math";
import { RenderTargetBlendState } from "./RenderTargetBlendState";
/**
 * Blend state.
 */
export declare class BlendState {
    private static _getGLBlendFactor;
    private static _getGLBlendOperation;
    /** The blend state of the render target. */
    readonly targetBlendState: RenderTargetBlendState;
    /** Constant blend color. */
    readonly blendColor: Color;
    /** Whether to use (Alpha-to-Coverage) technolog. */
    alphaToCoverage: boolean;
    private _platformApply;
}
