# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class FloatingIp(pulumi.CustomResource):
    """
    Manages a V2 floating IP resource within OpenStack Nova (compute)
    that can be used for compute instances.
    
    Please note that managing floating IPs through the OpenStack Compute API has
    been deprecated. Unless you are using an older OpenStack environment, it is
    recommended to use the `openstack_networking_floatingip_v2`
    resource instead, which uses the OpenStack Networking API.
    """
    def __init__(__self__, __name__, __opts__=None, pool=None, region=None):
        """Create a FloatingIp resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not pool:
            raise TypeError('Missing required property pool')
        __props__['pool'] = pool

        __props__['region'] = region

        __props__['address'] = None
        __props__['fixed_ip'] = None
        __props__['instance_id'] = None

        super(FloatingIp, __self__).__init__(
            'openstack:compute/floatingIp:FloatingIp',
            __name__,
            __props__,
            __opts__)

