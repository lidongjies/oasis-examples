export declare function linear(t: any, b: any, c: any, d: any): any;
export declare function easeInQuad(t: any, b: any, c: any, d: any): any;
export declare function easeOutQuad(t: any, b: any, c: any, d: any): any;
export declare function easeInOutQuad(t: any, b: any, c: any, d: any): any;
export declare function easeInCubic(t: any, b: any, c: any, d: any): any;
export declare function easeOutCubic(t: any, b: any, c: any, d: any): any;
export declare function easeInOutCubic(t: any, b: any, c: any, d: any): any;
export declare function easeInQuart(t: any, b: any, c: any, d: any): any;
export declare function easeOutQuart(t: any, b: any, c: any, d: any): any;
export declare function easeInOutQuart(t: any, b: any, c: any, d: any): any;
export declare function easeInQuint(t: any, b: any, c: any, d: any): any;
export declare function easeOutQuint(t: any, b: any, c: any, d: any): any;
export declare function easeInOutQuint(t: any, b: any, c: any, d: any): any;
export declare function easeInSine(t: any, b: any, c: any, d: any): any;
export declare function easeOutSine(t: any, b: any, c: any, d: any): any;
export declare function easeInOutSine(t: any, b: any, c: any, d: any): any;
export declare function easeInExpo(t: any, b: any, c: any, d: any): any;
export declare function easeOutExpo(t: any, b: any, c: any, d: any): any;
export declare function easeInOutExpo(t: any, b: any, c: any, d: any): any;
export declare function easeInCirc(t: any, b: any, c: any, d: any): any;
export declare function easeOutCirc(t: any, b: any, c: any, d: any): any;
export declare function easeInOutCirc(t: any, b: any, c: any, d: any): any;
export declare function easeInElastic(t: any, b: any, c: any, d: any): any;
export declare function easeOutElastic(t: any, b: any, c: any, d: any): any;
export declare function easeInOutElastic(t: any, b: any, c: any, d: any): any;
export declare function easeInBack(t: any, b: any, c: any, d: any, s: any): any;
export declare function easeOutBack(t: any, b: any, c: any, d: any, s: any): any;
export declare function easeInOutBack(t: any, b: any, c: any, d: any, s: any): any;
export declare function easeInBounce(t: any, b: any, c: any, d: any): any;
export declare function easeOutBounce(t: any, b: any, c: any, d: any): any;
export declare function easeInOutBounce(t: any, b: any, c: any, d: any): any;
/**
 * Generate easing through bezier curve control points.
 * Hats off to gre: https://github.com/gre/bezier-easing
 *
 * @param x1 - X of control point 1, range 0-1
 * @param y1 - Y of control point 1, range 0-1
 * @param x2 - X of control point 2, range 0-1
 * @param y2 - Y of control point 2, range 0-1
 */
export declare function bezierEasing(x1: any, y1: any, x2: any, y2: any): (t: any, b: any, c: any, d: any) => any;
