import { Entity } from "../Entity";
import { Texture2D } from "../texture/Texture2D";
import { MeshRenderer } from "./MeshRenderer";
import { Skin } from "./Skin";
/**
 * SkinnedMeshRenderer
 */
export declare class SkinnedMeshRenderer extends MeshRenderer {
    private static _jointCountProperty;
    private static _jointSamplerProperty;
    private static _jointMatrixProperty;
    private static _maxJoints;
    matrixPalette: Float32Array;
    jointNodes: Entity[];
    jointTexture: Texture2D;
    private _hasInitJoints;
    private _mat;
    private _weights;
    private weightsIndices;
    /** Whether to use joint texture. Automatically used when the device can't support the maxium number of bones. */
    private _useJointTexture;
    private _skin;
    /**
     * Constructor of SkinnedMeshRenderer
     * @param entity - Entity
     */
    constructor(entity: Entity);
    /**
     * Set morph target weights
     * @param weights - Weights
     */
    setWeights(weights: number[]): void;
    /**
     * Skin Object.
     */
    get skin(): Skin;
    set skin(skin: Skin);
    get weights(): number[];
    _initJoints(): void;
    private findByNodeName;
    private _findParent;
    /**
     * Generate joint texture.
     * Format: (4 * RGBA) * jointCont
     */
    createJointTexture(): void;
}
