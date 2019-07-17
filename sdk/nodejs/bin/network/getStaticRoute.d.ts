import * as pulumi from "@pulumi/pulumi";
export declare function getStaticRoute(args?: GetStaticRouteArgs, opts?: pulumi.InvokeOptions): Promise<GetStaticRouteResult>;
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
