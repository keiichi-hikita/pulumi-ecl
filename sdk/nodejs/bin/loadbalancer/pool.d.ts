import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a V2 pool resource within OpenStack.
 */
export declare class Pool extends pulumi.CustomResource {
    /**
     * Get an existing Pool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PoolState): Pool;
    /**
     * The administrative state of the pool.
     * A valid value is true (UP) or false (DOWN).
     */
    readonly adminStateUp: pulumi.Output<boolean | undefined>;
    /**
     * Human-readable description for the pool.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The load balancing algorithm to
     * distribute traffic to the pool's members. Must be one of
     * ROUND_ROBIN, LEAST_CONNECTIONS, or SOURCE_IP.
     */
    readonly lbMethod: pulumi.Output<string>;
    /**
     * The Listener on which the members of the pool
     * will be associated with. Changing this creates a new pool.
     * Note:  One of LoadbalancerID or ListenerID must be provided.
     */
    readonly listenerId: pulumi.Output<string | undefined>;
    /**
     * The load balancer on which to provision this
     * pool. Changing this creates a new pool.
     * Note:  One of LoadbalancerID or ListenerID must be provided.
     */
    readonly loadbalancerId: pulumi.Output<string | undefined>;
    /**
     * Human-readable name for the pool.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Omit this field to prevent session persistence.  Indicates
     * whether connections in the same session will be processed by the same Pool
     * member or not. Changing this creates a new pool.
     */
    readonly persistences: pulumi.Output<{
        cookieName?: string;
        type: string;
    }[] | undefined>;
    /**
     * See Argument Reference above.
     */
    readonly protocol: pulumi.Output<string>;
    /**
     * The region in which to obtain the V2 Networking client.
     * A Networking client is needed to create an . If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * pool.
     */
    readonly region: pulumi.Output<string>;
    /**
     * Required for admins. The UUID of the tenant who owns
     * the pool.  Only administrative users can specify a tenant UUID
     * other than their own. Changing this creates a new pool.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a Pool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PoolArgs, opts?: pulumi.ResourceOptions);
}
/**
 * Input properties used for looking up and filtering Pool resources.
 */
export interface PoolState {
    /**
     * The administrative state of the pool.
     * A valid value is true (UP) or false (DOWN).
     */
    readonly adminStateUp?: pulumi.Input<boolean>;
    /**
     * Human-readable description for the pool.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The load balancing algorithm to
     * distribute traffic to the pool's members. Must be one of
     * ROUND_ROBIN, LEAST_CONNECTIONS, or SOURCE_IP.
     */
    readonly lbMethod?: pulumi.Input<string>;
    /**
     * The Listener on which the members of the pool
     * will be associated with. Changing this creates a new pool.
     * Note:  One of LoadbalancerID or ListenerID must be provided.
     */
    readonly listenerId?: pulumi.Input<string>;
    /**
     * The load balancer on which to provision this
     * pool. Changing this creates a new pool.
     * Note:  One of LoadbalancerID or ListenerID must be provided.
     */
    readonly loadbalancerId?: pulumi.Input<string>;
    /**
     * Human-readable name for the pool.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Omit this field to prevent session persistence.  Indicates
     * whether connections in the same session will be processed by the same Pool
     * member or not. Changing this creates a new pool.
     */
    readonly persistences?: pulumi.Input<{
        cookieName?: pulumi.Input<string>;
        type: pulumi.Input<string>;
    }[]>;
    /**
     * See Argument Reference above.
     */
    readonly protocol?: pulumi.Input<string>;
    /**
     * The region in which to obtain the V2 Networking client.
     * A Networking client is needed to create an . If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * pool.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * Required for admins. The UUID of the tenant who owns
     * the pool.  Only administrative users can specify a tenant UUID
     * other than their own. Changing this creates a new pool.
     */
    readonly tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Pool resource.
 */
export interface PoolArgs {
    /**
     * The administrative state of the pool.
     * A valid value is true (UP) or false (DOWN).
     */
    readonly adminStateUp?: pulumi.Input<boolean>;
    /**
     * Human-readable description for the pool.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The load balancing algorithm to
     * distribute traffic to the pool's members. Must be one of
     * ROUND_ROBIN, LEAST_CONNECTIONS, or SOURCE_IP.
     */
    readonly lbMethod: pulumi.Input<string>;
    /**
     * The Listener on which the members of the pool
     * will be associated with. Changing this creates a new pool.
     * Note:  One of LoadbalancerID or ListenerID must be provided.
     */
    readonly listenerId?: pulumi.Input<string>;
    /**
     * The load balancer on which to provision this
     * pool. Changing this creates a new pool.
     * Note:  One of LoadbalancerID or ListenerID must be provided.
     */
    readonly loadbalancerId?: pulumi.Input<string>;
    /**
     * Human-readable name for the pool.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Omit this field to prevent session persistence.  Indicates
     * whether connections in the same session will be processed by the same Pool
     * member or not. Changing this creates a new pool.
     */
    readonly persistences?: pulumi.Input<{
        cookieName?: pulumi.Input<string>;
        type: pulumi.Input<string>;
    }[]>;
    /**
     * See Argument Reference above.
     */
    readonly protocol: pulumi.Input<string>;
    /**
     * The region in which to obtain the V2 Networking client.
     * A Networking client is needed to create an . If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * pool.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * Required for admins. The UUID of the tenant who owns
     * the pool.  Only administrative users can specify a tenant UUID
     * other than their own. Changing this creates a new pool.
     */
    readonly tenantId?: pulumi.Input<string>;
}
