// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a V2 port resource within Enterprise Cloud.
// 
// ## Notes
// 
// ### Ports and Instances
// 
// There are some notes to consider when connecting Instances to networks using
// Ports.
// Please see Enterprise Cloud 2.0 Knowledge Center documents for further information.
type Port struct {
	s *pulumi.ResourceState
}

// NewPort registers a new resource with the given unique name, arguments, and options.
func NewPort(ctx *pulumi.Context,
	name string, args *PortArgs, opts ...pulumi.ResourceOpt) (*Port, error) {
	if args == nil || args.NetworkId == nil {
		return nil, errors.New("missing required argument 'NetworkId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["adminStateUp"] = nil
		inputs["allowedAddressPairs"] = nil
		inputs["description"] = nil
		inputs["deviceId"] = nil
		inputs["deviceOwner"] = nil
		inputs["fixedIps"] = nil
		inputs["macAddress"] = nil
		inputs["name"] = nil
		inputs["networkId"] = nil
		inputs["noFixedIp"] = nil
		inputs["region"] = nil
		inputs["segmentationId"] = nil
		inputs["segmentationType"] = nil
		inputs["tags"] = nil
		inputs["tenantId"] = nil
	} else {
		inputs["adminStateUp"] = args.AdminStateUp
		inputs["allowedAddressPairs"] = args.AllowedAddressPairs
		inputs["description"] = args.Description
		inputs["deviceId"] = args.DeviceId
		inputs["deviceOwner"] = args.DeviceOwner
		inputs["fixedIps"] = args.FixedIps
		inputs["macAddress"] = args.MacAddress
		inputs["name"] = args.Name
		inputs["networkId"] = args.NetworkId
		inputs["noFixedIp"] = args.NoFixedIp
		inputs["region"] = args.Region
		inputs["segmentationId"] = args.SegmentationId
		inputs["segmentationType"] = args.SegmentationType
		inputs["tags"] = args.Tags
		inputs["tenantId"] = args.TenantId
	}
	inputs["allFixedIps"] = nil
	inputs["managedByService"] = nil
	inputs["status"] = nil
	s, err := ctx.RegisterResource("ecl:network/port:Port", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Port{s: s}, nil
}

// GetPort gets an existing Port resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPort(ctx *pulumi.Context,
	name string, id pulumi.ID, state *PortState, opts ...pulumi.ResourceOpt) (*Port, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["adminStateUp"] = state.AdminStateUp
		inputs["allFixedIps"] = state.AllFixedIps
		inputs["allowedAddressPairs"] = state.AllowedAddressPairs
		inputs["description"] = state.Description
		inputs["deviceId"] = state.DeviceId
		inputs["deviceOwner"] = state.DeviceOwner
		inputs["fixedIps"] = state.FixedIps
		inputs["macAddress"] = state.MacAddress
		inputs["managedByService"] = state.ManagedByService
		inputs["name"] = state.Name
		inputs["networkId"] = state.NetworkId
		inputs["noFixedIp"] = state.NoFixedIp
		inputs["region"] = state.Region
		inputs["segmentationId"] = state.SegmentationId
		inputs["segmentationType"] = state.SegmentationType
		inputs["status"] = state.Status
		inputs["tags"] = state.Tags
		inputs["tenantId"] = state.TenantId
	}
	s, err := ctx.ReadResource("ecl:network/port:Port", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Port{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Port) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Port) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Administrative up/down status for the port
// (must be "true" or "false" if provided). Changing this updates the
// `admin_state_up` of an existing port.
func (r *Port) AdminStateUp() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["adminStateUp"])
}

// The collection of Fixed IP addresses on the port in the
// order returned by the Network v2 API.
func (r *Port) AllFixedIps() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["allFixedIps"])
}

// An IP/MAC Address pair of additional IP
// addresses that can be active on this port. The structure is described
// below.
func (r *Port) AllowedAddressPairs() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["allowedAddressPairs"])
}

// Port description.
func (r *Port) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

// The ID of the device attached to the port. Changing this
// creates a new port.
func (r *Port) DeviceId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["deviceId"])
}

// The device owner of the Port.
// Changing this creates a new port.
func (r *Port) DeviceOwner() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["deviceOwner"])
}

// An array of desired IPs for
// this port. The structure is described below.
func (r *Port) FixedIps() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["fixedIps"])
}

// Specify a specific MAC address for the port. Changing
// this creates a new port.
func (r *Port) MacAddress() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["macAddress"])
}

func (r *Port) ManagedByService() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["managedByService"])
}

// A unique name for the port. Changing this
// updates the `name` of an existing port.
func (r *Port) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The ID of the network to attach the port to.
// Changing this creates a new port.
func (r *Port) NetworkId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["networkId"])
}

