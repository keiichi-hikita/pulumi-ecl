# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetSubnetResult:
    """
    A collection of values returned by getSubnet.
    """
    def __init__(__self__, allocation_pools=None, cidr=None, description=None, dns_nameservers=None, enable_dhcp=None, gateway_ip=None, host_routes=None, ip_version=None, ipv6_address_mode=None, ipv6_ra_mode=None, name=None, network_id=None, ntp_servers=None, region=None, status=None, subnet_id=None, tags=None, tenant_id=None, id=None):
        if allocation_pools and not isinstance(allocation_pools, list):
            raise TypeError("Expected argument 'allocation_pools' to be a list")
        __self__.allocation_pools = allocation_pools
        """
        An array of sub-ranges of CIDR available for dynamic allocation to ports.
        """
        if cidr and not isinstance(cidr, str):
            raise TypeError("Expected argument 'cidr' to be a str")
        __self__.cidr = cidr
        """
        See Argument Reference above.
        """
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        __self__.description = description
        """
        See Argument Reference above.
        """
        if dns_nameservers and not isinstance(dns_nameservers, list):
            raise TypeError("Expected argument 'dns_nameservers' to be a list")
        __self__.dns_nameservers = dns_nameservers
        """
        List of subnet dns name servers.
        """
        if enable_dhcp and not isinstance(enable_dhcp, bool):
            raise TypeError("Expected argument 'enable_dhcp' to be a bool")
        __self__.enable_dhcp = enable_dhcp
        """
        The administrative state of the network.
        """
        if gateway_ip and not isinstance(gateway_ip, str):
            raise TypeError("Expected argument 'gateway_ip' to be a str")
        __self__.gateway_ip = gateway_ip
        """
        See Argument Reference above.
        """
        if host_routes and not isinstance(host_routes, list):
            raise TypeError("Expected argument 'host_routes' to be a list")
        __self__.host_routes = host_routes
        """
        An array of routes that should be used by devices with IPs from this subnet
        """
        if ip_version and not isinstance(ip_version, float):
            raise TypeError("Expected argument 'ip_version' to be a float")
        __self__.ip_version = ip_version
        """
        IP version.
        In Enterprise Cloud service this parameter is fixed as 4.
        """
        if ipv6_address_mode and not isinstance(ipv6_address_mode, str):
            raise TypeError("Expected argument 'ipv6_address_mode' to be a str")
        __self__.ipv6_address_mode = ipv6_address_mode
        """
        Address mode for IPv6 (not supported).
        """
        if ipv6_ra_mode and not isinstance(ipv6_ra_mode, str):
            raise TypeError("Expected argument 'ipv6_ra_mode' to be a str")
        __self__.ipv6_ra_mode = ipv6_ra_mode
        """
        IPv6 router advertisement mode (not supported).
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        """
        See Argument Reference above.
        """
        if network_id and not isinstance(network_id, str):
            raise TypeError("Expected argument 'network_id' to be a str")
        __self__.network_id = network_id
        """
        See Argument Reference above.
        """
        if ntp_servers and not isinstance(ntp_servers, list):
            raise TypeError("Expected argument 'ntp_servers' to be a list")
        __self__.ntp_servers = ntp_servers
        """
        List of ntp servers.
        """
        if region and not isinstance(region, str):
            raise TypeError("Expected argument 'region' to be a str")
        __self__.region = region
        """
        See Argument Reference above.
        """
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        __self__.status = status
        """
        Hidden Subnet status.
        """
        if subnet_id and not isinstance(subnet_id, str):
            raise TypeError("Expected argument 'subnet_id' to be a str")
        __self__.subnet_id = subnet_id
        """
        See Argument Reference above.
        """
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        """
        Subnet tags.
        """
        if tenant_id and not isinstance(tenant_id, str):
            raise TypeError("Expected argument 'tenant_id' to be a str")
        __self__.tenant_id = tenant_id
        """
        The owner of the subnet. Required if admin wants to
        create a subnet for another tenant. Changing this creates a new subnet.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_subnet(cidr=None,description=None,gateway_ip=None,name=None,network_id=None,region=None,subnet_id=None,opts=None):
    """
    Use this data source to get the ID of an available Enterprise Cloud subnet.
    """
    __args__ = dict()

    __args__['cidr'] = cidr
    __args__['description'] = description
    __args__['gatewayIp'] = gateway_ip
    __args__['name'] = name
    __args__['networkId'] = network_id
    __args__['region'] = region
    __args__['subnetId'] = subnet_id
    __ret__ = await pulumi.runtime.invoke('ecl:network/getSubnet:getSubnet', __args__, opts=opts)

    return GetSubnetResult(
        allocation_pools=__ret__.get('allocationPools'),
        cidr=__ret__.get('cidr'),
        description=__ret__.get('description'),
        dns_nameservers=__ret__.get('dnsNameservers'),
        enable_dhcp=__ret__.get('enableDhcp'),
        gateway_ip=__ret__.get('gatewayIp'),
        host_routes=__ret__.get('hostRoutes'),
        ip_version=__ret__.get('ipVersion'),
        ipv6_address_mode=__ret__.get('ipv6AddressMode'),
        ipv6_ra_mode=__ret__.get('ipv6RaMode'),
        name=__ret__.get('name'),
        network_id=__ret__.get('networkId'),
        ntp_servers=__ret__.get('ntpServers'),
        region=__ret__.get('region'),
        status=__ret__.get('status'),
        subnet_id=__ret__.get('subnetId'),
        tags=__ret__.get('tags'),
        tenant_id=__ret__.get('tenantId'),
        id=__ret__.get('id'))