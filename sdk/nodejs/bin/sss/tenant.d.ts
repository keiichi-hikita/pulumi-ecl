import * as pulumi from "@pulumi/pulumi";
export declare class Tenant extends pulumi.CustomResource {
    /**
     * Get an existing Tenant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TenantState, opts?: pulumi.CustomResourceOptions): Tenant;
    readonly contractId: pulumi.Output<string>;
    readonly description: pulumi.Output<string>;
    readonly startTime: pulumi.Output<string>;
    readonly tenantId: pulumi.Output<string>;
    readonly tenantName: pulumi.Output<string>;
    readonly tenantRegion: pulumi.Output<string>;
    /**
     * Create a Tenant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TenantArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Tenant resources.
 */
export interface TenantState {
    readonly contractId?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly startTime?: pulumi.Input<string>;
    readonly tenantId?: pulumi.Input<string>;
    readonly tenantName?: pulumi.Input<string>;
    readonly tenantRegion?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Tenant resource.
 */
export interface TenantArgs {
    readonly contractId?: pulumi.Input<string>;
    readonly description: pulumi.Input<string>;
    readonly tenantName: pulumi.Input<string>;
    readonly tenantRegion: pulumi.Input<string>;
}
