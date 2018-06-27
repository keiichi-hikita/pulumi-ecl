import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to get the ID of an available OpenStack subnet.
 */
export declare function getSubnet(args?: GetSubnetArgs): Promise<GetSubnetResult>;
/**
 * A collection of arguments for invoking getSubnet.
 */
export interface GetSubnetArgs {
    /**
     * The CIDR of the subnet.
     */
    readonly cidr?: pulumi.Input<string>;
    /**
     * If the subnet has DHCP disabled.
     */
    readonly dhcpDisabled?: pulumi.Input<boolean>;
    /**
     * If the subnet has DHCP enabled.
     */
    readonly dhcpEnabled?: pulumi.Input<boolean>;
    /**
     * The IP of the subnet's gateway.
     */
    readonly gatewayIp?: pulumi.Input<string>;
    /**
     * The IP version of the subnet (either 4 or 6).
     */
    readonly ipVersion?: pulumi.Input<number>;
    /**
     * The IPv6 address mode. Valid values are
     * `dhcpv6-stateful`, `dhcpv6-stateless`, or `slaac`.
     */
    readonly ipv6AddressMode?: pulumi.Input<string>;
    /**
     * The IPv6 Router Advertisement mode. Valid values
     * are `dhcpv6-stateful`, `dhcpv6-stateless`, or `slaac`.
     */
    readonly ipv6RaMode?: pulumi.Input<string>;
    /**
     * The name of the subnet.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The ID of the network the subnet belongs to.
     */
    readonly networkId?: pulumi.Input<string>;
    /**
     * The region in which to obtain the V2 Neutron client.
     * A Neutron client is needed to retrieve subnet ids. If omitted, the
     * `region` argument of the provider is used.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The ID of the subnet.
     */
    readonly subnetId?: pulumi.Input<string>;
    /**
     * The ID of the subnetpool associated with the subnet.
     */
    readonly subnetpoolId?: pulumi.Input<string>;
    /**
     * The owner of the subnet.
     */
    readonly tenantId?: pulumi.Input<string>;
}
/**
 * A collection of values returned by getSubnet.
 */
export interface GetSubnetResult {
    /**
     * Allocation pools of the subnet.
     */
    readonly allocationPools: {
        end: string;
        start: string;
    }[];
    readonly cidr: string;
    /**
     * DNS Nameservers of the subnet.
     */
    readonly dnsNameservers: string[];
    /**
     * Whether the subnet has DHCP enabled or not.
     */
    readonly enableDhcp: boolean;
    readonly gatewayIp: string;
    /**
     * Host Routes of the subnet.
     */
    readonly hostRoutes: {
        destinationCidr: string;
        nextHop: string;
    }[];
    readonly ipVersion: number;
    readonly ipv6AddressMode: string;
    readonly ipv6RaMode: string;
    readonly name: string;
    readonly networkId: string;
    /**
     * See Argument Reference above.
     */
    readonly region: string;
    readonly subnetId: string;
    readonly subnetpoolId: string;
    readonly tenantId: string;
}
