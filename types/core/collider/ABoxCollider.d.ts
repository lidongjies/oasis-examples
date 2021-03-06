import { Vector3 } from "@oasis-engine/math";
import { Entity } from "../Entity";
import { Collider } from "./Collider";
/**
 * Axis Aligned Bound Box (AABB).
 * @extends Collider
 */
export declare class ABoxCollider extends Collider {
    private static _tempVec3;
    boxMin: Vector3;
    boxMax: Vector3;
    private _corners;
    private _cornerFlag;
    /**
     * Constructor of ABoxCollider.
     * @param entity - Entity which the box belongs to
     */
    constructor(entity: Entity);
    /**
     * Set box from the minimum point of the box and the maximum point of the box.
     * @param min - The minimum point of the box
     * @param max - The maximum point of the box
     */
    setBoxMinMax(min: Vector3, max: Vector3): void;
    /**
     * Set box from the center point and the size of the bounding box.
     * @param center - The center point
     * @param size - The size of the bounding box
     */
    setBoxCenterSize(center: Vector3, size: Vector3): void;
    /**
     * Get the eight corners of this bounding box.
     */
    getCorners(): Vector3[];
}
