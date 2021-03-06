import { AnimationClip, Camera, Engine, EngineObject, Entity, Material, Mesh, PBRMaterial, Scene, Skin, Texture2D } from "@oasis-engine/core";
import { LoadedGLTFResource } from "../GLTF";
/**
 * Extension dedicated registration key.
 */
export declare const HandledExtensions: {
    PBRMaterial: string;
    KHR_lights: string;
    KHR_materials_unlit: string;
    KHR_materials_pbrSpecularGlossiness: string;
    KHR_techniques_webgl: string;
    KHR_draco_mesh_compression: string;
};
/**
 * Register extension components to glTF loader.
 * @param extobj - Need to add extensions
 */
export declare function RegistExtension(extobj: any): void;
export interface GLTFParsed extends LoadedGLTFResource {
    asset: Partial<GLTFResource>;
    engine?: Engine;
}
export declare class GLTFResource extends EngineObject {
    defaultSceneRoot: Entity;
    defaultScene: Scene;
    scenes: Scene[];
    textures?: Texture2D[];
    animations?: AnimationClip[];
    materials?: Material[];
    meshes?: Mesh[];
    skins?: Skin[];
    cameras?: Camera[];
    meta: any;
}
/**
 * Parse the glTF structure.
 * @param resource
 * @returns {*}
 * @private
 */
export declare function parseGLTF(data: LoadedGLTFResource, engine: Engine): Promise<GLTFResource>;
/**
 * Parse material.
 * @param gltfMaterial
 * @param resources
 * @private
 */
export declare function parseMaterial(gltfMaterial: any, resources: any): Promise<PBRMaterial>;
/**
 * Parse skin.
 * @param gltfSkin
 * @param resources
 * @private
 */
export declare function parseSkin(gltfSkin: any, resources: any): Promise<Skin>;
/**
 * Parse Mesh
 * @param gltfMesh
 * @param resources
 * @private
 */
export declare function parseMesh(gltfMesh: any, resources: any): Promise<Mesh>;
/**
 * Parse Animation.
 * @param gltfAnimation
 * @param resources
 * @returns {*}
 * @private
 */
export declare function parseAnimation(gltfAnimation: any, resources: any): Promise<AnimationClip>;
/**
 * Parse the node of glTF.
 * @param gltfNode
 * @param resources
 * @private
 */
export declare function parseNode(gltfNode: any, resources: GLTFParsed): Promise<Entity>;
/**
 * parse the scene of glTF.
 * @param gltfScene
 * @param resources
 * @returns {{nodes: Array}}
 * @private
 */
export declare function parseScene(gltfScene: any, resources: any): Promise<{
    nodes: any[];
}>;
/**
 * Get content through index.
 * @param name
 * @param idx
 * @param resources
 * @returns {*}
 * @private
 */
export declare function getItemByIdx(name: any, idx: any, resources: any, inverse?: boolean): any;
/**
 * Construct scene graph and create Ability according to node configuration.
 * @param resources
 * @private
 */
export declare function buildSceneGraph(resources: GLTFParsed): GLTFResource;
