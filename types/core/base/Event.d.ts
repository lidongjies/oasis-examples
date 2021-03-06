import { EventDispatcher } from "./EventDispatcher";
export declare type Listener = ((e: Event) => any) & {
    once?: boolean;
};
/** Event Object. * @class */
export declare class Event {
    get propagationStopped(): boolean;
    get target(): EventDispatcher;
    set target(t: EventDispatcher);
    get timeStamp(): number;
    get currentTarget(): EventDispatcher;
    set currentTarget(t: EventDispatcher);
    get bubbles(): boolean;
    get type(): string | number;
    data: any;
    private _timeStamp;
    private _target;
    private _currentTarget;
    private _bubbles;
    private _propagationStopped;
    private _type;
    constructor(type: string | number, target?: EventDispatcher, data?: any, bubbles?: boolean);
    stopPropagation(): void;
}
