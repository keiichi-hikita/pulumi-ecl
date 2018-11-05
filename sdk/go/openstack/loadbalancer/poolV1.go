// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package loadbalancer

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a V1 load balancer pool resource within OpenStack.
type PoolV1 struct {
	s *pulumi.ResourceState
}

// NewPoolV1 registers a new resource with the given unique name, arguments, and options.
func NewPoolV1(ctx *pulumi.Context,
	name string, args *PoolV1Args, opts ...pulumi.ResourceOpt) (*PoolV1, error) {
	if args == nil || args.LbMethod == nil {
		return nil, errors.New("missing required argument 'LbMethod'")
	}
	if args == nil || args.Protocol == nil {
		return nil, errors.New("missing required argument 'Protocol'")
	}
	if args == nil || args.SubnetId == nil {
		return nil, errors.New("missing required argument 'SubnetId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["lbMethod"] = nil
		inputs["lbProvider"] = nil
		inputs["monitorIds"] = nil
		inputs["name"] = nil
		inputs["protocol"] = nil
		inputs["region"] = nil
		inputs["subnetId"] = nil
		inputs["tenantId"] = nil
	} else {
		inputs["lbMethod"] = args.LbMethod
		inputs["lbProvider"] = args.LbProvider
		inputs["monitorIds"] = args.MonitorIds
		inputs["name"] = args.Name
		inputs["protocol"] = args.Protocol
		inputs["region"] = args.Region
		inputs["subnetId"] = args.SubnetId
		inputs["tenantId"] = args.TenantId
	}
	s, err := ctx.RegisterResource("openstack:loadbalancer/poolV1:PoolV1", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &PoolV1{s: s}, nil
}

// GetPoolV1 gets an existing PoolV1 resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPoolV1(ctx *pulumi.Context,
	name string, id pulumi.ID, state *PoolV1State, opts ...pulumi.ResourceOpt) (*PoolV1, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["lbMethod"] = state.LbMethod
		inputs["lbProvider"] = state.LbProvider
		inputs["monitorIds"] = state.MonitorIds
		inputs["name"] = state.Name
		inputs["protocol"] = state.Protocol
		inputs["region"] = state.Region
		inputs["subnetId"] = state.SubnetId
		inputs["tenantId"] = state.TenantId
	}
	s, err := ctx.ReadResource("openstack:loadbalancer/poolV1:PoolV1", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &PoolV1{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *PoolV1) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *PoolV1) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The algorithm used to distribute load between the
// members of the pool. The current specification supports 'ROUND_ROBIN' and
// 'LEAST_CONNECTIONS' as valid values for this attribute.
func (r *PoolV1) LbMethod() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["lbMethod"])
}

// The backend load balancing provider. For example:
// `haproxy`, `F5`, etc.
func (r *PoolV1) LbProvider() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["lbProvider"])
}

// A list of IDs of monitors to associate with the
// pool.
func (r *PoolV1) MonitorIds() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["monitorIds"])
}

// The name of the pool. Changing this updates the name of
// the existing pool.
func (r *PoolV1) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The protocol used by the pool members, you can use
// either 'TCP, 'HTTP', or 'HTTPS'. Changing this creates a new pool.
func (r *PoolV1) Protocol() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["protocol"])
}

// The region in which to obtain the V2 Networking client.
// A Networking client is needed to create an LB pool. If omitted, the
// `region` argument of the provider is used. Changing this creates a new
// LB pool.
func (r *PoolV1) Region() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["region"])
}

// The network on which the members of the pool will be
// located. Only members that are on this network can be added to the pool.
// Changing this creates a new pool.
func (r *PoolV1) SubnetId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["subnetId"])
}

// The owner of the pool. Required if admin wants to
// create a pool member for another tenant. Changing this creates a new pool.
func (r *PoolV1) TenantId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["tenantId"])
}

// Input properties used for looking up and filtering PoolV1 resources.
type PoolV1State struct {
	// The algorithm used to distribute load between the
	// members of the pool. The current specification supports 'ROUND_ROBIN' and
	// 'LEAST_CONNECTIONS' as valid values for this attribute.
	LbMethod interface{}
	// The backend load balancing provider. For example:
	// `haproxy`, `F5`, etc.
	LbProvider interface{}
	// A list of IDs of monitors to associate with the
	// pool.
	MonitorIds interface{}
	// The name of the pool. Changing this updates the name of
	// the existing pool.
	Name interface{}
	// The protocol used by the pool members, you can use
	// either 'TCP, 'HTTP', or 'HTTPS'. Changing this creates a new pool.
	Protocol interface{}
	// The region in which to obtain the V2 Networking client.
	// A Networking client is needed to create an LB pool. If omitted, the
	// `region` argument of the provider is used. Changing this creates a new
	// LB pool.
	Region interface{}
	// The network on which the members of the pool will be
	// located. Only members that are on this network can be added to the pool.
	// Changing this creates a new pool.
	SubnetId interface{}
	// The owner of the pool. Required if admin wants to
	// create a pool member for another tenant. Changing this creates a new pool.
	TenantId interface{}
}

// The set of arguments for constructing a PoolV1 resource.
type PoolV1Args struct {
	// The algorithm used to distribute load between the
	// members of the pool. The current specification supports 'ROUND_ROBIN' and
	// 'LEAST_CONNECTIONS' as valid values for this attribute.
	LbMethod interface{}
	// The backend load balancing provider. For example:
	// `haproxy`, `F5`, etc.
	LbProvider interface{}
	// A list of IDs of monitors to associate with the
	// pool.
	MonitorIds interface{}
	// The name of the pool. Changing this updates the name of
	// the existing pool.
	Name interface{}
	// The protocol used by the pool members, you can use
	// either 'TCP, 'HTTP', or 'HTTPS'. Changing this creates a new pool.
	Protocol interface{}
	// The region in which to obtain the V2 Networking client.
	// A Networking client is needed to create an LB pool. If omitted, the
	// `region` argument of the provider is used. Changing this creates a new
	// LB pool.
	Region interface{}
	// The network on which the members of the pool will be
	// located. Only members that are on this network can be added to the pool.
	// Changing this creates a new pool.
	SubnetId interface{}
	// The owner of the pool. Required if admin wants to
	// create a pool member for another tenant. Changing this creates a new pool.
	TenantId interface{}
}
