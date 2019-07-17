import * as pulumi from "@pulumi/pulumi";
export declare class Image extends pulumi.CustomResource {
    /**
     * Get an existing Image resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImageState, opts?: pulumi.CustomResourceOptions): Image;
    readonly checksum: pulumi.Output<string>;
    readonly containerFormat: pulumi.Output<string>;
    readonly createdAt: pulumi.Output<string>;
    readonly diskFormat: pulumi.Output<string>;
    readonly file: pulumi.Output<string>;
    readonly licenseSwitch: pulumi.Output<string | undefined>;
    readonly localFilePath: pulumi.Output<string>;
    readonly metadata: pulumi.Output<{
        [key: string]: any;
    }>;
    readonly minDiskGb: pulumi.Output<number | undefined>;
    readonly minRamMb: pulumi.Output<number | undefined>;
    readonly name: pulumi.Output<string>;
    readonly owner: pulumi.Output<string>;
    readonly properties: pulumi.Output<{
        [key: string]: any;
    }>;
    readonly protected: pulumi.Output<boolean | undefined>;
    readonly region: pulumi.Output<string>;
    readonly schema: pulumi.Output<string>;
    readonly sizeBytes: pulumi.Output<number>;
    readonly status: pulumi.Output<string>;
    readonly tags: pulumi.Output<string[] | undefined>;
    readonly updateAt: pulumi.Output<string>;
    readonly verifyChecksum: pulumi.Output<boolean | undefined>;
    readonly visibility: pulumi.Output<string | undefined>;
    /**
     * Create a Image resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImageArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Image resources.
 */
export interface ImageState {
    readonly checksum?: pulumi.Input<string>;
    readonly containerFormat?: pulumi.Input<string>;
    readonly createdAt?: pulumi.Input<string>;
    readonly diskFormat?: pulumi.Input<string>;
    readonly file?: pulumi.Input<string>;
    readonly licenseSwitch?: pulumi.Input<string>;
    readonly localFilePath?: pulumi.Input<string>;
    readonly metadata?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly minDiskGb?: pulumi.Input<number>;
    readonly minRamMb?: pulumi.Input<number>;
    readonly name?: pulumi.Input<string>;
    readonly owner?: pulumi.Input<string>;
    readonly properties?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly protected?: pulumi.Input<boolean>;
    readonly region?: pulumi.Input<string>;
    readonly schema?: pulumi.Input<string>;
    readonly sizeBytes?: pulumi.Input<number>;
    readonly status?: pulumi.Input<string>;
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    readonly updateAt?: pulumi.Input<string>;
    readonly verifyChecksum?: pulumi.Input<boolean>;
    readonly visibility?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Image resource.
 */
export interface ImageArgs {
    readonly containerFormat: pulumi.Input<string>;
    readonly diskFormat: pulumi.Input<string>;
    readonly licenseSwitch?: pulumi.Input<string>;
    readonly localFilePath: pulumi.Input<string>;
    readonly minDiskGb?: pulumi.Input<number>;
    readonly minRamMb?: pulumi.Input<number>;
    readonly name?: pulumi.Input<string>;
    readonly properties?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly protected?: pulumi.Input<boolean>;
    readonly region?: pulumi.Input<string>;
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    readonly verifyChecksum?: pulumi.Input<boolean>;
    readonly visibility?: pulumi.Input<string>;
}
