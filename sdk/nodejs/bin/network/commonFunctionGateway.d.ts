import * as pulumi from "@pulumi/pulumi";
export declare class CommonFunctionGateway extends pulumi.CustomResource {
    /**
     * Get an existing CommonFunctionGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CommonFunctionGatewayState, opts?: pulumi.CustomResourceOptions): CommonFunctionGateway;
    readonly commonFunctionPoolId: pulumi.Output<string>;
    readonly description: pulumi.Output<string | undefined>;
    readonly name: pulumi.Output<string>;
    readonly networkId: pulumi.Output<string>;
    readonly subnetId: pulumi.Output<string>;
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a CommonFunctionGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CommonFunctionGatewayArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CommonFunctionGateway resources.
 */
export interface CommonFunctionGatewayState {
    readonly commonFunctionPoolId?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly networkId?: pulumi.Input<string>;
    readonly subnetId?: pulumi.Input<string>;
    readonly tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CommonFunctionGateway resource.
 */
export interface CommonFunctionGatewayArgs {
    readonly commonFunctionPoolId: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly tenantId?: pulumi.Input<string>;
}
