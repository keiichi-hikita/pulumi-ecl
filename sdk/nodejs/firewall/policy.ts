// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a v1 firewall policy resource within OpenStack.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as openstack from "@pulumi/openstack";
 * 
 * const rule1 = new openstack.firewall.Rule("rule_1", {
 *     action: "deny",
 *     description: "drop TELNET traffic",
 *     destinationPort: "23",
 *     enabled: true,
 *     name: "my-rule-1",
 *     protocol: "tcp",
 * });
 * const rule2 = new openstack.firewall.Rule("rule_2", {
 *     action: "deny",
 *     description: "drop NTP traffic",
 *     destinationPort: "123",
 *     enabled: false,
 *     name: "my-rule-2",
 *     protocol: "udp",
 * });
 * const policy1 = new openstack.firewall.Policy("policy_1", {
 *     name: "my-policy",
 *     rules: [
 *         rule1.id,
 *         rule2.id,
 *     ],
 * });
 * ```
 */
export class Policy extends pulumi.CustomResource {
    /**
     * Get an existing Policy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyState, opts?: pulumi.CustomResourceOptions): Policy {
        return new Policy(name, <any>state, { ...opts, id: id });
    }

    /**
     * Audit status of the firewall policy
     * (must be "true" or "false" if provided - defaults to "false").
     * This status is set to "false" whenever the firewall policy or any of its
     * rules are changed. Changing this updates the `audited` status of an existing
     * firewall policy.
     */
    public readonly audited: pulumi.Output<boolean | undefined>;
    /**
     * A description for the firewall policy. Changing
     * this updates the `description` of an existing firewall policy.
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * A name for the firewall policy. Changing this
     * updates the `name` of an existing firewall policy.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The region in which to obtain the v1 networking client.
     * A networking client is needed to create a firewall policy. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * firewall policy.
     */
    public readonly region: pulumi.Output<string>;
    /**
     * An array of one or more firewall rules that comprise
     * the policy. Changing this results in adding/removing rules from the
     * existing firewall policy.
     */
    public readonly rules: pulumi.Output<string[] | undefined>;
    /**
     * Sharing status of the firewall policy (must be "true"
     * or "false" if provided). If this is "true" the policy is visible to, and
     * can be used in, firewalls in other tenants. Changing this updates the
     * `shared` status of an existing firewall policy. Only administrative users
     * can specify if the policy should be shared.
     */
    public readonly shared: pulumi.Output<boolean | undefined>;
    public readonly tenantId: pulumi.Output<string>;
    /**
     * Map of additional options.
     */
    public readonly valueSpecs: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a Policy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyArgs | PolicyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: PolicyState = argsOrState as PolicyState | undefined;
            inputs["audited"] = state ? state.audited : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["rules"] = state ? state.rules : undefined;
            inputs["shared"] = state ? state.shared : undefined;
            inputs["tenantId"] = state ? state.tenantId : undefined;
            inputs["valueSpecs"] = state ? state.valueSpecs : undefined;
        } else {
            const args = argsOrState as PolicyArgs | undefined;
            inputs["audited"] = args ? args.audited : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["rules"] = args ? args.rules : undefined;
            inputs["shared"] = args ? args.shared : undefined;
            inputs["tenantId"] = args ? args.tenantId : undefined;
            inputs["valueSpecs"] = args ? args.valueSpecs : undefined;
        }
        super("openstack:firewall/policy:Policy", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Policy resources.
 */
export interface PolicyState {
    /**
     * Audit status of the firewall policy
     * (must be "true" or "false" if provided - defaults to "false").
     * This status is set to "false" whenever the firewall policy or any of its
     * rules are changed. Changing this updates the `audited` status of an existing
     * firewall policy.
     */
    readonly audited?: pulumi.Input<boolean>;
    /**
     * A description for the firewall policy. Changing
     * this updates the `description` of an existing firewall policy.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * A name for the firewall policy. Changing this
     * updates the `name` of an existing firewall policy.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The region in which to obtain the v1 networking client.
     * A networking client is needed to create a firewall policy. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * firewall policy.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * An array of one or more firewall rules that comprise
     * the policy. Changing this results in adding/removing rules from the
     * existing firewall policy.
     */
    readonly rules?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Sharing status of the firewall policy (must be "true"
     * or "false" if provided). If this is "true" the policy is visible to, and
     * can be used in, firewalls in other tenants. Changing this updates the
     * `shared` status of an existing firewall policy. Only administrative users
     * can specify if the policy should be shared.
     */
    readonly shared?: pulumi.Input<boolean>;
    readonly tenantId?: pulumi.Input<string>;
    /**
     * Map of additional options.
     */
    readonly valueSpecs?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a Policy resource.
 */
export interface PolicyArgs {
    /**
     * Audit status of the firewall policy
     * (must be "true" or "false" if provided - defaults to "false").
     * This status is set to "false" whenever the firewall policy or any of its
     * rules are changed. Changing this updates the `audited` status of an existing
     * firewall policy.
     */
    readonly audited?: pulumi.Input<boolean>;
    /**
     * A description for the firewall policy. Changing
     * this updates the `description` of an existing firewall policy.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * A name for the firewall policy. Changing this
     * updates the `name` of an existing firewall policy.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The region in which to obtain the v1 networking client.
     * A networking client is needed to create a firewall policy. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * firewall policy.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * An array of one or more firewall rules that comprise
     * the policy. Changing this results in adding/removing rules from the
     * existing firewall policy.
     */
    readonly rules?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Sharing status of the firewall policy (must be "true"
     * or "false" if provided). If this is "true" the policy is visible to, and
     * can be used in, firewalls in other tenants. Changing this updates the
     * `shared` status of an existing firewall policy. Only administrative users
     * can specify if the policy should be shared.
     */
    readonly shared?: pulumi.Input<boolean>;
    readonly tenantId?: pulumi.Input<string>;
    /**
     * Map of additional options.
     */
    readonly valueSpecs?: pulumi.Input<{[key: string]: any}>;
}
