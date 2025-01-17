// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package storage

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to get the ID of an Enterprise Cloud volume.
func LookupVolume(ctx *pulumi.Context, args *GetVolumeArgs) (*GetVolumeResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["volumeId"] = args.VolumeId
	}
	outputs, err := ctx.Invoke("ecl:storage/getVolume:getVolume", inputs)
	if err != nil {
		return nil, err
	}
	return &GetVolumeResult{
		AvailabilityZone: outputs["availabilityZone"],
		Description: outputs["description"],
		InitiatorIqns: outputs["initiatorIqns"],
		IopsPerGb: outputs["iopsPerGb"],
		Name: outputs["name"],
		Size: outputs["size"],
		Throughput: outputs["throughput"],
		VirtualStorageId: outputs["virtualStorageId"],
		VolumeId: outputs["volumeId"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getVolume.
type GetVolumeArgs struct {
	// Name of Volume.
	Name interface{}
	// ID of Volume.
	VolumeId interface{}
}

// A collection of values returned by getVolume.
type GetVolumeResult struct {
	// Availability zone of volume.
	AvailabilityZone interface{}
	// Description of Volume.
	Description interface{}
	// List of initiator IQN who can access to this volume.
	InitiatorIqns interface{}
	// Provisioned IOPS/GB for volume.
	IopsPerGb interface{}
	Name interface{}
	// Size of volume in Gigabyte.
	Size interface{}
	// Throughput for volume.
	Throughput interface{}
	// Virtual Storage ID (UUID) which this volume belongs.
	VirtualStorageId interface{}
	VolumeId interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
