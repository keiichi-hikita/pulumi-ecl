import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a V2 neutron security group rule resource within OpenStack.
 * Unlike Nova security groups, neutron separates the group from the rules
 * and also allows an admin to target a specific tenant_id.
 */
export declare class SecGroupRule extends pulumi.CustomResource {
    /**
     * Get an existing SecGroupRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecGroupRuleState): SecGroupRule;
    /**
     * The direction of the rule, valid values are __ingress__
     * or __egress__. Changing this creates a new security group rule.
     */
    readonly direction: pulumi.Output<string>;
    /**
     * The layer 3 protocol type, valid values are __IPv4__
     * or __IPv6__. Changing this creates a new security group rule.
     */
    readonly ethertype: pulumi.Output<string>;
    /**
     * The higher part of the allowed port range, valid
     * integer value needs to be between 1 and 65535. Changing this creates a new
     * security group rule.
     */
    readonly portRangeMax: pulumi.Output<number>;
    /**
     * The lower part of the allowed port range, valid
     * integer value needs to be between 1 and 65535. Changing this creates a new
     * security group rule.
     */
    readonly portRangeMin: pulumi.Output<number>;
    /**
     * The layer 4 protocol type, valid values are following. Changing this creates a new security group rule. This is required if you want to specify a port range.
     * * __tcp__
     * * __udp__
     * * __icmp__
     * * __ah__
     * * __dccp__
     * * __egp__
     * * __esp__
     * * __gre__
     * * __igmp__
     * * __ipv6-encap__
     * * __ipv6-frag__
     * * __ipv6-icmp__
     * * __ipv6-nonxt__
     * * __ipv6-opts__
     * * __ipv6-route__
     * * __ospf__
     * * __pgm__
     * * __rsvp__
     * * __sctp__
     * * __udplite__
     * * __vrrp__
     */
    readonly protocol: pulumi.Output<string>;
    /**
     * The region in which to obtain the V2 networking client.
     * A networking client is needed to create a port. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * security group rule.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The remote group id, the value needs to be an
     * Openstack ID of a security group in the same tenant. Changing this creates
     * a new security group rule.
     */
    readonly remoteGroupId: pulumi.Output<string>;
    /**
     * The remote CIDR, the value needs to be a valid
     * CIDR (i.e. 192.168.0.0/16). Changing this creates a new security group rule.
     */
    readonly remoteIpPrefix: pulumi.Output<string>;
    /**
     * The security group id the rule should belong
     * to, the value needs to be an Openstack ID of a security group in the same
     * tenant. Changing this creates a new security group rule.
     */
    readonly securityGroupId: pulumi.Output<string>;
    /**
     * The owner of the security group. Required if admin
     * wants to create a port for another tenant. Changing this creates a new
     * security group rule.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a SecGroupRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecGroupRuleArgs, opts?: pulumi.ResourceOptions);
}
/**
 * Input properties used for looking up and filtering SecGroupRule resources.
 */
export interface SecGroupRuleState {
    /**
     * The direction of the rule, valid values are __ingress__
     * or __egress__. Changing this creates a new security group rule.
     */
    readonly direction?: pulumi.Input<string>;
    /**
     * The layer 3 protocol type, valid values are __IPv4__
     * or __IPv6__. Changing this creates a new security group rule.
     */
    readonly ethertype?: pulumi.Input<string>;
    /**
     * The higher part of the allowed port range, valid
     * integer value needs to be between 1 and 65535. Changing this creates a new
     * security group rule.
     */
    readonly portRangeMax?: pulumi.Input<number>;
    /**
     * The lower part of the allowed port range, valid
     * integer value needs to be between 1 and 65535. Changing this creates a new
     * security group rule.
     */
    readonly portRangeMin?: pulumi.Input<number>;
    /**
     * The layer 4 protocol type, valid values are following. Changing this creates a new security group rule. This is required if you want to specify a port range.
     * * __tcp__
     * * __udp__
     * * __icmp__
     * * __ah__
     * * __dccp__
     * * __egp__
     * * __esp__
     * * __gre__
     * * __igmp__
     * * __ipv6-encap__
     * * __ipv6-frag__
     * * __ipv6-icmp__
     * * __ipv6-nonxt__
     * * __ipv6-opts__
     * * __ipv6-route__
     * * __ospf__
     * * __pgm__
     * * __rsvp__
     * * __sctp__
     * * __udplite__
     * * __vrrp__
     */
    readonly protocol?: pulumi.Input<string>;
    /**
     * The region in which to obtain the V2 networking client.
     * A networking client is needed to create a port. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * security group rule.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The remote group id, the value needs to be an
     * Openstack ID of a security group in the same tenant. Changing this creates
     * a new security group rule.
     */
    readonly remoteGroupId?: pulumi.Input<string>;
    /**
     * The remote CIDR, the value needs to be a valid
     * CIDR (i.e. 192.168.0.0/16). Changing this creates a new security group rule.
     */
    readonly remoteIpPrefix?: pulumi.Input<string>;
    /**
     * The security group id the rule should belong
     * to, the value needs to be an Openstack ID of a security group in the same
     * tenant. Changing this creates a new security group rule.
     */
    readonly securityGroupId?: pulumi.Input<string>;
    /**
     * The owner of the security group. Required if admin
     * wants to create a port for another tenant. Changing this creates a new
     * security group rule.
     */
    readonly tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SecGroupRule resource.
 */
export interface SecGroupRuleArgs {
    /**
     * The direction of the rule, valid values are __ingress__
     * or __egress__. Changing this creates a new security group rule.
     */
    readonly direction: pulumi.Input<string>;
    /**
     * The layer 3 protocol type, valid values are __IPv4__
     * or __IPv6__. Changing this creates a new security group rule.
     */
    readonly ethertype: pulumi.Input<string>;
    /**
     * The higher part of the allowed port range, valid
     * integer value needs to be between 1 and 65535. Changing this creates a new
     * security group rule.
     */
    readonly portRangeMax?: pulumi.Input<number>;
    /**
     * The lower part of the allowed port range, valid
     * integer value needs to be between 1 and 65535. Changing this creates a new
     * security group rule.
     */
    readonly portRangeMin?: pulumi.Input<number>;
    /**
     * The layer 4 protocol type, valid values are following. Changing this creates a new security group rule. This is required if you want to specify a port range.
     * * __tcp__
     * * __udp__
     * * __icmp__
     * * __ah__
     * * __dccp__
     * * __egp__
     * * __esp__
     * * __gre__
     * * __igmp__
     * * __ipv6-encap__
     * * __ipv6-frag__
     * * __ipv6-icmp__
     * * __ipv6-nonxt__
     * * __ipv6-opts__
     * * __ipv6-route__
     * * __ospf__
     * * __pgm__
     * * __rsvp__
     * * __sctp__
     * * __udplite__
     * * __vrrp__
     */
    readonly protocol?: pulumi.Input<string>;
    /**
     * The region in which to obtain the V2 networking client.
     * A networking client is needed to create a port. If omitted, the
     * `region` argument of the provider is used. Changing this creates a new
     * security group rule.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The remote group id, the value needs to be an
     * Openstack ID of a security group in the same tenant. Changing this creates
     * a new security group rule.
     */
    readonly remoteGroupId?: pulumi.Input<string>;
    /**
     * The remote CIDR, the value needs to be a valid
     * CIDR (i.e. 192.168.0.0/16). Changing this creates a new security group rule.
     */
    readonly remoteIpPrefix?: pulumi.Input<string>;
    /**
     * The security group id the rule should belong
     * to, the value needs to be an Openstack ID of a security group in the same
     * tenant. Changing this creates a new security group rule.
     */
    readonly securityGroupId: pulumi.Input<string>;
    /**
     * The owner of the security group. Required if admin
     * wants to create a port for another tenant. Changing this creates a new
     * security group rule.
     */
    readonly tenantId?: pulumi.Input<string>;
}
