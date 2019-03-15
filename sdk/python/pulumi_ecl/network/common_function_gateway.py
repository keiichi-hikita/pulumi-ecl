# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class CommonFunctionGateway(pulumi.CustomResource):
    common_function_pool_id: pulumi.Output[str]
    description: pulumi.Output[str]
    name: pulumi.Output[str]
    network_id: pulumi.Output[str]
    subnet_id: pulumi.Output[str]
    tenant_id: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, common_function_pool_id=None, description=None, name=None, tenant_id=None, __name__=None, __opts__=None):
        """
        Create a CommonFunctionGateway resource with the given unique name, props, and options.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] common_function_pool_id
        :param pulumi.Input[str] description
        :param pulumi.Input[str] name
        :param pulumi.Input[str] tenant_id
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

        if common_function_pool_id is None:
            raise TypeError('Missing required property common_function_pool_id')
        __props__['common_function_pool_id'] = common_function_pool_id

        __props__['description'] = description

        __props__['name'] = name

        __props__['tenant_id'] = tenant_id

        __props__['network_id'] = None
        __props__['subnet_id'] = None

        super(CommonFunctionGateway, __self__).__init__(
            'ecl:network/commonFunctionGateway:CommonFunctionGateway',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
