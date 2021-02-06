import { Vector3 } from "@oasis-engine/math";
import { GeometryRenderer } from "../geometry";
import { Texture } from "../texture";
/**
 * Particle Renderer Component
 */
export declare class ParticleRenderer extends GeometryRenderer {
    private static _getRandom;
    private _vertexStride;
    private _vertices;
    private _vertexBuffer;
    private _maxCount;
    private _position;
    private _positionRandomness;
    private _positionArray;
    private _velocity;
    private _velocityRandomness;
    private _acceleration;
    private _accelerationRandomness;
    private _color;
    private _colorRandomness;
    private _size;
    private _sizeRandomness;
    private _alpha;
    private _alphaRandomness;
    private _startAngle;
    private _startAngleRandomness;
    private _rotateVelocity;
    private _rotateVelocityRandomness;
    private _lifetime;
    private _startTimeRandomness;
    private _scale;
    private _isOnce;
    private _time;
    private _isInit;
    private _isStart;
    private _updateDirtyFlag;
    private _isRotateToVelocity;
    private _isUseOriginColor;
    private _isScaleByLifetime;
    private _is2d;
    private _isFadeIn;
    private _isFadeOut;
    /**
     * Sprite sheet of texture.
     */
    spriteSheet: {
        x: number;
        y: number;
        w: number;
        h: number;
    }[];
    /**
     * Texture of particle.
     */
    get texture(): Texture;
    set texture(texture: Texture);
    /**
     * Position of particles.
     */
    get position(): Vector3;
    set position(value: Vector3);
    /**
     * Random range of positions.
     */
    get positionRandomness(): Vector3;
    set positionRandomness(value: Vector3);
    /**
     * Array of fixed positions.
     */
    get positionArray(): Vector3[];
    set positionArray(value: Vector3[]);
    /**
     * Velocity of particles.
     */
    get velocity(): Vector3;
    set velocity(value: Vector3);
    /**
     * Random range of velocity.
     */
    get velocityRandomness(): Vector3;
    set velocityRandomness(value: Vector3);
    /**
     * Acceleration of particles.
     */
    get acceleration(): Vector3;
    set acceleration(value: Vector3);
    /**
     * Random range of acceleration.
     */
    get accelerationRandomness(): Vector3;
    set accelerationRandomness(value: Vector3);
    /**
     * Color of particles.
     */
    get color(): Vector3;
    set color(value: Vector3);
    /**
     * Random range of color.
     */
    get colorRandomness(): number;
    set colorRandomness(value: number);
    /**
     * Size of particles.
     */
    get size(): number;
    set size(value: number);
    /**
     * Random range of size.
     */
    get sizeRandomness(): number;
    set sizeRandomness(value: number);
    /**
     * Alpha of particles.
     */
    get alpha(): number;
    set alpha(value: number);
    /**
     * Random range of alpha.
     */
    get alphaRandomness(): number;
    set alphaRandomness(value: number);
    /**
     * Angle of particles.
     */
    get angle(): number;
    set angle(value: number);
    /**
     * Random range of angle.
     */
    get angleRandomness(): number;
    set angleRandomness(value: number);
    /**
     * Rotate velocity of particles.
     */
    get rotateVelocity(): number;
    set rotateVelocity(value: number);
    /**
     * Random range of rotate velocity.
     */
    get rotateVelocityRandomness(): number;
    set rotateVelocityRandomness(value: number);
    /**
     * Lifetime of particles.
     */
    get lifetime(): number;
    set lifetime(value: number);
    /**
     * Random range of start time.
     */
    get startTimeRandomness(): number;
    set startTimeRandomness(value: number);
    /**
     * Scale factor of particles.
     */
    get scale(): number;
    set scale(value: number);
    /**
     * Max count of particles.
     */
    get maxCount(): number;
    set maxCount(value: number);
    /**
     * Play once or not.
     */
    get isOnce(): boolean;
    set isOnce(value: boolean);
    /**
     * Follow the direction of velocity or not.
     */
    get isRotateToVelocity(): boolean;
    set isRotateToVelocity(value: boolean);
    /**
     * Follow the direction of velocity or not.
     */
    get isUseOriginColor(): boolean;
    set isUseOriginColor(value: boolean);
    /**
     * Is scale by lifetime  or not.
     */
    get isScaleByLifetime(): boolean;
    set isScaleByLifetime(value: boolean);
    /**
     * Is 2D rendering or not.
     */
    get is2d(): boolean;
    set is2d(value: boolean);
    /**
     * Is fade in or not.
     */
    get isFadeIn(): boolean;
    set isFadeIn(value: boolean);
    /**
     * Is fade out or not.
     */
    get isFadeOut(): boolean;
    set isFadeOut(value: boolean);
    constructor(props: any);
    /**
     * start emitting
     */
    start(): void;
    /**
     * stop emitting
     */
    stop(): void;
    private _createMaterial;
    private _createGeometry;
    private _updateBuffer;
    private _updateSingleBuffer;
    private _updateSingleUv;
}
