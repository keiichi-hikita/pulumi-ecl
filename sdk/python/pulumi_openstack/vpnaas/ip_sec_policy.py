# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import pulumi
import pulumi.runtime
from .. import utilities, tables

class IpSecPolicy(pulumi.CustomResource):
    auth_algorithm: pulumi.Output[str]
    """
    The authentication hash algorithm. Valid values are sha1, sha256, sha384, sha512.
    Default is sha1. Changing this updates the algorithm of the existing policy.
    """
    description: pulumi.Output[str]
    """
    The human-readable description for the policy.
    Changing this updates the description of the existing policy.
    """
    encapsulation_mode: pulumi.Output[str]
    """
    The encapsulation mode. Valid values are tunnel and transport. Default is tunnel.
    Changing this updates the existing policy.
    """
    encryption_algorithm: pulumi.Output[str]
    """
    The encryption algorithm. Valid values are 3des, aes-128, aes-192 and so on.
    The default value is aes-128. Changing this updates the existing policy.
    """
    lifetimes: pulumi.Output[list]
    """
    The lifetime of the security association. Consists of Unit and Value.
    - `unit` - (Optional) The units for the lifetime of the security association. Can be either seconds or kilobytes.
    Default is seconds.
    - `value` - (Optional) The value for the lifetime of the security association. Must be a positive integer.
    Default is 3600.
    """
    name: pulumi.Output[str]
    """
    The name of the policy. Changing this updates the name of
    the existing policy.
    """
    pfs: pulumi.Output[str]
    """
    The perfect forward secrecy mode. Valid values are Group2, Group5 and Group14. Default is Group5.
    Changing this updates the existing policy.
    """
    region: pulumi.Output[str]
    """
    The region in which to obtain the V2 Networking client.
    A Networking client is needed to create an IPSec policy. If omitted, the
    `region` argument of the provider is used. Changing this creates a new
    policy.
    """
    tenant_id: pulumi.Output[str]
    """
    The owner of the policy. Required if admin wants to
    create a policy for another project. Changing this creates a new policy.
    """
    transform_protocol: pulumi.Output[str]
    """
    The transform protocol. Valid values are ESP, AH and AH-ESP.
    Changing this updates the existing policy. Default is ESP.
    """
    value_specs: pulumi.Output[dict]
    """
    Map of additional options.
    """
    def __init__(__self__, __name__, __opts__=None, auth_algorithm=None, description=None, encapsulation_mode=None, encryption_algorithm=None, lifetimes=None, name=None, pfs=None, region=None, tenant_id=None, transform_protocol=None, value_specs=None):
        """
        Manages a V2 Neutron IPSec policy resource within OpenStack.
        
        
        :param str __name__: The name of the resource.
        :param pulumi.ResourceOptions __opts__: Options for the resource.
        :param pulumi.Input[str] auth_algorithm: The authentication hash algorithm. Valid values are sha1, sha256, sha384, sha512.
               Default is sha1. Changing this updates the algorithm of the existing policy.
        :param pulumi.Input[str] description: The human-readable description for the policy.
               Changing this updates the description of the existing policy.
        :param pulumi.Input[str] encapsulation_mode: The encapsulation mode. Valid values are tunnel and transport. Default is tunnel.
               Changing this updates the existing policy.
        :param pulumi.Input[str] encryption_algorithm: The encryption algorithm. Valid values are 3des, aes-128, aes-192 and so on.
               The default value is aes-128. Changing this updates the existing policy.
        :param pulumi.Input[list] lifetimes: The lifetime of the security association. Consists of Unit and Value.
               - `unit` - (Optional) The units for the lifetime of the security association. Can be either seconds or kilobytes.
               Default is seconds.
               - `value` - (Optional) The value for the lifetime of the security association. Must be a positive integer.
               Default is 3600.
        :param pulumi.Input[str] name: The name of the policy. Changing this updates the name of
               the existing policy.
        :param pulumi.Input[str] pfs: The perfect forward secrecy mode. Valid values are Group2, Group5 and Group14. Default is Group5.
               Changing this updates the existing policy.
        :param pulumi.Input[str] region: The region in which to obtain the V2 Networking client.
               A Networking client is needed to create an IPSec policy. If omitted, the
               `region` argument of the provider is used. Changing this creates a new
               policy.
        :param pulumi.Input[str] tenant_id: The owner of the policy. Required if admin wants to
               create a policy for another project. Changing this creates a new policy.
        :param pulumi.Input[str] transform_protocol: The transform protocol. Valid values are ESP, AH and AH-ESP.
               Changing this updates the existing policy. Default is ESP.
        :param pulumi.Input[dict] value_specs: Map of additional options.
        """
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['auth_algorithm'] = auth_algorithm

        __props__['description'] = description

        __props__['encapsulation_mode'] = encapsulation_mode

        __props__['encryption_algorithm'] = encryption_algorithm

        __props__['lifetimes'] = lifetimes

        __props__['name'] = name

        __props__['pfs'] = pfs

        __props__['region'] = region

        __props__['tenant_id'] = tenant_id

        __props__['transform_protocol'] = transform_protocol

        __props__['value_specs'] = value_specs

        super(IpSecPolicy, __self__).__init__(
            'openstack:vpnaas/ipSecPolicy:IpSecPolicy',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

