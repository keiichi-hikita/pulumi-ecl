import * as pulumi from "@pulumi/pulumi";
export declare function getNetwork(args?: GetNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkResult>;
/**
 * A collection of arguments for invoking getNetwork.
 */
export interface GetNetworkArgs {
    readonly description?: string;
    readonly matchingSubnetCidr?: string;
    readonly name?: string;
    readonly networkId?: string;
    readonly plane?: string;
    readonly region?: string;
}
/**
 * A collection of values returned by getNetwork.
 */
export interface GetNetworkResult {
    readonly adminStateUp: boolean;
    readonly description: string;
    readonly matchingSubnetCidr: string;
    readonly name: string;
    readonly networkId: string;
    readonly plane: string;
    readonly region: string;
    readonly status: string;
    readonly subnets: string[];
    readonly tags: {
        [key: string]: any;
    };
    readonly tenantId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
