// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package storage

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a V1 virtual storage resource within Enterprise Cloud.
type VirtualStorage struct {
	s *pulumi.ResourceState
}

// NewVirtualStorage registers a new resource with the given unique name, arguments, and options.
func NewVirtualStorage(ctx *pulumi.Context,
	name string, args *VirtualStorageArgs, opts ...pulumi.ResourceOpt) (*VirtualStorage, error) {
	if args == nil || args.IpAddrPool == nil {
		return nil, errors.New("missing required argument 'IpAddrPool'")
	}
	if args == nil || args.NetworkId == nil {
		return nil, errors.New("missing required argument 'NetworkId'")
	}
	if args == nil || args.SubnetId == nil {
		return nil, errors.New("missing required argument 'SubnetId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["description"] = nil
		inputs["errorMessage"] = nil
		inputs["hostRoutes"] = nil
		inputs["ipAddrPool"] = nil
		inputs["name"] = nil
		inputs["networkId"] = nil
		inputs["subnetId"] = nil
		inputs["volumeTypeId"] = nil
		inputs["volumeTypeName"] = nil
	} else {
		inputs["description"] = args.Description
		inputs["errorMessage"] = args.ErrorMessage
		inputs["hostRoutes"] = args.HostRoutes
		inputs["ipAddrPool"] = args.IpAddrPool
		inputs["name"] = args.Name
		inputs["networkId"] = args.NetworkId
		inputs["subnetId"] = args.SubnetId
		inputs["volumeTypeId"] = args.VolumeTypeId
		inputs["volumeTypeName"] = args.VolumeTypeName
	}
	s, err := ctx.RegisterResource("ecl:storage/virtualStorage:VirtualStorage", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &VirtualStorage{s: s}, nil
}

// GetVirtualStorage gets an existing VirtualStorage resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVirtualStorage(ctx *pulumi.Context,
	name string, id pulumi.ID, state *VirtualStorageState, opts ...pulumi.ResourceOpt) (*VirtualStorage, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["description"] = state.Description
		inputs["errorMessage"] = state.ErrorMessage
		inputs["hostRoutes"] = state.HostRoutes
		inputs["ipAddrPool"] = state.IpAddrPool
		inputs["name"] = state.Name
		inputs["networkId"] = state.NetworkId
		inputs["subnetId"] = state.SubnetId
		inputs["volumeTypeId"] = state.VolumeTypeId
		inputs["volumeTypeName"] = state.VolumeTypeName
	}
	s, err := ctx.ReadResource("ecl:storage/virtualStorage:VirtualStorage", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &VirtualStorage{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *VirtualStorage) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *VirtualStorage) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Description of Virtual Storage.
func (r *VirtualStorage) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

// Error message of Virtual Storage.
func (r *VirtualStorage) ErrorMessage() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["errorMessage"])
}

// List of static routes to be set to this Virtual Storage.
// The host_routes structure is documented below.
func (r *VirtualStorage) HostRoutes() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["hostRoutes"])
}

// IP address pool which specifies IP address range 
// used by the Virtual Storage.
// The ip_addr_pool structure is documented below.
func (r *VirtualStorage) IpAddrPool() *pulumi.Output {
	return r.s.State["ipAddrPool"]
}

// Name of Virtual Storage.
func (r *VirtualStorage) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// ID(UUID) for network to be connected to the Virtual Storage.
func (r *VirtualStorage) NetworkId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["networkId"])
}

// ID(UUID) for subnet to be connected to the Virtual Storage.
func (r *VirtualStorage) SubnetId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["subnetId"])
}

// ID of volume type used for this Virtual Storage (UUID).
// User must specify either volume_type_id or volume_type_name.
// This parameter conflicts with `volume_type_name` .
func (r *VirtualStorage) VolumeTypeId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["volumeTypeId"])
}

// Name of volume type used for this Virtual Storage.
// User must specify either volume_type_id or volume_type_name.
// This parameter conflicts with `volume_type_id` .
func (r *VirtualStorage) VolumeTypeName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["volumeTypeName"])
}

// Input properties used for looking up and filtering VirtualStorage resources.
type VirtualStorageState struct {
	// Description of Virtual Storage.
	Description interface{}
	// Error message of Virtual Storage.
	ErrorMessage interface{}
	// List of static routes to be set to this Virtual Storage.
	// The host_routes structure is documented below.
	HostRoutes interface{}
	// IP address pool which specifies IP address range 
	// used by the Virtual Storage.
	// The ip_addr_pool structure is documented below.
	IpAddrPool interface{}
	// Name of Virtual Storage.
	Name interface{}
	// ID(UUID) for network to be connected to the Virtual Storage.
	NetworkId interface{}
	// ID(UUID) for subnet to be connected to the Virtual Storage.
	SubnetId interface{}
	// ID of volume type used for this Virtual Storage (UUID).
	// User must specify either volume_type_id or volume_type_name.
	// This parameter conflicts with `volume_type_name` .
	VolumeTypeId interface{}
	// Name of volume type used for this Virtual Storage.
	// User must specify either volume_type_id or volume_type_name.
	// This parameter conflicts with `volume_type_id` .
	VolumeTypeName interface{}
}

// The set of arguments for constructing a VirtualStorage resource.
type VirtualStorageArgs struct {
	// Description of Virtual Storage.
	Description interface{}
	// Error message of Virtual Storage.
	ErrorMessage interface{}
	// List of static routes to be set to this Virtual Storage.
	// The host_routes structure is documented below.
	HostRoutes interface{}
	// IP address pool which specifies IP address range 
	// used by the Virtual Storage.
	// The ip_addr_pool structure is documented below.
	IpAddrPool interface{}
	// Name of Virtual Storage.
	Name interface{}
	// ID(UUID) for network to be connected to the Virtual Storage.
	NetworkId interface{}
	// ID(UUID) for subnet to be connected to the Virtual Storage.
	SubnetId interface{}
	// ID of volume type used for this Virtual Storage (UUID).
	// User must specify either volume_type_id or volume_type_name.
	// This parameter conflicts with `volume_type_name` .
	VolumeTypeId interface{}
	// Name of volume type used for this Virtual Storage.
	// User must specify either volume_type_id or volume_type_name.
	// This parameter conflicts with `volume_type_id` .
	VolumeTypeName interface{}
}
