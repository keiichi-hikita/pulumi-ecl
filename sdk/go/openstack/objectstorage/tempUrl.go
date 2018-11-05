// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package objectstorage

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this resource to generate an OpenStack Object Storage temporary URL.
// 
// The temporary URL will be valid for as long as TTL is set to (in seconds).
// Once the URL has expired, it will no longer be valid, but the resource
// will remain in place. If you wish to automatically regenerate a URL, set
// the `regenerate` argument to `true`. This will create a new resource with
// a new ID and URL.
type TempUrl struct {
	s *pulumi.ResourceState
}

// NewTempUrl registers a new resource with the given unique name, arguments, and options.
func NewTempUrl(ctx *pulumi.Context,
	name string, args *TempUrlArgs, opts ...pulumi.ResourceOpt) (*TempUrl, error) {
	if args == nil || args.Container == nil {
		return nil, errors.New("missing required argument 'Container'")
	}
	if args == nil || args.Object == nil {
		return nil, errors.New("missing required argument 'Object'")
	}
	if args == nil || args.Ttl == nil {
		return nil, errors.New("missing required argument 'Ttl'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["container"] = nil
		inputs["method"] = nil
		inputs["object"] = nil
		inputs["regenerate"] = nil
		inputs["region"] = nil
		inputs["split"] = nil
		inputs["ttl"] = nil
	} else {
		inputs["container"] = args.Container
		inputs["method"] = args.Method
		inputs["object"] = args.Object
		inputs["regenerate"] = args.Regenerate
		inputs["region"] = args.Region
		inputs["split"] = args.Split
		inputs["ttl"] = args.Ttl
	}
	inputs["url"] = nil
	s, err := ctx.RegisterResource("openstack:objectstorage/tempUrl:TempUrl", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &TempUrl{s: s}, nil
}

// GetTempUrl gets an existing TempUrl resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTempUrl(ctx *pulumi.Context,
	name string, id pulumi.ID, state *TempUrlState, opts ...pulumi.ResourceOpt) (*TempUrl, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["container"] = state.Container
		inputs["method"] = state.Method
		inputs["object"] = state.Object
		inputs["regenerate"] = state.Regenerate
		inputs["region"] = state.Region
		inputs["split"] = state.Split
		inputs["ttl"] = state.Ttl
		inputs["url"] = state.Url
	}
	s, err := ctx.ReadResource("openstack:objectstorage/tempUrl:TempUrl", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &TempUrl{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *TempUrl) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *TempUrl) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The container name the object belongs to.
func (r *TempUrl) Container() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["container"])
}

// The method allowed when accessing this URL.
// Valid values are `GET`, and `POST`. Default is `GET`.
func (r *TempUrl) Method() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["method"])
}

// The object name the tempurl is for.
func (r *TempUrl) Object() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["object"])
}

// Whether to automatically regenerate the URL when
// it has expired. If set to true, this will create a new resource with a new
// ID and new URL. Defaults to false.
func (r *TempUrl) Regenerate() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["regenerate"])
}

// The region the tempurl is located in.
func (r *TempUrl) Region() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["region"])
}

func (r *TempUrl) Split() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["split"])
}

// The TTL, in seconds, for the URL. For how long it should
// be valid.
func (r *TempUrl) Ttl() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["ttl"])
}

// The URL
func (r *TempUrl) Url() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["url"])
}

// Input properties used for looking up and filtering TempUrl resources.
type TempUrlState struct {
	// The container name the object belongs to.
	Container interface{}
	// The method allowed when accessing this URL.
	// Valid values are `GET`, and `POST`. Default is `GET`.
	Method interface{}
	// The object name the tempurl is for.
	Object interface{}
	// Whether to automatically regenerate the URL when
	// it has expired. If set to true, this will create a new resource with a new
	// ID and new URL. Defaults to false.
	Regenerate interface{}
	// The region the tempurl is located in.
	Region interface{}
	Split interface{}
	// The TTL, in seconds, for the URL. For how long it should
	// be valid.
	Ttl interface{}
	// The URL
	Url interface{}
}

// The set of arguments for constructing a TempUrl resource.
type TempUrlArgs struct {
	// The container name the object belongs to.
	Container interface{}
	// The method allowed when accessing this URL.
	// Valid values are `GET`, and `POST`. Default is `GET`.
	Method interface{}
	// The object name the tempurl is for.
	Object interface{}
	// Whether to automatically regenerate the URL when
	// it has expired. If set to true, this will create a new resource with a new
	// ID and new URL. Defaults to false.
	Regenerate interface{}
	// The region the tempurl is located in.
	Region interface{}
	Split interface{}
	// The TTL, in seconds, for the URL. For how long it should
	// be valid.
	Ttl interface{}
}
