import * as pulumi from "@pulumi/pulumi";
export declare class GatewayInterface extends pulumi.CustomResource {
    /**
     * Get an existing GatewayInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GatewayInterfaceState, opts?: pulumi.CustomResourceOptions): GatewayInterface;
    readonly awsGwId: pulumi.Output<string | undefined>;
    readonly azureGwId: pulumi.Output<string | undefined>;
    readonly description: pulumi.Output<string | undefined>;
    readonly gcpGwId: pulumi.Output<string | undefined>;
    readonly gwVipv4: pulumi.Output<string>;
    readonly gwVipv6: pulumi.Output<string | undefined>;
    readonly interdcGwId: pulumi.Output<string | undefined>;
    readonly internetGwId: pulumi.Output<string | undefined>;
    readonly name: pulumi.Output<string>;
    readonly netmask: pulumi.Output<number>;
    readonly networkId: pulumi.Output<string>;
    readonly primaryIpv4: pulumi.Output<string>;
    readonly primaryIpv6: pulumi.Output<string | undefined>;
    readonly region: pulumi.Output<string>;
    readonly secondaryIpv4: pulumi.Output<string>;
    readonly secondaryIpv6: pulumi.Output<string | undefined>;
    readonly serviceType: pulumi.Output<string>;
    readonly tenantId: pulumi.Output<string>;
    readonly vpnGwId: pulumi.Output<string | undefined>;
    readonly vrid: pulumi.Output<number>;
    /**
     * Create a GatewayInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GatewayInterfaceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering GatewayInterface resources.
 */
export interface GatewayInterfaceState {
    readonly awsGwId?: pulumi.Input<string>;
    readonly azureGwId?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly gcpGwId?: pulumi.Input<string>;
    readonly gwVipv4?: pulumi.Input<string>;
    readonly gwVipv6?: pulumi.Input<string>;
    readonly interdcGwId?: pulumi.Input<string>;
    readonly internetGwId?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly netmask?: pulumi.Input<number>;
    readonly networkId?: pulumi.Input<string>;
    readonly primaryIpv4?: pulumi.Input<string>;
    readonly primaryIpv6?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly secondaryIpv4?: pulumi.Input<string>;
    readonly secondaryIpv6?: pulumi.Input<string>;
    readonly serviceType?: pulumi.Input<string>;
    readonly tenantId?: pulumi.Input<string>;
    readonly vpnGwId?: pulumi.Input<string>;
    readonly vrid?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a GatewayInterface resource.
 */
export interface GatewayInterfaceArgs {
    readonly awsGwId?: pulumi.Input<string>;
    readonly azureGwId?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly gcpGwId?: pulumi.Input<string>;
    readonly gwVipv4: pulumi.Input<string>;
    readonly gwVipv6?: pulumi.Input<string>;
    readonly interdcGwId?: pulumi.Input<string>;
    readonly internetGwId?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly netmask: pulumi.Input<number>;
    readonly networkId: pulumi.Input<string>;
    readonly primaryIpv4: pulumi.Input<string>;
    readonly primaryIpv6?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly secondaryIpv4: pulumi.Input<string>;
    readonly secondaryIpv6?: pulumi.Input<string>;
    readonly serviceType: pulumi.Input<string>;
    readonly tenantId?: pulumi.Input<string>;
    readonly vpnGwId?: pulumi.Input<string>;
    readonly vrid: pulumi.Input<number>;
}
