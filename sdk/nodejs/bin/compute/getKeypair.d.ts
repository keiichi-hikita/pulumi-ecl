import * as pulumi from "@pulumi/pulumi";
export declare function getKeypair(args: GetKeypairArgs, opts?: pulumi.InvokeOptions): Promise<GetKeypairResult>;
/**
 * A collection of arguments for invoking getKeypair.
 */
export interface GetKeypairArgs {
    readonly name: string;
    readonly region?: string;
}
/**
 * A collection of values returned by getKeypair.
 */
export interface GetKeypairResult {
    readonly name: string;
    readonly publicKey: string;
    readonly region: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
