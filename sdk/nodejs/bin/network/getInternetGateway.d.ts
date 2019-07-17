import * as pulumi from "@pulumi/pulumi";
export declare function getInternetGateway(args?: GetInternetGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetInternetGatewayResult>;
/**
 * A collection of arguments for invoking getInternetGateway.
 */
export interface GetInternetGatewayArgs {
    readonly description?: string;
    readonly internetGatewayId?: string;
    readonly internetServiceId?: string;
    readonly name?: string;
    readonly qosOptionId?: string;
    readonly region?: string;
    readonly status?: string;
    readonly tenantId?: string;
}
/**
 * A collection of values returned by getInternetGateway.
 */
export interface GetInternetGatewayResult {
    readonly description: string;
    readonly internetGatewayId: string;
    readonly internetServiceId: string;
    readonly name: string;
    readonly qosOptionId: string;
    readonly region: string;
    readonly status: string;
    readonly tenantId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
