# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

_SNAKE_TO_CAMEL_CASE_TABLE = {
    "access_ip_v4": "accessIpV4",
    "admin_state_up": "adminStateUp",
    "all_fixed_ips": "allFixedIps",
    "all_metadata": "allMetadata",
    "allocation_pools": "allocationPools",
    "allowed_address_pairs": "allowedAddressPairs",
    "auth_url": "authUrl",
    "availability_zone": "availabilityZone",
    "aws_gw_id": "awsGwId",
    "azure_gw_id": "azureGwId",
    "block_devices": "blockDevices",
    "cacert_file": "cacertFile",
    "common_function_pool_id": "commonFunctionPoolId",
    "container_format": "containerFormat",
    "contract_id": "contractId",
    "created_at": "createdAt",
    "default_domain": "defaultDomain",
    "device_id": "deviceId",
    "device_owner": "deviceOwner",
    "disk_format": "diskFormat",
    "dns_nameservers": "dnsNameservers",
    "domain_id": "domainId",
    "domain_name": "domainName",
    "enable_dhcp": "enableDhcp",
    "endpoint_type": "endpointType",
    "error_message": "errorMessage",
    "fixed_ips": "fixedIps",
    "flavor_id": "flavorId",
    "flavor_name": "flavorName",
    "force_sss_endpoint": "forceSssEndpoint",
    "gateway_ip": "gatewayIp",
    "gcp_gw_id": "gcpGwId",
    "gw_vipv4": "gwVipv4",
    "gw_vipv6": "gwVipv6",
    "host_routes": "hostRoutes",
    "image_id": "imageId",
    "image_member_id": "imageMemberId",
    "image_name": "imageName",
    "initiator_iqns": "initiatorIqns",
    "interdc_gw_id": "interdcGwId",
    "internet_gw_id": "internetGwId",
    "internet_service_id": "internetServiceId",
    "iops_per_gb": "iopsPerGb",
    "ip_addr_pool": "ipAddrPool",
    "ip_version": "ipVersion",
    "ipv6_address_mode": "ipv6AddressMode",
    "ipv6_ra_mode": "ipv6RaMode",
    "key_pair": "keyPair",
    "license_switch": "licenseSwitch",
    "local_file_path": "localFilePath",
    "mac_address": "macAddress",
    "member_id": "memberId",
    "min_disk_gb": "minDiskGb",
    "min_ram_mb": "minRamMb",
    "network_id": "networkId",
    "no_fixed_ip": "noFixedIp",
    "no_gateway": "noGateway",
    "ntp_servers": "ntpServers",
    "power_state": "powerState",
    "primary_ipv4": "primaryIpv4",
    "primary_ipv6": "primaryIpv6",
    "private_key": "privateKey",
    "project_domain_id": "projectDomainId",
    "project_domain_name": "projectDomainName",
    "public_key": "publicKey",
    "qos_option_id": "qosOptionId",
    "secondary_ipv4": "secondaryIpv4",
    "secondary_ipv6": "secondaryIpv6",
    "segmentation_id": "segmentationId",
    "segmentation_type": "segmentationType",
    "server_id": "serverId",
    "service_type": "serviceType",
    "size_bytes": "sizeBytes",
    "source_replica": "sourceReplica",
    "start_time": "startTime",
    "stop_before_destroy": "stopBeforeDestroy",
    "submask_length": "submaskLength",
    "subnet_id": "subnetId",
    "tenant_id": "tenantId",
    "tenant_name": "tenantName",
    "tenant_region": "tenantRegion",
    "update_at": "updateAt",
    "updated_at": "updatedAt",
    "user_data": "userData",
    "user_domain_id": "userDomainId",
    "user_domain_name": "userDomainName",
    "user_id": "userId",
    "user_name": "userName",
    "value_specs": "valueSpecs",
    "verify_checksum": "verifyChecksum",
    "virtual_storage_id": "virtualStorageId",
    "volume_id": "volumeId",
    "volume_type": "volumeType",
    "volume_type_id": "volumeTypeId",
    "volume_type_name": "volumeTypeName",
    "vpn_gw_id": "vpnGwId",
    "zone_id": "zoneId",
}

