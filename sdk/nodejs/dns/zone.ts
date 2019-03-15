// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a V2 zone resource of Enterprise Cloud.
 */
export class Zone extends pulumi.CustomResource {
    /**
     * Get an existing Zone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZoneState): Zone {
        return new Zone(name, <any>state, { id });
    }

    /**
     * Description for this zone.
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * E-mail for the zone.
     * Used in SOA records for the zone.
     * This parameter is not currently supported.
     * Even if you set this parameter, it will be ignored.
     */
    public readonly email: pulumi.Output<string>;
    /**
     * For secondary zones. 
     * The servers to slave from to get DNS information.
     */
    public readonly masters: pulumi.Output<string[]>;
    /**
     * DNS Name for the zone.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * TTL (Time to Live) for the zone.
     * This parameter is not currently supported.
     * Even if you set this parameter, it will be ignored.
     */
    public readonly ttl: pulumi.Output<number>;
    /**
     * Type of zone.
     * PRIMARY is controlled by ECL2.0 DNS,
     * SECONDARY zones are slaved from another DNS Server.
     * Defaults to PRIMARY.
     * This parameter is not currently supported.
     * Even if you set this parameter, it will be ignored.
     */
    public readonly type: pulumi.Output<string>;

    /**
     * Create a Zone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ZoneArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ZoneArgs | ZoneState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ZoneState = argsOrState as ZoneState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["email"] = state ? state.email : undefined;
            inputs["masters"] = state ? state.masters : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["ttl"] = state ? state.ttl : undefined;
            inputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as ZoneArgs | undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["email"] = args ? args.email : undefined;
            inputs["masters"] = args ? args.masters : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["ttl"] = args ? args.ttl : undefined;
            inputs["type"] = args ? args.type : undefined;
        }
        super("ecl:dns/zone:Zone", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Zone resources.
 */
export interface ZoneState {
    /**
     * Description for this zone.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * E-mail for the zone.
     * Used in SOA records for the zone.
     * This parameter is not currently supported.
     * Even if you set this parameter, it will be ignored.
     */
    readonly email?: pulumi.Input<string>;
    /**
     * For secondary zones. 
     * The servers to slave from to get DNS information.
     */
    readonly masters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * DNS Name for the zone.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * TTL (Time to Live) for the zone.
     * This parameter is not currently supported.
     * Even if you set this parameter, it will be ignored.
     */
    readonly ttl?: pulumi.Input<number>;
    /**
     * Type of zone.
     * PRIMARY is controlled by ECL2.0 DNS,
     * SECONDARY zones are slaved from another DNS Server.
     * Defaults to PRIMARY.
     * This parameter is not currently supported.
     * Even if you set this parameter, it will be ignored.
     */
    readonly type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Zone resource.
 */
export interface ZoneArgs {
    /**
     * Description for this zone.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * E-mail for the zone.
     * Used in SOA records for the zone.
     * This parameter is not currently supported.
     * Even if you set this parameter, it will be ignored.
     */
    readonly email?: pulumi.Input<string>;
    /**
     * For secondary zones. 
     * The servers to slave from to get DNS information.
     */
    readonly masters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * DNS Name for the zone.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * TTL (Time to Live) for the zone.
     * This parameter is not currently supported.
     * Even if you set this parameter, it will be ignored.
     */
    readonly ttl?: pulumi.Input<number>;
    /**
     * Type of zone.
     * PRIMARY is controlled by ECL2.0 DNS,
     * SECONDARY zones are slaved from another DNS Server.
     * Defaults to PRIMARY.
     * This parameter is not currently supported.
     * Even if you set this parameter, it will be ignored.
     */
    readonly type?: pulumi.Input<string>;
}
