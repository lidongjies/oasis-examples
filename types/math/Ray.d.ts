import { BoundingBox } from "./BoundingBox";
import { BoundingSphere } from "./BoundingSphere";
import { Plane } from "./Plane";
import { Vector3 } from "./Vector3";
/**
 * Represents a ray with an origin and a direction in 3D space.
 */
export declare class Ray {
    /** The origin of the ray. */
    readonly origin: Vector3;
    /** The direction of the ray. */
    readonly direction: Vector3;
    /**
     * Constructor of Ray.
     * @param origin - The origin vector
     * @param direction - The direction vector
     */
    constructor(origin?: Vector3, direction?: Vector3);
    /**
     * Check if this ray intersects the specified plane.
     * @param plane - The specified plane
     * @returns The distance from this ray to the specified plane if intersecting, -1 otherwise
     */
    intersectPlane(plane: Plane): number;
    /**
     * Check if this ray intersects the specified sphere.
     * @param sphere - The specified sphere
     * @returns The distance from this ray to the specified sphere if intersecting, -1 otherwise
     */
    intersectSphere(sphere: BoundingSphere): number;
    /**
     * Check if this ray intersects the specified box (AABB).
     * @param box - The specified box
     * @returns The distance from this ray to the specified box if intersecting, -1 otherwise
     */
    intersectBox(box: BoundingBox): number;
    /**
     * The coordinates of the specified distance from the origin in the ray direction.
     * @param distance - The specified distance
     * @param out - The coordinates as an output parameter
     * @returns The out
     */
    getPoint(distance: number, out: Vector3): Vector3;
}
