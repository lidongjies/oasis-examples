import { Vector3 } from "@oasis-engine/math";
import { Camera } from "../Camera";
import { Component } from "../Component";
import { Layer } from "../Layer";
import { Material } from "../material/Material";
import { Renderer } from "../Renderer";
import { RenderElement } from "./RenderElement";
interface SpriteElement {
    component: Renderer;
    positionQuad: any;
    uvRect: any;
    tintColor: any;
    texture: any;
    renderMode: any;
    camera: any;
}
declare type Item = RenderElement | SpriteElement;
/**
 * Render collection.
 * @private
 */
export declare class RenderQueue {
    readonly items: Item[];
    /**
     * Push a render element.
     */
    pushPrimitive(element: RenderElement): void;
    /**
     * Sort the elements.
     */
    sort(cameraPosition: Vector3): void;
    pushSprite(component: Component, positionQuad: any, uvRect: any, tintColor: any, texture: any, renderMode: any, camera: Camera): void;
    render(camera: Camera, replaceMaterial: Material, mask: Layer): void;
    /**
     * Clear collection.
     */
    clear(): void;
    private _isPrimitive;
}
export {};
