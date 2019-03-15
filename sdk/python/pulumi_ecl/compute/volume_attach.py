# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class VolumeAttach(pulumi.CustomResource):
    device: pulumi.Output[str]
    region: pulumi.Output[str]
    server_id: pulumi.Output[str]
    volume_id: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, device=None, region=None, server_id=None, volume_id=None, __name__=None, __opts__=None):
        """
        Create a VolumeAttach resource with the given unique name, props, and options.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] device
        :param pulumi.Input[str] region
        :param pulumi.Input[str] server_id
        :param pulumi.Input[str] volume_id
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['device'] = device

        __props__['region'] = region

        if server_id is None:
            raise TypeError('Missing required property server_id')
        __props__['server_id'] = server_id

        if volume_id is None:
            raise TypeError('Missing required property volume_id')
        __props__['volume_id'] = volume_id

        super(VolumeAttach, __self__).__init__(
            'ecl:compute/volumeAttach:VolumeAttach',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

