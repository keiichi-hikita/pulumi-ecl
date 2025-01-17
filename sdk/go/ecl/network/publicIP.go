// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a V2 public ip resource within Enterprise Cloud.
type PublicIP struct {
	s *pulumi.ResourceState
}

// NewPublicIP registers a new resource with the given unique name, arguments, and options.
func NewPublicIP(ctx *pulumi.Context,
	name string, args *PublicIPArgs, opts ...pulumi.ResourceOpt) (*PublicIP, error) {
	if args == nil || args.InternetGwId == nil {
		return nil, errors.New("missing required argument 'InternetGwId'")
	}
	if args == nil || args.SubmaskLength == nil {
		return nil, errors.New("missing required argument 'SubmaskLength'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["description"] = nil
		inputs["internetGwId"] = nil
		inputs["name"] = nil
		inputs["region"] = nil
		inputs["submaskLength"] = nil
		inputs["tenantId"] = nil
	} else {
		inputs["description"] = args.Description
		inputs["internetGwId"] = args.InternetGwId
		inputs["name"] = args.Name
		inputs["region"] = args.Region
		inputs["submaskLength"] = args.SubmaskLength
		inputs["tenantId"] = args.TenantId
	}
	inputs["cidr"] = nil
	s, err := ctx.RegisterResource("ecl:network/publicIP:PublicIP", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &PublicIP{s: s}, nil
}

// GetPublicIP gets an existing PublicIP resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPublicIP(ctx *pulumi.Context,
	name string, id pulumi.ID, state *PublicIPState, opts ...pulumi.ResourceOpt) (*PublicIP, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["cidr"] = state.Cidr
		inputs["description"] = state.Description
		inputs["internetGwId"] = state.InternetGwId
		inputs["name"] = state.Name
		inputs["region"] = state.Region
		inputs["submaskLength"] = state.SubmaskLength
		inputs["tenantId"] = state.TenantId
	}
	s, err := ctx.ReadResource("ecl:network/publicIP:PublicIP", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &PublicIP{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *PublicIP) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *PublicIP) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The IP address of the block (assigned automatically).
func (r *PublicIP) Cidr() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["cidr"])
}

// Description of the Public IP resource.
func (r *PublicIP) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

// Internet Gateway the block will be assigned to.
func (r *PublicIP) InternetGwId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["internetGwId"])
}

// Name of the Public IP resource.
func (r *PublicIP) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The region in which to obtain the V2 Network client.
// Public ips are associated with accounts, but a Network client is needed to
// create one. If omitted, the `region` argument of the provider is used.
// Changing this creates a new public ip.
func (r *PublicIP) Region() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["region"])
}

// Specifies the size of the block by the length of its subnetwork mask length.
func (r *PublicIP) SubmaskLength() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["submaskLength"])
}

// Tenant ID of the owner (UUID).
func (r *PublicIP) TenantId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["tenantId"])
}

// Input properties used for looking up and filtering PublicIP resources.
type PublicIPState struct {
	// The IP address of the block (assigned automatically).
	Cidr interface{}
	// Description of the Public IP resource.
	Description interface{}
	// Internet Gateway the block will be assigned to.
	InternetGwId interface{}
	// Name of the Public IP resource.
	Name interface{}
	// The region in which to obtain the V2 Network client.
	// Public ips are associated with accounts, but a Network client is needed to
	// create one. If omitted, the `region` argument of the provider is used.
	// Changing this creates a new public ip.
	Region interface{}
	// Specifies the size of the block by the length of its subnetwork mask length.
	SubmaskLength interface{}
	// Tenant ID of the owner (UUID).
	TenantId interface{}
}

// The set of arguments for constructing a PublicIP resource.
type PublicIPArgs struct {
	// Description of the Public IP resource.
	Description interface{}
	// Internet Gateway the block will be assigned to.
	InternetGwId interface{}
	// Name of the Public IP resource.
	Name interface{}
	// The region in which to obtain the V2 Network client.
	// Public ips are associated with accounts, but a Network client is needed to
	// create one. If omitted, the `region` argument of the provider is used.
	// Changing this creates a new public ip.
	Region interface{}
	// Specifies the size of the block by the length of its subnetwork mask length.
	SubmaskLength interface{}
	// Tenant ID of the owner (UUID).
	TenantId interface{}
}
