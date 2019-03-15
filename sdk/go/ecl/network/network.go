// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

type Network struct {
	s *pulumi.ResourceState
}

// NewNetwork registers a new resource with the given unique name, arguments, and options.
func NewNetwork(ctx *pulumi.Context,
	name string, args *NetworkArgs, opts ...pulumi.ResourceOpt) (*Network, error) {
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["adminStateUp"] = nil
		inputs["description"] = nil
		inputs["name"] = nil
		inputs["plane"] = nil
		inputs["status"] = nil
		inputs["subnets"] = nil
		inputs["tags"] = nil
		inputs["tenantId"] = nil
	} else {
		inputs["adminStateUp"] = args.AdminStateUp
		inputs["description"] = args.Description
		inputs["name"] = args.Name
		inputs["plane"] = args.Plane
		inputs["status"] = args.Status
		inputs["subnets"] = args.Subnets
		inputs["tags"] = args.Tags
		inputs["tenantId"] = args.TenantId
	}
	s, err := ctx.RegisterResource("ecl:network/network:Network", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Network{s: s}, nil
}

// GetNetwork gets an existing Network resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNetwork(ctx *pulumi.Context,
	name string, id pulumi.ID, state *NetworkState, opts ...pulumi.ResourceOpt) (*Network, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["adminStateUp"] = state.AdminStateUp
		inputs["description"] = state.Description
		inputs["name"] = state.Name
		inputs["plane"] = state.Plane
		inputs["status"] = state.Status
		inputs["subnets"] = state.Subnets
		inputs["tags"] = state.Tags
		inputs["tenantId"] = state.TenantId
	}
	s, err := ctx.ReadResource("ecl:network/network:Network", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Network{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Network) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Network) ID() *pulumi.IDOutput {
	return r.s.ID()
}

func (r *Network) AdminStateUp() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["adminStateUp"])
}

func (r *Network) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

func (r *Network) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

func (r *Network) Plane() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["plane"])
}

func (r *Network) Status() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["status"])
}

func (r *Network) Subnets() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["subnets"])
}

func (r *Network) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

func (r *Network) TenantId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["tenantId"])
}

// Input properties used for looking up and filtering Network resources.
type NetworkState struct {
	AdminStateUp interface{}
	Description interface{}
	Name interface{}
	Plane interface{}
	Status interface{}
	Subnets interface{}
	Tags interface{}
	TenantId interface{}
}

// The set of arguments for constructing a Network resource.
type NetworkArgs struct {
	AdminStateUp interface{}
	Description interface{}
	Name interface{}
	Plane interface{}
	Status interface{}
	Subnets interface{}
	Tags interface{}
	TenantId interface{}
}
