/**
 * Property decorator, ignore the property when cloning.
 */
export declare function ignoreClone(target: Object, propertyKey: string): void;
/**
 * Property decorator, assign value to the property when cloning.
 *
 * @remarks
 * If it's a primitive type, the value will be copied.
 * If it's a class type, the reference will be copied.
 */
export declare function assignmentClone(target: Object, propertyKey: string): void;
/**
 * Property decorator, shallow clone the property when cloning.
 * After cloning, it will keep its own reference independent, and use the method of assignment to clone all its internal properties.
 * if the internal property is a primitive type, the value will be copied, if the internal property is a reference type, its reference address will be copied.。
 *
 * @remarks
 * Applicable to Object, Array, TypedArray and Class types.
 */
export declare function shallowClone(target: Object, propertyKey: string): void;
/**
 * Property decorator, deep clone the property when cloning.
 * After cloning, it will maintain its own reference independence, and all its internal deep properties will remain completely independent.
 *
 * @remarks
 * Applicable to Object, Array, TypedArray and Class types.
 * If Class is encountered during the deep cloning process, the custom cloning function of the object will be called first. Custom cloning requires the object to implement the IClone interface.
 */
export declare function deepClone(target: Object, propertyKey: string): void;
