// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a V2 VM instance resource within OpenStack.
 * 
 * ## Example Usage
 * 
 * ### Basic Instance
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as openstack from "@pulumi/openstack";
 * 
 * const openstack_compute_instance_v2_basic = new openstack.compute.Instance("basic", {
 *     flavorId: "3",
 *     imageId: "ad091b52-742f-469e-8f3c-fd81cadf0743",
 *     keyPair: "my_key_pair_name",
 *     metadata: {
 *         this: "that",
 *     },
 *     name: "basic",
 *     networks: [{
 *         name: "my_network",
 *     }],
 *     securityGroups: ["default"],
 * });
 * ```
 * ### Instance With Attached Volume
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as openstack from "@pulumi/openstack";
 * 
 * const openstack_blockstorage_volume_v2_myvol = new openstack.blockstorage.VolumeV2("myvol", {
 *     name: "myvol",
 *     size: 1,
 * });
 * const openstack_compute_instance_v2_myinstance = new openstack.compute.Instance("myinstance", {
 *     flavorId: "3",
 *     imageId: "ad091b52-742f-469e-8f3c-fd81cadf0743",
 *     keyPair: "my_key_pair_name",
 *     name: "myinstance",
 *     networks: [{
 *         name: "my_network",
 *     }],
 *     securityGroups: ["default"],
 * });
 * const openstack_compute_volume_attach_v2_attached = new openstack.compute.VolumeAttach("attached", {
 *     instanceId: openstack_compute_instance_v2_myinstance.id,
 *     volumeId: openstack_blockstorage_volume_v2_myvol.id,
 * });
 * ```
 * ### Boot From Volume
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as openstack from "@pulumi/openstack";
 * 
 * const openstack_compute_instance_v2_boot_from_volume = new openstack.compute.Instance("boot-from-volume", {
 *     blockDevices: [{
 *         bootIndex: 0,
 *         deleteOnTermination: true,
 *         destinationType: "volume",
 *         sourceType: "image",
 *         uuid: "<image-id>",
 *         volumeSize: 5,
 *     }],
 *     flavorId: "3",
 *     keyPair: "my_key_pair_name",
 *     name: "boot-from-volume",
 *     networks: [{
 *         name: "my_network",
 *     }],
 *     securityGroups: ["default"],
 * });
 * ```
 * ### Boot From an Existing Volume
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as openstack from "@pulumi/openstack";
 * 
 * const openstack_blockstorage_volume_v1_myvol = new openstack.blockstorage.VolumeV1("myvol", {
 *     imageId: "<image-id>",
 *     name: "myvol",
 *     size: 5,
 * });
 * const openstack_compute_instance_v2_boot_from_volume = new openstack.compute.Instance("boot-from-volume", {
 *     blockDevices: [{
 *         bootIndex: 0,
 *         deleteOnTermination: true,
 *         destinationType: "volume",
 *         sourceType: "volume",
 *         uuid: openstack_blockstorage_volume_v1_myvol.id,
 *     }],
 *     flavorId: "3",
 *     keyPair: "my_key_pair_name",
 *     name: "bootfromvolume",
 *     networks: [{
 *         name: "my_network",
 *     }],
 *     securityGroups: ["default"],
 * });
 * ```
 * ### Boot Instance, Create Volume, and Attach Volume as a Block Device
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as openstack from "@pulumi/openstack";
 * 
 * const openstack_compute_instance_v2_instance_1 = new openstack.compute.Instance("instance_1", {
 *     blockDevices: [
 *         {
 *             bootIndex: 0,
 *             deleteOnTermination: true,
 *             destinationType: "local",
 *             sourceType: "image",
 *             uuid: "<image-id>",
 *         },
 *         {
 *             bootIndex: 1,
 *             deleteOnTermination: true,
 *             destinationType: "volume",
 *             sourceType: "blank",
 *             volumeSize: 1,
 *         },
 *     ],
 *     flavorId: "3",
 *     imageId: "<image-id>",
 *     keyPair: "my_key_pair_name",
 *     name: "instance_1",
 *     securityGroups: ["default"],
 * });
 * ```
 * ### Boot Instance and Attach Existing Volume as a Block Device
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as openstack from "@pulumi/openstack";
 * 
 * const openstack_blockstorage_volume_v2_volume_1 = new openstack.blockstorage.VolumeV2("volume_1", {
 *     name: "volume_1",
 *     size: 1,
 * });
 * const openstack_compute_instance_v2_instance_1 = new openstack.compute.Instance("instance_1", {
 *     blockDevices: [
 *         {
 *             bootIndex: 0,
 *             deleteOnTermination: true,
 *             destinationType: "local",
 *             sourceType: "image",
 *             uuid: "<image-id>",
 *         },
 *         {
 *             bootIndex: 1,
 *             deleteOnTermination: true,
 *             destinationType: "volume",
 *             sourceType: "volume",
 *             uuid: openstack_blockstorage_volume_v2_volume_1.id,
 *         },
 *     ],
 *     flavorId: "3",
 *     imageId: "<image-id>",
 *     keyPair: "my_key_pair_name",
 *     name: "instance_1",
 *     securityGroups: ["default"],
 * });
 * ```
 * ### Instance With Multiple Networks
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as openstack from "@pulumi/openstack";
 * 
 * const openstack_compute_instance_v2_multi_net = new openstack.compute.Instance("multi-net", {
 *     flavorId: "3",
 *     imageId: "ad091b52-742f-469e-8f3c-fd81cadf0743",
 *     keyPair: "my_key_pair_name",
 *     name: "multi-net",
 *     networks: [
 *         {
 *             name: "my_first_network",
 *         },
 *         {
 *             name: "my_second_network",
 *         },
 *     ],
 *     securityGroups: ["default"],
 * });
 * const openstack_networking_floatingip_v2_myip = new openstack.networking.FloatingIp("myip", {
 *     pool: "my_pool",
 * });
 * const openstack_compute_floatingip_associate_v2_myip = new openstack.compute.FloatingIpAssociate("myip", {
 *     fixedIp: openstack_compute_instance_v2_multi_net.networks.apply(__arg0 => __arg0[1].fixedIpV4),
 *     floatingIp: openstack_networking_floatingip_v2_myip.address,
 *     instanceId: openstack_compute_instance_v2_multi_net.id,
 * });
 * ```
 * ### Instance With Personality
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as openstack from "@pulumi/openstack";
 * 
 * const openstack_compute_instance_v2_personality = new openstack.compute.Instance("personality", {
 *     flavorId: "3",
 *     imageId: "ad091b52-742f-469e-8f3c-fd81cadf0743",
 *     keyPair: "my_key_pair_name",
 *     name: "personality",
 *     networks: [{
 *         name: "my_network",
 *     }],
 *     personalities: [{
 *         content: "contents of file",
 *         file: "/path/to/file/on/instance.txt",
 *     }],
 *     securityGroups: ["default"],
 * });
 * ```
 * ### Instance with Multiple Ephemeral Disks
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as openstack from "@pulumi/openstack";
 * 
 * const openstack_compute_instance_v2_multi_eph = new openstack.compute.Instance("multi-eph", {
 *     blockDevices: [
 *         {
 *             bootIndex: 0,
 *             deleteOnTermination: true,
 *             destinationType: "local",
 *             sourceType: "image",
 *             uuid: "<image-id>",
 *         },
 *         {
 *             bootIndex: -1,
 *             deleteOnTermination: true,
 *             destinationType: "local",
 *             sourceType: "blank",
 *             volumeSize: 1,
 *         },
 *         {
 *             bootIndex: -1,
 *             deleteOnTermination: true,
 *             destinationType: "local",
 *             sourceType: "blank",
 *             volumeSize: 1,
 *         },
 *     ],
 *     flavorId: "3",
 *     imageId: "ad091b52-742f-469e-8f3c-fd81cadf0743",
 *     keyPair: "my_key_pair_name",
 *     name: "multi_eph",
 *     securityGroups: ["default"],
 * });
 * ```
 * ### Instance with User Data (cloud-init)
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as openstack from "@pulumi/openstack";
 * 
 * const openstack_compute_instance_v2_instance_1 = new openstack.compute.Instance("instance_1", {
 *     flavorId: "3",
 *     imageId: "ad091b52-742f-469e-8f3c-fd81cadf0743",
 *     keyPair: "my_key_pair_name",
 *     name: "basic",
 *     networks: [{
 *         name: "my_network",
 *     }],
 *     securityGroups: ["default"],
 *     userData: "#cloud-config\nhostname: instance_1.example.com\nfqdn: instance_1.example.com",
 * });
 * ```
 * `user_data` can come from a variety of sources: inline, read in from the `file`
 * function, or the `template_cloudinit_config` resource.
 * 
 */
