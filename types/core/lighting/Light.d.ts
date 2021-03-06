import { Matrix } from "@oasis-engine/math";
import { Component } from "../Component";
/**
 * Light base class.
 */
export declare class Light extends Component {
    /**
     * Each type of light source is at most 10, beyond which it will not take effect.
     * */
    protected static _maxLight: number;
    private _viewMat;
    private _inverseViewMat;
    /**
     * View matrix.
     * @readonly
     */
    get viewMatrix(): Matrix;
    /**
     * Inverse view matrix.
     * @readonly
     */
    get inverseViewMatrix(): Matrix;
}
