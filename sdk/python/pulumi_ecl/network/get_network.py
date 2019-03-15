# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetNetworkResult(object):
    """
    A collection of values returned by getNetwork.
    """
    def __init__(__self__, admin_state_up=None, id=None):
        if admin_state_up and not isinstance(admin_state_up, str):
            raise TypeError('Expected argument admin_state_up to be a str')
        __self__.admin_state_up = admin_state_up
        if id and not isinstance(id, str):
            raise TypeError('Expected argument id to be a str')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_network(description=None, matching_subnet_cidr=None, name=None, network_id=None, plane=None, status=None, subnets=None, tags=None, tenant_id=None):
    __args__ = dict()

    __args__['description'] = description
    __args__['matchingSubnetCidr'] = matching_subnet_cidr
    __args__['name'] = name
    __args__['networkId'] = network_id
    __args__['plane'] = plane
    __args__['status'] = status
    __args__['subnets'] = subnets
    __args__['tags'] = tags
    __args__['tenantId'] = tenant_id
    __ret__ = await pulumi.runtime.invoke('ecl:network/getNetwork:getNetwork', __args__)

    return GetNetworkResult(
        admin_state_up=__ret__.get('adminStateUp'),
        id=__ret__.get('id'))