export class Instance extends pulumi.CustomResource {
    /**
     * Get an existing Instance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InstanceState, opts?: pulumi.CustomResourceOptions): Instance {
        return new Instance(name, <any>state, { ...opts, id: id });
    }

    /**
     * The first detected Fixed IPv4 address _or_ the
     * Floating IP.
     */
    public readonly accessIpV4: pulumi.Output<string>;
    /**
     * The first detected Fixed IPv6 address.
     */
    public readonly accessIpV6: pulumi.Output<string>;
    /**
     * The administrative password to assign to the server.
     * Changing this changes the root password on the existing server.
     */
    public readonly adminPass: pulumi.Output<string | undefined>;
    /**
     * Contains all instance metadata, even metadata not set
     * by Terraform.
     */
    public /*out*/ readonly allMetadata: pulumi.Output<{[key: string]: any}>;
    /**
     * The availability zone in which to create
     * the server. Changing this creates a new server.
     */
    public readonly availabilityZone: pulumi.Output<string>;
    /**
     * Configuration of block devices. The block_device
     * structure is documented below. Changing this creates a new server.
     * You can specify multiple block devices which will create an instance with
     * multiple disks. This configuration is very flexible, so please see the
     * following [reference](http://docs.openstack.org/developer/nova/block_device_mapping.html)
     * for more information.
     */
    public readonly blockDevices: pulumi.Output<{ bootIndex?: number, deleteOnTermination?: boolean, destinationType?: string, deviceType?: string, diskBus?: string, guestFormat?: string, sourceType: string, uuid?: string, volumeSize?: number }[] | undefined>;
    /**
     * Whether to use the config_drive feature to
     * configure the instance. Changing this creates a new server.
     */
    public readonly configDrive: pulumi.Output<boolean | undefined>;
    /**
     * The flavor ID of
     * the desired flavor for the server. Changing this resizes the existing server.
     */
    public readonly flavorId: pulumi.Output<string>;
    /**
     * The name of the
     * desired flavor for the server. Changing this resizes the existing server.
     */
    public readonly flavorName: pulumi.Output<string>;
    /**
     * Whether to force the OpenStack instance to be
     * forcefully deleted. This is useful for environments that have reclaim / soft
     * deletion enabled.
     */
    public readonly forceDelete: pulumi.Output<boolean | undefined>;
    /**
     * (Optional; Required if `image_name` is empty and not booting
     * from a volume. Do not specify if booting from a volume.) The image ID of
     * the desired image for the server. Changing this creates a new server.
     */
    public readonly imageId: pulumi.Output<string>;
    /**
     * (Optional; Required if `image_id` is empty and not booting
     * from a volume. Do not specify if booting from a volume.) The name of the
     * desired image for the server. Changing this creates a new server.
     */
    public readonly imageName: pulumi.Output<string>;
    /**
     * The name of a key pair to put on the server. The key
     * pair must already be created and associated with the tenant's account.
     * Changing this creates a new server.
     */
    public readonly keyPair: pulumi.Output<string | undefined>;
    /**
     * Metadata key/value pairs to make available from
     * within the instance. Changing this updates the existing server metadata.
     */
    public readonly metadata: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * A unique name for the resource.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * An array of one or more networks to attach to the
     * instance. The network object structure is documented below. Changing this
     * creates a new server.
     */
    public readonly networks: pulumi.Output<{ accessNetwork?: boolean, fixedIpV4: string, fixedIpV6: string, mac: string, name: string, port: string, uuid: string }[]>;
    /**
     * Customize the personality of an instance by
     * defining one or more files and their contents. The personality structure
     * is described below.
     */
    public readonly personalities: pulumi.Output<{ content: string, file: string }[] | undefined>;
    /**
     * Provide the VM state. Only 'active' and 'shutoff'
     * are supported values. *Note*: If the initial power_state is the shutoff
     * the VM will be stopped immediately after build and the provisioners like
     * remote-exec or files are not supported.
     */
    public readonly powerState: pulumi.Output<string | undefined>;
    /**
     * The region in which to create the server instance. If
     * omitted, the `region` argument of the provider is used. Changing this
     * creates a new server.
     */
    public readonly region: pulumi.Output<string>;
    /**
     * Provide the Nova scheduler with hints on how
     * the instance should be launched. The available hints are described below.
     */
    public readonly schedulerHints: pulumi.Output<{ additionalProperties?: {[key: string]: any}, buildNearHostIp?: string, differentHosts?: string[], group?: string, queries?: string[], sameHosts?: string[], targetCell?: string }[] | undefined>;
    /**
     * An array of one or more security group names
     * to associate with the server. Changing this results in adding/removing
     * security groups from the existing server. *Note*: When attaching the
     * instance to networks using Ports, place the security groups on the Port
     * and not the instance.
     */
    public readonly securityGroups: pulumi.Output<string[]>;
    /**
     * Whether to try stop instance gracefully
     * before destroying it, thus giving chance for guest OS daemons to stop correctly.
     * If instance doesn't stop within timeout, it will be destroyed anyway.
     */
    public readonly stopBeforeDestroy: pulumi.Output<boolean | undefined>;
    /**
     * The user data to provide when launching the instance.
     * Changing this creates a new server.
     */
    public readonly userData: pulumi.Output<string | undefined>;
    /**
     * Map of additional vendor-specific options.
     * Supported options are described below.
     */
    public readonly vendorOptions: pulumi.Output<{ ignoreResizeConfirmation?: boolean } | undefined>;

