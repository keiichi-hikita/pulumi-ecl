import * as pulumi from "@pulumi/pulumi";
export declare class Zone extends pulumi.CustomResource {
    /**
     * Get an existing Zone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZoneState, opts?: pulumi.CustomResourceOptions): Zone;
    readonly description: pulumi.Output<string | undefined>;
    readonly email: pulumi.Output<string>;
    readonly masters: pulumi.Output<string[]>;
    readonly name: pulumi.Output<string>;
    readonly ttl: pulumi.Output<number>;
    readonly type: pulumi.Output<string>;
    /**
     * Create a Zone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ZoneArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Zone resources.
 */
export interface ZoneState {
    readonly description?: pulumi.Input<string>;
    readonly email?: pulumi.Input<string>;
    readonly masters?: pulumi.Input<pulumi.Input<string>[]>;
    readonly name?: pulumi.Input<string>;
    readonly ttl?: pulumi.Input<number>;
    readonly type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Zone resource.
 */
export interface ZoneArgs {
    readonly description?: pulumi.Input<string>;
    readonly email?: pulumi.Input<string>;
    readonly masters?: pulumi.Input<pulumi.Input<string>[]>;
    readonly name?: pulumi.Input<string>;
    readonly ttl?: pulumi.Input<number>;
    readonly type?: pulumi.Input<string>;
}
