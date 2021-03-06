import { EngineObject } from "./EngineObject";
import { Event } from "./Event";
/**
 * EventDispatcher, which can be inherited as a base class.
 */
export declare class EventDispatcher extends EngineObject {
    private _evts;
    private _evtCount;
    /**
     * Determine whether there is event listening.
     * @param event - Event name
     * @returns Returns whether there is a corresponding event
     */
    hasEvent(event: string): boolean;
    /**
     * Returns the names of all registered events.
     * @returns All event names
     */
    eventNames(): string[];
    /**
     * Returns the number of listeners with the specified event name.
     * @param event - Event name
     * @returns The count of listeners
     */
    listenerCount(event: string): number;
    /**
     * Dispatch the event with the specified event name.
     * @param event - Event name
     * @param data - Data
     * @returns - Whether the dispatching is successful
     */
    dispatch(event: string, data?: any): boolean;
    /**
     * Add a listener/
     * @param event - Event name
     * @param fn - Function
     * @returns This
     */
    on(event: string, fn: Function): EventDispatcher;
    /**
     * Add a one-time listener.
     * @param event - Event name
     * @param fn - Function
     * @returns This
     */
    once(event: string, fn: Function): EventDispatcher;
    /**
     * @deprecated Use `on/once` instead.
     * Add a listener function with the specified event name.
     * @param event - Event name
     * @param fn - Function
     * @param once - Is it a one-time listener
     * @returns this
     */
    addEventListener(event: string, fn: Function, once?: boolean): EventDispatcher;
    /**
     * Remove the event listener(s) of the specified event name.
     * @param event - Event name
     * @param fn - Function, If is undefined, delete all corresponding event listeners.
     */
    off(event: string, fn?: Function): EventDispatcher;
    /**
     * @deprecated Use `off` instead.
     * Remove the event listener(s) of the specified event name.
     * @param event - Event name
     * @param fn - Function, If is undefined, delete all corresponding event listeners.
     */
    removeEventListener(event: string, fn?: Function): EventDispatcher;
    /**
     * Remove all event listeners.
     * @param event - Event name, delete all events if not passed
     */
    removeAllEventListeners(event?: string): void;
    /**
     * @deprecated Use `dispatch` instead.
     */
    trigger(e: Event): void;
    private _clearEvent;
}
