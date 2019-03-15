# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetImageResult(object):
    """
    A collection of values returned by getImage.
    """
    def __init__(__self__, checksum=None, container_format=None, created_at=None, disk_format=None, file=None, member_status=None, metadata=None, min_disk_gb=None, min_ram_mb=None, name=None, owner=None, properties=None, protected=None, region=None, schema=None, size_bytes=None, tag=None, updated_at=None, visibility=None, id=None):
        if checksum and not isinstance(checksum, str):
            raise TypeError('Expected argument checksum to be a str')
        __self__.checksum = checksum
        if container_format and not isinstance(container_format, str):
            raise TypeError('Expected argument container_format to be a str')
        __self__.container_format = container_format
        if created_at and not isinstance(created_at, str):
            raise TypeError('Expected argument created_at to be a str')
        __self__.created_at = created_at
        if disk_format and not isinstance(disk_format, str):
            raise TypeError('Expected argument disk_format to be a str')
        __self__.disk_format = disk_format
        if file and not isinstance(file, str):
            raise TypeError('Expected argument file to be a str')
        __self__.file = file
        if member_status and not isinstance(member_status, str):
            raise TypeError('Expected argument member_status to be a str')
        __self__.member_status = member_status
        if metadata and not isinstance(metadata, dict):
            raise TypeError('Expected argument metadata to be a dict')
        __self__.metadata = metadata
        if min_disk_gb and not isinstance(min_disk_gb, int):
            raise TypeError('Expected argument min_disk_gb to be a int')
        __self__.min_disk_gb = min_disk_gb
        if min_ram_mb and not isinstance(min_ram_mb, int):
            raise TypeError('Expected argument min_ram_mb to be a int')
        __self__.min_ram_mb = min_ram_mb
        if name and not isinstance(name, str):
            raise TypeError('Expected argument name to be a str')
        __self__.name = name
        if owner and not isinstance(owner, str):
            raise TypeError('Expected argument owner to be a str')
        __self__.owner = owner
        if properties and not isinstance(properties, dict):
            raise TypeError('Expected argument properties to be a dict')
        __self__.properties = properties
        if protected and not isinstance(protected, bool):
            raise TypeError('Expected argument protected to be a bool')
        __self__.protected = protected
        if region and not isinstance(region, str):
            raise TypeError('Expected argument region to be a str')
        __self__.region = region
        if schema and not isinstance(schema, str):
            raise TypeError('Expected argument schema to be a str')
        __self__.schema = schema
        if size_bytes and not isinstance(size_bytes, int):
            raise TypeError('Expected argument size_bytes to be a int')
        __self__.size_bytes = size_bytes
        if tag and not isinstance(tag, str):
            raise TypeError('Expected argument tag to be a str')
        __self__.tag = tag
        if updated_at and not isinstance(updated_at, str):
            raise TypeError('Expected argument updated_at to be a str')
        __self__.updated_at = updated_at
        if visibility and not isinstance(visibility, str):
            raise TypeError('Expected argument visibility to be a str')
        __self__.visibility = visibility
        if id and not isinstance(id, str):
            raise TypeError('Expected argument id to be a str')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_image(member_status=None, most_recent=None, name=None, owner=None, properties=None, region=None, size_max=None, size_min=None, sort_direction=None, sort_key=None, tag=None, visibility=None):
    __args__ = dict()

    __args__['memberStatus'] = member_status
    __args__['mostRecent'] = most_recent
    __args__['name'] = name
    __args__['owner'] = owner
    __args__['properties'] = properties
    __args__['region'] = region
    __args__['sizeMax'] = size_max
    __args__['sizeMin'] = size_min
    __args__['sortDirection'] = sort_direction
    __args__['sortKey'] = sort_key
    __args__['tag'] = tag
    __args__['visibility'] = visibility
    __ret__ = await pulumi.runtime.invoke('ecl:imagestorages/getImage:getImage', __args__)

    return GetImageResult(
        checksum=__ret__.get('checksum'),
        container_format=__ret__.get('containerFormat'),
        created_at=__ret__.get('createdAt'),
        disk_format=__ret__.get('diskFormat'),
        file=__ret__.get('file'),
        member_status=__ret__.get('memberStatus'),
        metadata=__ret__.get('metadata'),
        min_disk_gb=__ret__.get('minDiskGb'),
        min_ram_mb=__ret__.get('minRamMb'),
        name=__ret__.get('name'),
        owner=__ret__.get('owner'),
        properties=__ret__.get('properties'),
        protected=__ret__.get('protected'),
        region=__ret__.get('region'),
        schema=__ret__.get('schema'),
        size_bytes=__ret__.get('sizeBytes'),
        tag=__ret__.get('tag'),
        updated_at=__ret__.get('updatedAt'),
        visibility=__ret__.get('visibility'),
        id=__ret__.get('id'))