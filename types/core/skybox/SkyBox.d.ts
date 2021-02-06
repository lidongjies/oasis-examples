import { BoundingBox } from "@oasis-engine/math";
import { Entity } from "../Entity";
import { GeometryRenderer } from "../geometry/GeometryRenderer";
import { TextureCubeMap } from "../texture/TextureCubeMap";
/**
 * Skybox Component
 */
export declare class SkyBox extends GeometryRenderer {
    private _skyBoxMap;
    private _matrix;
    private _initBounds;
    /**
     * Contructor of skybox
     * @param - Entity
     */
    constructor(entity: Entity);
    /**
     * CubeMap of current skybox.
     */
    get skyBoxMap(): TextureCubeMap;
    set skyBoxMap(v: TextureCubeMap);
    /**
     * @override
     */
    protected _updateBounds(worldBounds: BoundingBox): void;
}
