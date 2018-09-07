# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class GetSubnetResult(object):
    """
    A collection of values returned by getSubnet.
    """
    def __init__(__self__, allocation_pools=None, cidr=None, dns_nameservers=None, enable_dhcp=None, gateway_ip=None, host_routes=None, ip_version=None, ipv6_address_mode=None, ipv6_ra_mode=None, name=None, network_id=None, region=None, subnet_id=None, subnetpool_id=None, tenant_id=None, id=None):
        if allocation_pools and not isinstance(allocation_pools, list):
            raise TypeError('Expected argument allocation_pools to be a list')
        __self__.allocation_pools = allocation_pools
        """
        Allocation pools of the subnet.
        """
        if cidr and not isinstance(cidr, basestring):
            raise TypeError('Expected argument cidr to be a basestring')
        __self__.cidr = cidr
        if dns_nameservers and not isinstance(dns_nameservers, list):
            raise TypeError('Expected argument dns_nameservers to be a list')
        __self__.dns_nameservers = dns_nameservers
        """
        DNS Nameservers of the subnet.
        """
        if enable_dhcp and not isinstance(enable_dhcp, bool):
            raise TypeError('Expected argument enable_dhcp to be a bool')
        __self__.enable_dhcp = enable_dhcp
        """
        Whether the subnet has DHCP enabled or not.
        """
        if gateway_ip and not isinstance(gateway_ip, basestring):
            raise TypeError('Expected argument gateway_ip to be a basestring')
        __self__.gateway_ip = gateway_ip
        if host_routes and not isinstance(host_routes, list):
            raise TypeError('Expected argument host_routes to be a list')
        __self__.host_routes = host_routes
        """
        Host Routes of the subnet.
        """
        if ip_version and not isinstance(ip_version, int):
            raise TypeError('Expected argument ip_version to be a int')
        __self__.ip_version = ip_version
        if ipv6_address_mode and not isinstance(ipv6_address_mode, basestring):
            raise TypeError('Expected argument ipv6_address_mode to be a basestring')
        __self__.ipv6_address_mode = ipv6_address_mode
        if ipv6_ra_mode and not isinstance(ipv6_ra_mode, basestring):
            raise TypeError('Expected argument ipv6_ra_mode to be a basestring')
        __self__.ipv6_ra_mode = ipv6_ra_mode
        if name and not isinstance(name, basestring):
            raise TypeError('Expected argument name to be a basestring')
        __self__.name = name
        if network_id and not isinstance(network_id, basestring):
            raise TypeError('Expected argument network_id to be a basestring')
        __self__.network_id = network_id
        if region and not isinstance(region, basestring):
            raise TypeError('Expected argument region to be a basestring')
        __self__.region = region
        """
        See Argument Reference above.
        """
        if subnet_id and not isinstance(subnet_id, basestring):
            raise TypeError('Expected argument subnet_id to be a basestring')
        __self__.subnet_id = subnet_id
        if subnetpool_id and not isinstance(subnetpool_id, basestring):
            raise TypeError('Expected argument subnetpool_id to be a basestring')
        __self__.subnetpool_id = subnetpool_id
        if tenant_id and not isinstance(tenant_id, basestring):
            raise TypeError('Expected argument tenant_id to be a basestring')
        __self__.tenant_id = tenant_id
        if id and not isinstance(id, basestring):
            raise TypeError('Expected argument id to be a basestring')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

def get_subnet(cidr=None, dhcp_disabled=None, dhcp_enabled=None, gateway_ip=None, ip_version=None, ipv6_address_mode=None, ipv6_ra_mode=None, name=None, network_id=None, region=None, subnet_id=None, subnetpool_id=None, tenant_id=None):
    """
    Use this data source to get the ID of an available OpenStack subnet.
    """
    __args__ = dict()

    __args__['cidr'] = cidr
    __args__['dhcpDisabled'] = dhcp_disabled
    __args__['dhcpEnabled'] = dhcp_enabled
    __args__['gatewayIp'] = gateway_ip
    __args__['ipVersion'] = ip_version
    __args__['ipv6AddressMode'] = ipv6_address_mode
    __args__['ipv6RaMode'] = ipv6_ra_mode
    __args__['name'] = name
    __args__['networkId'] = network_id
    __args__['region'] = region
    __args__['subnetId'] = subnet_id
    __args__['subnetpoolId'] = subnetpool_id
    __args__['tenantId'] = tenant_id
    __ret__ = pulumi.runtime.invoke('openstack:networking/getSubnet:getSubnet', __args__)

    return GetSubnetResult(
        allocation_pools=__ret__.get('allocationPools'),
        cidr=__ret__.get('cidr'),
        dns_nameservers=__ret__.get('dnsNameservers'),
        enable_dhcp=__ret__.get('enableDhcp'),
        gateway_ip=__ret__.get('gatewayIp'),
        host_routes=__ret__.get('hostRoutes'),
        ip_version=__ret__.get('ipVersion'),
        ipv6_address_mode=__ret__.get('ipv6AddressMode'),
        ipv6_ra_mode=__ret__.get('ipv6RaMode'),
        name=__ret__.get('name'),
        network_id=__ret__.get('networkId'),
        region=__ret__.get('region'),
        subnet_id=__ret__.get('subnetId'),
        subnetpool_id=__ret__.get('subnetpoolId'),
        tenant_id=__ret__.get('tenantId'),
        id=__ret__.get('id'))
