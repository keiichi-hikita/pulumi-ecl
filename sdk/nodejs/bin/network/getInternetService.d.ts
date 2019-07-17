import * as pulumi from "@pulumi/pulumi";
export declare function getInternetService(args?: GetInternetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetInternetServiceResult>;
/**
 * A collection of arguments for invoking getInternetService.
 */
export interface GetInternetServiceArgs {
    readonly description?: string;
    readonly internetServiceId?: string;
    readonly minimalSubmaskLength?: number;
    readonly name?: string;
    readonly region?: string;
    readonly zone?: string;
}
/**
 * A collection of values returned by getInternetService.
 */
export interface GetInternetServiceResult {
    readonly description: string;
    readonly internetServiceId: string;
    readonly minimalSubmaskLength: number;
    readonly name: string;
    readonly region: string;
    readonly zone: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
