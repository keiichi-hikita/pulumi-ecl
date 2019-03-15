# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class GetVolumeTypeResult(object):
    """
    A collection of values returned by getVolumeType.
    """
    def __init__(__self__, extra_specs=None, id=None):
        if extra_specs and not isinstance(extra_specs, dict):
            raise TypeError('Expected argument extra_specs to be a dict')
        __self__.extra_specs = extra_specs
        if id and not isinstance(id, basestring):
            raise TypeError('Expected argument id to be a basestring')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

def get_volume_type(extra_specs=None, name=None, volume_type_id=None):
    __args__ = dict()

    __args__['extraSpecs'] = extra_specs
    __args__['name'] = name
    __args__['volumeTypeId'] = volume_type_id
    __ret__ = pulumi.runtime.invoke('ecl:storage/getVolumeType:getVolumeType', __args__)

    return GetVolumeTypeResult(
        extra_specs=__ret__.get('extraSpecs'),
        id=__ret__.get('id'))
