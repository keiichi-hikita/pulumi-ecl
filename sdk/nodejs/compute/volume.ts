// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class Volume extends pulumi.CustomResource {
    /**
     * Get an existing Volume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VolumeState, opts?: pulumi.CustomResourceOptions): Volume {
        return new Volume(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ecl:compute/volume:Volume';

    /**
     * Returns true if the given object is an instance of Volume.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Volume {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Volume.__pulumiType;
    }

    public /*out*/ readonly attachments!: pulumi.Output<{ device: string, id: string, instanceId: string }[]>;
    public readonly availabilityZone!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly imageId!: pulumi.Output<string | undefined>;
    public readonly metadata!: pulumi.Output<{[key: string]: any}>;
    public readonly name!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    public readonly size!: pulumi.Output<number>;
    public readonly sourceReplica!: pulumi.Output<string | undefined>;
    public readonly volumeType!: pulumi.Output<string>;

    /**
     * Create a Volume resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VolumeArgs | VolumeState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as VolumeState | undefined;
            inputs["attachments"] = state ? state.attachments : undefined;
            inputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["imageId"] = state ? state.imageId : undefined;
            inputs["metadata"] = state ? state.metadata : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["size"] = state ? state.size : undefined;
            inputs["sourceReplica"] = state ? state.sourceReplica : undefined;
            inputs["volumeType"] = state ? state.volumeType : undefined;
        } else {
            const args = argsOrState as VolumeArgs | undefined;
            if (!args || args.size === undefined) {
                throw new Error("Missing required property 'size'");
            }
            inputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["imageId"] = args ? args.imageId : undefined;
            inputs["metadata"] = args ? args.metadata : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["size"] = args ? args.size : undefined;
            inputs["sourceReplica"] = args ? args.sourceReplica : undefined;
            inputs["volumeType"] = args ? args.volumeType : undefined;
            inputs["attachments"] = undefined /*out*/;
        }
        super(Volume.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Volume resources.
 */
export interface VolumeState {
    readonly attachments?: pulumi.Input<pulumi.Input<{ device?: pulumi.Input<string>, id?: pulumi.Input<string>, instanceId?: pulumi.Input<string> }>[]>;
    readonly availabilityZone?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly imageId?: pulumi.Input<string>;
    readonly metadata?: pulumi.Input<{[key: string]: any}>;
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
    readonly metadata?: pulumi.Input<{[key: string]: any}>;
    readonly name?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly size: pulumi.Input<number>;
    readonly sourceReplica?: pulumi.Input<string>;
    readonly volumeType?: pulumi.Input<string>;
}
