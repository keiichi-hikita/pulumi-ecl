import * as pulumi from "@pulumi/pulumi";
export declare class ImageMember extends pulumi.CustomResource {
    /**
     * Get an existing ImageMember resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImageMemberState, opts?: pulumi.CustomResourceOptions): ImageMember;
    readonly createdAt: pulumi.Output<string>;
    readonly imageId: pulumi.Output<string>;
    readonly memberId: pulumi.Output<string>;
    readonly region: pulumi.Output<string>;
    readonly schema: pulumi.Output<string>;
    readonly status: pulumi.Output<string>;
    readonly updatedAt: pulumi.Output<string>;
    /**
     * Create a ImageMember resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImageMemberArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ImageMember resources.
 */
export interface ImageMemberState {
    readonly createdAt?: pulumi.Input<string>;
    readonly imageId?: pulumi.Input<string>;
    readonly memberId?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly schema?: pulumi.Input<string>;
    readonly status?: pulumi.Input<string>;
    readonly updatedAt?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ImageMember resource.
 */
export interface ImageMemberArgs {
    readonly imageId: pulumi.Input<string>;
    readonly memberId: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
}
