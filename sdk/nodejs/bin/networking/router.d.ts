import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a V2 router resource within OpenStack.
 */
export declare class Router extends pulumi.CustomResource {
    /**
     * Get an existing Router resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterState): Router;
    /**
     * Administrative up/down status for the router
     * (must be "true" or "false" if provided). Changing this updates the
     * `admin_state_up` of an existing router.
     */
    readonly adminStateUp: pulumi.Output<boolean>;
    /**
     * An availability zone is used to make
     * network resources highly available. Used for resources with high availability so that they are scheduled on different availability zones. Changing
     * this creates a new router.
     */
    readonly availabilityZoneHints: pulumi.Output<string[]>;
    /**
     * Indicates whether or not to create a
     * distributed router. The default policy setting in Neutron restricts
     * usage of this property to administrative users only.
     */
    readonly distributed: pulumi.Output<boolean>;
    /**
     * Enable Source NAT for the router. Valid values are
     * "true" or "false". An `external_network_id` has to be set in order to
     * set this property. Changing this updates the `enable_snat` of the router.
     */
    readonly enableSnat: pulumi.Output<boolean>;
    /**
     * An external fixed IP for the router. This
     * can be repeated. The structure is described below. An `external_network_id`
     * has to be set in order to set this property. Changing this updates the
     * external fixed IPs of the router.
     */
    readonly externalFixedIps: pulumi.Output<{
        ipAddress?: string;
        subnetId?: string;
    }[]>;
    /**
     * The
     * network UUID of an external gateway for the router. A router with an
     * external gateway is required if any compute instances or load balancers
     * will be using floating IPs. Changing this updates the external gateway
     * of an existing router.
     */
    readonly externalGateway: pulumi.Output<string>;
    /**
     * The network UUID of an external gateway
     * for the router. A router with an external gateway is required if any
     * compute instances or load balancers will be using floating IPs. Changing
     * this updates the external gateway of the router.
     */
    readonly externalNetworkId: pulumi.Output<string>;
    /**
     * A unique name for the router. Changing this
     * updates the `name` of an existing router.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The region in which to obtain the V2 networking client.
     * A networking client is needed to create a router. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * router.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The owner of the floating IP. Required if admin wants
     * to create a router for another tenant. Changing this creates a new router.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Map of additional driver-specific options.
     */
    readonly valueSpecs: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Map of additional vendor-specific options.
     * Supported options are described below.
     */
    readonly vendorOptions: pulumi.Output<{
        setRouterGatewayAfterCreate?: boolean;
    } | undefined>;
    /**
     * Create a Router resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RouterArgs, opts?: pulumi.ResourceOptions);
}
/**
 * Input properties used for looking up and filtering Router resources.
 */
export interface RouterState {
    /**
     * Administrative up/down status for the router
     * (must be "true" or "false" if provided). Changing this updates the
     * `admin_state_up` of an existing router.
     */
    readonly adminStateUp?: pulumi.Input<boolean>;
    /**
     * An availability zone is used to make
     * network resources highly available. Used for resources with high availability so that they are scheduled on different availability zones. Changing
     * this creates a new router.
     */
    readonly availabilityZoneHints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates whether or not to create a
     * distributed router. The default policy setting in Neutron restricts
     * usage of this property to administrative users only.
     */
    readonly distributed?: pulumi.Input<boolean>;
    /**
     * Enable Source NAT for the router. Valid values are
     * "true" or "false". An `external_network_id` has to be set in order to
     * set this property. Changing this updates the `enable_snat` of the router.
     */
    readonly enableSnat?: pulumi.Input<boolean>;
    /**
     * An external fixed IP for the router. This
     * can be repeated. The structure is described below. An `external_network_id`
     * has to be set in order to set this property. Changing this updates the
     * external fixed IPs of the router.
     */
    readonly externalFixedIps?: pulumi.Input<{
        ipAddress?: pulumi.Input<string>;
        subnetId?: pulumi.Input<string>;
    }[]>;
    /**
     * The
     * network UUID of an external gateway for the router. A router with an
     * external gateway is required if any compute instances or load balancers
     * will be using floating IPs. Changing this updates the external gateway
     * of an existing router.
     */
    readonly externalGateway?: pulumi.Input<string>;
    /**
     * The network UUID of an external gateway
     * for the router. A router with an external gateway is required if any
     * compute instances or load balancers will be using floating IPs. Changing
     * this updates the external gateway of the router.
     */
    readonly externalNetworkId?: pulumi.Input<string>;
    /**
     * A unique name for the router. Changing this
     * updates the `name` of an existing router.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The region in which to obtain the V2 networking client.
     * A networking client is needed to create a router. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * router.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The owner of the floating IP. Required if admin wants
     * to create a router for another tenant. Changing this creates a new router.
     */
    readonly tenantId?: pulumi.Input<string>;
    /**
     * Map of additional driver-specific options.
     */
    readonly valueSpecs?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Map of additional vendor-specific options.
     * Supported options are described below.
     */
    readonly vendorOptions?: pulumi.Input<{
        setRouterGatewayAfterCreate?: pulumi.Input<boolean>;
    }>;
}
/**
 * The set of arguments for constructing a Router resource.
 */
export interface RouterArgs {
    /**
     * Administrative up/down status for the router
     * (must be "true" or "false" if provided). Changing this updates the
     * `admin_state_up` of an existing router.
     */
    readonly adminStateUp?: pulumi.Input<boolean>;
    /**
     * An availability zone is used to make
     * network resources highly available. Used for resources with high availability so that they are scheduled on different availability zones. Changing
     * this creates a new router.
     */
    readonly availabilityZoneHints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates whether or not to create a
     * distributed router. The default policy setting in Neutron restricts
     * usage of this property to administrative users only.
     */
    readonly distributed?: pulumi.Input<boolean>;
    /**
     * Enable Source NAT for the router. Valid values are
     * "true" or "false". An `external_network_id` has to be set in order to
     * set this property. Changing this updates the `enable_snat` of the router.
     */
    readonly enableSnat?: pulumi.Input<boolean>;
    /**
     * An external fixed IP for the router. This
     * can be repeated. The structure is described below. An `external_network_id`
     * has to be set in order to set this property. Changing this updates the
     * external fixed IPs of the router.
     */
    readonly externalFixedIps?: pulumi.Input<{
        ipAddress?: pulumi.Input<string>;
        subnetId?: pulumi.Input<string>;
    }[]>;
    /**
     * The
     * network UUID of an external gateway for the router. A router with an
     * external gateway is required if any compute instances or load balancers
     * will be using floating IPs. Changing this updates the external gateway
     * of an existing router.
     */
    readonly externalGateway?: pulumi.Input<string>;
    /**
     * The network UUID of an external gateway
     * for the router. A router with an external gateway is required if any
     * compute instances or load balancers will be using floating IPs. Changing
     * this updates the external gateway of the router.
     */
    readonly externalNetworkId?: pulumi.Input<string>;
    /**
     * A unique name for the router. Changing this
     * updates the `name` of an existing router.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The region in which to obtain the V2 networking client.
     * A networking client is needed to create a router. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * router.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The owner of the floating IP. Required if admin wants
     * to create a router for another tenant. Changing this creates a new router.
     */
    readonly tenantId?: pulumi.Input<string>;
    /**
     * Map of additional driver-specific options.
     */
    readonly valueSpecs?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Map of additional vendor-specific options.
     * Supported options are described below.
     */
    readonly vendorOptions?: pulumi.Input<{
        setRouterGatewayAfterCreate?: pulumi.Input<boolean>;
    }>;
}
