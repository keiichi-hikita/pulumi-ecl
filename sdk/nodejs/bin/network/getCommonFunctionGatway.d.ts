import * as pulumi from "@pulumi/pulumi";
export declare function getCommonFunctionGatway(args?: GetCommonFunctionGatwayArgs, opts?: pulumi.InvokeOptions): Promise<GetCommonFunctionGatwayResult>;
/**
 * A collection of arguments for invoking getCommonFunctionGatway.
 */
export interface GetCommonFunctionGatwayArgs {
    readonly commonFunctionPoolId?: string;
    readonly description?: string;
    readonly name?: string;
    readonly networkId?: string;
    readonly subnetId?: string;
    readonly tenantId?: string;
}
/**
 * A collection of values returned by getCommonFunctionGatway.
 */
export interface GetCommonFunctionGatwayResult {
    readonly commonFunctionPoolId: string;
    readonly description: string;
    readonly name: string;
    readonly networkId: string;
    readonly subnetId: string;
    readonly tenantId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
