import { Engine } from "../Engine";
import { ShapeGeometry } from "./ShapeGeometry";
/**
 * SphereGeometry.
 */
export declare class SphereGeometry extends ShapeGeometry {
    private _parameters;
    private _thetaEnd;
    /**
     * @param  radius - Sphere radius.
     * @param  horizontalSegments - Number of horizontal segments
     * @param  verticalSegments - Number of vertical segments
     * @param  alphaStart - Specify horizontal starting angle
     * @param  alphaRange - Specify horizontal sweep angle size
     * @param  thetaStart - Specify vertical starting angle
     * @param  thetaRange - Specify vertical sweep angle size
     */
    constructor(engine: Engine, radius?: number, horizontalSegments?: number, verticalSegments?: number, alphaStart?: number, alphaRange?: number, thetaStart?: number, thetaRange?: number);
    /**
     * Generate sphere vertices data.
     * @private
     */
    initialize(engine: Engine): void;
}
