import * as pulumi from "@pulumi/pulumi";
export declare class VirtualStorage extends pulumi.CustomResource {
    /**
     * Get an existing VirtualStorage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualStorageState, opts?: pulumi.CustomResourceOptions): VirtualStorage;
    readonly description: pulumi.Output<string | undefined>;
    readonly errorMessage: pulumi.Output<string>;
    readonly hostRoutes: pulumi.Output<{
        destination: string;
        nexthop: string;
    }[] | undefined>;
    readonly ipAddrPool: pulumi.Output<{
        end: string;
        start: string;
    }>;
    readonly name: pulumi.Output<string>;
    readonly networkId: pulumi.Output<string>;
    readonly subnetId: pulumi.Output<string>;
    readonly volumeTypeId: pulumi.Output<string>;
    readonly volumeTypeName: pulumi.Output<string | undefined>;
    /**
     * Create a VirtualStorage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualStorageArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering VirtualStorage resources.
 */
export interface VirtualStorageState {
    readonly description?: pulumi.Input<string>;
    readonly errorMessage?: pulumi.Input<string>;
    readonly hostRoutes?: pulumi.Input<pulumi.Input<{
        destination: pulumi.Input<string>;
        nexthop: pulumi.Input<string>;
    }>[]>;
    readonly ipAddrPool?: pulumi.Input<{
        end: pulumi.Input<string>;
        start: pulumi.Input<string>;
    }>;
    readonly name?: pulumi.Input<string>;
    readonly networkId?: pulumi.Input<string>;
    readonly subnetId?: pulumi.Input<string>;
    readonly volumeTypeId?: pulumi.Input<string>;
    readonly volumeTypeName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a VirtualStorage resource.
 */
export interface VirtualStorageArgs {
    readonly description?: pulumi.Input<string>;
    readonly errorMessage?: pulumi.Input<string>;
    readonly hostRoutes?: pulumi.Input<pulumi.Input<{
        destination: pulumi.Input<string>;
        nexthop: pulumi.Input<string>;
    }>[]>;
    readonly ipAddrPool: pulumi.Input<{
        end: pulumi.Input<string>;
        start: pulumi.Input<string>;
    }>;
    readonly name?: pulumi.Input<string>;
    readonly networkId: pulumi.Input<string>;
    readonly subnetId: pulumi.Input<string>;
    readonly volumeTypeId?: pulumi.Input<string>;
    readonly volumeTypeName?: pulumi.Input<string>;
}
