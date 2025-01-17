// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a V2 internet gateway resource within Enterprise Cloud.
type InternetGateway struct {
	s *pulumi.ResourceState
}

// NewInternetGateway registers a new resource with the given unique name, arguments, and options.
func NewInternetGateway(ctx *pulumi.Context,
	name string, args *InternetGatewayArgs, opts ...pulumi.ResourceOpt) (*InternetGateway, error) {
	if args == nil || args.InternetServiceId == nil {
		return nil, errors.New("missing required argument 'InternetServiceId'")
	}
	if args == nil || args.QosOptionId == nil {
		return nil, errors.New("missing required argument 'QosOptionId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["description"] = nil
		inputs["internetServiceId"] = nil
		inputs["name"] = nil
		inputs["qosOptionId"] = nil
		inputs["region"] = nil
		inputs["tenantId"] = nil
	} else {
		inputs["description"] = args.Description
		inputs["internetServiceId"] = args.InternetServiceId
		inputs["name"] = args.Name
		inputs["qosOptionId"] = args.QosOptionId
		inputs["region"] = args.Region
		inputs["tenantId"] = args.TenantId
	}
	s, err := ctx.RegisterResource("ecl:network/internetGateway:InternetGateway", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &InternetGateway{s: s}, nil
}

// GetInternetGateway gets an existing InternetGateway resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetInternetGateway(ctx *pulumi.Context,
	name string, id pulumi.ID, state *InternetGatewayState, opts ...pulumi.ResourceOpt) (*InternetGateway, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["description"] = state.Description
		inputs["internetServiceId"] = state.InternetServiceId
		inputs["name"] = state.Name
		inputs["qosOptionId"] = state.QosOptionId
		inputs["region"] = state.Region
		inputs["tenantId"] = state.TenantId
	}
	s, err := ctx.ReadResource("ecl:network/internetGateway:InternetGateway", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &InternetGateway{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *InternetGateway) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *InternetGateway) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Description of the Internet Gateway resource.
func (r *InternetGateway) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

// Internet Service instantiated by Internet gateway.
func (r *InternetGateway) InternetServiceId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["internetServiceId"])
}

// Name of the Internet Gateway resource.
func (r *InternetGateway) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Quality of Service options selected for Internet gateway.
func (r *InternetGateway) QosOptionId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["qosOptionId"])
}

// The region in which to obtain the V2 Network client.
// Internet gateways are associated with accounts, but a Network client is needed to
// create one. If omitted, the `region` argument of the provider is used.
// Changing this creates a new internet gateway.
func (r *InternetGateway) Region() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["region"])
}

// Tenant ID of the owner (UUID).
func (r *InternetGateway) TenantId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["tenantId"])
}

// Input properties used for looking up and filtering InternetGateway resources.
type InternetGatewayState struct {
	// Description of the Internet Gateway resource.
	Description interface{}
	// Internet Service instantiated by Internet gateway.
	InternetServiceId interface{}
	// Name of the Internet Gateway resource.
	Name interface{}
	// Quality of Service options selected for Internet gateway.
	QosOptionId interface{}
	// The region in which to obtain the V2 Network client.
	// Internet gateways are associated with accounts, but a Network client is needed to
	// create one. If omitted, the `region` argument of the provider is used.
	// Changing this creates a new internet gateway.
	Region interface{}
	// Tenant ID of the owner (UUID).
	TenantId interface{}
}

// The set of arguments for constructing a InternetGateway resource.
type InternetGatewayArgs struct {
	// Description of the Internet Gateway resource.
	Description interface{}
	// Internet Service instantiated by Internet gateway.
	InternetServiceId interface{}
	// Name of the Internet Gateway resource.
	Name interface{}
	// Quality of Service options selected for Internet gateway.
	QosOptionId interface{}
	// The region in which to obtain the V2 Network client.
	// Internet gateways are associated with accounts, but a Network client is needed to
	// create one. If omitted, the `region` argument of the provider is used.
	// Changing this creates a new internet gateway.
	Region interface{}
	// Tenant ID of the owner (UUID).
	TenantId interface{}
}
