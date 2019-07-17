import * as pulumi from "@pulumi/pulumi";
export declare function getFlavor(args?: GetFlavorArgs, opts?: pulumi.InvokeOptions): Promise<GetFlavorResult>;
/**
 * A collection of arguments for invoking getFlavor.
 */
export interface GetFlavorArgs {
    readonly disk?: number;
    readonly minDisk?: number;
    readonly minRam?: number;
    readonly name?: string;
    readonly ram?: number;
    readonly region?: string;
    readonly rxTxFactor?: number;
    readonly swap?: number;
    readonly vcpus?: number;
}
/**
 * A collection of values returned by getFlavor.
 */
export interface GetFlavorResult {
    readonly disk: number;
    readonly isPublic: boolean;
    readonly minDisk: number;
    readonly minRam: number;
    readonly name: string;
    readonly ram: number;
    readonly region: string;
    readonly rxTxFactor: number;
    readonly swap: number;
    readonly vcpus: number;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
