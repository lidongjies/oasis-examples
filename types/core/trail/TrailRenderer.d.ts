import { Entity } from "../Entity";
import { GeometryRenderer } from "../geometry";
import { Texture2D } from "../texture";
/**
 * @deprecated
 */
export declare class TrailRenderer extends GeometryRenderer {
    private _vertexStride;
    private _vertices;
    private _vertexBuffer;
    private _stroke;
    private _minSeg;
    private _lifetime;
    private _maxPointNum;
    private _points;
    private _pointStates;
    private _strapPoints;
    private _curPointNum;
    private _prePointsNum;
    /**
     * @deprecated
     */
    constructor(entity: Entity, props: any);
    /**
     * @deprecated
     * Set trail texture.
     * @param texture
     */
    setTexture(texture: Texture2D): void;
    private _initGeometry;
    private _updateStrapVertices;
    private _updateStrapCoords;
    private _projectOnVector;
    private _projectOnPlane;
}
