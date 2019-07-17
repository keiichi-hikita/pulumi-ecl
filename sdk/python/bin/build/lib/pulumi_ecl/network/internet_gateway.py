# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class InternetGateway(pulumi.CustomResource):
    description: pulumi.Output[str]
    """
    Description of the Internet Gateway resource.
    """
    internet_service_id: pulumi.Output[str]
    """
    Internet Service instantiated by Internet gateway.
    """
    name: pulumi.Output[str]
    """
    Name of the Internet Gateway resource.
    """
    qos_option_id: pulumi.Output[str]
    """
    Quality of Service options selected for Internet gateway.
    """
    region: pulumi.Output[str]
    """
    The region in which to obtain the V2 Network client.
    Internet gateways are associated with accounts, but a Network client is needed to
    create one. If omitted, the `region` argument of the provider is used.
    Changing this creates a new internet gateway.
    """
    tenant_id: pulumi.Output[str]
    """
    Tenant ID of the owner (UUID).
    """
    def __init__(__self__, resource_name, opts=None, description=None, internet_service_id=None, name=None, qos_option_id=None, region=None, tenant_id=None, __name__=None, __opts__=None):
        """
        Manages a V2 internet gateway resource within Enterprise Cloud.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: Description of the Internet Gateway resource.
        :param pulumi.Input[str] internet_service_id: Internet Service instantiated by Internet gateway.
        :param pulumi.Input[str] name: Name of the Internet Gateway resource.
        :param pulumi.Input[str] qos_option_id: Quality of Service options selected for Internet gateway.
        :param pulumi.Input[str] region: The region in which to obtain the V2 Network client.
               Internet gateways are associated with accounts, but a Network client is needed to
               create one. If omitted, the `region` argument of the provider is used.
               Changing this creates a new internet gateway.
        :param pulumi.Input[str] tenant_id: Tenant ID of the owner (UUID).
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

        __props__['description'] = description

        if internet_service_id is None:
            raise TypeError("Missing required property 'internet_service_id'")
        __props__['internet_service_id'] = internet_service_id

        __props__['name'] = name

        if qos_option_id is None:
            raise TypeError("Missing required property 'qos_option_id'")
        __props__['qos_option_id'] = qos_option_id

        __props__['region'] = region

        __props__['tenant_id'] = tenant_id

        super(InternetGateway, __self__).__init__(
            'ecl:network/internetGateway:InternetGateway',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

