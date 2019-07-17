import * as pulumi from "@pulumi/pulumi";
export declare class InternetGateway extends pulumi.CustomResource {
    /**
     * Get an existing InternetGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InternetGatewayState, opts?: pulumi.CustomResourceOptions): InternetGateway;
    readonly description: pulumi.Output<string | undefined>;
    readonly internetServiceId: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    readonly qosOptionId: pulumi.Output<string>;
    readonly region: pulumi.Output<string>;
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a InternetGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InternetGatewayArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InternetGateway resources.
 */
export interface InternetGatewayState {
    readonly description?: pulumi.Input<string>;
    readonly internetServiceId?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly qosOptionId?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a InternetGateway resource.
 */
export interface InternetGatewayArgs {
    readonly description?: pulumi.Input<string>;
    readonly internetServiceId: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly qosOptionId: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly tenantId?: pulumi.Input<string>;
}
