// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a V1 load balancer monitor resource within OpenStack.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as openstack from "@pulumi/openstack";
 * 
 * const monitor1 = new openstack.loadbalancer.MonitorV1("monitor_1", {
 *     adminStateUp: "true",
 *     delay: 30,
 *     maxRetries: 3,
 *     timeout: 5,
 *     type: "PING",
 * });
 * ```
 */
export class MonitorV1 extends pulumi.CustomResource {
    /**
     * Get an existing MonitorV1 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MonitorV1State, opts?: pulumi.CustomResourceOptions): MonitorV1 {
        return new MonitorV1(name, <any>state, { ...opts, id: id });
    }

    /**
     * The administrative state of the monitor.
     * Acceptable values are "true" and "false". Changing this value updates the
     * state of the existing monitor.
     */
    public readonly adminStateUp: pulumi.Output<string>;
    /**
     * The time, in seconds, between sending probes to members.
     * Changing this creates a new monitor.
     */
    public readonly delay: pulumi.Output<number>;
    /**
     * Required for HTTP(S) types. Expected HTTP codes
     * for a passing HTTP(S) monitor. You can either specify a single status like
     * "200", or a range like "200-202". Changing this updates the expected_codes
     * of the existing monitor.
     */
    public readonly expectedCodes: pulumi.Output<string | undefined>;
    /**
     * Required for HTTP(S) types. The HTTP method used
     * for requests by the monitor. If this attribute is not specified, it defaults
     * to "GET". Changing this updates the http_method of the existing monitor.
     */
    public readonly httpMethod: pulumi.Output<string | undefined>;
    /**
     * Number of permissible ping failures before changing
     * the member's status to INACTIVE. Must be a number between 1 and 10. Changing
     * this updates the max_retries of the existing monitor.
     */
    public readonly maxRetries: pulumi.Output<number>;
    /**
     * The region in which to obtain the V2 Networking client.
     * A Networking client is needed to create an LB monitor. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * LB monitor.
     */
    public readonly region: pulumi.Output<string>;
    /**
     * The owner of the monitor. Required if admin wants to
     * create a monitor for another tenant. Changing this creates a new monitor.
     */
    public readonly tenantId: pulumi.Output<string>;
    /**
     * Maximum number of seconds for a monitor to wait for a
     * ping reply before it times out. The value must be less than the delay value.
     * Changing this updates the timeout of the existing monitor.
     */
    public readonly timeout: pulumi.Output<number>;
    /**
     * The type of probe, which is PING, TCP, HTTP, or HTTPS,
     * that is sent by the monitor to verify the member state. Changing this
     * creates a new monitor.
     */
    public readonly type: pulumi.Output<string>;
    /**
     * Required for HTTP(S) types. URI path that will be
     * accessed if monitor type is HTTP or HTTPS. Changing this updates the
     * url_path of the existing monitor.
     */
    public readonly urlPath: pulumi.Output<string | undefined>;

    /**
     * Create a MonitorV1 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MonitorV1Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MonitorV1Args | MonitorV1State, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: MonitorV1State = argsOrState as MonitorV1State | undefined;
            inputs["adminStateUp"] = state ? state.adminStateUp : undefined;
            inputs["delay"] = state ? state.delay : undefined;
            inputs["expectedCodes"] = state ? state.expectedCodes : undefined;
            inputs["httpMethod"] = state ? state.httpMethod : undefined;
            inputs["maxRetries"] = state ? state.maxRetries : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["tenantId"] = state ? state.tenantId : undefined;
            inputs["timeout"] = state ? state.timeout : undefined;
            inputs["type"] = state ? state.type : undefined;
            inputs["urlPath"] = state ? state.urlPath : undefined;
        } else {
            const args = argsOrState as MonitorV1Args | undefined;
            if (!args || args.delay === undefined) {
                throw new Error("Missing required property 'delay'");
            }
            if (!args || args.maxRetries === undefined) {
                throw new Error("Missing required property 'maxRetries'");
            }
            if (!args || args.timeout === undefined) {
                throw new Error("Missing required property 'timeout'");
            }
            if (!args || args.type === undefined) {
                throw new Error("Missing required property 'type'");
            }
            inputs["adminStateUp"] = args ? args.adminStateUp : undefined;
            inputs["delay"] = args ? args.delay : undefined;
            inputs["expectedCodes"] = args ? args.expectedCodes : undefined;
            inputs["httpMethod"] = args ? args.httpMethod : undefined;
            inputs["maxRetries"] = args ? args.maxRetries : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["tenantId"] = args ? args.tenantId : undefined;
            inputs["timeout"] = args ? args.timeout : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["urlPath"] = args ? args.urlPath : undefined;
        }
        super("openstack:loadbalancer/monitorV1:MonitorV1", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering MonitorV1 resources.
 */
export interface MonitorV1State {
    /**
     * The administrative state of the monitor.
     * Acceptable values are "true" and "false". Changing this value updates the
     * state of the existing monitor.
     */
    readonly adminStateUp?: pulumi.Input<string>;
    /**
     * The time, in seconds, between sending probes to members.
     * Changing this creates a new monitor.
     */
    readonly delay?: pulumi.Input<number>;
    /**
     * Required for HTTP(S) types. Expected HTTP codes
     * for a passing HTTP(S) monitor. You can either specify a single status like
     * "200", or a range like "200-202". Changing this updates the expected_codes
     * of the existing monitor.
     */
    readonly expectedCodes?: pulumi.Input<string>;
    /**
     * Required for HTTP(S) types. The HTTP method used
     * for requests by the monitor. If this attribute is not specified, it defaults
     * to "GET". Changing this updates the http_method of the existing monitor.
     */
    readonly httpMethod?: pulumi.Input<string>;
    /**
     * Number of permissible ping failures before changing
     * the member's status to INACTIVE. Must be a number between 1 and 10. Changing
     * this updates the max_retries of the existing monitor.
     */
    readonly maxRetries?: pulumi.Input<number>;
    /**
     * The region in which to obtain the V2 Networking client.
     * A Networking client is needed to create an LB monitor. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * LB monitor.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The owner of the monitor. Required if admin wants to
     * create a monitor for another tenant. Changing this creates a new monitor.
     */
    readonly tenantId?: pulumi.Input<string>;
    /**
     * Maximum number of seconds for a monitor to wait for a
     * ping reply before it times out. The value must be less than the delay value.
     * Changing this updates the timeout of the existing monitor.
     */
    readonly timeout?: pulumi.Input<number>;
    /**
     * The type of probe, which is PING, TCP, HTTP, or HTTPS,
     * that is sent by the monitor to verify the member state. Changing this
     * creates a new monitor.
     */
    readonly type?: pulumi.Input<string>;
    /**
     * Required for HTTP(S) types. URI path that will be
     * accessed if monitor type is HTTP or HTTPS. Changing this updates the
     * url_path of the existing monitor.
     */
    readonly urlPath?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MonitorV1 resource.
 */
export interface MonitorV1Args {
    /**
     * The administrative state of the monitor.
     * Acceptable values are "true" and "false". Changing this value updates the
     * state of the existing monitor.
     */
    readonly adminStateUp?: pulumi.Input<string>;
    /**
     * The time, in seconds, between sending probes to members.
     * Changing this creates a new monitor.
     */
    readonly delay: pulumi.Input<number>;
    /**
     * Required for HTTP(S) types. Expected HTTP codes
     * for a passing HTTP(S) monitor. You can either specify a single status like
     * "200", or a range like "200-202". Changing this updates the expected_codes
     * of the existing monitor.
     */
    readonly expectedCodes?: pulumi.Input<string>;
    /**
     * Required for HTTP(S) types. The HTTP method used
     * for requests by the monitor. If this attribute is not specified, it defaults
     * to "GET". Changing this updates the http_method of the existing monitor.
     */
    readonly httpMethod?: pulumi.Input<string>;
    /**
     * Number of permissible ping failures before changing
     * the member's status to INACTIVE. Must be a number between 1 and 10. Changing
     * this updates the max_retries of the existing monitor.
     */
    readonly maxRetries: pulumi.Input<number>;
    /**
     * The region in which to obtain the V2 Networking client.
     * A Networking client is needed to create an LB monitor. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * LB monitor.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The owner of the monitor. Required if admin wants to
     * create a monitor for another tenant. Changing this creates a new monitor.
     */
    readonly tenantId?: pulumi.Input<string>;
    /**
     * Maximum number of seconds for a monitor to wait for a
     * ping reply before it times out. The value must be less than the delay value.
     * Changing this updates the timeout of the existing monitor.
     */
    readonly timeout: pulumi.Input<number>;
    /**
     * The type of probe, which is PING, TCP, HTTP, or HTTPS,
     * that is sent by the monitor to verify the member state. Changing this
     * creates a new monitor.
     */
    readonly type: pulumi.Input<string>;
    /**
     * Required for HTTP(S) types. URI path that will be
     * accessed if monitor type is HTTP or HTTPS. Changing this updates the
     * url_path of the existing monitor.
     */
    readonly urlPath?: pulumi.Input<string>;
}