_CAMEL_TO_SNAKE_CASE_TABLE = {
    "accessIpV4": "access_ip_v4",
    "adminStateUp": "admin_state_up",
    "allFixedIps": "all_fixed_ips",
    "allMetadata": "all_metadata",
    "allocationPools": "allocation_pools",
    "allowedAddressPairs": "allowed_address_pairs",
    "authUrl": "auth_url",
    "availabilityZone": "availability_zone",
    "awsGwId": "aws_gw_id",
    "azureGwId": "azure_gw_id",
    "blockDevices": "block_devices",
    "cacertFile": "cacert_file",
    "commonFunctionPoolId": "common_function_pool_id",
    "containerFormat": "container_format",
    "contractId": "contract_id",
    "createdAt": "created_at",
    "defaultDomain": "default_domain",
    "deviceId": "device_id",
    "deviceOwner": "device_owner",
    "diskFormat": "disk_format",
    "dnsNameservers": "dns_nameservers",
    "domainId": "domain_id",
    "domainName": "domain_name",
    "enableDhcp": "enable_dhcp",
    "endpointType": "endpoint_type",
    "errorMessage": "error_message",
    "fixedIps": "fixed_ips",
    "flavorId": "flavor_id",
    "flavorName": "flavor_name",
    "forceSssEndpoint": "force_sss_endpoint",
    "gatewayIp": "gateway_ip",
    "gcpGwId": "gcp_gw_id",
    "gwVipv4": "gw_vipv4",
    "gwVipv6": "gw_vipv6",
    "hostRoutes": "host_routes",
    "imageId": "image_id",
    "imageMemberId": "image_member_id",
    "imageName": "image_name",
    "initiatorIqns": "initiator_iqns",
    "interdcGwId": "interdc_gw_id",
    "internetGwId": "internet_gw_id",
    "internetServiceId": "internet_service_id",
    "iopsPerGb": "iops_per_gb",
    "ipAddrPool": "ip_addr_pool",
    "ipVersion": "ip_version",
    "ipv6AddressMode": "ipv6_address_mode",
    "ipv6RaMode": "ipv6_ra_mode",
    "keyPair": "key_pair",
    "licenseSwitch": "license_switch",
    "localFilePath": "local_file_path",
    "macAddress": "mac_address",
    "memberId": "member_id",
    "minDiskGb": "min_disk_gb",
    "minRamMb": "min_ram_mb",
    "networkId": "network_id",
    "noFixedIp": "no_fixed_ip",
    "noGateway": "no_gateway",
    "ntpServers": "ntp_servers",
    "powerState": "power_state",
    "primaryIpv4": "primary_ipv4",
    "primaryIpv6": "primary_ipv6",
    "privateKey": "private_key",
    "projectDomainId": "project_domain_id",
    "projectDomainName": "project_domain_name",
    "publicKey": "public_key",
    "qosOptionId": "qos_option_id",
    "secondaryIpv4": "secondary_ipv4",
    "secondaryIpv6": "secondary_ipv6",
    "segmentationId": "segmentation_id",
    "segmentationType": "segmentation_type",
    "serverId": "server_id",
    "serviceType": "service_type",
    "sizeBytes": "size_bytes",
    "sourceReplica": "source_replica",
    "startTime": "start_time",
    "stopBeforeDestroy": "stop_before_destroy",
    "submaskLength": "submask_length",
    "subnetId": "subnet_id",
    "tenantId": "tenant_id",
    "tenantName": "tenant_name",
    "tenantRegion": "tenant_region",
    "updateAt": "update_at",
    "updatedAt": "updated_at",
    "userData": "user_data",
    "userDomainId": "user_domain_id",
    "userDomainName": "user_domain_name",
    "userId": "user_id",
    "userName": "user_name",
    "valueSpecs": "value_specs",
    "verifyChecksum": "verify_checksum",
    "virtualStorageId": "virtual_storage_id",
    "volumeId": "volume_id",
    "volumeType": "volume_type",
    "volumeTypeId": "volume_type_id",
    "volumeTypeName": "volume_type_name",
    "vpnGwId": "vpn_gw_id",
    "zoneId": "zone_id",
}