// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export function getPort(args?: GetPortArgs, opts?: pulumi.InvokeOptions): Promise<GetPortResult> {
    args = args || {};
    return pulumi.runtime.invoke("ecl:network/getPort:getPort", {
        "description": args.description,
        "deviceId": args.deviceId,
        "deviceOwner": args.deviceOwner,
        "macAddress": args.macAddress,
        "name": args.name,
        "networkId": args.networkId,
        "portId": args.portId,
        "region": args.region,
        "segmentationId": args.segmentationId,
        "segmentationType": args.segmentationType,
    }, opts);
}

/**
 * A collection of arguments for invoking getPort.
 */
export interface GetPortArgs {
    readonly description?: string;
    readonly deviceId?: string;
    readonly deviceOwner?: string;
    readonly macAddress?: string;
    readonly name?: string;
    readonly networkId?: string;
    readonly portId?: string;
    readonly region?: string;
    readonly segmentationId?: number;
    readonly segmentationType?: string;
}

/**
 * A collection of values returned by getPort.
 */
export interface GetPortResult {
    readonly adminStateUp: boolean;
    readonly allFixedIps: string[];
    readonly allowedAddressPairs: { ipAddress: string, macAddress?: string }[];
    readonly description: string;
    readonly deviceId: string;
    readonly deviceOwner: string;
    readonly fixedIps: { ipAddress?: string, subnetId: string }[];
    readonly macAddress: string;
    readonly managedByService: boolean;
    readonly name: string;
    readonly networkId: string;
    readonly portId: string;
    readonly region: string;
    readonly segmentationId: number;
    readonly segmentationType: string;
    readonly status: string;
    readonly tags: {[key: string]: any};
    readonly tenantId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
