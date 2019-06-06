# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetPortResult:
    """
    A collection of values returned by getPort.
    """
    def __init__(__self__, admin_state_up=None, all_fixed_ips=None, allowed_address_pairs=None, description=None, device_id=None, device_owner=None, fixed_ips=None, mac_address=None, managed_by_service=None, name=None, network_id=None, port_id=None, region=None, segmentation_id=None, segmentation_type=None, status=None, tags=None, tenant_id=None, id=None):
        if admin_state_up and not isinstance(admin_state_up, bool):
            raise TypeError("Expected argument 'admin_state_up' to be a bool")
        __self__.admin_state_up = admin_state_up
        """
        The administrative state of the port.
        """
        if all_fixed_ips and not isinstance(all_fixed_ips, list):
            raise TypeError("Expected argument 'all_fixed_ips' to be a list")
        __self__.all_fixed_ips = all_fixed_ips
        """
        The collection of Fixed IP addresses on the port in the order returned by the Network v2 API.
        """
        if allowed_address_pairs and not isinstance(allowed_address_pairs, list):
            raise TypeError("Expected argument 'allowed_address_pairs' to be a list")
        __self__.allowed_address_pairs = allowed_address_pairs
        """
        An IP/MAC Address pair of additional IP addresses that can be active on this port. The structure is described below.
        """
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        __self__.description = description
        """
        See Argument Reference above.
        """
        if device_id and not isinstance(device_id, str):
            raise TypeError("Expected argument 'device_id' to be a str")
        __self__.device_id = device_id
        """
        See Argument Reference above.
        """
        if device_owner and not isinstance(device_owner, str):
            raise TypeError("Expected argument 'device_owner' to be a str")
        __self__.device_owner = device_owner
        """
        See Argument Reference above.
        """
        if fixed_ips and not isinstance(fixed_ips, list):
            raise TypeError("Expected argument 'fixed_ips' to be a list")
        __self__.fixed_ips = fixed_ips
        """
        List of the port IP address
        """
        if mac_address and not isinstance(mac_address, str):
            raise TypeError("Expected argument 'mac_address' to be a str")
        __self__.mac_address = mac_address
        """
        See Argument Reference above.
        """
        if managed_by_service and not isinstance(managed_by_service, bool):
            raise TypeError("Expected argument 'managed_by_service' to be a bool")
        __self__.managed_by_service = managed_by_service
        """
        Set to true if only admin can modify it. Normal user has only read access.
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
        if port_id and not isinstance(port_id, str):
            raise TypeError("Expected argument 'port_id' to be a str")
        __self__.port_id = port_id
        """
        See Argument Reference above.
        """
        if region and not isinstance(region, str):
            raise TypeError("Expected argument 'region' to be a str")
        __self__.region = region
        """
        See Argument Reference above.
        """
        if segmentation_id and not isinstance(segmentation_id, float):
            raise TypeError("Expected argument 'segmentation_id' to be a float")
        __self__.segmentation_id = segmentation_id
        """
        See Argument Reference above.
        """
        if segmentation_type and not isinstance(segmentation_type, str):
            raise TypeError("Expected argument 'segmentation_type' to be a str")
        __self__.segmentation_type = segmentation_type
        """
        See Argument Reference above.
        """
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        __self__.status = status
        """
        The status of the port.
        """
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        """
        Port tags.
        """
        if tenant_id and not isinstance(tenant_id, str):
            raise TypeError("Expected argument 'tenant_id' to be a str")
        __self__.tenant_id = tenant_id
        """
        The owner name of port.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_port(description=None,device_id=None,device_owner=None,mac_address=None,name=None,network_id=None,port_id=None,region=None,segmentation_id=None,segmentation_type=None,opts=None):
    """
    Use this data source to get the ID of an available Enterprise Cloud port.
    """
    __args__ = dict()

    __args__['description'] = description
    __args__['deviceId'] = device_id
    __args__['deviceOwner'] = device_owner
    __args__['macAddress'] = mac_address
    __args__['name'] = name
    __args__['networkId'] = network_id
    __args__['portId'] = port_id
    __args__['region'] = region
    __args__['segmentationId'] = segmentation_id
    __args__['segmentationType'] = segmentation_type
    __ret__ = await pulumi.runtime.invoke('ecl:network/getPort:getPort', __args__, opts=opts)

    return GetPortResult(
        admin_state_up=__ret__.get('adminStateUp'),
        all_fixed_ips=__ret__.get('allFixedIps'),
        allowed_address_pairs=__ret__.get('allowedAddressPairs'),
        description=__ret__.get('description'),
        device_id=__ret__.get('deviceId'),
        device_owner=__ret__.get('deviceOwner'),
        fixed_ips=__ret__.get('fixedIps'),
        mac_address=__ret__.get('macAddress'),
        managed_by_service=__ret__.get('managedByService'),
        name=__ret__.get('name'),
        network_id=__ret__.get('networkId'),
        port_id=__ret__.get('portId'),
        region=__ret__.get('region'),
        segmentation_id=__ret__.get('segmentationId'),
        segmentation_type=__ret__.get('segmentationType'),
        status=__ret__.get('status'),
        tags=__ret__.get('tags'),
        tenant_id=__ret__.get('tenantId'),
        id=__ret__.get('id'))
