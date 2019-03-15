// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

type StaticRoute struct {
	s *pulumi.ResourceState
}

// NewStaticRoute registers a new resource with the given unique name, arguments, and options.
func NewStaticRoute(ctx *pulumi.Context,
	name string, args *StaticRouteArgs, opts ...pulumi.ResourceOpt) (*StaticRoute, error) {
	if args == nil || args.Destination == nil {
		return nil, errors.New("missing required argument 'Destination'")
	}
	if args == nil || args.Nexthop == nil {
		return nil, errors.New("missing required argument 'Nexthop'")
	}
	if args == nil || args.ServiceType == nil {
		return nil, errors.New("missing required argument 'ServiceType'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["awsGwId"] = nil
		inputs["azureGwId"] = nil
		inputs["description"] = nil
		inputs["destination"] = nil
		inputs["gcpGwId"] = nil
		inputs["interdcGwId"] = nil
		inputs["internetGwId"] = nil
		inputs["name"] = nil
		inputs["nexthop"] = nil
		inputs["region"] = nil
		inputs["serviceType"] = nil
		inputs["tenantId"] = nil
		inputs["vpnGwId"] = nil
	} else {
		inputs["awsGwId"] = args.AwsGwId
		inputs["azureGwId"] = args.AzureGwId
		inputs["description"] = args.Description
		inputs["destination"] = args.Destination
		inputs["gcpGwId"] = args.GcpGwId
		inputs["interdcGwId"] = args.InterdcGwId
		inputs["internetGwId"] = args.InternetGwId
		inputs["name"] = args.Name
		inputs["nexthop"] = args.Nexthop
		inputs["region"] = args.Region
		inputs["serviceType"] = args.ServiceType
		inputs["tenantId"] = args.TenantId
		inputs["vpnGwId"] = args.VpnGwId
	}
	s, err := ctx.RegisterResource("ecl:network/staticRoute:StaticRoute", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &StaticRoute{s: s}, nil
}

// GetStaticRoute gets an existing StaticRoute resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetStaticRoute(ctx *pulumi.Context,
	name string, id pulumi.ID, state *StaticRouteState, opts ...pulumi.ResourceOpt) (*StaticRoute, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["awsGwId"] = state.AwsGwId
		inputs["azureGwId"] = state.AzureGwId
		inputs["description"] = state.Description
		inputs["destination"] = state.Destination
		inputs["gcpGwId"] = state.GcpGwId
		inputs["interdcGwId"] = state.InterdcGwId
		inputs["internetGwId"] = state.InternetGwId
		inputs["name"] = state.Name
		inputs["nexthop"] = state.Nexthop
		inputs["region"] = state.Region
		inputs["serviceType"] = state.ServiceType
		inputs["tenantId"] = state.TenantId
		inputs["vpnGwId"] = state.VpnGwId
	}
	s, err := ctx.ReadResource("ecl:network/staticRoute:StaticRoute", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &StaticRoute{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *StaticRoute) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *StaticRoute) ID() *pulumi.IDOutput {
	return r.s.ID()
}

func (r *StaticRoute) AwsGwId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["awsGwId"])
}

func (r *StaticRoute) AzureGwId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["azureGwId"])
}

func (r *StaticRoute) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

func (r *StaticRoute) Destination() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["destination"])
}

func (r *StaticRoute) GcpGwId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["gcpGwId"])
}

func (r *StaticRoute) InterdcGwId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["interdcGwId"])
}

func (r *StaticRoute) InternetGwId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["internetGwId"])
}

func (r *StaticRoute) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

func (r *StaticRoute) Nexthop() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["nexthop"])
}

func (r *StaticRoute) Region() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["region"])
}

func (r *StaticRoute) ServiceType() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["serviceType"])
}

func (r *StaticRoute) TenantId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["tenantId"])
}

func (r *StaticRoute) VpnGwId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["vpnGwId"])
}

// Input properties used for looking up and filtering StaticRoute resources.
type StaticRouteState struct {
	AwsGwId interface{}
	AzureGwId interface{}
	Description interface{}
	Destination interface{}
	GcpGwId interface{}
	InterdcGwId interface{}
	InternetGwId interface{}
	Name interface{}
	Nexthop interface{}
	Region interface{}
	ServiceType interface{}
	TenantId interface{}
	VpnGwId interface{}
}

// The set of arguments for constructing a StaticRoute resource.
type StaticRouteArgs struct {
	AwsGwId interface{}
	AzureGwId interface{}
	Description interface{}
	Destination interface{}
	GcpGwId interface{}
	InterdcGwId interface{}
	InternetGwId interface{}
	Name interface{}
	Nexthop interface{}
	Region interface{}
	ServiceType interface{}
	TenantId interface{}
	VpnGwId interface{}
}