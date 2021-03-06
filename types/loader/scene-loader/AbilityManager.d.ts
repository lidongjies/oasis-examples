import { Component } from "@oasis-engine/core";
import { Oasis } from "./Oasis";
import { ComponentConfig } from "./types";
export declare class AbilityManager {
    private oasis;
    private abilityMap;
    constructor(oasis: Oasis);
    add(abilityConfig: ComponentConfig): Component;
    update(id: string, key: string, value: any): {
        id: string;
        key: string;
        value: any;
    };
    get(id: string): Component;
    delete(id: string): string;
    private getCompConstructor;
    private mixPropsToExplicitProps;
    private checkIsAsset;
}
