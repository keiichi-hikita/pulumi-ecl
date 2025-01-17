// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class ImageMemberAccepter extends pulumi.CustomResource {
    /**
     * Get an existing ImageMemberAccepter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImageMemberAccepterState, opts?: pulumi.CustomResourceOptions): ImageMemberAccepter {
        return new ImageMemberAccepter(name, <any>state, { ...opts, id: id });
    }

    public readonly imageMemberId!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a ImageMemberAccepter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImageMemberAccepterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImageMemberAccepterArgs | ImageMemberAccepterState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ImageMemberAccepterState | undefined;
            inputs["imageMemberId"] = state ? state.imageMemberId : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as ImageMemberAccepterArgs | undefined;
            if (!args || args.imageMemberId === undefined) {
                throw new Error("Missing required property 'imageMemberId'");
            }
            if (!args || args.status === undefined) {
                throw new Error("Missing required property 'status'");
            }
            inputs["imageMemberId"] = args ? args.imageMemberId : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["status"] = args ? args.status : undefined;
        }
        super("ecl:imagestorages/imageMemberAccepter:ImageMemberAccepter", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ImageMemberAccepter resources.
 */
export interface ImageMemberAccepterState {
    readonly imageMemberId?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ImageMemberAccepter resource.
 */
export interface ImageMemberAccepterArgs {
    readonly imageMemberId: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly status: pulumi.Input<string>;
}
