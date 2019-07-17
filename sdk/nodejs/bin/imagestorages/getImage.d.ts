import * as pulumi from "@pulumi/pulumi";
export declare function getImage(args?: GetImageArgs, opts?: pulumi.InvokeOptions): Promise<GetImageResult>;
/**
 * A collection of arguments for invoking getImage.
 */
export interface GetImageArgs {
    readonly memberStatus?: string;
    readonly mostRecent?: boolean;
    readonly name?: string;
    readonly owner?: string;
    readonly properties?: {
        [key: string]: any;
    };
    readonly region?: string;
    readonly sizeMax?: number;
    readonly sizeMin?: number;
    readonly sortDirection?: string;
    readonly sortKey?: string;
    readonly tag?: string;
    readonly visibility?: string;
}
/**
 * A collection of values returned by getImage.
 */
export interface GetImageResult {
    readonly checksum: string;
    readonly containerFormat: string;
    readonly createdAt: string;
    readonly diskFormat: string;
    readonly file: string;
    readonly memberStatus: string;
    readonly metadata: {
        [key: string]: any;
    };
    readonly minDiskGb: number;
    readonly minRamMb: number;
    readonly mostRecent?: boolean;
    readonly name: string;
    readonly owner: string;
    readonly properties: {
        [key: string]: any;
    };
    readonly protected: boolean;
    readonly region: string;
    readonly schema: string;
    readonly sizeBytes: number;
    readonly sizeMax?: number;
    readonly sizeMin?: number;
    readonly sortDirection?: string;
    readonly sortKey?: string;
    readonly tag: string;
    readonly updatedAt: string;
    readonly visibility: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
