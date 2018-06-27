// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Manages a V2 Neutron VPN service resource within OpenStack.
 */
export class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceState): Service {
        return new Service(name, <any>state, { id });
    }

    /**
     * The administrative state of the resource. Can either be up(true) or down(false).
     * Changing this updates the administrative state of the existing service.
     */
    public readonly adminStateUp: pulumi.Output<boolean | undefined>;
    /**
     * The human-readable description for the service.
     * Changing this updates the description of the existing service.
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * The read-only external (public) IPv4 address that is used for the VPN service.
     */
    public /*out*/ readonly externalV4Ip: pulumi.Output<string>;
    /**
     * The read-only external (public) IPv6 address that is used for the VPN service.
     */
    public /*out*/ readonly externalV6Ip: pulumi.Output<string>;
    /**
     * The name of the service. Changing this updates the name of
     * the existing service.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The region in which to obtain the V2 Networking client.
     * A Networking client is needed to create a VPN service. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * service.
     */
    public readonly region: pulumi.Output<string>;
    /**
     * The ID of the router. Changing this creates a new service.
     */
    public readonly routerId: pulumi.Output<string>;
    /**
     * Indicates whether IPsec VPN service is currently operational. Values are ACTIVE, DOWN, BUILD, ERROR, PENDING_CREATE, PENDING_UPDATE, or PENDING_DELETE.
     */
    public /*out*/ readonly status: pulumi.Output<string>;
    /**
     * SubnetID is the ID of the subnet. Default is null.
     */
    public readonly subnetId: pulumi.Output<string | undefined>;
    /**
     * The owner of the service. Required if admin wants to
     * create a service for another project. Changing this creates a new service.
     */
    public readonly tenantId: pulumi.Output<string>;
    /**
     * Map of additional options.
     */
    public readonly valueSpecs: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.ResourceOptions)
    constructor(name: string, argsOrState?: ServiceArgs | ServiceState, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ServiceState = argsOrState as ServiceState | undefined;
            inputs["adminStateUp"] = state ? state.adminStateUp : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["externalV4Ip"] = state ? state.externalV4Ip : undefined;
            inputs["externalV6Ip"] = state ? state.externalV6Ip : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["routerId"] = state ? state.routerId : undefined;
            inputs["status"] = state ? state.status : undefined;
            inputs["subnetId"] = state ? state.subnetId : undefined;
            inputs["tenantId"] = state ? state.tenantId : undefined;
            inputs["valueSpecs"] = state ? state.valueSpecs : undefined;
        } else {
            const args = argsOrState as ServiceArgs | undefined;
            if (!args || args.routerId === undefined) {
                throw new Error("Missing required property 'routerId'");
            }
            inputs["adminStateUp"] = args ? args.adminStateUp : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["routerId"] = args ? args.routerId : undefined;
            inputs["subnetId"] = args ? args.subnetId : undefined;
            inputs["tenantId"] = args ? args.tenantId : undefined;
            inputs["valueSpecs"] = args ? args.valueSpecs : undefined;
            inputs["externalV4Ip"] = undefined /*out*/;
            inputs["externalV6Ip"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
        }
        super("openstack:vpnaas/service:Service", name, inputs, opts);
    }
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
    readonly valueSpecs?: pulumi.Input<{[key: string]: any}>;
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
    readonly valueSpecs?: pulumi.Input<{[key: string]: any}>;
}