// Create a port with no fixed
// IP address. This will also remove any fixed IPs previously set on a port. `true`
// is the only valid value for this argument.
func (r *Port) NoFixedIp() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["noFixedIp"])
}

// The region in which to obtain the V2 network client.
// A network client is needed to create a port. If omitted, the
// `region` argument of the provider is used.
// Changing this creates a new port.
func (r *Port) Region() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["region"])
}

// The segmentation ID used for this port.
// User can specify this value only in case segmentation type is "vlan".
func (r *Port) SegmentationId() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["segmentationId"])
}

// The segmentation type used for this port.
// User can use "vlan" of "flat" as this argument
func (r *Port) SegmentationType() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["segmentationType"])
}

// Status for the Port.
func (r *Port) Status() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["status"])
}

// Port tags.
func (r *Port) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// The owner of the Port. Required if admin wants
// to create a port for another tenant. Changing this creates a new port.
func (r *Port) TenantId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["tenantId"])
}

// Input properties used for looking up and filtering Port resources.
type PortState struct {
	// Administrative up/down status for the port
	// (must be "true" or "false" if provided). Changing this updates the
	// `admin_state_up` of an existing port.
	AdminStateUp interface{}
	// The collection of Fixed IP addresses on the port in the
	// order returned by the Network v2 API.
	AllFixedIps interface{}
	// An IP/MAC Address pair of additional IP
	// addresses that can be active on this port. The structure is described
	// below.
	AllowedAddressPairs interface{}
	// Port description.
	Description interface{}
	// The ID of the device attached to the port. Changing this
	// creates a new port.
	DeviceId interface{}
	// The device owner of the Port.
	// Changing this creates a new port.
	DeviceOwner interface{}
	// An array of desired IPs for
	// this port. The structure is described below.
	FixedIps interface{}
	// Specify a specific MAC address for the port. Changing
	// this creates a new port.
	MacAddress interface{}
	ManagedByService interface{}
	// A unique name for the port. Changing this
	// updates the `name` of an existing port.
	Name interface{}
	// The ID of the network to attach the port to.
	// Changing this creates a new port.
	NetworkId interface{}
	// Create a port with no fixed
	// IP address. This will also remove any fixed IPs previously set on a port. `true`
	// is the only valid value for this argument.
	NoFixedIp interface{}
	// The region in which to obtain the V2 network client.
	// A network client is needed to create a port. If omitted, the
	// `region` argument of the provider is used.
	// Changing this creates a new port.
	Region interface{}
	// The segmentation ID used for this port.
	// User can specify this value only in case segmentation type is "vlan".
	SegmentationId interface{}
	// The segmentation type used for this port.
	// User can use "vlan" of "flat" as this argument
	SegmentationType interface{}
	// Status for the Port.
	Status interface{}
	// Port tags.
	Tags interface{}
	// The owner of the Port. Required if admin wants
	// to create a port for another tenant. Changing this creates a new port.
	TenantId interface{}
}

// The set of arguments for constructing a Port resource.
type PortArgs struct {
	// Administrative up/down status for the port
	// (must be "true" or "false" if provided). Changing this updates the
	// `admin_state_up` of an existing port.
	AdminStateUp interface{}
	// An IP/MAC Address pair of additional IP
	// addresses that can be active on this port. The structure is described
	// below.
	AllowedAddressPairs interface{}
	// Port description.
	Description interface{}
	// The ID of the device attached to the port. Changing this
	// creates a new port.
	DeviceId interface{}
	// The device owner of the Port.
	// Changing this creates a new port.
	DeviceOwner interface{}
	// An array of desired IPs for
	// this port. The structure is described below.
	FixedIps interface{}
	// Specify a specific MAC address for the port. Changing
	// this creates a new port.
	MacAddress interface{}
	// A unique name for the port. Changing this
	// updates the `name` of an existing port.
	Name interface{}
	// The ID of the network to attach the port to.
	// Changing this creates a new port.
	NetworkId interface{}
	// Create a port with no fixed
	// IP address. This will also remove any fixed IPs previously set on a port. `true`
	// is the only valid value for this argument.
	NoFixedIp interface{}
	// The region in which to obtain the V2 network client.
	// A network client is needed to create a port. If omitted, the
	// `region` argument of the provider is used.
	// Changing this creates a new port.
	Region interface{}
	// The segmentation ID used for this port.
	// User can specify this value only in case segmentation type is "vlan".
	SegmentationId interface{}
	// The segmentation type used for this port.
	// User can use "vlan" of "flat" as this argument
	SegmentationType interface{}
	// Port tags.
	Tags interface{}
	// The owner of the Port. Required if admin wants
	// to create a port for another tenant. Changing this creates a new port.
	TenantId interface{}
}
