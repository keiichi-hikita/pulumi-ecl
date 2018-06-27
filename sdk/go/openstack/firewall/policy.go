// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package firewall

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a v1 firewall policy resource within OpenStack.
type Policy struct {
	s *pulumi.ResourceState
}

// NewPolicy registers a new resource with the given unique name, arguments, and options.
func NewPolicy(ctx *pulumi.Context,
	name string, args *PolicyArgs, opts ...pulumi.ResourceOpt) (*Policy, error) {
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["audited"] = nil
		inputs["description"] = nil
		inputs["name"] = nil
		inputs["region"] = nil
		inputs["rules"] = nil
		inputs["shared"] = nil
		inputs["tenantId"] = nil
		inputs["valueSpecs"] = nil
	} else {
		inputs["audited"] = args.Audited
		inputs["description"] = args.Description
		inputs["name"] = args.Name
		inputs["region"] = args.Region
		inputs["rules"] = args.Rules
		inputs["shared"] = args.Shared
		inputs["tenantId"] = args.TenantId
		inputs["valueSpecs"] = args.ValueSpecs
	}
	s, err := ctx.RegisterResource("openstack:firewall/policy:Policy", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Policy{s: s}, nil
}

// GetPolicy gets an existing Policy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPolicy(ctx *pulumi.Context,
	name string, id pulumi.ID, state *PolicyState, opts ...pulumi.ResourceOpt) (*Policy, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["audited"] = state.Audited
		inputs["description"] = state.Description
		inputs["name"] = state.Name
		inputs["region"] = state.Region
		inputs["rules"] = state.Rules
		inputs["shared"] = state.Shared
		inputs["tenantId"] = state.TenantId
		inputs["valueSpecs"] = state.ValueSpecs
	}
	s, err := ctx.ReadResource("openstack:firewall/policy:Policy", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Policy{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Policy) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Policy) ID() *pulumi.IDOutput {
	return r.s.ID
}

// Audit status of the firewall policy
// (must be "true" or "false" if provided - defaults to "false").
// This status is set to "false" whenever the firewall policy or any of its
// rules are changed. Changing this updates the `audited` status of an existing
// firewall policy.
func (r *Policy) Audited() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["audited"])
}

// A description for the firewall policy. Changing
// this updates the `description` of an existing firewall policy.
func (r *Policy) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

// A name for the firewall policy. Changing this
// updates the `name` of an existing firewall policy.
func (r *Policy) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The region in which to obtain the v1 networking client.
// A networking client is needed to create a firewall policy. If omitted, the
// `region` argument of the provider is used. Changing this creates a new
// firewall policy.
func (r *Policy) Region() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["region"])
}

// An array of one or more firewall rules that comprise
// the policy. Changing this results in adding/removing rules from the
// existing firewall policy.
func (r *Policy) Rules() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["rules"])
}

// Sharing status of the firewall policy (must be "true"
// or "false" if provided). If this is "true" the policy is visible to, and
// can be used in, firewalls in other tenants. Changing this updates the
// `shared` status of an existing firewall policy. Only administrative users
// can specify if the policy should be shared.
func (r *Policy) Shared() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["shared"])
}

func (r *Policy) TenantId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["tenantId"])
}

// Map of additional options.
func (r *Policy) ValueSpecs() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["valueSpecs"])
}

// Input properties used for looking up and filtering Policy resources.
type PolicyState struct {
	// Audit status of the firewall policy
	// (must be "true" or "false" if provided - defaults to "false").
	// This status is set to "false" whenever the firewall policy or any of its
	// rules are changed. Changing this updates the `audited` status of an existing
	// firewall policy.
	Audited interface{}
	// A description for the firewall policy. Changing
	// this updates the `description` of an existing firewall policy.
	Description interface{}
	// A name for the firewall policy. Changing this
	// updates the `name` of an existing firewall policy.
	Name interface{}
	// The region in which to obtain the v1 networking client.
	// A networking client is needed to create a firewall policy. If omitted, the
	// `region` argument of the provider is used. Changing this creates a new
	// firewall policy.
	Region interface{}
	// An array of one or more firewall rules that comprise
	// the policy. Changing this results in adding/removing rules from the
	// existing firewall policy.
	Rules interface{}
	// Sharing status of the firewall policy (must be "true"
	// or "false" if provided). If this is "true" the policy is visible to, and
	// can be used in, firewalls in other tenants. Changing this updates the
	// `shared` status of an existing firewall policy. Only administrative users
	// can specify if the policy should be shared.
	Shared interface{}
	TenantId interface{}
	// Map of additional options.
	ValueSpecs interface{}
}

// The set of arguments for constructing a Policy resource.
type PolicyArgs struct {
	// Audit status of the firewall policy
	// (must be "true" or "false" if provided - defaults to "false").
	// This status is set to "false" whenever the firewall policy or any of its
	// rules are changed. Changing this updates the `audited` status of an existing
	// firewall policy.
	Audited interface{}
	// A description for the firewall policy. Changing
	// this updates the `description` of an existing firewall policy.
	Description interface{}
	// A name for the firewall policy. Changing this
	// updates the `name` of an existing firewall policy.
	Name interface{}
	// The region in which to obtain the v1 networking client.
	// A networking client is needed to create a firewall policy. If omitted, the
	// `region` argument of the provider is used. Changing this creates a new
	// firewall policy.
	Region interface{}
	// An array of one or more firewall rules that comprise
	// the policy. Changing this results in adding/removing rules from the
	// existing firewall policy.
	Rules interface{}
	// Sharing status of the firewall policy (must be "true"
	// or "false" if provided). If this is "true" the policy is visible to, and
	// can be used in, firewalls in other tenants. Changing this updates the
	// `shared` status of an existing firewall policy. Only administrative users
	// can specify if the policy should be shared.
	Shared interface{}
	TenantId interface{}
	// Map of additional options.
	ValueSpecs interface{}
}
