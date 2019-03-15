// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

type GatewayInterface struct {
	s *pulumi.ResourceState
}

// NewGatewayInterface registers a new resource with the given unique name, arguments, and options.
func NewGatewayInterface(ctx *pulumi.Context,
	name string, args *GatewayInterfaceArgs, opts ...pulumi.ResourceOpt) (*GatewayInterface, error) {
	if args == nil || args.GwVipv4 == nil {
		return nil, errors.New("missing required argument 'GwVipv4'")
	}
	if args == nil || args.Netmask == nil {
		return nil, errors.New("missing required argument 'Netmask'")
	}
	if args == nil || args.NetworkId == nil {
		return nil, errors.New("missing required argument 'NetworkId'")
	}
	if args == nil || args.PrimaryIpv4 == nil {
		return nil, errors.New("missing required argument 'PrimaryIpv4'")
	}
	if args == nil || args.SecondaryIpv4 == nil {
		return nil, errors.New("missing required argument 'SecondaryIpv4'")
	}
	if args == nil || args.ServiceType == nil {
		return nil, errors.New("missing required argument 'ServiceType'")
	}
	if args == nil || args.Vrid == nil {
		return nil, errors.New("missing required argument 'Vrid'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["awsGwId"] = nil
		inputs["azureGwId"] = nil
		inputs["description"] = nil
		inputs["gcpGwId"] = nil
		inputs["gwVipv4"] = nil
		inputs["gwVipv6"] = nil
		inputs["interdcGwId"] = nil
		inputs["internetGwId"] = nil
		inputs["name"] = nil
		inputs["netmask"] = nil
		inputs["networkId"] = nil
		inputs["primaryIpv4"] = nil
		inputs["primaryIpv6"] = nil
		inputs["region"] = nil
		inputs["secondaryIpv4"] = nil
		inputs["secondaryIpv6"] = nil
		inputs["serviceType"] = nil
		inputs["tenantId"] = nil
		inputs["vpnGwId"] = nil
		inputs["vrid"] = nil
	} else {
		inputs["awsGwId"] = args.AwsGwId
		inputs["azureGwId"] = args.AzureGwId
		inputs["description"] = args.Description
		inputs["gcpGwId"] = args.GcpGwId
		inputs["gwVipv4"] = args.GwVipv4
		inputs["gwVipv6"] = args.GwVipv6
		inputs["interdcGwId"] = args.InterdcGwId
		inputs["internetGwId"] = args.InternetGwId
		inputs["name"] = args.Name
		inputs["netmask"] = args.Netmask
		inputs["networkId"] = args.NetworkId
		inputs["primaryIpv4"] = args.PrimaryIpv4
		inputs["primaryIpv6"] = args.PrimaryIpv6
		inputs["region"] = args.Region
		inputs["secondaryIpv4"] = args.SecondaryIpv4
		inputs["secondaryIpv6"] = args.SecondaryIpv6
		inputs["serviceType"] = args.ServiceType
		inputs["tenantId"] = args.TenantId
		inputs["vpnGwId"] = args.VpnGwId
		inputs["vrid"] = args.Vrid
	}
	s, err := ctx.RegisterResource("ecl:network/gatewayInterface:GatewayInterface", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &GatewayInterface{s: s}, nil
}

// GetGatewayInterface gets an existing GatewayInterface resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetGatewayInterface(ctx *pulumi.Context,
	name string, id pulumi.ID, state *GatewayInterfaceState, opts ...pulumi.ResourceOpt) (*GatewayInterface, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["awsGwId"] = state.AwsGwId
		inputs["azureGwId"] = state.AzureGwId
		inputs["description"] = state.Description
		inputs["gcpGwId"] = state.GcpGwId
		inputs["gwVipv4"] = state.GwVipv4
		inputs["gwVipv6"] = state.GwVipv6
		inputs["interdcGwId"] = state.InterdcGwId
		inputs["internetGwId"] = state.InternetGwId
		inputs["name"] = state.Name
		inputs["netmask"] = state.Netmask
		inputs["networkId"] = state.NetworkId
		inputs["primaryIpv4"] = state.PrimaryIpv4
		inputs["primaryIpv6"] = state.PrimaryIpv6
		inputs["region"] = state.Region
		inputs["secondaryIpv4"] = state.SecondaryIpv4
		inputs["secondaryIpv6"] = state.SecondaryIpv6
		inputs["serviceType"] = state.ServiceType
		inputs["tenantId"] = state.TenantId
		inputs["vpnGwId"] = state.VpnGwId
		inputs["vrid"] = state.Vrid
	}
	s, err := ctx.ReadResource("ecl:network/gatewayInterface:GatewayInterface", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &GatewayInterface{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *GatewayInterface) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *GatewayInterface) ID() *pulumi.IDOutput {
	return r.s.ID()
}

func (r *GatewayInterface) AwsGwId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["awsGwId"])
}

func (r *GatewayInterface) AzureGwId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["azureGwId"])
}

func (r *GatewayInterface) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

func (r *GatewayInterface) GcpGwId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["gcpGwId"])
}

func (r *GatewayInterface) GwVipv4() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["gwVipv4"])
}

func (r *GatewayInterface) GwVipv6() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["gwVipv6"])
}

func (r *GatewayInterface) InterdcGwId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["interdcGwId"])
}

func (r *GatewayInterface) InternetGwId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["internetGwId"])
}

func (r *GatewayInterface) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

func (r *GatewayInterface) Netmask() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["netmask"])
}

func (r *GatewayInterface) NetworkId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["networkId"])
}

func (r *GatewayInterface) PrimaryIpv4() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["primaryIpv4"])
}

func (r *GatewayInterface) PrimaryIpv6() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["primaryIpv6"])
}

func (r *GatewayInterface) Region() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["region"])
}

func (r *GatewayInterface) SecondaryIpv4() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["secondaryIpv4"])
}

func (r *GatewayInterface) SecondaryIpv6() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["secondaryIpv6"])
}

func (r *GatewayInterface) ServiceType() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["serviceType"])
}

func (r *GatewayInterface) TenantId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["tenantId"])
}

func (r *GatewayInterface) VpnGwId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["vpnGwId"])
}

func (r *GatewayInterface) Vrid() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["vrid"])
}

// Input properties used for looking up and filtering GatewayInterface resources.
type GatewayInterfaceState struct {
	AwsGwId interface{}
	AzureGwId interface{}
	Description interface{}
	GcpGwId interface{}
	GwVipv4 interface{}
	GwVipv6 interface{}
	InterdcGwId interface{}
	InternetGwId interface{}
	Name interface{}
	Netmask interface{}
	NetworkId interface{}
	PrimaryIpv4 interface{}
	PrimaryIpv6 interface{}
	Region interface{}
	SecondaryIpv4 interface{}
	SecondaryIpv6 interface{}
	ServiceType interface{}
	TenantId interface{}
	VpnGwId interface{}
	Vrid interface{}
}

// The set of arguments for constructing a GatewayInterface resource.
type GatewayInterfaceArgs struct {
	AwsGwId interface{}
	AzureGwId interface{}
	Description interface{}
	GcpGwId interface{}
	GwVipv4 interface{}
	GwVipv6 interface{}
	InterdcGwId interface{}
	InternetGwId interface{}
	Name interface{}
	Netmask interface{}
	NetworkId interface{}
	PrimaryIpv4 interface{}
	PrimaryIpv6 interface{}
	Region interface{}
	SecondaryIpv4 interface{}
	SecondaryIpv6 interface{}
	ServiceType interface{}
	TenantId interface{}
	VpnGwId interface{}
	Vrid interface{}
}