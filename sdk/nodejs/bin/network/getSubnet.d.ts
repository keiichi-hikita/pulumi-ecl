import * as pulumi from "@pulumi/pulumi";
export declare function getSubnet(args?: GetSubnetArgs, opts?: pulumi.InvokeOptions): Promise<GetSubnetResult>;
/**
 * A collection of arguments for invoking getSubnet.
 */
export interface GetSubnetArgs {
    readonly cidr?: string;
    readonly description?: string;
    readonly gatewayIp?: string;
    readonly name?: string;
    readonly networkId?: string;
    readonly region?: string;
    readonly subnetId?: string;
}
/**
 * A collection of values returned by getSubnet.
 */
export interface GetSubnetResult {
    readonly allocationPools: {
        end: string;
        start: string;
    }[];
    readonly cidr: string;
    readonly description: string;
    readonly dnsNameservers: string[];
    readonly enableDhcp: boolean;
    readonly gatewayIp: string;
    readonly hostRoutes: {
        destinationCidr: string;
        nextHop: string;
    }[];
    readonly ipVersion: number;
    readonly ipv6AddressMode: string;
    readonly ipv6RaMode: string;
    readonly name: string;
    readonly networkId: string;
    readonly ntpServers: string[];
    readonly region: string;
    readonly status: string;
    readonly subnetId: string;
    readonly tags: {
        [key: string]: any;
    };
    readonly tenantId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
