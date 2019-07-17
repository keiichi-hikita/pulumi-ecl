import * as pulumi from "@pulumi/pulumi";
export declare class Volume extends pulumi.CustomResource {
    /**
     * Get an existing Volume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VolumeState, opts?: pulumi.CustomResourceOptions): Volume;
    readonly attachments: pulumi.Output<{
        device: string;
        id: string;
        instanceId: string;
    }[]>;
    readonly availabilityZone: pulumi.Output<string>;
    readonly description: pulumi.Output<string | undefined>;
    readonly imageId: pulumi.Output<string | undefined>;
    readonly metadata: pulumi.Output<{
        [key: string]: any;
    }>;
    readonly name: pulumi.Output<string>;
    readonly region: pulumi.Output<string>;
    readonly size: pulumi.Output<number>;
    readonly sourceReplica: pulumi.Output<string | undefined>;
    readonly volumeType: pulumi.Output<string>;
    /**
     * Create a Volume resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Volume resources.
 */
export interface VolumeState {
    readonly attachments?: pulumi.Input<pulumi.Input<{
        device?: pulumi.Input<string>;
        id?: pulumi.Input<string>;
        instanceId?: pulumi.Input<string>;
    }>[]>;
    readonly availabilityZone?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly imageId?: pulumi.Input<string>;
    readonly metadata?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly name?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly size?: pulumi.Input<number>;
    readonly sourceReplica?: pulumi.Input<string>;
    readonly volumeType?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Volume resource.
 */
export interface VolumeArgs {
    readonly availabilityZone?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly imageId?: pulumi.Input<string>;
    readonly metadata?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly name?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly size: pulumi.Input<number>;
    readonly sourceReplica?: pulumi.Input<string>;
    readonly volumeType?: pulumi.Input<string>;
}
