import { IClone } from "@oasis-engine/design";
import { BoundingSphere } from "./BoundingSphere";
import { Matrix } from "./Matrix";
import { Vector3 } from "./Vector3";
/**
 * Axis Aligned Bound Box (AABB).
 */
export declare class BoundingBox implements IClone {
    private static _tempVec30;
    private static _tempVec31;
    /**
     * Calculate a bounding box from the center point and the extent of the bounding box.
     * @param center - The center point
     * @param extent - The extent of the bounding box
     * @param out - The calculated bounding box
     */
    static fromCenterAndExtent(center: Vector3, extent: Vector3, out: BoundingBox): void;
    /**
     * Calculate a bounding box that fully contains the given points.
     * @param points - The given points
     * @param out - The calculated bounding box
     */
    static fromPoints(points: Vector3[], out: BoundingBox): void;
    /**
     * Calculate a bounding box from a given sphere.
     * @param shpere - The given sphere
     * @param out - The calculated bounding box
     */
    static fromSphere(shpere: BoundingSphere, out: BoundingBox): void;
    /**
     * Transfrom a bounding box.
     * @param source - The original bounding box
     * @param matrix - The transform to apply to the bounding box
     * @param out - The transformed bounding box
     */
    static transform(source: BoundingBox, matrix: Matrix, out: BoundingBox): void;
    /**
     * Calculate a bounding box that is as large as the total combined area of the two specified boxes.
     * @param box1 - The first box to merge
     * @param box2 - The second box to merge
     * @param out - The merged bounding box
     * @returns The merged bounding box
     */
    static merge(box1: BoundingBox, box2: BoundingBox, out: BoundingBox): BoundingBox;
    /** The minimum point of the box. */
    readonly min: Vector3;
    /** The maximum point of the box. */
    readonly max: Vector3;
    /**
     * Constructor of BoundingBox.
     * @param min - The minimum point of the box
     * @param max - The maximum point of the box
     */
    constructor(min?: Vector3, max?: Vector3);
    /**
     * Creates a clone of this box.
     * @returns A clone of this box
     */
    clone(): BoundingBox;
    /**
     * Clones this box to the specified box.
     * @param out - The specified box
     * @returns The specified box
     */
    cloneTo(out: BoundingBox): BoundingBox;
    /**
     * Get the center point of this bounding box.
     * @param out - The center point of this bounding box
     * @returns The center point of this bounding box
     */
    getCenter(out: Vector3): Vector3;
    /**
     * Get the extent of this bounding box.
     * @param out - The extent of this bounding box
     * @returns The extent of this bounding box
     */
    getExtent(out: Vector3): Vector3;
    /**
     * Get the eight corners of this bounding box.
     * @param out - An array of points representing the eight corners of this bounding box
     * @returns An array of points representing the eight corners of this bounding box
     */
    getCorners(out?: Vector3[]): Vector3[];
    /**
     * Transfrom a bounding box.
     * @param matrix - The transform to apply to the bounding box
     * @returns The transformed bounding box
     */
    transform(matrix: Matrix): BoundingBox;
}
