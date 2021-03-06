import { Collider } from "./Collider";
import { Vector3 } from "@oasis-engine/math";
import { Entity } from "../Entity";
/**
 * A bounding sphere.
 */
export declare class ASphereCollider extends Collider {
    center: Vector3;
    radius: number;
    /**
     * Constructor of ASphereCollider.
     * @param  entity - Entity which the sphere belongs to
     */
    constructor(entity: Entity);
    /**
     * Set the center and radius of the sphere.
     * @param center - The center point of the sphere
     * @param radius - The radius of the sphere
     */
    setSphere(center: Vector3, radius: number): void;
}
