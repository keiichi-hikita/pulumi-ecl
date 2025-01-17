// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package compute

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a V2 keypair resource within Enterprise Cloud.
// 
// > **Important Security Notice** The private key generated by this resource will
// be stored *unencrypted* in your Terraform state file. **Use of this resource
// for production deployments is *not* recommended**. Instead, generate
// a private key file outside of Terraform and distribute it securely
// to the system where Terraform will be run.
type Keypair struct {
	s *pulumi.ResourceState
}

// NewKeypair registers a new resource with the given unique name, arguments, and options.
func NewKeypair(ctx *pulumi.Context,
	name string, args *KeypairArgs, opts ...pulumi.ResourceOpt) (*Keypair, error) {
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["name"] = nil
		inputs["publicKey"] = nil
		inputs["region"] = nil
	} else {
		inputs["name"] = args.Name
		inputs["publicKey"] = args.PublicKey
		inputs["region"] = args.Region
	}
	inputs["fingerprint"] = nil
	inputs["privateKey"] = nil
	s, err := ctx.RegisterResource("ecl:compute/keypair:Keypair", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Keypair{s: s}, nil
}

// GetKeypair gets an existing Keypair resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetKeypair(ctx *pulumi.Context,
	name string, id pulumi.ID, state *KeypairState, opts ...pulumi.ResourceOpt) (*Keypair, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["fingerprint"] = state.Fingerprint
		inputs["name"] = state.Name
		inputs["privateKey"] = state.PrivateKey
		inputs["publicKey"] = state.PublicKey
		inputs["region"] = state.Region
	}
	s, err := ctx.ReadResource("ecl:compute/keypair:Keypair", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Keypair{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Keypair) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Keypair) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The fingerprint of the public key.
func (r *Keypair) Fingerprint() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["fingerprint"])
}

// A unique name for the keypair. Changing this creates a new
// keypair.
func (r *Keypair) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The generated private key when no public key is specified.
func (r *Keypair) PrivateKey() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["privateKey"])
}

// A pre-generated OpenSSH-formatted public key.
// Changing this creates a new keypair. If a public key is not specified, then
// a public/private key pair will be automatically generated. If a pair is
// created, then destroying this resource means you will lose access to that
// keypair forever.
func (r *Keypair) PublicKey() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["publicKey"])
}

// The region in which to obtain the V2 Compute client.
// Keypairs are associated with accounts, but a Compute client is needed to
// create one. If omitted, the `region` argument of the provider is used.
// Changing this creates a new keypair.
func (r *Keypair) Region() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["region"])
}

// Input properties used for looking up and filtering Keypair resources.
type KeypairState struct {
	// The fingerprint of the public key.
	Fingerprint interface{}
	// A unique name for the keypair. Changing this creates a new
	// keypair.
	Name interface{}
	// The generated private key when no public key is specified.
	PrivateKey interface{}
	// A pre-generated OpenSSH-formatted public key.
	// Changing this creates a new keypair. If a public key is not specified, then
	// a public/private key pair will be automatically generated. If a pair is
	// created, then destroying this resource means you will lose access to that
	// keypair forever.
	PublicKey interface{}
	// The region in which to obtain the V2 Compute client.
	// Keypairs are associated with accounts, but a Compute client is needed to
	// create one. If omitted, the `region` argument of the provider is used.
	// Changing this creates a new keypair.
	Region interface{}
}

// The set of arguments for constructing a Keypair resource.
type KeypairArgs struct {
	// A unique name for the keypair. Changing this creates a new
	// keypair.
	Name interface{}
	// A pre-generated OpenSSH-formatted public key.
	// Changing this creates a new keypair. If a public key is not specified, then
	// a public/private key pair will be automatically generated. If a pair is
	// created, then destroying this resource means you will lose access to that
	// keypair forever.
	PublicKey interface{}
	// The region in which to obtain the V2 Compute client.
	// Keypairs are associated with accounts, but a Compute client is needed to
	// create one. If omitted, the `region` argument of the provider is used.
	// Changing this creates a new keypair.
	Region interface{}
}
