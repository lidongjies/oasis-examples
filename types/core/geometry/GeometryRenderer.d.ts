import { BoundingBox } from "@oasis-engine/math";
import { Camera } from "../Camera";
import { Material } from "../material/Material";
import { Renderer } from "../Renderer";
import { BufferGeometry } from "./BufferGeometry";
/**
 * Geometry renderer
 */
export declare class GeometryRenderer extends Renderer {
    _material: Material;
    /** Buffer geometry */
    private _geometry;
    /**
     * Set buffer geometry
     */
    set geometry(value: BufferGeometry);
    get geometry(): BufferGeometry;
    /**
     * Material.
     */
    set material(value: Material);
    get material(): Material;
    render(camera: Camera): void;
    /**
     * @override
     */
    protected _updateBounds(worldBounds: BoundingBox): void;
}
