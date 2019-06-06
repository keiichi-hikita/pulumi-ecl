// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package ecl

import (
	"unicode"

	"github.com/hashicorp/terraform/helper/schema"
	"github.com/nttcom/terraform-provider-ecl/ecl"

	"github.com/pulumi/pulumi-terraform/pkg/tfbridge"
	"github.com/pulumi/pulumi/pkg/tokens"
)

// all of the Enterprise Cloud token components used below.
const (
	// packages:
	eclPkg = "ecl"
	// modules:
	computeMod = "compute" // Compute
	dnsMod     = "dns"     // DNS
	// identityMod      = "identity"      // Identity
	imagestoragesMod = "imagestorages" // Image Storages
	networkMod       = "network"       // Network
	// osMod            = "objectstorage" // Object Storage
	sssMod     = "sss"     // SSS
	storageMod = "storage" // Block Storage
)

func eclMember(mod string, mem string) tokens.ModuleMember {
	return tokens.ModuleMember(eclPkg + ":" + mod + ":" + mem)
}

func eclType(mod string, typ string) tokens.Type {
	return tokens.Type(eclMember(mod, typ))
}

func eclDataSource(mod string, res string) tokens.ModuleMember {
	fn := string(unicode.ToLower(rune(res[0]))) + res[1:]
	return eclMember(mod+"/"+fn, res)
}

func eclResource(mod string, res string) tokens.Type {
	fn := string(unicode.ToLower(rune(res[0]))) + res[1:]
	return eclType(mod+"/"+fn, res)
}

