import { EngineObject } from "../base/EngineObject";
import { InterpolationType } from "./AnimationConst";
import { IChannel, ISample, List, Value } from "./types";
export declare enum TagetType {
    position = 0,
    rotation = 1,
    scale = 2,
    other = 3
}
/**
 * Data for an animation, set of Samples and Channels.
 * @extends AssetObject
 */
export declare class AnimationClip extends EngineObject {
    readonly name: string;
    private static _tagetTypeMap;
    duration: number;
    durationIndex: number;
    samplers: ISample[];
    channels: IChannel[];
    /**
     * @constructor
     * @param name - The AnimationClip's name.
     */
    constructor(name: string);
    /**
     * Add sampler to samplers of the AnimationClip.
     * @param _input - The index of an accessor containing keyframe input values.
     * @param _output - The index of an accessor containing keyframe output values.
     * @param _outputSize - The length of the output values.
     * @param _interpolation - Interpolation algorithm.
     */
    addSampler(_input: List, _output: List, _outputSize: number, _interpolation?: InterpolationType): void;
    /**
     * Add channel to channels of the AnimationClip.
     * @param samplerIndex - The sampler's index in channel's sampler property.
     * @param targetID - Entity name.
     * @param targetPath - Transform property name: position, rotation, scale.
     */
    addChannel(samplerIndex: number, targetID: string, targetPath: string): void;
    /**
     * Get length of the channel.
     * @return {number} Number of channels.
     */
    getChannelCount(): number;
    /**
     * Get the object which the channel acting on.
     * @return Channel objects.
     * @param channelIndex - The channel's index in AnimationClip's channels property.
     */
    getChannelObject(channelIndex: number): IChannel;
    /**
     * Get frame count of the channel.
     * @return Channel frame count.
     * @param channelIndex - The channel's index in AnimationClip's channels property.
     */
    getFrameCount(channelIndex: number): number;
    /**
     * Get frame time of the channel by channelIndex and frameIndex.
     * @return channel frame time
     * @param channelIndex - The channel's index in AnimationClip's channels property.
     * @param frameIndex - The keyframe's index in sampler.input.
     */
    getFrameTime(channelIndex: number, frameIndex: number): number;
    /**
     * Get length of the channel.
     * @return channel time length
     * @param channelIndex - The channel's index in AnimationClip's channels property.
     */
    getChannelTimeLength(channelIndex: number): number;
    /**
     * Get the channel value.
     * @return channel value
     * @param channelIndex - The channel's index in AnimationClip's channels property.
     */
    createChannelValue(channelIndex: number): number | Float32Array | number[];
    /**
     * @private
     * @param outValue - The output value after interpolation.
     * @param channelIndex - The channel's index in AnimationClip's channels property.
     * @param frameIndex - The keyframe's index in sampler.input.
     * @param nextFrameIndex - The next keyframe's index in sampler.input.
     * @param alpha - The weight of the next keyframe in interpolation algorithm.
     */
    evaluate(outValue: Value, channelIndex: number, frameIndex: number, nextFrameIndex: number, alpha: number): Value;
    evaluateCubicSpline(outValue: Value, output: List, outputSize: number, frameIndex: number, nextFrameIndex: number, alpha: number): void;
    evaluateLinear(outValue: Value, output: List, outputSize: number, frameIndex: number, nextFrameIndex: number, alpha: number): void;
    private _quaSlerp;
}
