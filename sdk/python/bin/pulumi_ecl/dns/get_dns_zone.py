# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetDnsZoneResult:
    """
    A collection of values returned by getDnsZone.
    """
    def __init__(__self__, attributes=None, created_at=None, description=None, domain_name=None, email=None, masters=None, name=None, pool_id=None, project_id=None, region=None, serial=None, status=None, transferred_at=None, ttl=None, type=None, updated_at=None, version=None, id=None):
        if attributes and not isinstance(attributes, dict):
            raise TypeError("Expected argument 'attributes' to be a dict")
        __self__.attributes = attributes
        """
        (Optional) See Argument Reference above.
        """
        if created_at and not isinstance(created_at, str):
            raise TypeError("Expected argument 'created_at' to be a str")
        __self__.created_at = created_at
        """
        See Argument Reference above.
        """
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        __self__.description = description
        """
        See Argument Reference above.
        """
        if domain_name and not isinstance(domain_name, str):
            raise TypeError("Expected argument 'domain_name' to be a str")
        __self__.domain_name = domain_name
        """
        See Argument Reference above.
        """
        if email and not isinstance(email, str):
            raise TypeError("Expected argument 'email' to be a str")
        __self__.email = email
        """
        See Argument Reference above.
        This parameter is not currently supported.
        It always returns an empty string.
        """
        if masters and not isinstance(masters, list):
            raise TypeError("Expected argument 'masters' to be a list")
        __self__.masters = masters
        """
        See Argument Reference above.
        This parameter is not currently supported.
        It always returns an empty string.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        """
        See Argument Reference above.
        """
        if pool_id and not isinstance(pool_id, str):
            raise TypeError("Expected argument 'pool_id' to be a str")
        __self__.pool_id = pool_id
        """
        See Argument Reference above.
        This parameter is not currently supported.
        It always returns an empty string.
        """
        if project_id and not isinstance(project_id, str):
            raise TypeError("Expected argument 'project_id' to be a str")
        __self__.project_id = project_id
        """
        See Argument Reference above.
        """
        if region and not isinstance(region, str):
            raise TypeError("Expected argument 'region' to be a str")
        __self__.region = region
        """
        See Argument Reference above.
        """
        if serial and not isinstance(serial, float):
            raise TypeError("Expected argument 'serial' to be a float")
        __self__.serial = serial
        """
        See Argument Reference above.
        This parameter is not currently supported.
        It always returns zero.
        """
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        __self__.status = status
        """
        See Argument Reference above.
        """
        if transferred_at and not isinstance(transferred_at, str):
            raise TypeError("Expected argument 'transferred_at' to be a str")
        __self__.transferred_at = transferred_at
        """
        (Optional)	See Argument Reference above.
        This parameter is not currently supported.
        It always returns null.
        """
        if ttl and not isinstance(ttl, float):
            raise TypeError("Expected argument 'ttl' to be a float")
        __self__.ttl = ttl
        """
        See Argument Reference above.
        This parameter is not currently supported.
        It always returns zero.
        """
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        __self__.type = type
        """
        See Argument Reference above.
        This parameter is not currently supported.
        It always returns an empty string.
        """
        if updated_at and not isinstance(updated_at, str):
            raise TypeError("Expected argument 'updated_at' to be a str")
        __self__.updated_at = updated_at
        """
        See Argument Reference above.
        """
        if version and not isinstance(version, float):
            raise TypeError("Expected argument 'version' to be a float")
        __self__.version = version
        """
        See Argument Reference above.
        This parameter is not currently supported.
        It always returns 1.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_dns_zone(attributes=None,created_at=None,description=None,domain_name=None,email=None,masters=None,name=None,pool_id=None,project_id=None,region=None,serial=None,status=None,transferred_at=None,ttl=None,type=None,updated_at=None,version=None,opts=None):
    """
    Use this data source to get the ID of an Enterprise Cloud zone.
    Manages a V2 zone resource within Enterprise Cloud.
    """
    __args__ = dict()

    __args__['attributes'] = attributes
    __args__['createdAt'] = created_at
    __args__['description'] = description
    __args__['domainName'] = domain_name
    __args__['email'] = email
    __args__['masters'] = masters
    __args__['name'] = name
    __args__['poolId'] = pool_id
    __args__['projectId'] = project_id
    __args__['region'] = region
    __args__['serial'] = serial
    __args__['status'] = status
    __args__['transferredAt'] = transferred_at
    __args__['ttl'] = ttl
    __args__['type'] = type
    __args__['updatedAt'] = updated_at
    __args__['version'] = version
    __ret__ = await pulumi.runtime.invoke('ecl:dns/getDnsZone:getDnsZone', __args__, opts=opts)

    return GetDnsZoneResult(
        attributes=__ret__.get('attributes'),
        created_at=__ret__.get('createdAt'),
        description=__ret__.get('description'),
        domain_name=__ret__.get('domainName'),
        email=__ret__.get('email'),
        masters=__ret__.get('masters'),
        name=__ret__.get('name'),
        pool_id=__ret__.get('poolId'),
        project_id=__ret__.get('projectId'),
        region=__ret__.get('region'),
        serial=__ret__.get('serial'),
        status=__ret__.get('status'),
        transferred_at=__ret__.get('transferredAt'),
        ttl=__ret__.get('ttl'),
        type=__ret__.get('type'),
        updated_at=__ret__.get('updatedAt'),
        version=__ret__.get('version'),
        id=__ret__.get('id'))
