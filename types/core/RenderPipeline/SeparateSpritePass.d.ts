import { Camera } from "../Camera";
import { RenderPass } from "./RenderPass";
/**
 * @private
 */
export declare class SeparateSpritePass extends RenderPass {
    private _spriteItems;
    constructor(name?: string, priority?: number);
    get isUsed(): boolean;
    preRender(): void;
    render(camera: any): void;
    postRender(camera: any): void;
    _sortByDistance(eyePos: any): void;
    pushSprite(component: any, positionQuad: any, uvRect: any, tintColor: any, texture: any, renderMode: any, camera: Camera): void;
}
