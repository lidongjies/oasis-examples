import { AssetPromise } from "./AssetPromise";
import { LoadItem } from "./LoadItem";
import { Engine } from "..";
import { Loader } from "./Loader";
import { AssetType } from "./AssetType";
/**
 * ResourceManager
 */
export declare class ResourceManager {
    readonly engine: Engine;
    /** Loader collection. */
    private static _loaders;
    private static _extTypeMapping;
    private static _getTypeByUrl;
    /** The number of retries after failing to load assets. */
    retryCount: number;
    /** Retry delay time after failed to load assets, in milliseconds. */
    retryInterval: number;
    /** The default timeout period for loading assets, in milliseconds. */
    timeout: number;
    /** Asset path pool, key is asset ID, value is asset path */
    private _assetPool;
    /** Asset pool, the key is the asset path and the value is the asset. */
    private _assetUrlPool;
    /** Reference counted object pool, key is the object ID, and reference counted objects are put into this pool. */
    private _refObjectPool;
    /** Loading assets. */
    private _loadingPromises;
    /**
     * Create a ResourceManager.
     * @param engine - Engine to which the current ResourceManager belongs
     */
    constructor(engine: Engine);
    /**
     * Load asset asynchronously through the path.
     * @param path - Path
     * @returns Asset promise
     */
    load<T>(path: string): AssetPromise<T>;
    /**
     * Load asset collection asynchronously through urls.
     * @param path - Path collections
     * @returns Asset Promise
     */
    load(pathes: string[]): AssetPromise<Object[]>;
    /**
     * Load the asset asynchronously by asset item information.
     * @param assetItem - AssetItem
     * @returns AssetPromise
     */
    load<T>(assetItem: LoadItem): AssetPromise<T>;
    /**
     * Load the asset collection asynchronously by loading the information collection.
     * @param assetItems - Asset collection
     * @returns AssetPromise
     */
    load(assetItems: LoadItem[]): AssetPromise<Object[]>;
    /**
     * Cancel all assets that have not finished loading.
     */
    cancelNotLoaded(): void;
    /**
     * Cancel assets whose url has not finished loading.
     * @param url - Resource url
     */
    cancelNotLoaded(url: string): void;
    /**
     * Cancel the incompletely loaded assets in urls.
     * @param urls - Resource urls
     */
    cancelNotLoaded(urls: string[]): void;
    /**
     * Garbage collection will release resource objects managed by reference counting.
     * @remarks The release principle is that it is not referenced by the components, including direct and indirect reference.
     */
    gc(): void;
    /**
     * Get asset url from instanceId.
     * @param instanceId - Engine instance id
     * @returns Asset url
     */
    getAssetPath(instanceId: number): string;
    private _assignDefaultOptions;
    private _loadSingleItem;
}
/**
 * Declare ResourceLoader's decorator.
 * @param assetType - Type of asset
 * @param extnames - Name of file extension
 */
export declare function resourceLoader(assetType: AssetType, extnames: string[], useCache?: boolean): <T extends Loader<any>>(Target: new (useCache: boolean) => T) => void;
