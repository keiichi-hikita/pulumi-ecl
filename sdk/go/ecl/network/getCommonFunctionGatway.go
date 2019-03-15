// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

func LookupCommonFunctionGatway(ctx *pulumi.Context, args *GetCommonFunctionGatwayArgs) (*GetCommonFunctionGatwayResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["commonFunctionPoolId"] = args.CommonFunctionPoolId
		inputs["description"] = args.Description
		inputs["name"] = args.Name
		inputs["networkId"] = args.NetworkId
		inputs["subnetId"] = args.SubnetId
		inputs["tenantId"] = args.TenantId
	}
	outputs, err := ctx.Invoke("ecl:network/getCommonFunctionGatway:getCommonFunctionGatway", inputs)
	if err != nil {
		return nil, err
	}
	return &GetCommonFunctionGatwayResult{
		CommonFunctionPoolId: outputs["commonFunctionPoolId"],
		Description: outputs["description"],
		Name: outputs["name"],
		NetworkId: outputs["networkId"],
		SubnetId: outputs["subnetId"],
		TenantId: outputs["tenantId"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getCommonFunctionGatway.
type GetCommonFunctionGatwayArgs struct {
	CommonFunctionPoolId interface{}
	Description interface{}
	Name interface{}
	NetworkId interface{}
	SubnetId interface{}
	TenantId interface{}
}

// A collection of values returned by getCommonFunctionGatway.
type GetCommonFunctionGatwayResult struct {
	CommonFunctionPoolId interface{}
	Description interface{}
	Name interface{}
	NetworkId interface{}
	SubnetId interface{}
	TenantId interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}