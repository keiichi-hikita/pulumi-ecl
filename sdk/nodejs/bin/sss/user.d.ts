import * as pulumi from "@pulumi/pulumi";
export declare class User extends pulumi.CustomResource {
    /**
     * Get an existing User resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserState, opts?: pulumi.CustomResourceOptions): User;
    readonly brandId: pulumi.Output<string>;
    readonly contractId: pulumi.Output<string>;
    readonly contractOwner: pulumi.Output<boolean>;
    readonly externalReferenceId: pulumi.Output<string>;
    readonly keystoneEndpoint: pulumi.Output<string>;
    readonly keystoneName: pulumi.Output<string>;
    readonly keystonePassword: pulumi.Output<string>;
    readonly loginId: pulumi.Output<string>;
    readonly loginIntegration: pulumi.Output<string>;
    readonly mailAddress: pulumi.Output<string>;
    readonly notifyPassword: pulumi.Output<string | undefined>;
    readonly password: pulumi.Output<string | undefined>;
    readonly sssEndpoint: pulumi.Output<string>;
    readonly startTime: pulumi.Output<string>;
    readonly userId: pulumi.Output<string>;
    /**
     * Create a User resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering User resources.
 */
export interface UserState {
    readonly brandId?: pulumi.Input<string>;
    readonly contractId?: pulumi.Input<string>;
    readonly contractOwner?: pulumi.Input<boolean>;
    readonly externalReferenceId?: pulumi.Input<string>;
    readonly keystoneEndpoint?: pulumi.Input<string>;
    readonly keystoneName?: pulumi.Input<string>;
    readonly keystonePassword?: pulumi.Input<string>;
    readonly loginId?: pulumi.Input<string>;
    readonly loginIntegration?: pulumi.Input<string>;
    readonly mailAddress?: pulumi.Input<string>;
    readonly notifyPassword?: pulumi.Input<string>;
    readonly password?: pulumi.Input<string>;
    readonly sssEndpoint?: pulumi.Input<string>;
    readonly startTime?: pulumi.Input<string>;
    readonly userId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a User resource.
 */
export interface UserArgs {
    readonly loginId: pulumi.Input<string>;
    readonly mailAddress: pulumi.Input<string>;
    readonly notifyPassword?: pulumi.Input<string>;
    readonly password?: pulumi.Input<string>;
}
