import { LoadItem } from "./LoadItem";
import { AssetPromise } from "./AssetPromise";
import { RequestConfig } from "./request";
import { ResourceManager } from "./ResourceManager";
/**
 * Loader abstract class.
 */
export declare abstract class Loader<T> {
    readonly useCache: boolean;
    request: <U>(url: string, config: RequestConfig) => AssetPromise<U>;
    abstract load(item: LoadItem, resouceManager: ResourceManager): AssetPromise<T>;
    constructor(useCache: boolean);
}
