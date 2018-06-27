// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package identity

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to get the ID of an OpenStack project.
func LookupProject(ctx *pulumi.Context, args *GetProjectArgs) (*GetProjectResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["domainId"] = args.DomainId
		inputs["enabled"] = args.Enabled
		inputs["isDomain"] = args.IsDomain
		inputs["name"] = args.Name
		inputs["parentId"] = args.ParentId
		inputs["region"] = args.Region
	}
	outputs, err := ctx.Invoke("openstack:identity/getProject:getProject", inputs)
	if err != nil {
		return nil, err
	}
	return &GetProjectResult{
		Description: outputs["description"],
		DomainId: outputs["domainId"],
		Region: outputs["region"],
	}, nil
}

// A collection of arguments for invoking getProject.
type GetProjectArgs struct {
	// The domain this project belongs to.
	DomainId interface{}
	// Whether the project is enabled or disabled. Valid
	// values are `true` and `false`.
	Enabled interface{}
	// Whether this project is a domain. Valid values
	// are `true` and `false`.
	IsDomain interface{}
	// The name of the project.
	Name interface{}
	// The parent of this project.
	ParentId interface{}
	Region interface{}
}

// A collection of values returned by getProject.
type GetProjectResult struct {
	// The description of the project.
	Description interface{}
	// See Argument Reference above.
	DomainId interface{}
	// The region the project is located in.
	Region interface{}
}
