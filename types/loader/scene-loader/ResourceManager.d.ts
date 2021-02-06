import { Oasis } from "./Oasis";
import { BaseResource, BlinnPhongMaterialResource, GLTFResource, PBRMaterialResource, SchemaResource, ScriptResource, TextureCubeMapResource, TextureResource } from "./resources";
import { AssetConfig } from "./types";
export declare const RESOURCE_CLASS: {
    script: typeof ScriptResource;
    gltf: typeof GLTFResource;
    texture: typeof TextureResource;
    cubeTexture: typeof TextureCubeMapResource;
    PBRMaterial: typeof PBRMaterialResource;
    PBRSpecularMaterial: typeof PBRMaterialResource;
    unlitMaterial: typeof PBRMaterialResource;
    BlinnPhongMaterial: typeof BlinnPhongMaterialResource;
    base: typeof BaseResource;
};
export declare function registerResource(type: string, resource: any): void;
export declare class SchemaResourceManager {
    private oasis;
    private resourceMap;
    private resourceIdMap;
    private maxId;
    private readonly engineResourceManager;
    constructor(oasis: Oasis);
    load(asset: AssetConfig): Promise<SchemaResource>;
    add(asset: AssetConfig): Promise<any>;
    remove(id: string): Promise<Array<string>>;
    update(id: string, key: string, value: any): {
        resource: SchemaResource;
        id: string;
        key: string;
        value: any;
    };
    updateMeta(id: string, key: string, value: any): void;
    get(id: string): SchemaResource;
    getAll(): Array<SchemaResource>;
    private getAddResourceResult;
    get isLocal(): boolean;
    get useCompressedTexture(): boolean;
}
