import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a v1 firewall rule resource within OpenStack.
 */
export declare class Rule extends pulumi.CustomResource {
    /**
     * Get an existing Rule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RuleState): Rule;
    /**
     * Action to be taken ( must be "allow" or "deny") when the
     * firewall rule matches. Changing this updates the `action` of an existing
     * firewall rule.
     */
    readonly action: pulumi.Output<string>;
    /**
     * A description for the firewall rule. Changing this
     * updates the `description` of an existing firewall rule.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The destination IP address on which the
     * firewall rule operates. Changing this updates the `destination_ip_address`
     * of an existing firewall rule.
     */
    readonly destinationIpAddress: pulumi.Output<string | undefined>;
    /**
     * The destination port on which the firewall
     * rule operates. Changing this updates the `destination_port` of an existing
     * firewall rule.
     */
    readonly destinationPort: pulumi.Output<string | undefined>;
    /**
     * Enabled status for the firewall rule (must be "true"
     * or "false" if provided - defaults to "true"). Changing this updates the
     * `enabled` status of an existing firewall rule.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * IP version, either 4 (default) or 6. Changing this
     * updates the `ip_version` of an existing firewall rule.
     */
    readonly ipVersion: pulumi.Output<number | undefined>;
    /**
     * A unique name for the firewall rule. Changing this
     * updates the `name` of an existing firewall rule.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The protocol type on which the firewall rule operates.
     * Valid values are: `tcp`, `udp`, `icmp`, and `any`. Changing this updates the
     * `protocol` of an existing firewall rule.
     */
    readonly protocol: pulumi.Output<string>;
    /**
     * The region in which to obtain the v1 Compute client.
     * A Compute client is needed to create a firewall rule. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * firewall rule.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The source IP address on which the firewall
     * rule operates. Changing this updates the `source_ip_address` of an existing
     * firewall rule.
     */
    readonly sourceIpAddress: pulumi.Output<string | undefined>;
    /**
     * The source port on which the firewall
     * rule operates. Changing this updates the `source_port` of an existing
     * firewall rule.
     */
    readonly sourcePort: pulumi.Output<string | undefined>;
    /**
     * The owner of the firewall rule. Required if admin
     * wants to create a firewall rule for another tenant. Changing this creates a
     * new firewall rule.
     */
    readonly tenantId: pulumi.Output<string | undefined>;
    /**
     * Map of additional options.
     */
    readonly valueSpecs: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Create a Rule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RuleArgs, opts?: pulumi.ResourceOptions);
}
/**
 * Input properties used for looking up and filtering Rule resources.
 */
export interface RuleState {
    /**
     * Action to be taken ( must be "allow" or "deny") when the
     * firewall rule matches. Changing this updates the `action` of an existing
     * firewall rule.
     */
    readonly action?: pulumi.Input<string>;
    /**
     * A description for the firewall rule. Changing this
     * updates the `description` of an existing firewall rule.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The destination IP address on which the
     * firewall rule operates. Changing this updates the `destination_ip_address`
     * of an existing firewall rule.
     */
    readonly destinationIpAddress?: pulumi.Input<string>;
    /**
     * The destination port on which the firewall
     * rule operates. Changing this updates the `destination_port` of an existing
     * firewall rule.
     */
    readonly destinationPort?: pulumi.Input<string>;
    /**
     * Enabled status for the firewall rule (must be "true"
     * or "false" if provided - defaults to "true"). Changing this updates the
     * `enabled` status of an existing firewall rule.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * IP version, either 4 (default) or 6. Changing this
     * updates the `ip_version` of an existing firewall rule.
     */
    readonly ipVersion?: pulumi.Input<number>;
    /**
     * A unique name for the firewall rule. Changing this
     * updates the `name` of an existing firewall rule.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The protocol type on which the firewall rule operates.
     * Valid values are: `tcp`, `udp`, `icmp`, and `any`. Changing this updates the
     * `protocol` of an existing firewall rule.
     */
    readonly protocol?: pulumi.Input<string>;
    /**
     * The region in which to obtain the v1 Compute client.
     * A Compute client is needed to create a firewall rule. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * firewall rule.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The source IP address on which the firewall
     * rule operates. Changing this updates the `source_ip_address` of an existing
     * firewall rule.
     */
    readonly sourceIpAddress?: pulumi.Input<string>;
    /**
     * The source port on which the firewall
     * rule operates. Changing this updates the `source_port` of an existing
     * firewall rule.
     */
    readonly sourcePort?: pulumi.Input<string>;
    /**
     * The owner of the firewall rule. Required if admin
     * wants to create a firewall rule for another tenant. Changing this creates a
     * new firewall rule.
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
 * The set of arguments for constructing a Rule resource.
 */
export interface RuleArgs {
    /**
     * Action to be taken ( must be "allow" or "deny") when the
     * firewall rule matches. Changing this updates the `action` of an existing
     * firewall rule.
     */
    readonly action: pulumi.Input<string>;
    /**
     * A description for the firewall rule. Changing this
     * updates the `description` of an existing firewall rule.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The destination IP address on which the
     * firewall rule operates. Changing this updates the `destination_ip_address`
     * of an existing firewall rule.
     */
    readonly destinationIpAddress?: pulumi.Input<string>;
    /**
     * The destination port on which the firewall
     * rule operates. Changing this updates the `destination_port` of an existing
     * firewall rule.
     */
    readonly destinationPort?: pulumi.Input<string>;
    /**
     * Enabled status for the firewall rule (must be "true"
     * or "false" if provided - defaults to "true"). Changing this updates the
     * `enabled` status of an existing firewall rule.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * IP version, either 4 (default) or 6. Changing this
     * updates the `ip_version` of an existing firewall rule.
     */
    readonly ipVersion?: pulumi.Input<number>;
    /**
     * A unique name for the firewall rule. Changing this
     * updates the `name` of an existing firewall rule.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The protocol type on which the firewall rule operates.
     * Valid values are: `tcp`, `udp`, `icmp`, and `any`. Changing this updates the
     * `protocol` of an existing firewall rule.
     */
    readonly protocol: pulumi.Input<string>;
    /**
     * The region in which to obtain the v1 Compute client.
     * A Compute client is needed to create a firewall rule. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * firewall rule.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The source IP address on which the firewall
     * rule operates. Changing this updates the `source_ip_address` of an existing
     * firewall rule.
     */
    readonly sourceIpAddress?: pulumi.Input<string>;
    /**
     * The source port on which the firewall
     * rule operates. Changing this updates the `source_port` of an existing
     * firewall rule.
     */
    readonly sourcePort?: pulumi.Input<string>;
    /**
     * The owner of the firewall rule. Required if admin
     * wants to create a firewall rule for another tenant. Changing this creates a
     * new firewall rule.
     */
    readonly tenantId?: pulumi.Input<string>;
    /**
     * Map of additional options.
     */
    readonly valueSpecs?: pulumi.Input<{
        [key: string]: any;
    }>;
}
