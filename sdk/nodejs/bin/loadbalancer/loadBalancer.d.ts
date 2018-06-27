import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a V2 loadbalancer resource within OpenStack.
 */
export declare class LoadBalancer extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalancer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadBalancerState): LoadBalancer;
    /**
     * The administrative state of the Loadbalancer.
     * A valid value is true (UP) or false (DOWN).
     */
    readonly adminStateUp: pulumi.Output<boolean | undefined>;
    /**
     * Human-readable description for the Loadbalancer.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The UUID of a flavor. Changing this creates a new
     * loadbalancer.
     */
    readonly flavor: pulumi.Output<string | undefined>;
    /**
     * The name of the provider. Changing this
     * creates a new loadbalancer.
     */
    readonly loadbalancerProvider: pulumi.Output<string>;
    /**
     * Human-readable name for the Loadbalancer. Does not have
     * to be unique.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The region in which to obtain the V2 Networking client.
     * A Networking client is needed to create an LB member. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * LB member.
     */
    readonly region: pulumi.Output<string>;
    /**
     * A list of security group IDs to apply to the
     * loadbalancer. The security groups must be specified by ID and not name (as
     * opposed to how they are configured with the Compute Instance).
     */
    readonly securityGroupIds: pulumi.Output<string[]>;
    /**
     * Required for admins. The UUID of the tenant who owns
     * the Loadbalancer.  Only administrative users can specify a tenant UUID
     * other than their own.  Changing this creates a new loadbalancer.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * The ip address of the load balancer.
     * Changing this creates a new loadbalancer.
     */
    readonly vipAddress: pulumi.Output<string>;
    /**
     * The Port ID of the Load Balancer IP.
     */
    readonly vipPortId: pulumi.Output<string>;
    /**
     * The network on which to allocate the
     * Loadbalancer's address. A tenant can only create Loadbalancers on networks
     * authorized by policy (e.g. networks that belong to them or networks that
     * are shared).  Changing this creates a new loadbalancer.
     */
    readonly vipSubnetId: pulumi.Output<string>;
    /**
     * Create a LoadBalancer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalancerArgs, opts?: pulumi.ResourceOptions);
}
/**
 * Input properties used for looking up and filtering LoadBalancer resources.
 */
export interface LoadBalancerState {
    /**
     * The administrative state of the Loadbalancer.
     * A valid value is true (UP) or false (DOWN).
     */
    readonly adminStateUp?: pulumi.Input<boolean>;
    /**
     * Human-readable description for the Loadbalancer.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The UUID of a flavor. Changing this creates a new
     * loadbalancer.
     */
    readonly flavor?: pulumi.Input<string>;
    /**
     * The name of the provider. Changing this
     * creates a new loadbalancer.
     */
    readonly loadbalancerProvider?: pulumi.Input<string>;
    /**
     * Human-readable name for the Loadbalancer. Does not have
     * to be unique.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The region in which to obtain the V2 Networking client.
     * A Networking client is needed to create an LB member. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * LB member.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * A list of security group IDs to apply to the
     * loadbalancer. The security groups must be specified by ID and not name (as
     * opposed to how they are configured with the Compute Instance).
     */
    readonly securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required for admins. The UUID of the tenant who owns
     * the Loadbalancer.  Only administrative users can specify a tenant UUID
     * other than their own.  Changing this creates a new loadbalancer.
     */
    readonly tenantId?: pulumi.Input<string>;
    /**
     * The ip address of the load balancer.
     * Changing this creates a new loadbalancer.
     */
    readonly vipAddress?: pulumi.Input<string>;
    /**
     * The Port ID of the Load Balancer IP.
     */
    readonly vipPortId?: pulumi.Input<string>;
    /**
     * The network on which to allocate the
     * Loadbalancer's address. A tenant can only create Loadbalancers on networks
     * authorized by policy (e.g. networks that belong to them or networks that
     * are shared).  Changing this creates a new loadbalancer.
     */
    readonly vipSubnetId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a LoadBalancer resource.
 */
export interface LoadBalancerArgs {
    /**
     * The administrative state of the Loadbalancer.
     * A valid value is true (UP) or false (DOWN).
     */
    readonly adminStateUp?: pulumi.Input<boolean>;
    /**
     * Human-readable description for the Loadbalancer.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The UUID of a flavor. Changing this creates a new
     * loadbalancer.
     */
    readonly flavor?: pulumi.Input<string>;
    /**
     * The name of the provider. Changing this
     * creates a new loadbalancer.
     */
    readonly loadbalancerProvider?: pulumi.Input<string>;
    /**
     * Human-readable name for the Loadbalancer. Does not have
     * to be unique.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The region in which to obtain the V2 Networking client.
     * A Networking client is needed to create an LB member. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * LB member.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * A list of security group IDs to apply to the
     * loadbalancer. The security groups must be specified by ID and not name (as
     * opposed to how they are configured with the Compute Instance).
     */
    readonly securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required for admins. The UUID of the tenant who owns
     * the Loadbalancer.  Only administrative users can specify a tenant UUID
     * other than their own.  Changing this creates a new loadbalancer.
     */
    readonly tenantId?: pulumi.Input<string>;
    /**
     * The ip address of the load balancer.
     * Changing this creates a new loadbalancer.
     */
    readonly vipAddress?: pulumi.Input<string>;
    /**
     * The network on which to allocate the
     * Loadbalancer's address. A tenant can only create Loadbalancers on networks
     * authorized by policy (e.g. networks that belong to them or networks that
     * are shared).  Changing this creates a new loadbalancer.
     */
    readonly vipSubnetId: pulumi.Input<string>;
}
