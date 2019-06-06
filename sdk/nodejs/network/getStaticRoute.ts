// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export function getStaticRoute(args?: GetStaticRouteArgs, opts?: pulumi.InvokeOptions): Promise<GetStaticRouteResult> {
    args = args || {};
    return pulumi.runtime.invoke("ecl:network/getStaticRoute:getStaticRoute", {
        "awsGwId": args.awsGwId,
        "azureGwId": args.azureGwId,
        "description": args.description,
        "destination": args.destination,
        "gcpGwId": args.gcpGwId,
        "interdcGwId": args.interdcGwId,
        "internetGwId": args.internetGwId,
        "name": args.name,
        "nexthop": args.nexthop,
        "region": args.region,
        "serviceType": args.serviceType,
        "staticRouteId": args.staticRouteId,
        "status": args.status,
        "tenantId": args.tenantId,
        "vpnGwId": args.vpnGwId,
    }, opts);
}

/**
 * A collection of arguments for invoking getStaticRoute.
 */
export interface GetStaticRouteArgs {
    readonly awsGwId?: string;
    readonly azureGwId?: string;
    readonly description?: string;
    readonly destination?: string;
    readonly gcpGwId?: string;
    readonly interdcGwId?: string;
    readonly internetGwId?: string;
    readonly name?: string;
    readonly nexthop?: string;
    readonly region?: string;
    readonly serviceType?: string;
    readonly staticRouteId?: string;
    readonly status?: string;
    readonly tenantId?: string;
    readonly vpnGwId?: string;
}

/**
 * A collection of values returned by getStaticRoute.
 */
export interface GetStaticRouteResult {
    readonly awsGwId: string;
    readonly azureGwId: string;
    readonly description: string;
    readonly destination: string;
    readonly gcpGwId: string;
    readonly interdcGwId: string;
    readonly internetGwId: string;
    readonly name: string;
    readonly nexthop: string;
    readonly region: string;
    readonly serviceType: string;
    readonly staticRouteId: string;
    readonly status: string;
    readonly tenantId: string;
    readonly vpnGwId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
