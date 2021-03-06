/**
 * Animation wrap mode.
 * @readonly
 */
export declare enum WrapMode {
    /** Play once */
    ONCE = 0,
    /** Loop play */
    LOOP = 1
}
/**
 * Animation event type.
 * @readonly
 */
export declare enum AnimationEventType {
    /** Triggered when the animation over if the wrapMode === WrapMode.ONCE */
    FINISHED = 0,
    /** Triggered when the animation over if the wrapMode === WrapMode.LOOP */
    LOOP_END = 1,
    /** Triggered when the animation plays to the frame */
    FRAME_EVENT = 2
}
/**
 * Animation interpolation method.
 * @readonly
 */
export declare enum InterpolationType {
    /** Linear interpolation */
    LINEAR = 0,
    /** Cubic spline interpolation */
    CUBICSPLINE = 1,
    /** Stepped interpolation */
    STEP = 2
}
