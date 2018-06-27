// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Use this data source to get the ID of an OpenStack role.
 */
export function getRole(args: GetRoleArgs): Promise<GetRoleResult> {
    return pulumi.runtime.invoke("openstack:identity/getRole:getRole", {
        "domainId": args.domainId,
        "name": args.name,
        "region": args.region,
    });
}

/**
 * A collection of arguments for invoking getRole.
 */
export interface GetRoleArgs {
    /**
     * The domain the role belongs to.
     */
    readonly domainId?: pulumi.Input<string>;
    /**
     * The name of the role.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The region in which to obtain the V3 Keystone client.
     * If omitted, the `region` argument of the provider is used.
     */
    readonly region?: pulumi.Input<string>;
}

/**
 * A collection of values returned by getRole.
 */
export interface GetRoleResult {
    /**
     * See Argument Reference above.
     */
    readonly domainId: string;
    /**
     * See Argument Reference above.
     */
    readonly region: string;
}
