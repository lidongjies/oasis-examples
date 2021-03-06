import { Component } from "../Component";
import { Entity } from "../Entity";
import { AnimationClip } from "./AnimationClip";
import { AnimationLayer } from "./AnimationLayer";
import { AnimationOptions } from "./types";
/**
 * Animation Component, the AnimationClip player with crossFade and mix abilities.
 */
export declare class Animation extends Component {
    /**
     * The timeScale getter, timeScale which used for scale the animation time to speed up or slow down the animation.
     */
    get timeScale(): number;
    /**
     * The timeScale setter, timeScale which used for scale the animation time to speed up or slow down the animation.
     */
    set timeScale(val: number);
    /**
     * Linearly interpolates between two values.
     * @param outValue - The output value after interpolation.
     * @param startValue - The start value before interpolation.
     * @param endValue - The end value after interpolation.
     * @param outputSize - The length of the output values.
     * @param alpha - The weight of the endValue in interpolation algorithm.
     * @private
     */
    static lerp(outValue: number | Float32Array, startValue: number | Float32Array, endValue: number | Float32Array, alpha: number, outputSize: number): number | Float32Array;
    private _animSet;
    private _animLayers;
    private _timeScale;
    private _channelTargets;
    /**
     * @param entity - The entitiy which the animation component belongs to.
     */
    constructor(entity: Entity);
    /**
     * Evaluates the animation component based on deltaTime.
     * @param deltaTime - The deltaTime when the animation update.
     * @private
     */
    update(deltaTime: number): void;
    /**
     * Add a AnimationClip to the animation with the name.
     * @param animClip - The AnimationClip which you want to be added.
     * @param name - The name of the AnimationClip.
     */
    addAnimationClip(animClip: AnimationClip, name: string): void;
    /**
     * Remove clip from the animation.
     * @param name - The name of the AnimationClip.
     */
    removeAnimationClip(name: string): void;
    /**
     * Get length of the AnimationClip By the name.
     * @param name - The name of the AnimationClip.
     * @return The AnimationClip length.
     */
    getAnimationClipLength(name: string): number;
    /**
     * Get the AnimationClip By name.
     * @param name - The name of the AnimationClip.
     * @return The AnimationClip which match the name.
     */
    getAnimationClip(name: string): AnimationClip;
    /**
     * Return whether is playing.
     * @return {boolean}
     */
    isPlaying(): boolean;
    /**
     * Play the AnimationClip by name.
     * @param name - The AnimatioinClip's name.
     * @param options - The play options when playing AnimationClip.
     */
    playAnimationClip(name: string, options?: AnimationOptions): void;
    /**
     * CrossFade to the AnimationClip by name.
     * @param name - The AnimatioinClip's name.
     * @param crossFadeDuration - The milliseconds of the crossFade's duration.
     * @param options - The play options when playing AnimationClip.
     */
    CrossFade(name: string, crossFadeDuration: number, options: AnimationOptions): void;
    /**
     * Mix the AnimationClip by name.
     * @param name - The AnimatioinClip's name.
     * @param mixBoneName - Takes effect on the bone named mixBoneName and the child bones attached to it.
     * @param options - The play options when playing AnimationClip.
     */
    mix(name: string, mixBoneName: string, options: AnimationOptions): void;
    /**
     * Stop play
     * @param rightnow - Stop it immediately, or it will stop at the end of the clip
     */
    stop(rightnow: boolean): void;
    /**
     * Jump to a frame of the animation, take effect immediately.
     * @param frameTime - The time which the animation will jump to.
     */
    jumpToFrame(frameTime: number): void;
    /**
     * Remove the mixed animation associated with targetLayer.
     * @param targetLayer - The mixed AnimatioinLayer which will be removed.
     * @private
     */
    _removeRefMixLayers(targetLayer: AnimationLayer, mixNode?: any): void;
    /**
     * Update animation value.
     * @private
     */
    _updateValues(): void;
    /**
     * @return Channel value.
     * @param channelIndex - The channel's index in AnimationClip's channels property.
     * @param outputSize - The length of the output values.
     * @private
     */
    _getChannelValue(channelIndex: number, outputSize: number): number | boolean | Float32Array;
}
