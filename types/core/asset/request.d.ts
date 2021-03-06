import { AssetPromise } from "./AssetPromise";
export declare type RequestConfig = {
    type?: XMLHttpRequestResponseType | "image";
    retryCount?: number;
    retryInterval?: number;
    timeout?: number;
} & RequestInit;
/**
 * Web request.
 * @param url - The link
 * @param config - Load configuration
 */
export declare function request<T>(url: string, config?: RequestConfig): AssetPromise<T>;
export declare class MultiExecutor {
    private execFunc;
    private totalCount;
    private interval;
    private _timeoutId;
    private _currentCount;
    constructor(execFunc: (count?: number) => Promise<any>, totalCount: number, interval: number);
    private done;
    start(done?: Function): void;
    stop(): void;
    private exec;
}
