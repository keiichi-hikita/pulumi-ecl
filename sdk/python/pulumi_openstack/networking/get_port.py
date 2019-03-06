# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetPortResult(object):
    """
    A collection of values returned by getPort.
    """
    def __init__(__self__, all_fixed_ips=None, all_security_group_ids=None, all_tags=None, allowed_address_pairs=None, extra_dhcp_options=None, id=None):
        if all_fixed_ips and not isinstance(all_fixed_ips, list):
            raise TypeError('Expected argument all_fixed_ips to be a list')
        __self__.all_fixed_ips = all_fixed_ips
        """
        The collection of Fixed IP addresses on the port in the
        order returned by the Network v2 API.
        """
        if all_security_group_ids and not isinstance(all_security_group_ids, list):
            raise TypeError('Expected argument all_security_group_ids to be a list')
        __self__.all_security_group_ids = all_security_group_ids
        """
        The set of security group IDs applied on the port.
        """
        if all_tags and not isinstance(all_tags, list):
            raise TypeError('Expected argument all_tags to be a list')
        __self__.all_tags = all_tags
        """
        The set of string tags applied on the port.
        """
        if allowed_address_pairs and not isinstance(allowed_address_pairs, list):
            raise TypeError('Expected argument allowed_address_pairs to be a list')
        __self__.allowed_address_pairs = allowed_address_pairs
        """
        An IP/MAC Address pair of additional IP
        addresses that can be active on this port. The structure is described
        below.
        """
        if extra_dhcp_options and not isinstance(extra_dhcp_options, list):
            raise TypeError('Expected argument extra_dhcp_options to be a list')
        __self__.extra_dhcp_options = extra_dhcp_options
        """
        An extra DHCP option configured on the port.
        The structure is described below.
        """
        if id and not isinstance(id, str):
            raise TypeError('Expected argument id to be a str')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_port(admin_state_up=None, description=None, device_id=None, device_owner=None, fixed_ip=None, mac_address=None, name=None, network_id=None, port_id=None, project_id=None, region=None, security_group_ids=None, status=None, tags=None, tenant_id=None):
    """
    Use this data source to get the ID of an available OpenStack port.
    """
    __args__ = dict()

    __args__['adminStateUp'] = admin_state_up
    __args__['description'] = description
    __args__['deviceId'] = device_id
    __args__['deviceOwner'] = device_owner
    __args__['fixedIp'] = fixed_ip
    __args__['macAddress'] = mac_address
    __args__['name'] = name
    __args__['networkId'] = network_id
    __args__['portId'] = port_id
    __args__['projectId'] = project_id
    __args__['region'] = region
    __args__['securityGroupIds'] = security_group_ids
    __args__['status'] = status
    __args__['tags'] = tags
    __args__['tenantId'] = tenant_id
    __ret__ = await pulumi.runtime.invoke('openstack:networking/getPort:getPort', __args__)

    return GetPortResult(
        all_fixed_ips=__ret__.get('allFixedIps'),
        all_security_group_ids=__ret__.get('allSecurityGroupIds'),
        all_tags=__ret__.get('allTags'),
        allowed_address_pairs=__ret__.get('allowedAddressPairs'),
        extra_dhcp_options=__ret__.get('extraDhcpOptions'),
        id=__ret__.get('id'))