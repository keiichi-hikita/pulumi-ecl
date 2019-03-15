# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetGatewayInterfaceResult(object):
    """
    A collection of values returned by getGatewayInterface.
    """
    def __init__(__self__, aws_gw_id=None, azure_gw_id=None, description=None, gateway_interface_id=None, gcp_gw_id=None, gw_vipv4=None, gw_vipv6=None, interdc_gw_id=None, internet_gw_id=None, name=None, netmask=None, network_id=None, primary_ipv4=None, primary_ipv6=None, region=None, secondary_ipv4=None, secondary_ipv6=None, service_type=None, tenant_id=None, vpn_gw_id=None, vrid=None, id=None):
        if aws_gw_id and not isinstance(aws_gw_id, str):
            raise TypeError('Expected argument aws_gw_id to be a str')
        __self__.aws_gw_id = aws_gw_id
        if azure_gw_id and not isinstance(azure_gw_id, str):
            raise TypeError('Expected argument azure_gw_id to be a str')
        __self__.azure_gw_id = azure_gw_id
        if description and not isinstance(description, str):
            raise TypeError('Expected argument description to be a str')
        __self__.description = description
        if gateway_interface_id and not isinstance(gateway_interface_id, str):
            raise TypeError('Expected argument gateway_interface_id to be a str')
        __self__.gateway_interface_id = gateway_interface_id
        if gcp_gw_id and not isinstance(gcp_gw_id, str):
            raise TypeError('Expected argument gcp_gw_id to be a str')
        __self__.gcp_gw_id = gcp_gw_id
        if gw_vipv4 and not isinstance(gw_vipv4, str):
            raise TypeError('Expected argument gw_vipv4 to be a str')
        __self__.gw_vipv4 = gw_vipv4
        if gw_vipv6 and not isinstance(gw_vipv6, str):
            raise TypeError('Expected argument gw_vipv6 to be a str')
        __self__.gw_vipv6 = gw_vipv6
        if interdc_gw_id and not isinstance(interdc_gw_id, str):
            raise TypeError('Expected argument interdc_gw_id to be a str')
        __self__.interdc_gw_id = interdc_gw_id
        if internet_gw_id and not isinstance(internet_gw_id, str):
            raise TypeError('Expected argument internet_gw_id to be a str')
        __self__.internet_gw_id = internet_gw_id
        if name and not isinstance(name, str):
            raise TypeError('Expected argument name to be a str')
        __self__.name = name
        if netmask and not isinstance(netmask, int):
            raise TypeError('Expected argument netmask to be a int')
        __self__.netmask = netmask
        if network_id and not isinstance(network_id, str):
            raise TypeError('Expected argument network_id to be a str')
        __self__.network_id = network_id
        if primary_ipv4 and not isinstance(primary_ipv4, str):
            raise TypeError('Expected argument primary_ipv4 to be a str')
        __self__.primary_ipv4 = primary_ipv4
        if primary_ipv6 and not isinstance(primary_ipv6, str):
            raise TypeError('Expected argument primary_ipv6 to be a str')
        __self__.primary_ipv6 = primary_ipv6
        if region and not isinstance(region, str):
            raise TypeError('Expected argument region to be a str')
        __self__.region = region
        if secondary_ipv4 and not isinstance(secondary_ipv4, str):
            raise TypeError('Expected argument secondary_ipv4 to be a str')
        __self__.secondary_ipv4 = secondary_ipv4
        if secondary_ipv6 and not isinstance(secondary_ipv6, str):
            raise TypeError('Expected argument secondary_ipv6 to be a str')
        __self__.secondary_ipv6 = secondary_ipv6
        if service_type and not isinstance(service_type, str):
            raise TypeError('Expected argument service_type to be a str')
        __self__.service_type = service_type
        if tenant_id and not isinstance(tenant_id, str):
            raise TypeError('Expected argument tenant_id to be a str')
        __self__.tenant_id = tenant_id
        if vpn_gw_id and not isinstance(vpn_gw_id, str):
            raise TypeError('Expected argument vpn_gw_id to be a str')
        __self__.vpn_gw_id = vpn_gw_id
        if vrid and not isinstance(vrid, int):
            raise TypeError('Expected argument vrid to be a int')
        __self__.vrid = vrid
        if id and not isinstance(id, str):
            raise TypeError('Expected argument id to be a str')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_gateway_interface(aws_gw_id=None, azure_gw_id=None, description=None, gateway_interface_id=None, gcp_gw_id=None, gw_vipv4=None, gw_vipv6=None, interdc_gw_id=None, internet_gw_id=None, name=None, netmask=None, network_id=None, primary_ipv4=None, primary_ipv6=None, region=None, secondary_ipv4=None, secondary_ipv6=None, service_type=None, status=None, tenant_id=None, vpn_gw_id=None, vrid=None):
    __args__ = dict()

    __args__['awsGwId'] = aws_gw_id
    __args__['azureGwId'] = azure_gw_id
    __args__['description'] = description
    __args__['gatewayInterfaceId'] = gateway_interface_id
    __args__['gcpGwId'] = gcp_gw_id
    __args__['gwVipv4'] = gw_vipv4
    __args__['gwVipv6'] = gw_vipv6
    __args__['interdcGwId'] = interdc_gw_id
    __args__['internetGwId'] = internet_gw_id
    __args__['name'] = name
    __args__['netmask'] = netmask
    __args__['networkId'] = network_id
    __args__['primaryIpv4'] = primary_ipv4
    __args__['primaryIpv6'] = primary_ipv6
    __args__['region'] = region
    __args__['secondaryIpv4'] = secondary_ipv4
    __args__['secondaryIpv6'] = secondary_ipv6
    __args__['serviceType'] = service_type
    __args__['status'] = status
    __args__['tenantId'] = tenant_id
    __args__['vpnGwId'] = vpn_gw_id
    __args__['vrid'] = vrid
    __ret__ = await pulumi.runtime.invoke('ecl:network/getGatewayInterface:getGatewayInterface', __args__)

    return GetGatewayInterfaceResult(
        aws_gw_id=__ret__.get('awsGwId'),
        azure_gw_id=__ret__.get('azureGwId'),
        description=__ret__.get('description'),
        gateway_interface_id=__ret__.get('gatewayInterfaceId'),
        gcp_gw_id=__ret__.get('gcpGwId'),
        gw_vipv4=__ret__.get('gwVipv4'),
        gw_vipv6=__ret__.get('gwVipv6'),
        interdc_gw_id=__ret__.get('interdcGwId'),
        internet_gw_id=__ret__.get('internetGwId'),
        name=__ret__.get('name'),
        netmask=__ret__.get('netmask'),
        network_id=__ret__.get('networkId'),
        primary_ipv4=__ret__.get('primaryIpv4'),
        primary_ipv6=__ret__.get('primaryIpv6'),
        region=__ret__.get('region'),
        secondary_ipv4=__ret__.get('secondaryIpv4'),
        secondary_ipv6=__ret__.get('secondaryIpv6'),
        service_type=__ret__.get('serviceType'),
        tenant_id=__ret__.get('tenantId'),
        vpn_gw_id=__ret__.get('vpnGwId'),
        vrid=__ret__.get('vrid'),
        id=__ret__.get('id'))