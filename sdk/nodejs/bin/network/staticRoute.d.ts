import * as pulumi from "@pulumi/pulumi";
export declare class StaticRoute extends pulumi.CustomResource {
    /**
     * Get an existing StaticRoute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StaticRouteState, opts?: pulumi.CustomResourceOptions): StaticRoute;
    readonly awsGwId: pulumi.Output<string | undefined>;
    readonly azureGwId: pulumi.Output<string | undefined>;
    readonly description: pulumi.Output<string | undefined>;
    readonly destination: pulumi.Output<string>;
    readonly gcpGwId: pulumi.Output<string | undefined>;
    readonly interdcGwId: pulumi.Output<string | undefined>;
    readonly internetGwId: pulumi.Output<string | undefined>;
    readonly name: pulumi.Output<string>;
    readonly nexthop: pulumi.Output<string>;
    readonly region: pulumi.Output<string>;
    readonly serviceType: pulumi.Output<string>;
    readonly tenantId: pulumi.Output<string>;
    readonly vpnGwId: pulumi.Output<string>;
    /**
     * Create a StaticRoute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StaticRouteArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering StaticRoute resources.
 */
export interface StaticRouteState {
    readonly awsGwId?: pulumi.Input<string>;
    readonly azureGwId?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly destination?: pulumi.Input<string>;
    readonly gcpGwId?: pulumi.Input<string>;
    readonly interdcGwId?: pulumi.Input<string>;
    readonly internetGwId?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly nexthop?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly serviceType?: pulumi.Input<string>;
    readonly tenantId?: pulumi.Input<string>;
    readonly vpnGwId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a StaticRoute resource.
 */
export interface StaticRouteArgs {
    readonly awsGwId?: pulumi.Input<string>;
    readonly azureGwId?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly destination: pulumi.Input<string>;
    readonly gcpGwId?: pulumi.Input<string>;
    readonly interdcGwId?: pulumi.Input<string>;
    readonly internetGwId?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly nexthop: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly serviceType: pulumi.Input<string>;
    readonly tenantId?: pulumi.Input<string>;
    readonly vpnGwId?: pulumi.Input<string>;
}
