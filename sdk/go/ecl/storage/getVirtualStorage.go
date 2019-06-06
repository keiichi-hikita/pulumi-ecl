// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package storage

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to get the ID of an Enterprise Cloud virtual storage.
func LookupVirtualStorage(ctx *pulumi.Context, args *GetVirtualStorageArgs) (*GetVirtualStorageResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["virtualStorageId"] = args.VirtualStorageId
	}
	outputs, err := ctx.Invoke("ecl:storage/getVirtualStorage:getVirtualStorage", inputs)
	if err != nil {
		return nil, err
	}
	return &GetVirtualStorageResult{
		Description: outputs["description"],
		HostRoutes: outputs["hostRoutes"],
		IpAddrPool: outputs["ipAddrPool"],
		Name: outputs["name"],
		NetworkId: outputs["networkId"],
		SubnetId: outputs["subnetId"],
		VirtualStorageId: outputs["virtualStorageId"],
		VolumeTypeId: outputs["volumeTypeId"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getVirtualStorage.
type GetVirtualStorageArgs struct {
	// Name of Virtual Storage.
	Name interface{}
	// ID of Virtual Storage.
	VirtualStorageId interface{}
}

// A collection of values returned by getVirtualStorage.
type GetVirtualStorageResult struct {
	// Description of Virtual Storage.
	Description interface{}
	// List of static routes to be set to this Virtual Storage.
	// The host_routes structure is documented below.
	HostRoutes interface{}
	// IP address pool which specifies IP address range 
	// used by the Virtual Storage.
	// The ip_addr_pool structure is documented below.
	IpAddrPool interface{}
	Name interface{}
	// ID(UUID) for network to be connected to the Virtual Storage.
	NetworkId interface{}
	// ID(UUID) for subnet to be connected to the Virtual Storage.
	SubnetId interface{}
	VirtualStorageId interface{}
	// See Argument Reference above.
	VolumeTypeId interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
