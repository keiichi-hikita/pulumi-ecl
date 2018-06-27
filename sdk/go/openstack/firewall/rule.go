// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package firewall

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a v1 firewall rule resource within OpenStack.
type Rule struct {
	s *pulumi.ResourceState
}

// NewRule registers a new resource with the given unique name, arguments, and options.
func NewRule(ctx *pulumi.Context,
	name string, args *RuleArgs, opts ...pulumi.ResourceOpt) (*Rule, error) {
	if args == nil || args.Action == nil {
		return nil, errors.New("missing required argument 'Action'")
	}
	if args == nil || args.Protocol == nil {
		return nil, errors.New("missing required argument 'Protocol'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["action"] = nil
		inputs["description"] = nil
		inputs["destinationIpAddress"] = nil
		inputs["destinationPort"] = nil
		inputs["enabled"] = nil
		inputs["ipVersion"] = nil
		inputs["name"] = nil
		inputs["protocol"] = nil
		inputs["region"] = nil
		inputs["sourceIpAddress"] = nil
		inputs["sourcePort"] = nil
		inputs["tenantId"] = nil
		inputs["valueSpecs"] = nil
	} else {
		inputs["action"] = args.Action
		inputs["description"] = args.Description
		inputs["destinationIpAddress"] = args.DestinationIpAddress
		inputs["destinationPort"] = args.DestinationPort
		inputs["enabled"] = args.Enabled
		inputs["ipVersion"] = args.IpVersion
		inputs["name"] = args.Name
		inputs["protocol"] = args.Protocol
		inputs["region"] = args.Region
		inputs["sourceIpAddress"] = args.SourceIpAddress
		inputs["sourcePort"] = args.SourcePort
		inputs["tenantId"] = args.TenantId
		inputs["valueSpecs"] = args.ValueSpecs
	}
	s, err := ctx.RegisterResource("openstack:firewall/rule:Rule", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Rule{s: s}, nil
}

// GetRule gets an existing Rule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRule(ctx *pulumi.Context,
	name string, id pulumi.ID, state *RuleState, opts ...pulumi.ResourceOpt) (*Rule, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["action"] = state.Action
		inputs["description"] = state.Description
		inputs["destinationIpAddress"] = state.DestinationIpAddress
		inputs["destinationPort"] = state.DestinationPort
		inputs["enabled"] = state.Enabled
		inputs["ipVersion"] = state.IpVersion
		inputs["name"] = state.Name
		inputs["protocol"] = state.Protocol
		inputs["region"] = state.Region
		inputs["sourceIpAddress"] = state.SourceIpAddress
		inputs["sourcePort"] = state.SourcePort
		inputs["tenantId"] = state.TenantId
		inputs["valueSpecs"] = state.ValueSpecs
	}
	s, err := ctx.ReadResource("openstack:firewall/rule:Rule", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Rule{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Rule) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Rule) ID() *pulumi.IDOutput {
	return r.s.ID
}

// Action to be taken ( must be "allow" or "deny") when the
// firewall rule matches. Changing this updates the `action` of an existing
// firewall rule.
func (r *Rule) Action() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["action"])
}

// A description for the firewall rule. Changing this
// updates the `description` of an existing firewall rule.
func (r *Rule) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

// The destination IP address on which the
// firewall rule operates. Changing this updates the `destination_ip_address`
// of an existing firewall rule.
func (r *Rule) DestinationIpAddress() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["destinationIpAddress"])
}

// The destination port on which the firewall
// rule operates. Changing this updates the `destination_port` of an existing
// firewall rule.
func (r *Rule) DestinationPort() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["destinationPort"])
}

// Enabled status for the firewall rule (must be "true"
// or "false" if provided - defaults to "true"). Changing this updates the
// `enabled` status of an existing firewall rule.
func (r *Rule) Enabled() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["enabled"])
}

// IP version, either 4 (default) or 6. Changing this
// updates the `ip_version` of an existing firewall rule.
func (r *Rule) IpVersion() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["ipVersion"])
}

// A unique name for the firewall rule. Changing this
// updates the `name` of an existing firewall rule.
func (r *Rule) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The protocol type on which the firewall rule operates.
// Valid values are: `tcp`, `udp`, `icmp`, and `any`. Changing this updates the
// `protocol` of an existing firewall rule.
func (r *Rule) Protocol() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["protocol"])
}

// The region in which to obtain the v1 Compute client.
// A Compute client is needed to create a firewall rule. If omitted, the
// `region` argument of the provider is used. Changing this creates a new
// firewall rule.
func (r *Rule) Region() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["region"])
}

// The source IP address on which the firewall
// rule operates. Changing this updates the `source_ip_address` of an existing
// firewall rule.
func (r *Rule) SourceIpAddress() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sourceIpAddress"])
}

