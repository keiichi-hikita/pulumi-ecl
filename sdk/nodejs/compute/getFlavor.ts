// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to get the ID of an available Enterprise Cloud flavor.
 */
export function getFlavor(args?: GetFlavorArgs, opts?: pulumi.InvokeOptions): Promise<GetFlavorResult> {
    args = args || {};
    return pulumi.runtime.invoke("ecl:compute/getFlavor:getFlavor", {
        "disk": args.disk,
        "minDisk": args.minDisk,
        "minRam": args.minRam,
        "name": args.name,
        "ram": args.ram,
        "region": args.region,
        "rxTxFactor": args.rxTxFactor,
        "swap": args.swap,
        "vcpus": args.vcpus,
    }, opts);
}

/**
 * A collection of arguments for invoking getFlavor.
 */
export interface GetFlavorArgs {
    /**
     * The exact amount of disk (in gigabytes).
     */
    readonly disk?: number;
    /**
     * The minimum amount of disk (in gigabytes).
     */
    readonly minDisk?: number;
    /**
     * The minimum amount of RAM (in megabytes).
     */
    readonly minRam?: number;
    /**
     * The name of the flavor.
     */
    readonly name?: string;
    /**
     * The exact amount of RAM (in megabytes).
     */
    readonly ram?: number;
    /**
     * The region in which to obtain the V2 Compute client.
     * If omitted, the `region` argument of the provider is used.
     */
    readonly region?: string;
    /**
     * The `rx_tx_factor` of the flavor.
     */
    readonly rxTxFactor?: number;
    /**
     * The amount of swap (in gigabytes).
     */
    readonly swap?: number;
    /**
     * The amount of VCPUs.
     */
    readonly vcpus?: number;
}

/**
 * A collection of values returned by getFlavor.
 */
export interface GetFlavorResult {
    /**
     * Whether the flavor is public or private.
     */
    readonly isPublic: boolean;
    readonly region: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
