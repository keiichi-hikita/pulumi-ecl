# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Member(pulumi.CustomResource):
    """
    Manages a V2 member resource within OpenStack.
    """
    def __init__(__self__, __name__, __opts__=None, address=None, admin_state_up=None, name=None, pool_id=None, protocol_port=None, region=None, subnet_id=None, tenant_id=None, weight=None):
        """Create a Member resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not address:
            raise TypeError('Missing required property address')
        elif not isinstance(address, basestring):
            raise TypeError('Expected property address to be a basestring')
        __self__.address = address
        """
        The IP address of the member to receive traffic from
        the load balancer. Changing this creates a new member.
        """
        __props__['address'] = address

        if admin_state_up and not isinstance(admin_state_up, bool):
            raise TypeError('Expected property admin_state_up to be a bool')
        __self__.admin_state_up = admin_state_up
        """
        The administrative state of the member.
        A valid value is true (UP) or false (DOWN).
        """
        __props__['adminStateUp'] = admin_state_up

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        Human-readable name for the member.
        """
        __props__['name'] = name

        if not pool_id:
            raise TypeError('Missing required property pool_id')
        elif not isinstance(pool_id, basestring):
            raise TypeError('Expected property pool_id to be a basestring')
        __self__.pool_id = pool_id
        """
        The id of the pool that this member will be
        assigned to.
        """
        __props__['poolId'] = pool_id

        if not protocol_port:
            raise TypeError('Missing required property protocol_port')
        elif not isinstance(protocol_port, int):
            raise TypeError('Expected property protocol_port to be a int')
        __self__.protocol_port = protocol_port
        """
        The port on which to listen for client traffic.
        Changing this creates a new member.
        """
        __props__['protocolPort'] = protocol_port

        if region and not isinstance(region, basestring):
            raise TypeError('Expected property region to be a basestring')
        __self__.region = region
        """
        The region in which to obtain the V2 Networking client.
        A Networking client is needed to create an . If omitted, the
        `region` argument of the provider is used. Changing this creates a new
        member.
        """
        __props__['region'] = region

        if subnet_id and not isinstance(subnet_id, basestring):
            raise TypeError('Expected property subnet_id to be a basestring')
        __self__.subnet_id = subnet_id
        """
        The subnet in which to access the member
        """
        __props__['subnetId'] = subnet_id

        if tenant_id and not isinstance(tenant_id, basestring):
            raise TypeError('Expected property tenant_id to be a basestring')
        __self__.tenant_id = tenant_id
        """
        Required for admins. The UUID of the tenant who owns
        the member.  Only administrative users can specify a tenant UUID
        other than their own. Changing this creates a new member.
        """
        __props__['tenantId'] = tenant_id

        if weight and not isinstance(weight, int):
            raise TypeError('Expected property weight to be a int')
        __self__.weight = weight
        """
        A positive integer value that indicates the relative
        portion of traffic that this member should receive from the pool. For
        example, a member with a weight of 10 receives five times as much traffic
        as a member with a weight of 2.
        """
        __props__['weight'] = weight

        super(Member, __self__).__init__(
            'openstack:loadbalancer/member:Member',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'address' in outs:
            self.address = outs['address']
        if 'adminStateUp' in outs:
            self.admin_state_up = outs['adminStateUp']
        if 'name' in outs:
            self.name = outs['name']
        if 'poolId' in outs:
            self.pool_id = outs['poolId']
        if 'protocolPort' in outs:
            self.protocol_port = outs['protocolPort']
        if 'region' in outs:
            self.region = outs['region']
        if 'subnetId' in outs:
            self.subnet_id = outs['subnetId']
        if 'tenantId' in outs:
            self.tenant_id = outs['tenantId']
        if 'weight' in outs:
            self.weight = outs['weight']
