// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Use this data source to get the ID of an OpenStack endpoint.
 * 
 * Note: This usually requires admin privileges.
 */
export function getEndpoint(args?: GetEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetEndpointResult> {
    args = args || {};
    return pulumi.runtime.invoke("openstack:identity/getEndpoint:getEndpoint", {
        "interface": args.interface,
        "region": args.region,
        "serviceId": args.serviceId,
        "serviceName": args.serviceName,
    }, opts);
}

/**
 * A collection of arguments for invoking getEndpoint.
 */
export interface GetEndpointArgs {
    /**
     * The endpoint interface. Valid values are `public`,
     * `internal`, and `admin`. Default value is `public`
     */
    readonly interface?: string;
    /**
     * The region the endpoint is located in.
     */
    readonly region?: string;
    /**
     * The service id this endpoint belongs to.
     */
    readonly serviceId?: string;
    /**
     * The service name of the endpoint.
     */
    readonly serviceName?: string;
}

/**
 * A collection of values returned by getEndpoint.
 */
export interface GetEndpointResult {
    /**
     * The region the endpoint is located in.
     */
    readonly region: string;
    /**
     * The endpoint URL
     */
    readonly url: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}