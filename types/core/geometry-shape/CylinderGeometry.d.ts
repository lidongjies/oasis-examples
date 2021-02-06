import { FrontFace } from "../base/Constant";
import { Engine } from "../Engine";
import { ShapeGeometry } from "./ShapeGeometry";
/**
 * SphereGeometry.
 */
export declare class CylinderGeometry extends ShapeGeometry {
    FrontFace: any;
    index: any;
    indexArray: any;
    halfHeight: any;
    private _parameters;
    private _vertices;
    private _indices;
    /**
     * @param  engine - Engine
     * @param  radiusTop - Cylinder top radius, default is 1.
     * @param  radiusBottom - Cylinder bottom radius, default is 1.
     * @param  height - Cylinder height, default is 1.
     * @param  radialSegments - Number of segmented faces around the circumference of the cylinder. Default is 8
     * @param  heightSegments - Number of rows of faces along the height of the cylinder. Default is 1.
     * @param  openEnded - A boolean indicating whether the ends of the cylinder are open or capped. Default is false, meaning capped.
     * @param  thetaStart - Start angle for first segment, default = 0 (three o'clock position).
     * @param  thetaLength - The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete cylinder.
     */
    constructor(engine: Engine, radiusTop?: number, radiusBottom?: number, height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number, frontFace?: FrontFace);
    generateTorso(): void;
    generateCap(isTop: any): void;
}
