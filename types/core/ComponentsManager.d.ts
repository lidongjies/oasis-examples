import { Camera } from "./Camera";
import { Component } from "./Component";
import { Renderer } from "./Renderer";
import { Script } from "./Script";
import { RenderContext } from "./RenderPipeline/RenderContext";
/**
 * The manager of the components.
 */
export declare class ComponentsManager {
    private _onStartScripts;
    private _onUpdateScripts;
    private _onLateUpdateScripts;
    private _destoryComponents;
    private _onUpdateAnimations;
    private _renderers;
    private _onUpdateRenderers;
    private _componentsContainerPool;
    addRenderer(renderer: Renderer): void;
    removeRenderer(renderer: Renderer): void;
    addOnStartScript(script: Script): void;
    removeOnStartScript(script: Script): void;
    addOnUpdateScript(script: Script): void;
    removeOnUpdateScript(script: Script): void;
    addOnLateUpdateScript(script: Script): void;
    removeOnLateUpdateScript(script: Script): void;
    addOnUpdateAnimations(animation: Component): void;
    removeOnUpdateAnimations(animation: Component): void;
    addOnUpdateRenderers(renderer: Renderer): void;
    removeOnUpdateRenderers(renderer: Renderer): void;
    addDestoryComponent(component: any): void;
    callScriptOnStart(): void;
    callScriptOnUpdate(deltaTime: any): void;
    callScriptOnLateUpdate(deltaTime: any): void;
    callAnimationUpdate(deltaTime: any): void;
    callRendererOnUpdate(deltaTime: number): void;
    callRender(context: RenderContext): void;
    callComponentDestory(): void;
    callCameraOnBeginRender(camera: Camera): void;
    callCameraOnEndRender(camera: Camera): void;
    getActiveChangedTempList(): Component[];
    putActiveChangedTempList(componentContainer: Component[]): void;
}
