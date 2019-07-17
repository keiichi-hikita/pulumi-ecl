import * as pulumi from "@pulumi/pulumi";
export declare class Subnet extends pulumi.CustomResource {
    /**
     * Get an existing Subnet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubnetState, opts?: pulumi.CustomResourceOptions): Subnet;
    readonly allocationPools: pulumi.Output<{
        end: string;
        start: string;
    }[]>;
    readonly cidr: pulumi.Output<string>;
    readonly description: pulumi.Output<string | undefined>;
    readonly dnsNameservers: pulumi.Output<string[]>;
    readonly enableDhcp: pulumi.Output<boolean>;
    readonly gatewayIp: pulumi.Output<string>;
    readonly hostRoutes: pulumi.Output<{
        destinationCidr: string;
        nextHop: string;
    }[] | undefined>;
    readonly ipVersion: pulumi.Output<number | undefined>;
    readonly ipv6AddressMode: pulumi.Output<string>;
    readonly ipv6RaMode: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    readonly networkId: pulumi.Output<string>;
    readonly noGateway: pulumi.Output<boolean | undefined>;
    readonly ntpServers: pulumi.Output<string[] | undefined>;
    readonly region: pulumi.Output<string>;
    readonly status: pulumi.Output<string>;
    readonly tags: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a Subnet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubnetArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Subnet resources.
 */
export interface SubnetState {
    readonly allocationPools?: pulumi.Input<pulumi.Input<{
        end: pulumi.Input<string>;
        start: pulumi.Input<string>;
    }>[]>;
    readonly cidr?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly dnsNameservers?: pulumi.Input<pulumi.Input<string>[]>;
    readonly enableDhcp?: pulumi.Input<boolean>;
    readonly gatewayIp?: pulumi.Input<string>;
    readonly hostRoutes?: pulumi.Input<pulumi.Input<{
        destinationCidr: pulumi.Input<string>;
        nextHop: pulumi.Input<string>;
    }>[]>;
    readonly ipVersion?: pulumi.Input<number>;
    readonly ipv6AddressMode?: pulumi.Input<string>;
    readonly ipv6RaMode?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly networkId?: pulumi.Input<string>;
    readonly noGateway?: pulumi.Input<boolean>;
    readonly ntpServers?: pulumi.Input<pulumi.Input<string>[]>;
    readonly region?: pulumi.Input<string>;
    readonly status?: pulumi.Input<string>;
    readonly tags?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Subnet resource.
 */
export interface SubnetArgs {
    readonly allocationPools?: pulumi.Input<pulumi.Input<{
        end: pulumi.Input<string>;
        start: pulumi.Input<string>;
    }>[]>;
    readonly cidr: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly dnsNameservers?: pulumi.Input<pulumi.Input<string>[]>;
    readonly enableDhcp?: pulumi.Input<boolean>;
    readonly gatewayIp?: pulumi.Input<string>;
    readonly hostRoutes?: pulumi.Input<pulumi.Input<{
        destinationCidr: pulumi.Input<string>;
        nextHop: pulumi.Input<string>;
    }>[]>;
    readonly ipVersion?: pulumi.Input<number>;
    readonly name?: pulumi.Input<string>;
    readonly networkId: pulumi.Input<string>;
    readonly noGateway?: pulumi.Input<boolean>;
    readonly ntpServers?: pulumi.Input<pulumi.Input<string>[]>;
    readonly region?: pulumi.Input<string>;
    readonly tags?: pulumi.Input<{
        [key: string]: any;
    }>;
    readonly tenantId?: pulumi.Input<string>;
}
