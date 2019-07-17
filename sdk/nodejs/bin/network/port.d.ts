import * as pulumi from "@pulumi/pulumi";
export declare class Port extends pulumi.CustomResource {
    /**
     * Get an existing Port resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PortState, opts?: pulumi.CustomResourceOptions): Port;
    readonly adminStateUp: pulumi.Output<boolean>;
    readonly allFixedIps: pulumi.Output<string[]>;
    readonly allowedAddressPairs: pulumi.Output<{
        ipAddress: string;
        macAddress?: string;
    }[] | undefined>;
    readonly description: pulumi.Output<string | undefined>;
    readonly deviceId: pulumi.Output<string>;
    readonly deviceOwner: pulumi.Output<string>;
    readonly fixedIps: pulumi.Output<{
        ipAddress?: string;
        subnetId: string;
    }[] | undefined>;
    readonly macAddress: pulumi.Output<string>;
    readonly managedByService: pulumi.Output<boolean>;
    readonly name: pulumi.Output<string>;
    readonly networkId: pulumi.Output<string>;
    readonly noFixedIp: pulumi.Output<boolean | undefined>;
    readonly region: pulumi.Output<string>;
    readonly segmentationId: pulumi.Output<number>;
    readonly segmentationType: pulumi.Output<string>;
    readonly status: pulumi.Output<string>;
    readonly tags: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a Port resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PortArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Port resources.
 */
export interface PortState {
    readonly adminStateUp?: pulumi.Input<boolean>;
    readonly allFixedIps?: pulumi.Input<pulumi.Input<string>[]>;
    readonly allowedAddressPairs?: pulumi.Input<pulumi.Input<{
        ipAddress: pulumi.Input<string>;
        macAddress?: pulumi.Input<string>;
    }>[]>;
    readonly description?: pulumi.Input<string>;
    readonly deviceId?: pulumi.Input<string>;
    readonly deviceOwner?: pulumi.Input<string>;
    readonly fixedIps?: pulumi.Input<pulumi.Input<{
        ipAddress?: pulumi.Input<string>;
        subnetId: pulumi.Input<string>;
    }>[]>;
    readonly macAddress?: pulumi.Input<string>;
    readonly managedByService?: pulumi.Input<boolean>;
    readonly name?: pulumi.Input<string>;
    readonly networkId?: pulumi.Input<string>;
    readonly noFixedIp?: pulumi.Input<boolean>;
    readonly region?: pulumi.Input<string>;
    readonly segmentationId?: pulumi.Input<number>;
    readonly segmentationType?: pulumi.Input<string>;
    readonly status?: pulumi.Input<string>;
    readonly tags?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Port resource.
 */
export interface PortArgs {
    readonly adminStateUp?: pulumi.Input<boolean>;
    readonly allowedAddressPairs?: pulumi.Input<pulumi.Input<{
        ipAddress: pulumi.Input<string>;
        macAddress?: pulumi.Input<string>;
    }>[]>;
    readonly description?: pulumi.Input<string>;
    readonly deviceId?: pulumi.Input<string>;
    readonly deviceOwner?: pulumi.Input<string>;
    readonly fixedIps?: pulumi.Input<pulumi.Input<{
        ipAddress?: pulumi.Input<string>;
        subnetId: pulumi.Input<string>;
    }>[]>;
    readonly macAddress?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly networkId: pulumi.Input<string>;
    readonly noFixedIp?: pulumi.Input<boolean>;
    readonly region?: pulumi.Input<string>;
    readonly segmentationId?: pulumi.Input<number>;
    readonly segmentationType?: pulumi.Input<string>;
    readonly tags?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly tenantId?: pulumi.Input<string>;
}
