# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class ImageMember(pulumi.CustomResource):
    created_at: pulumi.Output[str]
    image_id: pulumi.Output[str]
    member_id: pulumi.Output[str]
    region: pulumi.Output[str]
    schema: pulumi.Output[str]
    status: pulumi.Output[str]
    updated_at: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, image_id=None, member_id=None, region=None, __name__=None, __opts__=None):
        """
        Create a ImageMember resource with the given unique name, props, and options.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] image_id
        :param pulumi.Input[str] member_id
        :param pulumi.Input[str] region
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

        if image_id is None:
            raise TypeError('Missing required property image_id')
        __props__['image_id'] = image_id

        if member_id is None:
            raise TypeError('Missing required property member_id')
        __props__['member_id'] = member_id

        __props__['region'] = region

        __props__['created_at'] = None
        __props__['schema'] = None
        __props__['status'] = None
        __props__['updated_at'] = None

        super(ImageMember, __self__).__init__(
            'ecl:imagestorages/imageMember:ImageMember',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
