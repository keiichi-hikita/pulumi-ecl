import * as pulumi from "@pulumi/pulumi";
export declare class Network extends pulumi.CustomResource {
    /**
     * Get an existing Network resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkState, opts?: pulumi.CustomResourceOptions): Network;
    readonly adminStateUp: pulumi.Output<boolean>;
    readonly description: pulumi.Output<string | undefined>;
    readonly name: pulumi.Output<string>;
    readonly plane: pulumi.Output<string | undefined>;
    readonly region: pulumi.Output<string>;
    readonly shared: pulumi.Output<boolean>;
    readonly status: pulumi.Output<string>;
    readonly subnets: pulumi.Output<string[]>;
    readonly tags: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a Network resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NetworkArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Network resources.
 */
export interface NetworkState {
    readonly adminStateUp?: pulumi.Input<boolean>;
    readonly description?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly plane?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly shared?: pulumi.Input<boolean>;
    readonly status?: pulumi.Input<string>;
    readonly subnets?: pulumi.Input<pulumi.Input<string>[]>;
    readonly tags?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Network resource.
 */
export interface NetworkArgs {
    readonly adminStateUp?: pulumi.Input<boolean>;
    readonly description?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly plane?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly tags?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly tenantId?: pulumi.Input<string>;
}
