import * as pulumi from "@pulumi/pulumi";
export declare function getPublicIP(args?: GetPublicIPArgs, opts?: pulumi.InvokeOptions): Promise<GetPublicIPResult>;
/**
 * A collection of arguments for invoking getPublicIP.
 */
export interface GetPublicIPArgs {
    readonly cidr?: string;
    readonly description?: string;
    readonly internetGwId?: string;
    readonly name?: string;
    readonly publicIpId?: string;
    readonly region?: string;
    readonly status?: string;
    readonly submaskLength?: number;
    readonly tenantId?: string;
}
/**
 * A collection of values returned by getPublicIP.
 */
export interface GetPublicIPResult {
    readonly cidr: string;
    readonly description: string;
    readonly internetGwId: string;
    readonly name: string;
    readonly publicIpId: string;
    readonly region: string;
    readonly status: string;
    readonly submaskLength: number;
    readonly tenantId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