// Provider returns additional overlaid schema and metadata associated with the ecl package.
func Provider() tfbridge.ProviderInfo {
	p := ecl.Provider().(*schema.Provider)

	prov := tfbridge.ProviderInfo{
		P:           p,
		Name:        "ecl",
		GitHubOrg:   "nttcom",
		Description: "A Pulumi package for creating and managing Enterprise Cloud resources.",
		Keywords:    []string{"pulumi", "ecl"},
		Homepage:    "https://pulumi.io",
		License:     "Apache-2.0",
		Repository:  "https://github.com/keiichi-hikita/pulumi-ecl",
		Config: map[string]*tfbridge.SchemaInfo{
			"auth_url": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_AUTH_URL"},
				},
			},
			"region": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_REGION_NAME"},
				},
			},
			"user_name": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_USERNAME"},
				},
			},
			"user_id": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_USER_ID"},
				},
			},
			"tenant_id": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{
						"OS_TENANT_ID",
						"OS_PROJECT_ID",
					},
				},
			},
			"tenant_name": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{
						"OS_TENANT_NAME",
						"OS_PROJECT_NAME",
					},
				},
			},
			"password": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_PASSWORD"},
				},
			},
			"token": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{
						"OS_TOKEN",
						"OS_AUTH_TOKEN",
					},
				},
			},
			"user_domain_name": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_USER_DOMAIN_NAME"},
				},
			},
			"user_domain_id": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_USER_DOMAIN_ID"},
				},
			},
			"project_domain_name": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_PROJECT_DOMAIN_NAME"},
				},
			},
			"project_domain_id": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_PROJECT_DOMAIN_ID"},
				},
			},
			"domain_id": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_DOMAIN_ID"},
				},
			},
			"domain_name": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_DOMAIN_NAME"},
				},
			},
			"default_domain": {
				Default: &tfbridge.DefaultInfo{
					Value:   "default",
					EnvVars: []string{"OS_DEFAULT_DOMAIN"},
				},
			},
			"insecure": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_INSECURE"},
				},
			},
			"endpoint_type": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_ENDPOINT_TYPE"},
				},
			},
			"cacert_file": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_CACERT"},
				},
			},
			"cert": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_CERT"},
				},
			},
			"key": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_KEY"},
				},
			},
			// "swauth": {
			// 	Default: &tfbridge.DefaultInfo{
			// 		EnvVars: []string{"OS_SWAUTH"},
			// 	},
			// },
			// "use_octavia": {
			// 	Default: &tfbridge.DefaultInfo{
			// 		EnvVars: []string{"OS_USE_OCTAVIA"},
			// 	},
			// },
			"cloud": {
				Default: &tfbridge.DefaultInfo{
					EnvVars: []string{"OS_CLOUD"},
				},
			},
		},
		DataSources: map[string]*tfbridge.DataSourceInfo{
			// Compute
			"ecl_compute_flavor_v2":  {Tok: eclDataSource(computeMod, "getFlavor")},
			"ecl_compute_keypair_v2": {Tok: eclDataSource(computeMod, "getKeypair")},

			// DNS
			"ecl_dns_zone_v2": {Tok: eclDataSource(dnsMod, "getDnsZone")},

			// Images
			"ecl_imagestorages_image_v2": {Tok: eclDataSource(imagestoragesMod, "getImage")},

			// network
			"ecl_network_common_function_gateway_v2": {Tok: eclDataSource(networkMod, "getCommonFunctionGatway")},
			"ecl_network_gateway_interface_v2":       {Tok: eclDataSource(networkMod, "getGatewayInterface")},
			"ecl_network_internet_gateway_v2":        {Tok: eclDataSource(networkMod, "getInternetGateway")},
			"ecl_network_internet_service_v2":        {Tok: eclDataSource(networkMod, "getInternetService")},
			"ecl_network_network_v2":                 {Tok: eclDataSource(networkMod, "getNetwork")},
			"ecl_network_port_v2":                    {Tok: eclDataSource(networkMod, "getPort")},
			"ecl_network_public_ip_v2":               {Tok: eclDataSource(networkMod, "getPublicIP")},
			"ecl_network_static_route_v2":            {Tok: eclDataSource(networkMod, "getStaticRoute")},
			"ecl_network_subnet_v2":                  {Tok: eclDataSource(networkMod, "getSubnet")},

			// SSS
			"ecl_sss_tenant_v1": {Tok: eclDataSource(sssMod, "getTenant")},

			// Storage
			"ecl_storage_virtualstorage_v1": {Tok: eclDataSource(storageMod, "getVirtualStorage")},
			"ecl_storage_volume_v1":         {Tok: eclDataSource(storageMod, "getVolume")},
			"ecl_storage_volumetype_v1":     {Tok: eclDataSource(storageMod, "getVolumeType")},
		},
		Resources: map[string]*tfbridge.ResourceInfo{
			// Compute
			"ecl_compute_instance_v2":      {Tok: eclResource(computeMod, "Instance")},
			"ecl_compute_keypair_v2":       {Tok: eclResource(computeMod, "Keypair")},
			"ecl_compute_volume_attach_v2": {Tok: eclResource(computeMod, "VolumeAttach")},
			"ecl_compute_volume_v2":        {Tok: eclResource(computeMod, "Volume")},

			// DNS
			"ecl_dns_recordset_v2": {Tok: eclResource(dnsMod, "RecordSet")},
			"ecl_dns_zone_v2":      {Tok: eclResource(dnsMod, "Zone")},

			// Images
			"ecl_imagestorages_image_v2":           {Tok: eclResource(imagestoragesMod, "Image")},
			"ecl_imagestorages_member_accepter_v2": {Tok: eclResource(imagestoragesMod, "ImageMemberAccepter")},
			"ecl_imagestorages_member_v2":          {Tok: eclResource(imagestoragesMod, "ImageMember")},

			// Network
			"ecl_network_common_function_gateway_v2": {Tok: eclResource(networkMod, "CommonFunctionGateway")},
			"ecl_network_gateway_interface_v2":       {Tok: eclResource(networkMod, "GatewayInterface")},
			"ecl_network_internet_gateway_v2":        {Tok: eclResource(networkMod, "InternetGateway")},
			"ecl_network_network_v2":                 {Tok: eclResource(networkMod, "Network")},
			"ecl_network_port_v2":                    {Tok: eclResource(networkMod, "Port")},
			"ecl_network_public_ip_v2":               {Tok: eclResource(networkMod, "PublicIP")},
			"ecl_network_static_route_v2":            {Tok: eclResource(networkMod, "StaticRoute")},
			"ecl_network_subnet_v2":                  {Tok: eclResource(networkMod, "Subnet")},

			// SSS
			"ecl_sss_tenant_v1": {Tok: eclResource(sssMod, "Tenant")},
			"ecl_sss_user_v1":   {Tok: eclResource(sssMod, "User")},

			// Storage
			"ecl_storage_virtualstorage_v1": {Tok: eclResource(storageMod, "VirtualStorage")},
			"ecl_storage_volume_v1":         {Tok: eclResource(storageMod, "Volume")},
		},

		JavaScript: &tfbridge.JavaScriptInfo{
			DevDependencies: map[string]string{
				"@types/node": "^8.0.25", // so we can access strongly typed node definitions.
			},
			Dependencies: map[string]string{
				"@pulumi/pulumi": "^0.17.0",
			},
			Overlay: &tfbridge.OverlayInfo{
				Files:   []string{},
				Modules: map[string]*tfbridge.OverlayInfo{},
			},
		},
		Python: &tfbridge.PythonInfo{
			Requires: map[string]string{
				"pulumi": ">=0.17.0,<0.18.0",
			},
		},
	}

	// For all resources with name properties, we will add an auto-name property.  Make sure to skip those that
	// already have a name mapping entry, since those may have custom overrides set above (e.g., for length).
	const eclName = "name"
	for resname, res := range prov.Resources {
		if schema := p.ResourcesMap[resname]; schema != nil {
			// Only apply auto-name to input properties (Optional || Required) named `name`
			if tfs, has := schema.Schema[eclName]; has && (tfs.Optional || tfs.Required) {
				if _, hasfield := res.Fields[eclName]; !hasfield {
					if res.Fields == nil {
						res.Fields = make(map[string]*tfbridge.SchemaInfo)
					}
					// Use conservative options that apply broadly for Enterprise Cloud.
					res.Fields[eclName] = tfbridge.AutoName(eclName, 255)
				}
			}
		}
	}

	return prov
}
