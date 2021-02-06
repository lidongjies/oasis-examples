/**
 * Tween class
 * @class
 */
declare class Tween {
    private _nextId;
    tweeners: any;
    /**
     * @constructor
     */
    constructor();
    /**
     * Next id.
     * @member {number}
     * @readonly
     */
    getId(): number;
    /**
     * Add keyframe.
     * @param tweener - Keyframe
     */
    add(tweener: any): void;
    /**
     * Update the internal state of the tween and delete the key frames that have been played and are not needed.
     * @param {number} deltaTime - Time between two frames
     */
    update(deltaTime: any): void;
}
export { Tween };
