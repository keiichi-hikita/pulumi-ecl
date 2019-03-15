// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a V2 recordset resource within Enterprise Cloud.
 * 
 * ## Example Usage
 * 
 * ### Basic RecordSet
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as ecl from "@pulumi/ecl";
 * 
 * const recordset1 = new ecl.dns.RecordSet("recordset_1", {
 *     record: "192.0.2.1",
 *     ttl: 6000,
 *     type: "A",
 *     zoneId: "cebb1607-40c2-466b-b76b-9fcc7a356bff",
 * });
 * ```
 */
export class RecordSet extends pulumi.CustomResource {
    /**
     * Get an existing RecordSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RecordSetState, opts?: pulumi.CustomResourceOptions): RecordSet {
        return new RecordSet(name, <any>state, { ...opts, id: id });
    }

    /**
     * Description for the recordset.
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * DNS Name for the recordset.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Data for the recordset.
     */
    public readonly record: pulumi.Output<string>;
    /**
     * TTL (Time to Live) for the recordset.
     */
    public readonly ttl: pulumi.Output<number>;
    /**
     * RRTYPE of the recordset. 
     * Valid Values: A | AAAA | MX | CNAME | SRV | SPF | TXT | PTR | NS
     */
    public readonly type: pulumi.Output<string>;
    /**
     * Zone ID for the recordset.
     */
    public readonly zoneId: pulumi.Output<string>;

    /**
     * Create a RecordSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RecordSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RecordSetArgs | RecordSetState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: RecordSetState = argsOrState as RecordSetState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["record"] = state ? state.record : undefined;
            inputs["ttl"] = state ? state.ttl : undefined;
            inputs["type"] = state ? state.type : undefined;
            inputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as RecordSetArgs | undefined;
            if (!args || args.record === undefined) {
                throw new Error("Missing required property 'record'");
            }
            if (!args || args.ttl === undefined) {
                throw new Error("Missing required property 'ttl'");
            }
            if (!args || args.type === undefined) {
                throw new Error("Missing required property 'type'");
            }
            if (!args || args.zoneId === undefined) {
                throw new Error("Missing required property 'zoneId'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["record"] = args ? args.record : undefined;
            inputs["ttl"] = args ? args.ttl : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["zoneId"] = args ? args.zoneId : undefined;
        }
        super("ecl:dns/recordSet:RecordSet", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering RecordSet resources.
 */
export interface RecordSetState {
    /**
     * Description for the recordset.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * DNS Name for the recordset.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Data for the recordset.
     */
    readonly record?: pulumi.Input<string>;
    /**
     * TTL (Time to Live) for the recordset.
     */
    readonly ttl?: pulumi.Input<number>;
    /**
     * RRTYPE of the recordset. 
     * Valid Values: A | AAAA | MX | CNAME | SRV | SPF | TXT | PTR | NS
     */
    readonly type?: pulumi.Input<string>;
    /**
     * Zone ID for the recordset.
     */
    readonly zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RecordSet resource.
 */
export interface RecordSetArgs {
    /**
     * Description for the recordset.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * DNS Name for the recordset.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Data for the recordset.
     */
    readonly record: pulumi.Input<string>;
    /**
     * TTL (Time to Live) for the recordset.
     */
    readonly ttl: pulumi.Input<number>;
    /**
     * RRTYPE of the recordset. 
     * Valid Values: A | AAAA | MX | CNAME | SRV | SPF | TXT | PTR | NS
     */
    readonly type: pulumi.Input<string>;
    /**
     * Zone ID for the recordset.
     */
    readonly zoneId: pulumi.Input<string>;
}
