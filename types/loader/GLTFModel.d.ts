import { Component, WrapMode, Animation } from "@oasis-engine/core";
import { GLTFResource } from "./gltf/glTF";
/**
 * @deprecated
 * Temporarily only for editor use.
 * Remove when editor finish change from gltf to prefab.
 */
export declare class GLTFModel extends Component {
    get asset(): GLTFResource;
    set asset(value: GLTFResource);
    get animator(): Animation;
    get autoPlay(): string;
    set autoPlay(value: string);
    get loop(): WrapMode;
    set loop(value: WrapMode);
    _animator: Animation;
    animationsNames: String[];
    private _asset;
    private GLTFNode;
    private _loop;
    private _autoPlay;
    private _hasBuiltNode;
    constructor(entity: any);
    /**
     * Init.
     * @param props - Init props
     */
    init(props: any): void;
    /**
     * @override
     */
    _onEnable(): void;
    /**
     * @override
     */
    _onDisable(): void;
}
