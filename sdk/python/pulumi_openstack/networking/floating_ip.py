# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import pulumi
import pulumi.runtime
from .. import utilities, tables

class FloatingIp(pulumi.CustomResource):
    address: pulumi.Output[str]
    """
    The actual/specific floating IP to obtain. By default,
    non-admin users are not able to specify a floating IP, so you must either be
    an admin user or have had a custom policy or role applied to your OpenStack
    user or project.
    """
    all_tags: pulumi.Output[list]
    """
    The collection of tags assigned on the floating IP, which have
    been explicitly and implicitly added.
    """
    description: pulumi.Output[str]
    """
    Human-readable description for the floating IP.
    """
    fixed_ip: pulumi.Output[str]
    """
    Fixed IP of the port to associate with this floating IP. Required if
    the port has multiple fixed IPs.
    """
    pool: pulumi.Output[str]
    """
    The name of the pool from which to obtain the floating
    IP. Changing this creates a new floating IP.
    """
    port_id: pulumi.Output[str]
    """
    ID of an existing port with at least one IP address to
    associate with this floating IP.
    """
    region: pulumi.Output[str]
    """
    The region in which to obtain the V2 Networking client.
    A Networking client is needed to create a floating IP that can be used with
    another networking resource, such as a load balancer. If omitted, the
    `region` argument of the provider is used. Changing this creates a new
    floating IP (which may or may not have a different address).
    """
    subnet_id: pulumi.Output[str]
    """
    The subnet ID of the floating IP pool. Specify this if
    the floating IP network has multiple subnets.
    """
    tags: pulumi.Output[list]
    """
    A set of string tags for the floating IP.
    """
    tenant_id: pulumi.Output[str]
    """
    The target tenant ID in which to allocate the floating
    IP, if you specify this together with a port_id, make sure the target port
    belongs to the same tenant. Changing this creates a new floating IP (which
    may or may not have a different address)
    """
    value_specs: pulumi.Output[dict]
    """
    Map of additional options.
    """
    def __init__(__self__, __name__, __opts__=None, address=None, description=None, fixed_ip=None, pool=None, port_id=None, region=None, subnet_id=None, tags=None, tenant_id=None, value_specs=None):
        """
        Manages a V2 floating IP resource within OpenStack Neutron (networking)
        that can be used for load balancers.
        These are similar to Nova (compute) floating IP resources,
        but only compute floating IPs can be used with compute instances.
        
        
        :param str __name__: The name of the resource.
        :param pulumi.ResourceOptions __opts__: Options for the resource.
        :param pulumi.Input[str] address: The actual/specific floating IP to obtain. By default,
               non-admin users are not able to specify a floating IP, so you must either be
               an admin user or have had a custom policy or role applied to your OpenStack
               user or project.
        :param pulumi.Input[str] description: Human-readable description for the floating IP.
        :param pulumi.Input[str] fixed_ip: Fixed IP of the port to associate with this floating IP. Required if
               the port has multiple fixed IPs.
        :param pulumi.Input[str] pool: The name of the pool from which to obtain the floating
               IP. Changing this creates a new floating IP.
        :param pulumi.Input[str] port_id: ID of an existing port with at least one IP address to
               associate with this floating IP.
        :param pulumi.Input[str] region: The region in which to obtain the V2 Networking client.
               A Networking client is needed to create a floating IP that can be used with
               another networking resource, such as a load balancer. If omitted, the
               `region` argument of the provider is used. Changing this creates a new
               floating IP (which may or may not have a different address).
        :param pulumi.Input[str] subnet_id: The subnet ID of the floating IP pool. Specify this if
               the floating IP network has multiple subnets.
        :param pulumi.Input[list] tags: A set of string tags for the floating IP.
        :param pulumi.Input[str] tenant_id: The target tenant ID in which to allocate the floating
               IP, if you specify this together with a port_id, make sure the target port
               belongs to the same tenant. Changing this creates a new floating IP (which
               may or may not have a different address)
        :param pulumi.Input[dict] value_specs: Map of additional options.
        """
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['address'] = address

        __props__['description'] = description

        __props__['fixed_ip'] = fixed_ip

        if not pool:
            raise TypeError('Missing required property pool')
        __props__['pool'] = pool

        __props__['port_id'] = port_id

        __props__['region'] = region

        __props__['subnet_id'] = subnet_id

        __props__['tags'] = tags

        __props__['tenant_id'] = tenant_id

        __props__['value_specs'] = value_specs

        __props__['all_tags'] = None

        super(FloatingIp, __self__).__init__(
            'openstack:networking/floatingIp:FloatingIp',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

