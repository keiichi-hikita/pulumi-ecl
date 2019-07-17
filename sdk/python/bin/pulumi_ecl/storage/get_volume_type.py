# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetVolumeTypeResult:
    """
    A collection of values returned by getVolumeType.
    """
    def __init__(__self__, extra_specs=None, name=None, volume_type_id=None, id=None):
        if extra_specs and not isinstance(extra_specs, dict):
            raise TypeError("Expected argument 'extra_specs' to be a dict")
        __self__.extra_specs = extra_specs
        """
        Includes available_volume_size, and available_iops_per_gb or available_throughput.
        The extra_specs structure is documented below.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if volume_type_id and not isinstance(volume_type_id, str):
            raise TypeError("Expected argument 'volume_type_id' to be a str")
        __self__.volume_type_id = volume_type_id
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_volume_type(name=None,volume_type_id=None,opts=None):
    """
    Use this data source to get the ID of an Enterprise Cloud volume type.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['volumeTypeId'] = volume_type_id
    __ret__ = await pulumi.runtime.invoke('ecl:storage/getVolumeType:getVolumeType', __args__, opts=opts)

    return GetVolumeTypeResult(
        extra_specs=__ret__.get('extraSpecs'),
        name=__ret__.get('name'),
        volume_type_id=__ret__.get('volumeTypeId'),
        id=__ret__.get('id'))