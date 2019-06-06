// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class User extends pulumi.CustomResource {
    /**
     * Get an existing User resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserState, opts?: pulumi.CustomResourceOptions): User {
        return new User(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ecl:sss/user:User';

    /**
     * Returns true if the given object is an instance of User.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is User {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === User.__pulumiType;
    }

    public /*out*/ readonly brandId!: pulumi.Output<string>;
    public /*out*/ readonly contractId!: pulumi.Output<string>;
    public /*out*/ readonly contractOwner!: pulumi.Output<boolean>;
    public /*out*/ readonly externalReferenceId!: pulumi.Output<string>;
    public /*out*/ readonly keystoneEndpoint!: pulumi.Output<string>;
    public /*out*/ readonly keystoneName!: pulumi.Output<string>;
    public /*out*/ readonly keystonePassword!: pulumi.Output<string>;
    public readonly loginId!: pulumi.Output<string>;
    public /*out*/ readonly loginIntegration!: pulumi.Output<string>;
    public readonly mailAddress!: pulumi.Output<string>;
    public readonly notifyPassword!: pulumi.Output<string | undefined>;
    public readonly password!: pulumi.Output<string | undefined>;
    public /*out*/ readonly sssEndpoint!: pulumi.Output<string>;
    public /*out*/ readonly startTime!: pulumi.Output<string>;
    public /*out*/ readonly userId!: pulumi.Output<string>;

    /**
     * Create a User resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserArgs | UserState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as UserState | undefined;
            inputs["brandId"] = state ? state.brandId : undefined;
            inputs["contractId"] = state ? state.contractId : undefined;
            inputs["contractOwner"] = state ? state.contractOwner : undefined;
            inputs["externalReferenceId"] = state ? state.externalReferenceId : undefined;
            inputs["keystoneEndpoint"] = state ? state.keystoneEndpoint : undefined;
            inputs["keystoneName"] = state ? state.keystoneName : undefined;
            inputs["keystonePassword"] = state ? state.keystonePassword : undefined;
            inputs["loginId"] = state ? state.loginId : undefined;
            inputs["loginIntegration"] = state ? state.loginIntegration : undefined;
            inputs["mailAddress"] = state ? state.mailAddress : undefined;
            inputs["notifyPassword"] = state ? state.notifyPassword : undefined;
            inputs["password"] = state ? state.password : undefined;
            inputs["sssEndpoint"] = state ? state.sssEndpoint : undefined;
            inputs["startTime"] = state ? state.startTime : undefined;
            inputs["userId"] = state ? state.userId : undefined;
        } else {
            const args = argsOrState as UserArgs | undefined;
            if (!args || args.loginId === undefined) {
                throw new Error("Missing required property 'loginId'");
            }
            if (!args || args.mailAddress === undefined) {
                throw new Error("Missing required property 'mailAddress'");
            }
            inputs["loginId"] = args ? args.loginId : undefined;
            inputs["mailAddress"] = args ? args.mailAddress : undefined;
            inputs["notifyPassword"] = args ? args.notifyPassword : undefined;
            inputs["password"] = args ? args.password : undefined;
            inputs["brandId"] = undefined /*out*/;
            inputs["contractId"] = undefined /*out*/;
            inputs["contractOwner"] = undefined /*out*/;
            inputs["externalReferenceId"] = undefined /*out*/;
            inputs["keystoneEndpoint"] = undefined /*out*/;
            inputs["keystoneName"] = undefined /*out*/;
            inputs["keystonePassword"] = undefined /*out*/;
            inputs["loginIntegration"] = undefined /*out*/;
            inputs["sssEndpoint"] = undefined /*out*/;
            inputs["startTime"] = undefined /*out*/;
            inputs["userId"] = undefined /*out*/;
        }
        super(User.__pulumiType, name, inputs, opts);
    }
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