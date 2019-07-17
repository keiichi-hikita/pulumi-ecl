import * as pulumi from "@pulumi/pulumi";
export declare function getTenant(args: GetTenantArgs, opts?: pulumi.InvokeOptions): Promise<GetTenantResult>;
/**
 * A collection of arguments for invoking getTenant.
 */
export interface GetTenantArgs {
    readonly tenantName: string;
}
/**
 * A collection of values returned by getTenant.
 */
export interface GetTenantResult {
    readonly contractId: string;
    readonly description: string;
    readonly region: string;
    readonly startTime: string;
    readonly tenantId: string;
    readonly tenantName: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
