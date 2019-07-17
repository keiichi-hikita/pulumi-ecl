import * as pulumi from "@pulumi/pulumi";
export declare class PublicIP extends pulumi.CustomResource {
    /**
     * Get an existing PublicIP resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PublicIPState, opts?: pulumi.CustomResourceOptions): PublicIP;
    readonly cidr: pulumi.Output<string>;
    readonly description: pulumi.Output<string | undefined>;
    readonly internetGwId: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    readonly region: pulumi.Output<string>;
    readonly submaskLength: pulumi.Output<number>;
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a PublicIP resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicIPArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PublicIP resources.
 */
export interface PublicIPState {
    readonly cidr?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly internetGwId?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly submaskLength?: pulumi.Input<number>;
    readonly tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a PublicIP resource.
 */
export interface PublicIPArgs {
    readonly description?: pulumi.Input<string>;
    readonly internetGwId: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly submaskLength: pulumi.Input<number>;
    readonly tenantId?: pulumi.Input<string>;
}
