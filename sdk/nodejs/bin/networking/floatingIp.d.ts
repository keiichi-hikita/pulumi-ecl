import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a V2 floating IP resource within OpenStack Neutron (networking)
 * that can be used for load balancers.
 * These are similar to Nova (compute) floating IP resources,
 * but only compute floating IPs can be used with compute instances.
 */
export declare class FloatingIp extends pulumi.CustomResource {
    /**
     * Get an existing FloatingIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FloatingIpState): FloatingIp;
    /**
     * The actual floating IP address itself.
     */
    readonly address: pulumi.Output<string>;
    /**
     * Fixed IP of the port to associate with this floating IP. Required if
     * the port has multiple fixed IPs.
     */
    readonly fixedIp: pulumi.Output<string>;
    /**
     * The name of the pool from which to obtain the floating
     * IP. Changing this creates a new floating IP.
     */
    readonly pool: pulumi.Output<string>;
    /**
     * ID of an existing port with at least one IP address to
     * associate with this floating IP.
     */
    readonly portId: pulumi.Output<string>;
    /**
     * The region in which to obtain the V2 Networking client.
     * A Networking client is needed to create a floating IP that can be used with
     * another networking resource, such as a load balancer. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * floating IP (which may or may not have a different address).
     */
    readonly region: pulumi.Output<string>;
    /**
     * The subnet ID of the floating IP pool. Specify this if
     * the floating IP network has multiple subnets.
     */
    readonly subnetId: pulumi.Output<string | undefined>;
    /**
     * The target tenant ID in which to allocate the floating
     * IP, if you specify this together with a port_id, make sure the target port
     * belongs to the same tenant. Changing this creates a new floating IP (which
     * may or may not have a different address)
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Map of additional options.
     */
    readonly valueSpecs: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Create a FloatingIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FloatingIpArgs, opts?: pulumi.ResourceOptions);
}
/**
 * Input properties used for looking up and filtering FloatingIp resources.
 */
export interface FloatingIpState {
    /**
     * The actual floating IP address itself.
     */
    readonly address?: pulumi.Input<string>;
    /**
     * Fixed IP of the port to associate with this floating IP. Required if
     * the port has multiple fixed IPs.
     */
    readonly fixedIp?: pulumi.Input<string>;
    /**
     * The name of the pool from which to obtain the floating
     * IP. Changing this creates a new floating IP.
     */
    readonly pool?: pulumi.Input<string>;
    /**
     * ID of an existing port with at least one IP address to
     * associate with this floating IP.
     */
    readonly portId?: pulumi.Input<string>;
    /**
     * The region in which to obtain the V2 Networking client.
     * A Networking client is needed to create a floating IP that can be used with
     * another networking resource, such as a load balancer. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * floating IP (which may or may not have a different address).
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The subnet ID of the floating IP pool. Specify this if
     * the floating IP network has multiple subnets.
     */
    readonly subnetId?: pulumi.Input<string>;
    /**
     * The target tenant ID in which to allocate the floating
     * IP, if you specify this together with a port_id, make sure the target port
     * belongs to the same tenant. Changing this creates a new floating IP (which
     * may or may not have a different address)
     */
    readonly tenantId?: pulumi.Input<string>;
    /**
     * Map of additional options.
     */
    readonly valueSpecs?: pulumi.Input<{
        [key: string]: any;
    }>;
}
/**
 * The set of arguments for constructing a FloatingIp resource.
 */
export interface FloatingIpArgs {
    /**
     * Fixed IP of the port to associate with this floating IP. Required if
     * the port has multiple fixed IPs.
     */
    readonly fixedIp?: pulumi.Input<string>;
    /**
     * The name of the pool from which to obtain the floating
     * IP. Changing this creates a new floating IP.
     */
    readonly pool: pulumi.Input<string>;
    /**
     * ID of an existing port with at least one IP address to
     * associate with this floating IP.
     */
    readonly portId?: pulumi.Input<string>;
    /**
     * The region in which to obtain the V2 Networking client.
     * A Networking client is needed to create a floating IP that can be used with
     * another networking resource, such as a load balancer. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * floating IP (which may or may not have a different address).
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The subnet ID of the floating IP pool. Specify this if
     * the floating IP network has multiple subnets.
     */
    readonly subnetId?: pulumi.Input<string>;
    /**
     * The target tenant ID in which to allocate the floating
     * IP, if you specify this together with a port_id, make sure the target port
     * belongs to the same tenant. Changing this creates a new floating IP (which
     * may or may not have a different address)
     */
    readonly tenantId?: pulumi.Input<string>;
    /**
     * Map of additional options.
     */
    readonly valueSpecs?: pulumi.Input<{
        [key: string]: any;
    }>;
}
