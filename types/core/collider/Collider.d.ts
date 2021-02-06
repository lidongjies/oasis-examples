import { Component } from "../Component";
import { Entity } from "../Entity";
/**
 * Define collider data.
 */
export declare class Collider extends Component {
    /**
     * @param {Entity} entity
     */
    constructor(entity: Entity);
    _onEnable(): void;
    _onDisable(): void;
}
