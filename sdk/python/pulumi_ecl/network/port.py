# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Port(pulumi.CustomResource):
    admin_state_up: pulumi.Output[bool]
    all_fixed_ips: pulumi.Output[list]
    allowed_address_pairs: pulumi.Output[list]
    description: pulumi.Output[str]
    device_id: pulumi.Output[str]
    device_owner: pulumi.Output[str]
    fixed_ips: pulumi.Output[list]
    mac_address: pulumi.Output[str]
    name: pulumi.Output[str]
    network_id: pulumi.Output[str]
    no_fixed_ip: pulumi.Output[bool]
    region: pulumi.Output[str]
    segmentation_id: pulumi.Output[str]
    segmentation_type: pulumi.Output[str]
    status: pulumi.Output[str]
    tags: pulumi.Output[dict]
    tenant_id: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, admin_state_up=None, allowed_address_pairs=None, description=None, device_id=None, device_owner=None, fixed_ips=None, mac_address=None, name=None, network_id=None, no_fixed_ip=None, region=None, segmentation_id=None, segmentation_type=None, status=None, tags=None, tenant_id=None, __name__=None, __opts__=None):
        """
        Create a Port resource with the given unique name, props, and options.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] admin_state_up
        :param pulumi.Input[list] allowed_address_pairs
        :param pulumi.Input[str] description
        :param pulumi.Input[str] device_id
        :param pulumi.Input[str] device_owner
        :param pulumi.Input[list] fixed_ips
        :param pulumi.Input[str] mac_address
        :param pulumi.Input[str] name
        :param pulumi.Input[str] network_id
        :param pulumi.Input[bool] no_fixed_ip
        :param pulumi.Input[str] region
        :param pulumi.Input[str] segmentation_id
        :param pulumi.Input[str] segmentation_type
        :param pulumi.Input[str] status
        :param pulumi.Input[dict] tags
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

        __props__['admin_state_up'] = admin_state_up

        __props__['allowed_address_pairs'] = allowed_address_pairs

        __props__['description'] = description

        __props__['device_id'] = device_id

        __props__['device_owner'] = device_owner

        __props__['fixed_ips'] = fixed_ips

        __props__['mac_address'] = mac_address

        __props__['name'] = name

        if network_id is None:
            raise TypeError('Missing required property network_id')
        __props__['network_id'] = network_id

        __props__['no_fixed_ip'] = no_fixed_ip

        __props__['region'] = region

        __props__['segmentation_id'] = segmentation_id

        __props__['segmentation_type'] = segmentation_type

        __props__['status'] = status

        __props__['tags'] = tags

        __props__['tenant_id'] = tenant_id

        __props__['all_fixed_ips'] = None

        super(Port, __self__).__init__(
            'ecl:network/port:Port',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
