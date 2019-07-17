import * as pulumi from "@pulumi/pulumi";
export declare class RecordSet extends pulumi.CustomResource {
    /**
     * Get an existing RecordSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RecordSetState, opts?: pulumi.CustomResourceOptions): RecordSet;
    readonly description: pulumi.Output<string | undefined>;
    readonly name: pulumi.Output<string>;
    readonly record: pulumi.Output<string>;
    readonly ttl: pulumi.Output<number>;
    readonly type: pulumi.Output<string>;
    readonly zoneId: pulumi.Output<string>;
    /**
     * Create a RecordSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RecordSetArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RecordSet resources.
 */
export interface RecordSetState {
    readonly description?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly record?: pulumi.Input<string>;
    readonly ttl?: pulumi.Input<number>;
    readonly type?: pulumi.Input<string>;
    readonly zoneId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a RecordSet resource.
 */
export interface RecordSetArgs {
    readonly description?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly record: pulumi.Input<string>;
    readonly ttl: pulumi.Input<number>;
    readonly type: pulumi.Input<string>;
    readonly zoneId: pulumi.Input<string>;
}
