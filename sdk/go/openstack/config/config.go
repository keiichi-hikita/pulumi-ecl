// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package config

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
	"github.com/pulumi/pulumi/sdk/go/pulumi/config"
)

// The Identity authentication URL.
func GetAuthUrl(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:authUrl")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_AUTH_URL").(string); ok {
		return dv
	}
	return v
}

// A Custom CA certificate.
func GetCacertFile(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:cacertFile")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_CACERT").(string); ok {
		return dv
	}
	return v
}

// A client certificate to authenticate with.
func GetCert(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:cert")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_CERT").(string); ok {
		return dv
	}
	return v
}

// An entry in a `clouds.yaml` file to use.
func GetCloud(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:cloud")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_CLOUD").(string); ok {
		return dv
	}
	return v
}

// The name of the Domain ID to scope to if no other domain is specified. Defaults to `default` (Identity v3).
func GetDefaultDomain(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:defaultDomain")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("default", nil, "OS_DEFAULT_DOMAIN").(string); ok {
		return dv
	}
	return v
}

// The ID of the Domain to scope to (Identity v3).
func GetDomainId(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:domainId")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_DOMAIN_ID").(string); ok {
		return dv
	}
	return v
}

// The name of the Domain to scope to (Identity v3).
func GetDomainName(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:domainName")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_DOMAIN_NAME").(string); ok {
		return dv
	}
	return v
}

func GetEndpointType(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:endpointType")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_ENDPOINT_TYPE").(string); ok {
		return dv
	}
	return v
}

// Trust self-signed certificates.
func GetInsecure(ctx *pulumi.Context) bool {
	v, err := config.TryBool(ctx, "openstack:insecure")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault(false, parseEnvBool, "OS_INSECURE").(bool); ok {
		return dv
	}
	return v
}

// A client private key to authenticate with.
func GetKey(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:key")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_KEY").(string); ok {
		return dv
	}
	return v
}

// Password to login with.
func GetPassword(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:password")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_PASSWORD").(string); ok {
		return dv
	}
	return v
}

// The ID of the domain where the proejct resides (Identity v3).
func GetProjectDomainId(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:projectDomainId")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_PROJECT_DOMAIN_ID").(string); ok {
		return dv
	}
	return v
}

// The name of the domain where the project resides (Identity v3).
func GetProjectDomainName(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:projectDomainName")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_PROJECT_DOMAIN_NAME").(string); ok {
		return dv
	}
	return v
}

// The OpenStack region to connect to.
func GetRegion(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:region")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_REGION_NAME").(string); ok {
		return dv
	}
	return v
}

// Use Swift's authentication system instead of Keystone. Only used for interaction with Swift.
func GetSwauth(ctx *pulumi.Context) bool {
	v, err := config.TryBool(ctx, "openstack:swauth")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault(false, parseEnvBool, "OS_SWAUTH").(bool); ok {
		return dv
	}
	return v
}

// The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.
func GetTenantId(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:tenantId")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_TENANT_ID", "OS_PROJECT_ID").(string); ok {
		return dv
	}
	return v
}

// The name of the Tenant (Identity v2) or Project (Identity v3) to login with.
func GetTenantName(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:tenantName")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_TENANT_NAME", "OS_PROJECT_NAME").(string); ok {
		return dv
	}
	return v
}

// Authentication token to use as an alternative to username/password.
func GetToken(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:token")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_TOKEN", "OS_AUTH_TOKEN").(string); ok {
		return dv
	}
	return v
}

// If set to `true`, API requests will go the Load Balancer service (Octavia) instead of the Networking service (Neutron).
func GetUseOctavia(ctx *pulumi.Context) bool {
	v, err := config.TryBool(ctx, "openstack:useOctavia")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault(false, parseEnvBool, "OS_USE_OCTAVIA").(bool); ok {
		return dv
	}
	return v
}

// The ID of the domain where the user resides (Identity v3).
func GetUserDomainId(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:userDomainId")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_USER_DOMAIN_ID").(string); ok {
		return dv
	}
	return v
}

// The name of the domain where the user resides (Identity v3).
func GetUserDomainName(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:userDomainName")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_USER_DOMAIN_NAME").(string); ok {
		return dv
	}
	return v
}

// Username to login with.
func GetUserId(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:userId")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_USER_ID").(string); ok {
		return dv
	}
	return v
}

// Username to login with.
func GetUserName(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "openstack:userName")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "OS_USERNAME").(string); ok {
		return dv
	}
	return v
}
