import * as pulumi from "@pulumi/pulumi";
export declare class ImageMemberAccepter extends pulumi.CustomResource {
    /**
     * Get an existing ImageMemberAccepter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImageMemberAccepterState, opts?: pulumi.CustomResourceOptions): ImageMemberAccepter;
    readonly imageMemberId: pulumi.Output<string>;
    readonly region: pulumi.Output<string>;
    readonly status: pulumi.Output<string>;
    /**
     * Create a ImageMemberAccepter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImageMemberAccepterArgs, opts?: pulumi.CustomResourceOptions);
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
