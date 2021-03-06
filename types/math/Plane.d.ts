import { IClone } from "@oasis-engine/design";
import { Vector3 } from "./Vector3";
/**
 * Represents a plane in three dimensional space.
 */
export declare class Plane implements IClone {
    /**
     * Normalize the normal vector of the specified plane.
     * @param p - The specified plane
     * @param out - A normalized version of the specified plane
     */
    static normalize(p: Plane, out: Plane): void;
    /**
     * Calculate the plane that contains the three specified points.
     * @param point0 - The first point
     * @param point1 - The second point
     * @param point2 - The third point
     * @param out - The calculated plane
     */
    static fromPoints(point0: Vector3, point1: Vector3, point2: Vector3, out: Plane): void;
    /** The normal of the plane. */
    readonly normal: Vector3;
    /** The distance of the plane along its normal to the origin. */
    distance: number;
    /**
     * Constructor of Plane.
     * @param normal - The normal vector
     * @param distance - The distance of the plane along its normal to the origin
     */
    constructor(normal?: Vector3, distance?: number);
    /**
     * Normalize the normal vector of this plane.
     * @returns The plane after normalize
     */
    normalize(): Plane;
    /**
     * Creates a clone of this plane.
     * @returns A clone of this plane
     */
    clone(): Plane;
    /**
     * Clones this plane to the specified plane.
     * @param out - The specified plane
     * @returns The specified plane
     */
    cloneTo(out: Plane): Plane;
}
