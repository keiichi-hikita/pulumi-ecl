import * as pulumi from "@pulumi/pulumi";
export declare function getVolume(args?: GetVolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeResult>;
/**
 * A collection of arguments for invoking getVolume.
 */
export interface GetVolumeArgs {
    readonly name?: string;
    readonly volumeId?: string;
}
/**
 * A collection of values returned by getVolume.
 */
export interface GetVolumeResult {
    readonly availabilityZone: string;
    readonly description: string;
    readonly initiatorIqns: string[];
    readonly iopsPerGb: string;
    readonly name?: string;
    readonly size: number;
    readonly throughput: string;
    readonly virtualStorageId: string;
    readonly volumeId?: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
