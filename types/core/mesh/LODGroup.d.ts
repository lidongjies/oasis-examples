import { Camera } from "../Camera";
import { Renderer } from "../Renderer";
/**
 * LOD rendering group
 */
export declare class LODGroup extends Renderer {
    private _lods;
    /**
     * Add a LOD level.
     * @param distance - Distance between current entity and the camera.
     * @param renderer - Renderer, when LOD level enabled, use this renderer to render.
     */
    addLod(distance: number, renderer: Renderer): void;
    /**
     * @private
     */
    render(camera: Camera): void;
}
