import * as pulumi from "@pulumi/pulumi";
export declare class Instance extends pulumi.CustomResource {
    /**
     * Get an existing Instance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InstanceState, opts?: pulumi.CustomResourceOptions): Instance;
    readonly accessIpV4: pulumi.Output<string>;
    readonly allMetadata: pulumi.Output<{
        [key: string]: any;
    }>;
    readonly availabilityZone: pulumi.Output<string>;
    readonly blockDevices: pulumi.Output<{
        bootIndex?: number;
        deleteOnTermination?: boolean;
        destinationType?: string;
        sourceType: string;
        uuid?: string;
        volumeSize?: number;
    }[] | undefined>;
    readonly flavorId: pulumi.Output<string>;
    readonly flavorName: pulumi.Output<string>;
    readonly imageId: pulumi.Output<string>;
    readonly imageName: pulumi.Output<string>;
    readonly keyPair: pulumi.Output<string | undefined>;
    readonly metadata: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    readonly name: pulumi.Output<string>;
    readonly networks: pulumi.Output<{
        accessNetwork?: boolean;
        fixedIpV4: string;
        mac: string;
        name: string;
        port: string;
        uuid: string;
    }[]>;
    readonly powerState: pulumi.Output<string | undefined>;
    readonly region: pulumi.Output<string>;
    readonly stopBeforeDestroy: pulumi.Output<boolean | undefined>;
    readonly userData: pulumi.Output<string | undefined>;
    /**
     * Create a Instance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InstanceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Instance resources.
 */
export interface InstanceState {
    readonly accessIpV4?: pulumi.Input<string>;
    readonly allMetadata?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly availabilityZone?: pulumi.Input<string>;
    readonly blockDevices?: pulumi.Input<pulumi.Input<{
        bootIndex?: pulumi.Input<number>;
        deleteOnTermination?: pulumi.Input<boolean>;
        destinationType?: pulumi.Input<string>;
        sourceType: pulumi.Input<string>;
        uuid?: pulumi.Input<string>;
        volumeSize?: pulumi.Input<number>;
    }>[]>;
    readonly flavorId?: pulumi.Input<string>;
    readonly flavorName?: pulumi.Input<string>;
    readonly imageId?: pulumi.Input<string>;
    readonly imageName?: pulumi.Input<string>;
    readonly keyPair?: pulumi.Input<string>;
    readonly metadata?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly name?: pulumi.Input<string>;
    readonly networks?: pulumi.Input<pulumi.Input<{
        accessNetwork?: pulumi.Input<boolean>;
        fixedIpV4?: pulumi.Input<string>;
        mac?: pulumi.Input<string>;
        name?: pulumi.Input<string>;
        port?: pulumi.Input<string>;
        uuid?: pulumi.Input<string>;
    }>[]>;
    readonly powerState?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly stopBeforeDestroy?: pulumi.Input<boolean>;
    readonly userData?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Instance resource.
 */
export interface InstanceArgs {
    readonly availabilityZone?: pulumi.Input<string>;
    readonly blockDevices?: pulumi.Input<pulumi.Input<{
        bootIndex?: pulumi.Input<number>;
        deleteOnTermination?: pulumi.Input<boolean>;
        destinationType?: pulumi.Input<string>;
        sourceType: pulumi.Input<string>;
        uuid?: pulumi.Input<string>;
        volumeSize?: pulumi.Input<number>;
    }>[]>;
    readonly flavorId?: pulumi.Input<string>;
    readonly flavorName?: pulumi.Input<string>;
    readonly imageId?: pulumi.Input<string>;
    readonly imageName?: pulumi.Input<string>;
    readonly keyPair?: pulumi.Input<string>;
    readonly metadata?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly name?: pulumi.Input<string>;
    readonly networks?: pulumi.Input<pulumi.Input<{
        accessNetwork?: pulumi.Input<boolean>;
        fixedIpV4?: pulumi.Input<string>;
        mac?: pulumi.Input<string>;
        name?: pulumi.Input<string>;
        port?: pulumi.Input<string>;
        uuid?: pulumi.Input<string>;
    }>[]>;
    readonly powerState?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly stopBeforeDestroy?: pulumi.Input<boolean>;
    readonly userData?: pulumi.Input<string>;
}
