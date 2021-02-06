/**
 * TweenBase class
 * @class
 * @private
 */
declare class TweenerBase {
    protected _time: any;
    protected _paused: any;
    protected _remainLoops: any;
    protected _played: any;
    options: any;
    elapsedTime: any;
    interval: any;
    rewind: any;
    preserved: any;
    startValue: any;
    endValue: any;
    getter: any;
    setter: any;
    constructor(getter: any, setter: any, endValue: any, interval: any, options: {}, target: any);
    duration(): void;
    update(deltaTime: any): void;
    /**
     * Set loop times.
     * @param {number} count - Loop count
     * @param {LOOP_TYPE} type - Loop type
     */
    setLoops(count: any, type?: number): this;
    set(key: any, value: any): this;
    stop(): this;
    pause(): false | this;
    start(tweenManager: any): false | this;
}
export { TweenerBase };
