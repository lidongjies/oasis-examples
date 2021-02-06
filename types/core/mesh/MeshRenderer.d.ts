import { BoundingBox } from "@oasis-engine/math";
import { Camera } from "../Camera";
import { Entity } from "../Entity";
import { Material } from "../material/Material";
import { Renderer } from "../Renderer";
import { Mesh } from "./Mesh";
/**
 * MeshRenderer Component
 */
export declare class MeshRenderer extends Renderer {
    private _mesh;
    private _instanceMaterials;
    private _sharedMaterials;
    constructor(entity: Entity);
    /**
     * Current mesh object.
     */
    get mesh(): Mesh;
    /**
     * Specify mesh which will be used to render.
     * @param mesh - Mesh Object
     */
    set mesh(mesh: Mesh);
    /**
     * Specify a material that will be used by a primitive and the material could be shared.
     * @param primitiveIndex - Primitive's index
     * @param material - Material.
     */
    setSharedMaterial(primitiveIndex: number, material: Material): void;
    /**
     * Specify a material that will be used by a primitive.
     * @param primitiveIndex - Primitive's index
     * @param material - Material
     */
    setMaterial(primitiveIndex: number, material: Material): void;
    /**
     * Get the material object exclusive to this component
     * @param primitiveIndex - Primitive's index
     * @return Material
     */
    getInstanceMaterial(primitiveIndex: number): Material;
    /**
     * Get the shared primitive material object
     * @param primitiveIndex Primitive's index
     * @return Material
     */
    getSharedMaterial(primitiveIndex: number): Material;
    /**
     * Execute render
     * @param camera
     */
    render(camera: Camera): void;
    /**
     * Destroy the component.
     */
    destroy(): void;
    /**
     * @override
     */
    protected _updateBounds(worldBounds: BoundingBox): void;
}