// The source port on which the firewall
// rule operates. Changing this updates the `source_port` of an existing
// firewall rule.
func (r *Rule) SourcePort() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sourcePort"])
}

// The owner of the firewall rule. Required if admin
// wants to create a firewall rule for another tenant. Changing this creates a
// new firewall rule.
func (r *Rule) TenantId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["tenantId"])
}

// Map of additional options.
func (r *Rule) ValueSpecs() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["valueSpecs"])
}

// Input properties used for looking up and filtering Rule resources.
type RuleState struct {
	// Action to be taken ( must be "allow" or "deny") when the
	// firewall rule matches. Changing this updates the `action` of an existing
	// firewall rule.
	Action interface{}
	// A description for the firewall rule. Changing this
	// updates the `description` of an existing firewall rule.
	Description interface{}
	// The destination IP address on which the
	// firewall rule operates. Changing this updates the `destination_ip_address`
	// of an existing firewall rule.
	DestinationIpAddress interface{}
	// The destination port on which the firewall
	// rule operates. Changing this updates the `destination_port` of an existing
	// firewall rule.
	DestinationPort interface{}
	// Enabled status for the firewall rule (must be "true"
	// or "false" if provided - defaults to "true"). Changing this updates the
	// `enabled` status of an existing firewall rule.
	Enabled interface{}
	// IP version, either 4 (default) or 6. Changing this
	// updates the `ip_version` of an existing firewall rule.
	IpVersion interface{}
	// A unique name for the firewall rule. Changing this
	// updates the `name` of an existing firewall rule.
	Name interface{}
	// The protocol type on which the firewall rule operates.
	// Valid values are: `tcp`, `udp`, `icmp`, and `any`. Changing this updates the
	// `protocol` of an existing firewall rule.
	Protocol interface{}
	// The region in which to obtain the v1 Compute client.
	// A Compute client is needed to create a firewall rule. If omitted, the
	// `region` argument of the provider is used. Changing this creates a new
	// firewall rule.
	Region interface{}
	// The source IP address on which the firewall
	// rule operates. Changing this updates the `source_ip_address` of an existing
	// firewall rule.
	SourceIpAddress interface{}
	// The source port on which the firewall
	// rule operates. Changing this updates the `source_port` of an existing
	// firewall rule.
	SourcePort interface{}
	// The owner of the firewall rule. Required if admin
	// wants to create a firewall rule for another tenant. Changing this creates a
	// new firewall rule.
	TenantId interface{}
	// Map of additional options.
	ValueSpecs interface{}
}

// The set of arguments for constructing a Rule resource.
type RuleArgs struct {
	// Action to be taken ( must be "allow" or "deny") when the
	// firewall rule matches. Changing this updates the `action` of an existing
	// firewall rule.
	Action interface{}
	// A description for the firewall rule. Changing this
	// updates the `description` of an existing firewall rule.
	Description interface{}
	// The destination IP address on which the
	// firewall rule operates. Changing this updates the `destination_ip_address`
	// of an existing firewall rule.
	DestinationIpAddress interface{}
	// The destination port on which the firewall
	// rule operates. Changing this updates the `destination_port` of an existing
	// firewall rule.
	DestinationPort interface{}
	// Enabled status for the firewall rule (must be "true"
	// or "false" if provided - defaults to "true"). Changing this updates the
	// `enabled` status of an existing firewall rule.
	Enabled interface{}
	// IP version, either 4 (default) or 6. Changing this
	// updates the `ip_version` of an existing firewall rule.
	IpVersion interface{}
	// A unique name for the firewall rule. Changing this
	// updates the `name` of an existing firewall rule.
	Name interface{}
	// The protocol type on which the firewall rule operates.
	// Valid values are: `tcp`, `udp`, `icmp`, and `any`. Changing this updates the
	// `protocol` of an existing firewall rule.
	Protocol interface{}
	// The region in which to obtain the v1 Compute client.
	// A Compute client is needed to create a firewall rule. If omitted, the
	// `region` argument of the provider is used. Changing this creates a new
	// firewall rule.
	Region interface{}
	// The source IP address on which the firewall
	// rule operates. Changing this updates the `source_ip_address` of an existing
	// firewall rule.
	SourceIpAddress interface{}
	// The source port on which the firewall
	// rule operates. Changing this updates the `source_port` of an existing
	// firewall rule.
	SourcePort interface{}
	// The owner of the firewall rule. Required if admin
	// wants to create a firewall rule for another tenant. Changing this creates a
	// new firewall rule.
	TenantId interface{}
	// Map of additional options.
	ValueSpecs interface{}
}
