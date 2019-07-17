import * as pulumi from "@pulumi/pulumi";
export declare class VolumeAttach extends pulumi.CustomResource {
    /**
     * Get an existing VolumeAttach resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VolumeAttachState, opts?: pulumi.CustomResourceOptions): VolumeAttach;
    readonly device: pulumi.Output<string>;
    readonly region: pulumi.Output<string>;
    readonly serverId: pulumi.Output<string>;
    readonly volumeId: pulumi.Output<string>;
    /**
     * Create a VolumeAttach resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeAttachArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering VolumeAttach resources.
 */
export interface VolumeAttachState {
    readonly device?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly serverId?: pulumi.Input<string>;
    readonly volumeId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a VolumeAttach resource.
 */
export interface VolumeAttachArgs {
    readonly device?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly serverId: pulumi.Input<string>;
    readonly volumeId: pulumi.Input<string>;
}
