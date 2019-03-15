// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

func LookupGatewayInterface(ctx *pulumi.Context, args *GetGatewayInterfaceArgs) (*GetGatewayInterfaceResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["awsGwId"] = args.AwsGwId
		inputs["azureGwId"] = args.AzureGwId
		inputs["description"] = args.Description
		inputs["gatewayInterfaceId"] = args.GatewayInterfaceId
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
		inputs["status"] = args.Status
		inputs["tenantId"] = args.TenantId
		inputs["vpnGwId"] = args.VpnGwId
		inputs["vrid"] = args.Vrid
	}
	outputs, err := ctx.Invoke("ecl:network/getGatewayInterface:getGatewayInterface", inputs)
	if err != nil {
		return nil, err
	}
	return &GetGatewayInterfaceResult{
		AwsGwId: outputs["awsGwId"],
		AzureGwId: outputs["azureGwId"],
		Description: outputs["description"],
		GatewayInterfaceId: outputs["gatewayInterfaceId"],
		GcpGwId: outputs["gcpGwId"],
		GwVipv4: outputs["gwVipv4"],
		GwVipv6: outputs["gwVipv6"],
		InterdcGwId: outputs["interdcGwId"],
		InternetGwId: outputs["internetGwId"],
		Name: outputs["name"],
		Netmask: outputs["netmask"],
		NetworkId: outputs["networkId"],
		PrimaryIpv4: outputs["primaryIpv4"],
		PrimaryIpv6: outputs["primaryIpv6"],
		Region: outputs["region"],
		SecondaryIpv4: outputs["secondaryIpv4"],
		SecondaryIpv6: outputs["secondaryIpv6"],
		ServiceType: outputs["serviceType"],
		TenantId: outputs["tenantId"],
		VpnGwId: outputs["vpnGwId"],
		Vrid: outputs["vrid"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getGatewayInterface.
type GetGatewayInterfaceArgs struct {
	AwsGwId interface{}
	AzureGwId interface{}
	Description interface{}
	GatewayInterfaceId interface{}
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
	Status interface{}
	TenantId interface{}
	VpnGwId interface{}
	Vrid interface{}
}

// A collection of values returned by getGatewayInterface.
type GetGatewayInterfaceResult struct {
	AwsGwId interface{}
	AzureGwId interface{}
	Description interface{}
	GatewayInterfaceId interface{}
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
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}