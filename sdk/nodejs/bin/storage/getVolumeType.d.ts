import * as pulumi from "@pulumi/pulumi";
export declare function getVolumeType(args?: GetVolumeTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeTypeResult>;
/**
 * A collection of arguments for invoking getVolumeType.
 */
export interface GetVolumeTypeArgs {
    readonly name?: string;
    readonly volumeTypeId?: string;
}
/**
 * A collection of values returned by getVolumeType.
 */
export interface GetVolumeTypeResult {
    readonly extraSpecs: {
        availableIopsPerGbs?: string[];
        availableVolumeSizes?: number[];
        availableVolumeThroughputs?: string[];
    };
    readonly name?: string;
    readonly volumeTypeId?: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
