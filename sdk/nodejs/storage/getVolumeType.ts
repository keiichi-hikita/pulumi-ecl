// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export function getVolumeType(args?: GetVolumeTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeTypeResult> {
    args = args || {};
    return pulumi.runtime.invoke("ecl:storage/getVolumeType:getVolumeType", {
        "name": args.name,
        "volumeTypeId": args.volumeTypeId,
    }, opts);
}

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
    readonly extraSpecs: { availableIopsPerGbs?: string[], availableVolumeSizes?: number[], availableVolumeThroughputs?: string[] };
    readonly name?: string;
    readonly volumeTypeId?: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
