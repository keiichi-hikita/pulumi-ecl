// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

type CommonFunctionGateway struct {
	s *pulumi.ResourceState
}

// NewCommonFunctionGateway registers a new resource with the given unique name, arguments, and options.
func NewCommonFunctionGateway(ctx *pulumi.Context,
	name string, args *CommonFunctionGatewayArgs, opts ...pulumi.ResourceOpt) (*CommonFunctionGateway, error) {
	if args == nil || args.CommonFunctionPoolId == nil {
		return nil, errors.New("missing required argument 'CommonFunctionPoolId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["commonFunctionPoolId"] = nil
		inputs["description"] = nil
		inputs["name"] = nil
		inputs["tenantId"] = nil
	} else {
		inputs["commonFunctionPoolId"] = args.CommonFunctionPoolId
		inputs["description"] = args.Description
		inputs["name"] = args.Name
		inputs["tenantId"] = args.TenantId
	}
	inputs["networkId"] = nil
	inputs["subnetId"] = nil
	s, err := ctx.RegisterResource("ecl:network/commonFunctionGateway:CommonFunctionGateway", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &CommonFunctionGateway{s: s}, nil
}

// GetCommonFunctionGateway gets an existing CommonFunctionGateway resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCommonFunctionGateway(ctx *pulumi.Context,
	name string, id pulumi.ID, state *CommonFunctionGatewayState, opts ...pulumi.ResourceOpt) (*CommonFunctionGateway, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["commonFunctionPoolId"] = state.CommonFunctionPoolId
		inputs["description"] = state.Description
		inputs["name"] = state.Name
		inputs["networkId"] = state.NetworkId
		inputs["subnetId"] = state.SubnetId
		inputs["tenantId"] = state.TenantId
	}
	s, err := ctx.ReadResource("ecl:network/commonFunctionGateway:CommonFunctionGateway", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &CommonFunctionGateway{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *CommonFunctionGateway) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *CommonFunctionGateway) ID() *pulumi.IDOutput {
	return r.s.ID()
}

func (r *CommonFunctionGateway) CommonFunctionPoolId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["commonFunctionPoolId"])
}

func (r *CommonFunctionGateway) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

func (r *CommonFunctionGateway) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

func (r *CommonFunctionGateway) NetworkId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["networkId"])
}

func (r *CommonFunctionGateway) SubnetId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["subnetId"])
}

func (r *CommonFunctionGateway) TenantId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["tenantId"])
}

// Input properties used for looking up and filtering CommonFunctionGateway resources.
type CommonFunctionGatewayState struct {
	CommonFunctionPoolId interface{}
	Description interface{}
	Name interface{}
	NetworkId interface{}
	SubnetId interface{}
	TenantId interface{}
}

// The set of arguments for constructing a CommonFunctionGateway resource.
type CommonFunctionGatewayArgs struct {
	CommonFunctionPoolId interface{}
	Description interface{}
	Name interface{}
	TenantId interface{}
}
