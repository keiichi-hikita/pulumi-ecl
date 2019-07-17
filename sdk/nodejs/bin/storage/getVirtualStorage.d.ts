import * as pulumi from "@pulumi/pulumi";
export declare function getVirtualStorage(args?: GetVirtualStorageArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualStorageResult>;
/**
 * A collection of arguments for invoking getVirtualStorage.
 */
export interface GetVirtualStorageArgs {
    readonly name?: string;
    readonly virtualStorageId?: string;
}
/**
 * A collection of values returned by getVirtualStorage.
 */
export interface GetVirtualStorageResult {
    readonly description: string;
    readonly hostRoutes: {
        destination: string;
        nexthop: string;
    }[];
    readonly ipAddrPool: {
        end: string;
        start: string;
    };
    readonly name?: string;
    readonly networkId: string;
    readonly subnetId: string;
    readonly virtualStorageId?: string;
    readonly volumeTypeId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
