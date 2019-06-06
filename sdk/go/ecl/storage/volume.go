// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package storage

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a V1 volume resource within Enterprise Cloud.
type Volume struct {
	s *pulumi.ResourceState
}

// NewVolume registers a new resource with the given unique name, arguments, and options.
func NewVolume(ctx *pulumi.Context,
	name string, args *VolumeArgs, opts ...pulumi.ResourceOpt) (*Volume, error) {
	if args == nil || args.Size == nil {
		return nil, errors.New("missing required argument 'Size'")
	}
	if args == nil || args.VirtualStorageId == nil {
		return nil, errors.New("missing required argument 'VirtualStorageId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["availabilityZone"] = nil
		inputs["description"] = nil
		inputs["errorMessage"] = nil
		inputs["initiatorIqns"] = nil
		inputs["iopsPerGb"] = nil
		inputs["name"] = nil
		inputs["size"] = nil
		inputs["throughput"] = nil
		inputs["virtualStorageId"] = nil
	} else {
		inputs["availabilityZone"] = args.AvailabilityZone
		inputs["description"] = args.Description
		inputs["errorMessage"] = args.ErrorMessage
		inputs["initiatorIqns"] = args.InitiatorIqns
		inputs["iopsPerGb"] = args.IopsPerGb
		inputs["name"] = args.Name
		inputs["size"] = args.Size
		inputs["throughput"] = args.Throughput
		inputs["virtualStorageId"] = args.VirtualStorageId
	}
	s, err := ctx.RegisterResource("ecl:storage/volume:Volume", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Volume{s: s}, nil
}

// GetVolume gets an existing Volume resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVolume(ctx *pulumi.Context,
	name string, id pulumi.ID, state *VolumeState, opts ...pulumi.ResourceOpt) (*Volume, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["availabilityZone"] = state.AvailabilityZone
		inputs["description"] = state.Description
		inputs["errorMessage"] = state.ErrorMessage
		inputs["initiatorIqns"] = state.InitiatorIqns
		inputs["iopsPerGb"] = state.IopsPerGb
		inputs["name"] = state.Name
		inputs["size"] = state.Size
		inputs["throughput"] = state.Throughput
		inputs["virtualStorageId"] = state.VirtualStorageId
	}
	s, err := ctx.ReadResource("ecl:storage/volume:Volume", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Volume{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Volume) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Volume) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Availability zone of volume.
func (r *Volume) AvailabilityZone() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["availabilityZone"])
}

// Description of volume.
func (r *Volume) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

// Error message of Volume.
func (r *Volume) ErrorMessage() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["errorMessage"])
}

// List of initiator IQN who can access to this volume.
// User can specify this parameter only in case block storage service.
func (r *Volume) InitiatorIqns() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["initiatorIqns"])
}

// Provisioned IOPS/GB for volume.
// User can specify this parameter only in case block storage service.
func (r *Volume) IopsPerGb() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["iopsPerGb"])
}

// Name of volume.
func (r *Volume) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Size of volume in Gigabyte.
// User can choice following volume sizes depending on storage service type.
func (r *Volume) Size() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["size"])
}

// Throughput for volume.
// User can specify this parameter only in case file storage standard service.
func (r *Volume) Throughput() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["throughput"])
}

// Virtual Storage ID (UUID) which this volume belongs.
func (r *Volume) VirtualStorageId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["virtualStorageId"])
}

// Input properties used for looking up and filtering Volume resources.
type VolumeState struct {
	// Availability zone of volume.
	AvailabilityZone interface{}
	// Description of volume.
	Description interface{}
	// Error message of Volume.
	ErrorMessage interface{}
	// List of initiator IQN who can access to this volume.
	// User can specify this parameter only in case block storage service.
	InitiatorIqns interface{}
	// Provisioned IOPS/GB for volume.
	// User can specify this parameter only in case block storage service.
	IopsPerGb interface{}
	// Name of volume.
	Name interface{}
	// Size of volume in Gigabyte.
	// User can choice following volume sizes depending on storage service type.
	Size interface{}
	// Throughput for volume.
	// User can specify this parameter only in case file storage standard service.
	Throughput interface{}
	// Virtual Storage ID (UUID) which this volume belongs.
	VirtualStorageId interface{}
}

// The set of arguments for constructing a Volume resource.
type VolumeArgs struct {
	// Availability zone of volume.
	AvailabilityZone interface{}
	// Description of volume.
	Description interface{}
	// Error message of Volume.
	ErrorMessage interface{}
	// List of initiator IQN who can access to this volume.
	// User can specify this parameter only in case block storage service.
	InitiatorIqns interface{}
	// Provisioned IOPS/GB for volume.
	// User can specify this parameter only in case block storage service.
	IopsPerGb interface{}
	// Name of volume.
	Name interface{}
	// Size of volume in Gigabyte.
	// User can choice following volume sizes depending on storage service type.
	Size interface{}
	// Throughput for volume.
	// User can specify this parameter only in case file storage standard service.
	Throughput interface{}
	// Virtual Storage ID (UUID) which this volume belongs.
	VirtualStorageId interface{}
}
