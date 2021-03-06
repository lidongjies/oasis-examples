import { Collider } from "./Collider";
import { Vector3 } from "@oasis-engine/math";
import { Entity } from "../Entity";
/**
 * Represents a plane in three dimensional space.
 */
export declare class PlaneCollider extends Collider {
    planePoint: Vector3;
    normal: Vector3;
    /**
     * Constructor of PlaneCollider.
     * @param entity - Entity which the plane belongs to
     */
    constructor(entity: Entity);
    /**
     * Set a plane from point and normal.
     * @param  point - The point through the plane
     * @param  normal - The normal direction of the plane
     */
    setPlane(point: Vector3, normal: Vector3): void;
}
