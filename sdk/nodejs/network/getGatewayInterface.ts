// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export function getGatewayInterface(args?: GetGatewayInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayInterfaceResult> {
    args = args || {};
    return pulumi.runtime.invoke("ecl:network/getGatewayInterface:getGatewayInterface", {
        "awsGwId": args.awsGwId,
        "azureGwId": args.azureGwId,
        "description": args.description,
        "gatewayInterfaceId": args.gatewayInterfaceId,
        "gcpGwId": args.gcpGwId,
        "gwVipv4": args.gwVipv4,
        "gwVipv6": args.gwVipv6,
        "interdcGwId": args.interdcGwId,
        "internetGwId": args.internetGwId,
        "name": args.name,
        "netmask": args.netmask,
        "networkId": args.networkId,
        "primaryIpv4": args.primaryIpv4,
        "primaryIpv6": args.primaryIpv6,
        "region": args.region,
        "secondaryIpv4": args.secondaryIpv4,
        "secondaryIpv6": args.secondaryIpv6,
        "serviceType": args.serviceType,
        "status": args.status,
        "tenantId": args.tenantId,
        "vpnGwId": args.vpnGwId,
        "vrid": args.vrid,
    }, opts);
}

/**
 * A collection of arguments for invoking getGatewayInterface.
 */
export interface GetGatewayInterfaceArgs {
    readonly awsGwId?: string;
    readonly azureGwId?: string;
    readonly description?: string;
    readonly gatewayInterfaceId?: string;
    readonly gcpGwId?: string;
    readonly gwVipv4?: string;
    readonly gwVipv6?: string;
    readonly interdcGwId?: string;
    readonly internetGwId?: string;
    readonly name?: string;
    readonly netmask?: number;
    readonly networkId?: string;
    readonly primaryIpv4?: string;
    readonly primaryIpv6?: string;
    readonly region?: string;
    readonly secondaryIpv4?: string;
    readonly secondaryIpv6?: string;
    readonly serviceType?: string;
    readonly status?: string;
    readonly tenantId?: string;
    readonly vpnGwId?: string;
    readonly vrid?: number;
}

/**
 * A collection of values returned by getGatewayInterface.
 */
export interface GetGatewayInterfaceResult {
    readonly awsGwId: string;
    readonly azureGwId: string;
    readonly description: string;
    readonly gatewayInterfaceId: string;
    readonly gcpGwId: string;
    readonly gwVipv4: string;
    readonly gwVipv6: string;
    readonly interdcGwId: string;
    readonly internetGwId: string;
    readonly name: string;
    readonly netmask: number;
    readonly networkId: string;
    readonly primaryIpv4: string;
    readonly primaryIpv6: string;
    readonly region: string;
    readonly secondaryIpv4: string;
    readonly secondaryIpv6: string;
    readonly serviceType: string;
    readonly status?: string;
    readonly tenantId: string;
    readonly vpnGwId: string;
    readonly vrid: number;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