    /**
     * Create a Instance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InstanceArgs | InstanceState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: InstanceState = argsOrState as InstanceState | undefined;
            inputs["accessIpV4"] = state ? state.accessIpV4 : undefined;
            inputs["accessIpV6"] = state ? state.accessIpV6 : undefined;
            inputs["adminPass"] = state ? state.adminPass : undefined;
            inputs["allMetadata"] = state ? state.allMetadata : undefined;
            inputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            inputs["blockDevices"] = state ? state.blockDevices : undefined;
            inputs["configDrive"] = state ? state.configDrive : undefined;
            inputs["flavorId"] = state ? state.flavorId : undefined;
            inputs["flavorName"] = state ? state.flavorName : undefined;
            inputs["forceDelete"] = state ? state.forceDelete : undefined;
            inputs["imageId"] = state ? state.imageId : undefined;
            inputs["imageName"] = state ? state.imageName : undefined;
            inputs["keyPair"] = state ? state.keyPair : undefined;
            inputs["metadata"] = state ? state.metadata : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["networks"] = state ? state.networks : undefined;
            inputs["personalities"] = state ? state.personalities : undefined;
            inputs["powerState"] = state ? state.powerState : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["schedulerHints"] = state ? state.schedulerHints : undefined;
            inputs["securityGroups"] = state ? state.securityGroups : undefined;
            inputs["stopBeforeDestroy"] = state ? state.stopBeforeDestroy : undefined;
            inputs["userData"] = state ? state.userData : undefined;
            inputs["vendorOptions"] = state ? state.vendorOptions : undefined;
        } else {
            const args = argsOrState as InstanceArgs | undefined;
            inputs["accessIpV4"] = args ? args.accessIpV4 : undefined;
            inputs["accessIpV6"] = args ? args.accessIpV6 : undefined;
            inputs["adminPass"] = args ? args.adminPass : undefined;
            inputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            inputs["blockDevices"] = args ? args.blockDevices : undefined;
            inputs["configDrive"] = args ? args.configDrive : undefined;
            inputs["flavorId"] = args ? args.flavorId : undefined;
            inputs["flavorName"] = args ? args.flavorName : undefined;
            inputs["forceDelete"] = args ? args.forceDelete : undefined;
            inputs["imageId"] = args ? args.imageId : undefined;
            inputs["imageName"] = args ? args.imageName : undefined;
            inputs["keyPair"] = args ? args.keyPair : undefined;
            inputs["metadata"] = args ? args.metadata : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["networks"] = args ? args.networks : undefined;
            inputs["personalities"] = args ? args.personalities : undefined;
            inputs["powerState"] = args ? args.powerState : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["schedulerHints"] = args ? args.schedulerHints : undefined;
            inputs["securityGroups"] = args ? args.securityGroups : undefined;
            inputs["stopBeforeDestroy"] = args ? args.stopBeforeDestroy : undefined;
            inputs["userData"] = args ? args.userData : undefined;
            inputs["vendorOptions"] = args ? args.vendorOptions : undefined;
            inputs["allMetadata"] = undefined /*out*/;
        }
        super("openstack:compute/instance:Instance", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Instance resources.
 */
export interface InstanceState {
    /**
     * The first detected Fixed IPv4 address _or_ the
     * Floating IP.
     */
    readonly accessIpV4?: pulumi.Input<string>;
    /**
     * The first detected Fixed IPv6 address.
     */
    readonly accessIpV6?: pulumi.Input<string>;
    /**
     * The administrative password to assign to the server.
     * Changing this changes the root password on the existing server.
     */
    readonly adminPass?: pulumi.Input<string>;
    /**
     * Contains all instance metadata, even metadata not set
     * by Terraform.
     */
    readonly allMetadata?: pulumi.Input<{[key: string]: any}>;
    /**
     * The availability zone in which to create
     * the server. Changing this creates a new server.
     */
    readonly availabilityZone?: pulumi.Input<string>;
    /**
     * Configuration of block devices. The block_device
     * structure is documented below. Changing this creates a new server.
     * You can specify multiple block devices which will create an instance with
     * multiple disks. This configuration is very flexible, so please see the
     * following [reference](http://docs.openstack.org/developer/nova/block_device_mapping.html)
     * for more information.
     */
    readonly blockDevices?: pulumi.Input<pulumi.Input<{ bootIndex?: pulumi.Input<number>, deleteOnTermination?: pulumi.Input<boolean>, destinationType?: pulumi.Input<string>, deviceType?: pulumi.Input<string>, diskBus?: pulumi.Input<string>, guestFormat?: pulumi.Input<string>, sourceType: pulumi.Input<string>, uuid?: pulumi.Input<string>, volumeSize?: pulumi.Input<number> }>[]>;
    /**
     * Whether to use the config_drive feature to
     * configure the instance. Changing this creates a new server.
     */
    readonly configDrive?: pulumi.Input<boolean>;
    /**
     * The flavor ID of
     * the desired flavor for the server. Changing this resizes the existing server.
     */
    readonly flavorId?: pulumi.Input<string>;
    /**
     * The name of the
     * desired flavor for the server. Changing this resizes the existing server.
     */
    readonly flavorName?: pulumi.Input<string>;
    /**
     * Whether to force the OpenStack instance to be
     * forcefully deleted. This is useful for environments that have reclaim / soft
     * deletion enabled.
     */
    readonly forceDelete?: pulumi.Input<boolean>;
    /**
     * (Optional; Required if `image_name` is empty and not booting
     * from a volume. Do not specify if booting from a volume.) The image ID of
     * the desired image for the server. Changing this creates a new server.
     */
    readonly imageId?: pulumi.Input<string>;
    /**
     * (Optional; Required if `image_id` is empty and not booting
     * from a volume. Do not specify if booting from a volume.) The name of the
     * desired image for the server. Changing this creates a new server.
     */
    readonly imageName?: pulumi.Input<string>;
    /**
     * The name of a key pair to put on the server. The key
     * pair must already be created and associated with the tenant's account.
     * Changing this creates a new server.
     */
    readonly keyPair?: pulumi.Input<string>;
    /**
     * Metadata key/value pairs to make available from
     * within the instance. Changing this updates the existing server metadata.
     */
    readonly metadata?: pulumi.Input<{[key: string]: any}>;
    /**
     * A unique name for the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * An array of one or more networks to attach to the
     * instance. The network object structure is documented below. Changing this
     * creates a new server.
     */
    readonly networks?: pulumi.Input<pulumi.Input<{ accessNetwork?: pulumi.Input<boolean>, fixedIpV4?: pulumi.Input<string>, fixedIpV6?: pulumi.Input<string>, mac?: pulumi.Input<string>, name?: pulumi.Input<string>, port?: pulumi.Input<string>, uuid?: pulumi.Input<string> }>[]>;
    /**
     * Customize the personality of an instance by
     * defining one or more files and their contents. The personality structure
     * is described below.
     */
    readonly personalities?: pulumi.Input<pulumi.Input<{ content: pulumi.Input<string>, file: pulumi.Input<string> }>[]>;
    /**
     * Provide the VM state. Only 'active' and 'shutoff'
     * are supported values. *Note*: If the initial power_state is the shutoff
     * the VM will be stopped immediately after build and the provisioners like
     * remote-exec or files are not supported.
     */
    readonly powerState?: pulumi.Input<string>;
    /**
     * The region in which to create the server instance. If
     * omitted, the `region` argument of the provider is used. Changing this
     * creates a new server.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * Provide the Nova scheduler with hints on how
     * the instance should be launched. The available hints are described below.
     */
    readonly schedulerHints?: pulumi.Input<pulumi.Input<{ additionalProperties?: pulumi.Input<{[key: string]: any}>, buildNearHostIp?: pulumi.Input<string>, differentHosts?: pulumi.Input<pulumi.Input<string>[]>, group?: pulumi.Input<string>, queries?: pulumi.Input<pulumi.Input<string>[]>, sameHosts?: pulumi.Input<pulumi.Input<string>[]>, targetCell?: pulumi.Input<string> }>[]>;
    /**
     * An array of one or more security group names
     * to associate with the server. Changing this results in adding/removing
     * security groups from the existing server. *Note*: When attaching the
     * instance to networks using Ports, place the security groups on the Port
     * and not the instance.
     */
    readonly securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to try stop instance gracefully
     * before destroying it, thus giving chance for guest OS daemons to stop correctly.
     * If instance doesn't stop within timeout, it will be destroyed anyway.
     */
    readonly stopBeforeDestroy?: pulumi.Input<boolean>;
    /**
     * The user data to provide when launching the instance.
     * Changing this creates a new server.
     */
    readonly userData?: pulumi.Input<string>;
    /**
     * Map of additional vendor-specific options.
     * Supported options are described below.
     */
    readonly vendorOptions?: pulumi.Input<{ ignoreResizeConfirmation?: pulumi.Input<boolean> }>;
}

/**
 * The set of arguments for constructing a Instance resource.
 */
export interface InstanceArgs {
    /**
     * The first detected Fixed IPv4 address _or_ the
     * Floating IP.
     */
    readonly accessIpV4?: pulumi.Input<string>;
    /**
     * The first detected Fixed IPv6 address.
     */
    readonly accessIpV6?: pulumi.Input<string>;
    /**
     * The administrative password to assign to the server.
     * Changing this changes the root password on the existing server.
     */
    readonly adminPass?: pulumi.Input<string>;
    /**
     * The availability zone in which to create
     * the server. Changing this creates a new server.
     */
    readonly availabilityZone?: pulumi.Input<string>;
    /**
     * Configuration of block devices. The block_device
     * structure is documented below. Changing this creates a new server.
     * You can specify multiple block devices which will create an instance with
     * multiple disks. This configuration is very flexible, so please see the
     * following [reference](http://docs.openstack.org/developer/nova/block_device_mapping.html)
     * for more information.
     */
    readonly blockDevices?: pulumi.Input<pulumi.Input<{ bootIndex?: pulumi.Input<number>, deleteOnTermination?: pulumi.Input<boolean>, destinationType?: pulumi.Input<string>, deviceType?: pulumi.Input<string>, diskBus?: pulumi.Input<string>, guestFormat?: pulumi.Input<string>, sourceType: pulumi.Input<string>, uuid?: pulumi.Input<string>, volumeSize?: pulumi.Input<number> }>[]>;
    /**
     * Whether to use the config_drive feature to
     * configure the instance. Changing this creates a new server.
     */
    readonly configDrive?: pulumi.Input<boolean>;
    /**
     * The flavor ID of
     * the desired flavor for the server. Changing this resizes the existing server.
     */
    readonly flavorId?: pulumi.Input<string>;
    /**
     * The name of the
     * desired flavor for the server. Changing this resizes the existing server.
     */
    readonly flavorName?: pulumi.Input<string>;
    /**
     * Whether to force the OpenStack instance to be
     * forcefully deleted. This is useful for environments that have reclaim / soft
     * deletion enabled.
     */
    readonly forceDelete?: pulumi.Input<boolean>;
    /**
     * (Optional; Required if `image_name` is empty and not booting
     * from a volume. Do not specify if booting from a volume.) The image ID of
     * the desired image for the server. Changing this creates a new server.
     */
    readonly imageId?: pulumi.Input<string>;
    /**
     * (Optional; Required if `image_id` is empty and not booting
     * from a volume. Do not specify if booting from a volume.) The name of the
     * desired image for the server. Changing this creates a new server.
     */
    readonly imageName?: pulumi.Input<string>;
    /**
     * The name of a key pair to put on the server. The key
     * pair must already be created and associated with the tenant's account.
     * Changing this creates a new server.
     */
    readonly keyPair?: pulumi.Input<string>;
    /**
     * Metadata key/value pairs to make available from
     * within the instance. Changing this updates the existing server metadata.
     */
    readonly metadata?: pulumi.Input<{[key: string]: any}>;
    /**
     * A unique name for the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * An array of one or more networks to attach to the
     * instance. The network object structure is documented below. Changing this
     * creates a new server.
     */
    readonly networks?: pulumi.Input<pulumi.Input<{ accessNetwork?: pulumi.Input<boolean>, fixedIpV4?: pulumi.Input<string>, fixedIpV6?: pulumi.Input<string>, mac?: pulumi.Input<string>, name?: pulumi.Input<string>, port?: pulumi.Input<string>, uuid?: pulumi.Input<string> }>[]>;
    /**
     * Customize the personality of an instance by
     * defining one or more files and their contents. The personality structure
     * is described below.
     */
    readonly personalities?: pulumi.Input<pulumi.Input<{ content: pulumi.Input<string>, file: pulumi.Input<string> }>[]>;
    /**
     * Provide the VM state. Only 'active' and 'shutoff'
     * are supported values. *Note*: If the initial power_state is the shutoff
     * the VM will be stopped immediately after build and the provisioners like
     * remote-exec or files are not supported.
     */
    readonly powerState?: pulumi.Input<string>;
    /**
     * The region in which to create the server instance. If
     * omitted, the `region` argument of the provider is used. Changing this
     * creates a new server.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * Provide the Nova scheduler with hints on how
     * the instance should be launched. The available hints are described below.
     */
    readonly schedulerHints?: pulumi.Input<pulumi.Input<{ additionalProperties?: pulumi.Input<{[key: string]: any}>, buildNearHostIp?: pulumi.Input<string>, differentHosts?: pulumi.Input<pulumi.Input<string>[]>, group?: pulumi.Input<string>, queries?: pulumi.Input<pulumi.Input<string>[]>, sameHosts?: pulumi.Input<pulumi.Input<string>[]>, targetCell?: pulumi.Input<string> }>[]>;
    /**
     * An array of one or more security group names
     * to associate with the server. Changing this results in adding/removing
     * security groups from the existing server. *Note*: When attaching the
     * instance to networks using Ports, place the security groups on the Port
     * and not the instance.
     */
    readonly securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to try stop instance gracefully
     * before destroying it, thus giving chance for guest OS daemons to stop correctly.
     * If instance doesn't stop within timeout, it will be destroyed anyway.
     */
    readonly stopBeforeDestroy?: pulumi.Input<boolean>;
    /**
     * The user data to provide when launching the instance.
     * Changing this creates a new server.
     */
    readonly userData?: pulumi.Input<string>;
    /**
     * Map of additional vendor-specific options.
     * Supported options are described below.
     */
    readonly vendorOptions?: pulumi.Input<{ ignoreResizeConfirmation?: pulumi.Input<boolean> }>;
}
