// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class Image extends pulumi.CustomResource {
    /**
     * Get an existing Image resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImageState, opts?: pulumi.CustomResourceOptions): Image {
        return new Image(name, <any>state, { ...opts, id: id });
    }

    public /*out*/ readonly checksum!: pulumi.Output<string>;
    public readonly containerFormat!: pulumi.Output<string>;
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    public readonly diskFormat!: pulumi.Output<string>;
    public /*out*/ readonly file!: pulumi.Output<string>;
    public readonly licenseSwitch!: pulumi.Output<string | undefined>;
    public readonly localFilePath!: pulumi.Output<string>;
    public /*out*/ readonly metadata!: pulumi.Output<{[key: string]: any}>;
    public readonly minDiskGb!: pulumi.Output<number | undefined>;
    public readonly minRamMb!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly owner!: pulumi.Output<string>;
    public readonly properties!: pulumi.Output<{[key: string]: any}>;
    public readonly protected!: pulumi.Output<boolean | undefined>;
    public readonly region!: pulumi.Output<string>;
    public /*out*/ readonly schema!: pulumi.Output<string>;
    public /*out*/ readonly sizeBytes!: pulumi.Output<number>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public /*out*/ readonly updateAt!: pulumi.Output<string>;
    public readonly verifyChecksum!: pulumi.Output<boolean | undefined>;
    public readonly visibility!: pulumi.Output<string | undefined>;

    /**
     * Create a Image resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImageArgs | ImageState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ImageState | undefined;
            inputs["checksum"] = state ? state.checksum : undefined;
            inputs["containerFormat"] = state ? state.containerFormat : undefined;
            inputs["createdAt"] = state ? state.createdAt : undefined;
            inputs["diskFormat"] = state ? state.diskFormat : undefined;
            inputs["file"] = state ? state.file : undefined;
            inputs["licenseSwitch"] = state ? state.licenseSwitch : undefined;
            inputs["localFilePath"] = state ? state.localFilePath : undefined;
            inputs["metadata"] = state ? state.metadata : undefined;
            inputs["minDiskGb"] = state ? state.minDiskGb : undefined;
            inputs["minRamMb"] = state ? state.minRamMb : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["owner"] = state ? state.owner : undefined;
            inputs["properties"] = state ? state.properties : undefined;
            inputs["protected"] = state ? state.protected : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["schema"] = state ? state.schema : undefined;
            inputs["sizeBytes"] = state ? state.sizeBytes : undefined;
            inputs["status"] = state ? state.status : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["updateAt"] = state ? state.updateAt : undefined;
            inputs["verifyChecksum"] = state ? state.verifyChecksum : undefined;
            inputs["visibility"] = state ? state.visibility : undefined;
        } else {
            const args = argsOrState as ImageArgs | undefined;
            if (!args || args.containerFormat === undefined) {
                throw new Error("Missing required property 'containerFormat'");
            }
            if (!args || args.diskFormat === undefined) {
                throw new Error("Missing required property 'diskFormat'");
            }
            if (!args || args.localFilePath === undefined) {
                throw new Error("Missing required property 'localFilePath'");
            }
            inputs["containerFormat"] = args ? args.containerFormat : undefined;
            inputs["diskFormat"] = args ? args.diskFormat : undefined;
            inputs["licenseSwitch"] = args ? args.licenseSwitch : undefined;
            inputs["localFilePath"] = args ? args.localFilePath : undefined;
            inputs["minDiskGb"] = args ? args.minDiskGb : undefined;
            inputs["minRamMb"] = args ? args.minRamMb : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["properties"] = args ? args.properties : undefined;
            inputs["protected"] = args ? args.protected : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["verifyChecksum"] = args ? args.verifyChecksum : undefined;
            inputs["visibility"] = args ? args.visibility : undefined;
            inputs["checksum"] = undefined /*out*/;
            inputs["createdAt"] = undefined /*out*/;
            inputs["file"] = undefined /*out*/;
            inputs["metadata"] = undefined /*out*/;
            inputs["owner"] = undefined /*out*/;
            inputs["schema"] = undefined /*out*/;
            inputs["sizeBytes"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["updateAt"] = undefined /*out*/;
        }
        super("ecl:imagestorages/image:Image", name, inputs, opts);
    }
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
    readonly metadata?: pulumi.Input<{[key: string]: any}>;
    readonly minDiskGb?: pulumi.Input<number>;
    readonly minRamMb?: pulumi.Input<number>;
    readonly name?: pulumi.Input<string>;
    readonly owner?: pulumi.Input<string>;
    readonly properties?: pulumi.Input<{[key: string]: any}>;
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
    readonly properties?: pulumi.Input<{[key: string]: any}>;
    readonly protected?: pulumi.Input<boolean>;
    readonly region?: pulumi.Input<string>;
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    readonly verifyChecksum?: pulumi.Input<boolean>;
    readonly visibility?: pulumi.Input<string>;
}
