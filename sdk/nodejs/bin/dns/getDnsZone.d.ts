import * as pulumi from "@pulumi/pulumi";
export declare function getDnsZone(args?: GetDnsZoneArgs, opts?: pulumi.InvokeOptions): Promise<GetDnsZoneResult>;
/**
 * A collection of arguments for invoking getDnsZone.
 */
export interface GetDnsZoneArgs {
    readonly attributes?: {
        [key: string]: any;
    };
    readonly createdAt?: string;
    readonly description?: string;
    readonly domainName?: string;
    readonly email?: string;
    readonly masters?: string[];
    readonly name?: string;
    readonly poolId?: string;
    readonly projectId?: string;
    readonly region?: string;
    readonly serial?: number;
    readonly status?: string;
    readonly transferredAt?: string;
    readonly ttl?: number;
    readonly type?: string;
    readonly updatedAt?: string;
    readonly version?: number;
}
/**
 * A collection of values returned by getDnsZone.
 */
export interface GetDnsZoneResult {
    readonly attributes: {
        [key: string]: any;
    };
    readonly createdAt: string;
    readonly description: string;
    readonly domainName: string;
    readonly email: string;
    readonly masters: string[];
    readonly name: string;
    readonly poolId: string;
    readonly projectId: string;
    readonly region: string;
    readonly serial: number;
    readonly status: string;
    readonly transferredAt: string;
    readonly ttl: number;
    readonly type: string;
    readonly updatedAt: string;
    readonly version: number;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
