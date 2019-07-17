import * as pulumi from "@pulumi/pulumi";
export declare function getGatewayInterface(args?: GetGatewayInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayInterfaceResult>;
/**
 * A collection of arguments for invoking getGatewayInterface.
 */
export interface GetGatewayInterfaceArgs {
    readonly awsGwId?: string;
    readonly azureGwId?: string;
    readonly description?: string;
    readonly gatewayInterfaceId?: string;
    readonly gcpGwId?: string;
    readonly gwVipv4?: string;
    readonly gwVipv6?: string;
    readonly interdcGwId?: string;
    readonly internetGwId?: string;
    readonly name?: string;
    readonly netmask?: number;
    readonly networkId?: string;
    readonly primaryIpv4?: string;
    readonly primaryIpv6?: string;
    readonly region?: string;
    readonly secondaryIpv4?: string;
    readonly secondaryIpv6?: string;
    readonly serviceType?: string;
    readonly status?: string;
    readonly tenantId?: string;
    readonly vpnGwId?: string;
    readonly vrid?: number;
}
/**
 * A collection of values returned by getGatewayInterface.
 */
export interface GetGatewayInterfaceResult {
    readonly awsGwId: string;
    readonly azureGwId: string;
    readonly description: string;
    readonly gatewayInterfaceId: string;
    readonly gcpGwId: string;
    readonly gwVipv4: string;
    readonly gwVipv6: string;
    readonly interdcGwId: string;
    readonly internetGwId: string;
    readonly name: string;
    readonly netmask: number;
    readonly networkId: string;
    readonly primaryIpv4: string;
    readonly primaryIpv6: string;
    readonly region: string;
    readonly secondaryIpv4: string;
    readonly secondaryIpv6: string;
    readonly serviceType: string;
    readonly status?: string;
    readonly tenantId: string;
    readonly vpnGwId: string;
    readonly vrid: number;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
