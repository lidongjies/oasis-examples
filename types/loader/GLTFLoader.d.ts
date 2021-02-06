import { Loader, AssetPromise, LoadItem, ResourceManager } from "@oasis-engine/core";
import { GLTFResource } from "./gltf/glTF";
export declare class GLTFLoader extends Loader<GLTFResource> {
    private baseUrl;
    load(item: LoadItem, resourceManager: ResourceManager): AssetPromise<GLTFResource>;
    private requestGLTF;
    private requestGLB;
    private isGLB;
    /**
     * Load resources in gltf.
     * @param gltf
     * @param resourceManager
     */
    private _loadGLTFResources;
    private _loadBuffers;
    private _loadImages;
}
