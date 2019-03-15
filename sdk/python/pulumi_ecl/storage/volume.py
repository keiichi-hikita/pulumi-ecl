# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Volume(pulumi.CustomResource):
    availability_zone: pulumi.Output[str]
    description: pulumi.Output[str]
    error_message: pulumi.Output[str]
    initiator_iqns: pulumi.Output[list]
    iops_per_gb: pulumi.Output[str]
    name: pulumi.Output[str]
    size: pulumi.Output[int]
    throughput: pulumi.Output[str]
    virtual_storage_id: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, availability_zone=None, description=None, error_message=None, initiator_iqns=None, iops_per_gb=None, name=None, size=None, throughput=None, virtual_storage_id=None, __name__=None, __opts__=None):
        """
        Create a Volume resource with the given unique name, props, and options.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] availability_zone
        :param pulumi.Input[str] description
        :param pulumi.Input[str] error_message
        :param pulumi.Input[list] initiator_iqns
        :param pulumi.Input[str] iops_per_gb
        :param pulumi.Input[str] name
        :param pulumi.Input[int] size
        :param pulumi.Input[str] throughput
        :param pulumi.Input[str] virtual_storage_id
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

        __props__['availability_zone'] = availability_zone

        __props__['description'] = description

        __props__['error_message'] = error_message

        __props__['initiator_iqns'] = initiator_iqns

        __props__['iops_per_gb'] = iops_per_gb

        __props__['name'] = name

        if size is None:
            raise TypeError('Missing required property size')
        __props__['size'] = size

        __props__['throughput'] = throughput

        if virtual_storage_id is None:
            raise TypeError('Missing required property virtual_storage_id')
        __props__['virtual_storage_id'] = virtual_storage_id

        super(Volume, __self__).__init__(
            'ecl:storage/volume:Volume',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

