// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package database

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a V1 DB database resource within OpenStack.
type Database struct {
	s *pulumi.ResourceState
}

// NewDatabase registers a new resource with the given unique name, arguments, and options.
func NewDatabase(ctx *pulumi.Context,
	name string, args *DatabaseArgs, opts ...pulumi.ResourceOpt) (*Database, error) {
	if args == nil || args.InstanceId == nil {
		return nil, errors.New("missing required argument 'InstanceId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["instanceId"] = nil
		inputs["name"] = nil
		inputs["region"] = nil
	} else {
		inputs["instanceId"] = args.InstanceId
		inputs["name"] = args.Name
		inputs["region"] = args.Region
	}
	s, err := ctx.RegisterResource("openstack:database/database:Database", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Database{s: s}, nil
}

// GetDatabase gets an existing Database resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDatabase(ctx *pulumi.Context,
	name string, id pulumi.ID, state *DatabaseState, opts ...pulumi.ResourceOpt) (*Database, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["instanceId"] = state.InstanceId
		inputs["name"] = state.Name
		inputs["region"] = state.Region
	}
	s, err := ctx.ReadResource("openstack:database/database:Database", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Database{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Database) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Database) ID() *pulumi.IDOutput {
	return r.s.ID
}

// The ID for the database instance.
func (r *Database) InstanceId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["instanceId"])
}

// A unique name for the resource.
func (r *Database) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Openstack region resource is created in.
func (r *Database) Region() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["region"])
}

// Input properties used for looking up and filtering Database resources.
type DatabaseState struct {
	// The ID for the database instance.
	InstanceId interface{}
	// A unique name for the resource.
	Name interface{}
	// Openstack region resource is created in.
	Region interface{}
}

// The set of arguments for constructing a Database resource.
type DatabaseArgs struct {
	// The ID for the database instance.
	InstanceId interface{}
	// A unique name for the resource.
	Name interface{}
	// Openstack region resource is created in.
	Region interface{}
}
