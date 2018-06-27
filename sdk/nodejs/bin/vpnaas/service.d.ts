import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a V2 Neutron VPN service resource within OpenStack.
 */
export declare class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceState): Service;
    /**
     * The administrative state of the resource. Can either be up(true) or down(false).
     * Changing this updates the administrative state of the existing service.
     */
    readonly adminStateUp: pulumi.Output<boolean | undefined>;
    /**
     * The human-readable description for the service.
     * Changing this updates the description of the existing service.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The read-only external (public) IPv4 address that is used for the VPN service.
     */
    readonly externalV4Ip: pulumi.Output<string>;
    /**
     * The read-only external (public) IPv6 address that is used for the VPN service.
     */
    readonly externalV6Ip: pulumi.Output<string>;
    /**
     * The name of the service. Changing this updates the name of
     * the existing service.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The region in which to obtain the V2 Networking client.
     * A Networking client is needed to create a VPN service. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * service.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The ID of the router. Changing this creates a new service.
     */
    readonly routerId: pulumi.Output<string>;
    /**
     * Indicates whether IPsec VPN service is currently operational. Values are ACTIVE, DOWN, BUILD, ERROR, PENDING_CREATE, PENDING_UPDATE, or PENDING_DELETE.
     */
    readonly status: pulumi.Output<string>;
    /**
     * SubnetID is the ID of the subnet. Default is null.
     */
    readonly subnetId: pulumi.Output<string | undefined>;
    /**
     * The owner of the service. Required if admin wants to
     * create a service for another project. Changing this creates a new service.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Map of additional options.
     */
    readonly valueSpecs: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.ResourceOptions);
}
/**
 * Input properties used for looking up and filtering Service resources.
 */
export interface ServiceState {
    /**
     * The administrative state of the resource. Can either be up(true) or down(false).
     * Changing this updates the administrative state of the existing service.
     */
    readonly adminStateUp?: pulumi.Input<boolean>;
    /**
     * The human-readable description for the service.
     * Changing this updates the description of the existing service.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The read-only external (public) IPv4 address that is used for the VPN service.
     */
    readonly externalV4Ip?: pulumi.Input<string>;
    /**
     * The read-only external (public) IPv6 address that is used for the VPN service.
     */
    readonly externalV6Ip?: pulumi.Input<string>;
    /**
     * The name of the service. Changing this updates the name of
     * the existing service.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The region in which to obtain the V2 Networking client.
     * A Networking client is needed to create a VPN service. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * service.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The ID of the router. Changing this creates a new service.
     */
    readonly routerId?: pulumi.Input<string>;
    /**
     * Indicates whether IPsec VPN service is currently operational. Values are ACTIVE, DOWN, BUILD, ERROR, PENDING_CREATE, PENDING_UPDATE, or PENDING_DELETE.
     */
    readonly status?: pulumi.Input<string>;
    /**
     * SubnetID is the ID of the subnet. Default is null.
     */
    readonly subnetId?: pulumi.Input<string>;
    /**
     * The owner of the service. Required if admin wants to
     * create a service for another project. Changing this creates a new service.
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
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * The administrative state of the resource. Can either be up(true) or down(false).
     * Changing this updates the administrative state of the existing service.
     */
    readonly adminStateUp?: pulumi.Input<boolean>;
    /**
     * The human-readable description for the service.
     * Changing this updates the description of the existing service.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the service. Changing this updates the name of
     * the existing service.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The region in which to obtain the V2 Networking client.
     * A Networking client is needed to create a VPN service. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * service.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The ID of the router. Changing this creates a new service.
     */
    readonly routerId: pulumi.Input<string>;
    /**
     * SubnetID is the ID of the subnet. Default is null.
     */
    readonly subnetId?: pulumi.Input<string>;
    /**
     * The owner of the service. Required if admin wants to
     * create a service for another project. Changing this creates a new service.
     */
    readonly tenantId?: pulumi.Input<string>;
    /**
     * Map of additional options.
     */
    readonly valueSpecs?: pulumi.Input<{
        [key: string]: any;
    }>;
}
