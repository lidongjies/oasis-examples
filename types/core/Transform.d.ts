import { Matrix, Quaternion, Vector3 } from "@oasis-engine/math";
import { Component } from "./Component";
import { UpdateFlag } from "./UpdateFlag";
/**
 * Used to implement transformation related functions.
 */
export declare class Transform extends Component {
    private static _tempQuat0;
    private static _tempVec3;
    private static _tempMat30;
    private static _tempMat31;
    private static _tempMat32;
    private static _tempMat40;
    private static _tempMat41;
    private static _tempMat42;
    private static _tempMat43;
    private static _LOCAL_EULER_FLAG;
    private static _LOCAL_QUAT_FLAG;
    private static _WORLD_POSITION_FLAG;
    private static _WORLD_EULER_FLAG;
    private static _WORLD_QUAT_FLAG;
    private static _WORLD_SCALE_FLAG;
    private static _LOCAL_MATRIX_FLAG;
    private static _WORLD_MATRIX_FLAG;
    /** _WORLD_MATRIX_FLAG | _WORLD_POSITION_FLAG */
    private static _WM_WP_FLAGS;
    /** _WORLD_MATRIX_FLAG | _WORLD_EULER_FLAG | _WORLD_QUAT_FLAG */
    private static _WM_WE_WQ_FLAGS;
    /** _WORLD_MATRIX_FLAG | _WORLD_POSITION_FLAG | _WORLD_EULER_FLAG | _WORLD_QUAT_FLAG */
    private static _WM_WP_WE_WQ_FLAGS;
    /** Transform._WORLD_MATRIX_FLAG | Transform._WORLD_SCALE_FLAG */
    private static _WM_WS_FLAGS;
    /** Transform._WORLD_MATRIX_FLAG | Transform._WORLD_POSITION_FLAG | Transform._WORLD_SCALE_FLAG */
    private static _WM_WP_WS_FLAGS;
    /** Transform._WORLD_MATRIX_FLAG | Transform._WORLD_POSITION_FLAG | Transform._WORLD_EULER_FLAG | Transform._WORLD_QUAT_FLAG | Transform._WORLD_SCALE_FLAG */
    private static _WM_WP_WE_WQ_WS_FLAGS;
    private _position;
    private _rotation;
    private _rotationQuaternion;
    private _scale;
    private _worldPosition;
    private _worldRotation;
    private _worldRotationQuaternion;
    private _lossyWorldScale;
    private _localMatrix;
    private _worldMatrix;
    private _changeFlags;
    private _isParentDirty;
    private _parentTransformCache;
    private _dirtyFlag;
    /**
     * Local position.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */
    get position(): Vector3;
    set position(value: Vector3);
    /**
     * World position.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */
    get worldPosition(): Vector3;
    set worldPosition(value: Vector3);
    /**
     * Local rotation, defining the rotation value in degrees, Yaw/Pitch/Roll sequence.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */
    get rotation(): Vector3;
    set rotation(value: Vector3);
    /**
     * World rotation, defining the rotation value in degrees, Yaw/Pitch/Roll sequence.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */
    get worldRotation(): Vector3;
    set worldRotation(value: Vector3);
    /**
     * Local rotaion, defining the rotation by using a unit quaternion.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */
    get rotationQuaternion(): Quaternion;
    set rotationQuaternion(value: Quaternion);
    /**
     * World rotaion, defining the rotation by using a unit quaternion.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */
    get worldRotationQuaternion(): Quaternion;
    set worldRotationQuaternion(value: Quaternion);
    /**
     * Local scaling.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */
    get scale(): Vector3;
    set scale(value: Vector3);
    /**
     * Local lossy scaling.
     * @remarks The value obtained may not be correct under certain conditions(for example, the parent node has scaling, and the child node has a rotation), the scaling will be tilted. Vector3 cannot be used to correctly represent the scaling. Must use Matrix3x3.
     */
    get lossyWorldScale(): Vector3;
    /**
     * Local matrix.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */
    get localMatrix(): Matrix;
    set localMatrix(value: Matrix);
    /**
     * World matrix.
     * @remarks Need to re-assign after modification to ensure that the modification takes effect.
     */
    get worldMatrix(): Matrix;
    set worldMatrix(value: Matrix);
    /**
     * Set local position by X, Y, Z value.
     * @param x - X coordinate
     * @param y - Y coordinate
     * @param z - Z coordinate
     */
    setPosition(x: number, y: number, z: number): void;
    /**
     * Set local rotaion by the X, Y, Z components of the euler angle, unit in degrees, Yaw/Pitch/Roll sequence.
     * @param x - The angle of rotation around the X axis
     * @param y - The angle of rotation around the Y axis
     * @param z - The angle of rotation around the Z axis
     */
    setRotation(x: number, y: number, z: number): void;
    /**
     * Set local rotaion by the X, Y, Z, and W components of the quaternion.
     * @param x - X component of quaternion
     * @param y - Y component of quaternion
     * @param z - Z component of quaternion
     * @param w - W component of quaternion
     */
    setRotationQuaternion(x: number, y: number, z: number, w: number): void;
    /**
     * Set local scaling by scaling values along X, Y, Z axis.
     * @param x - Scaling along X axis
     * @param y - Scaling along Y axis
     * @param z - Scaling along Z axis
     */
    setScale(x: number, y: number, z: number): void;
    /**
     * Set world position by X, Y, Z value.
     * @param x - X coordinate
     * @param y - Y coordinate
     * @param z - Z coordinate
     */
    setWorldPosition(x: number, y: number, z: number): void;
    /**
     * Set world rotaion by the X, Y, Z components of the euler angle, unit in degrees, Yaw/Pitch/Roll sequence.
     * @param x - The angle of rotation around the X axis
     * @param y - The angle of rotation around the Y axis
     * @param z - The angle of rotation around the Z axis
     */
    setWorldRotation(x: number, y: number, z: number): void;
    /**
     * Set local rotaion by the X, Y, Z, and W components of the quaternion.
     * @param x - X component of quaternion
     * @param y - Y component of quaternion
     * @param z - Z component of quaternion
     * @param w - W component of quaternion
     */
    setWorldRotationQuaternion(x: number, y: number, z: number, w: number): void;
    /**
     * Get the forward direction in world space.
     * @param forward - Forward vector
     * @returns Forward vector
     */
    getWorldForward(forward: Vector3): Vector3;
    /**
     * Get the right direction in world space.
     * @param right - Right vector
     * @returns Right vector
     */
    getWorldRight(right: Vector3): Vector3;
    /**
     * Get the up direction in world space.
     * @param up - Up vector
     * @returns Up vector
     */
    getWorldUp(up: Vector3): Vector3;
    /**
     * Translate along the passed Vector3.
     * @param translation - Direction and distance of translation
     * @param relativeToLocal - Relative to local space
     */
    translate(translation: Vector3, relativeToLocal?: boolean): void;
    /**
     * Translate along the passed X, Y, Z value.
     * @param x - Translate direction and distance along x axis
     * @param y - Translate direction and distance along y axis
     * @param z - Translate direction and distance along z axis
     * @param relativeToLocal - Relative to local space
     */
    translate(x: number, y: number, z: number, relativeToLocal?: boolean): void;
    /**
     * Rotate around the passed Vector3.
     * @param rotation - Euler angle in degrees
     * @param relativeToLocal - Relative to local space
     */
    rotate(rotation: Vector3, relativeToLocal?: boolean): void;
    /**
     * Rotate around the passed Vector3.
     * @param x - Rotation along x axis, in degrees
     * @param y - Rotation along y axis, in degrees
     * @param z - Rotation along z axis, in degrees
     * @param relativeToLocal - Relative to local space
     */
    rotate(x: number, y: number, z: number, relativeToLocal?: boolean): void;
    /**
     * Rotate around the specified axis according to the specified angle.
     * @param axis - Rotate axis
     * @param angle - Rotate angle in degrees
     * @param relativeToLocal - Relative to local space
     */
    rotateByAxis(axis: Vector3, angle: number, relativeToLocal?: boolean): void;
    /**
     * Rotate and ensure that the world front vector points to the target world position.
     * @param worldPosition - Target world position
     * @param worldUp - Up direciton in world space, defalut is Vector3(0, 1, 0)
     */
    lookAt(worldPosition: Vector3, worldUp?: Vector3): void;
    /**
     * Register world transform change flag.
     * @returns Change flag
     */
    registerWorldChangeFlag(): UpdateFlag;
    /**
     * Get worldMatrix: Will trigger the worldMatrix update of itself and all parent entities.
     * Get worldPosition: Will trigger the worldMatrix, local position update of itself and the worldMatrix update of all parent entities.
     * In summary, any update of related variables will cause the dirty mark of one of the full process (worldMatrix or worldRotationQuaternion) to be false.
     */
    private _updateWorldPositionFlag;
    /**
     * Get worldMatrix: Will trigger the worldMatrix update of itself and all parent entities.
     * Get worldPosition: Will trigger the worldMatrix, local position update of itself and the worldMatrix update of all parent entities.
     * Get worldRotationQuaternion: Will trigger the world rotation (in quaternion) update of itself and all parent entities.
     * Get worldRotation: Will trigger the world rotation(in euler and quaternion) update of itself and world rotation(in quaternion) update of all parent entities.
     * In summary, any update of related variables will cause the dirty mark of one of the full process (worldMatrix or worldRotationQuaternion) to be false.
     */
    private _updateWorldRotationFlag;
    /**
     * Get worldMatrix: Will trigger the worldMatrix update of itself and all parent entities.
     * Get worldPosition: Will trigger the worldMatrix, local position update of itself and the worldMatrix update of all parent entities.
     * Get worldRotationQuaternion: Will trigger the world rotation (in quaternion) update of itself and all parent entities.
     * Get worldRotation: Will trigger the world rotation(in euler and quaternion) update of itself and world rotation(in quaternion) update of all parent entities.
     * In summary, any update of related variables will cause the dirty mark of one of the full process (worldMatrix or worldRotationQuaternion) to be false.
     */
    private _updateWorldPositionAndRotationFlag;
    /**
     * Get worldMatrix: Will trigger the worldMatrix update of itself and all parent entities.
     * Get worldPosition: Will trigger the worldMatrix, local position update of itself and the worldMatrix update of all parent entities.
     * Get worldScale: Will trigger the scaling update of itself and all parent entities.
     * In summary, any update of related variables will cause the dirty mark of one of the full process (worldMatrix) to be false.
     */
    private _updateWorldScaleFlag;
    /**
     * Get worldMatrix: Will trigger the worldMatrix update of itself and all parent entities.
     * Get worldPosition: Will trigger the worldMatrix, local position update of itself and the worldMatrix update of all parent entities.
     * Get worldScale: Will trigger the scaling update of itself and all parent entities.
     * In summary, any update of related variables will cause the dirty mark of one of the full process (worldMatrix) to be false.
     */
    private _updateWorldPositionAndScaleFlag;
    /**
     * Update all world transform property dirty flag, the principle is the same as above.
     */
    private _updateAllWorldFlag;
    private _getParentTransform;
    private _getScaleMatrix;
    private _isContainDirtyFlags;
    private _isContainDirtyFlag;
    private _setDirtyFlagTrue;
    private _setDirtyFlagFalse;
    private _worldAssociatedChange;
    private _rotateByQuat;
    private _translate;
    private _rotateXYZ;
    /**
     * @deprecated Please use translate() function instead.
     * Translate in the specified direction and distance.
     * @param x - The direction and distance of translation in x axis
     * @param y - The direction and distance of translation in y axis
     * @param z - The direction and distance of translation in z axis
     * @param relativeToLocal - Whether relative local space
     */
    translateXYZ(x: number, y: number, z: number, relativeToLocal?: boolean): void;
    /**
     * @deprecated please use rotate() function instead.
     * Rotate according to the specified Euler angle.
     * @param x - The angle that rotate around of x axis (uint: angle)
     * @param y - The angle that rotate around of y axis (uint: angle)
     * @param z - The angle that rotate around of z axis (uint: angle)
     * @param relativeToLocal - Whether relative local space
     */
    rotateXYZ(x: number, y: number, z: number, relativeToLocal?: boolean): void;
}
