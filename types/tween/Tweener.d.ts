import { TweenerBase } from "./TweenerBase";
/**
 * Tweener class
 * @extends TweenerBase
 */
declare class Tweener extends TweenerBase {
    /**
     * @constructor
     * @param {function} getter - Getter function
     * @param {function} setter - Setter function
     * @param {number} endValue - End value
     * @param {number} interval - Time interval
     * @param {Object} options - Options
     * @param target
     * @param {function} options.onComplete - Completed callback function
     */
    constructor(getter: any, setter: any, endValue: any, interval: any, options?: {}, target?: any);
    /** Calculate the total duration of Tween animation.
     * @member {number}
     */
    duration(): number;
    /**
     * Update the state in the tween and detect whether the animation is about to end.
     * @param {number} deltaTime - Time between two frames
     * @private
     */
    update(deltaTime: any): boolean;
}
export { Tweener };
