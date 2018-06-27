# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Pool(pulumi.CustomResource):
    """
    Manages a V2 pool resource within OpenStack.
    """
    def __init__(__self__, __name__, __opts__=None, admin_state_up=None, description=None, lb_method=None, listener_id=None, loadbalancer_id=None, name=None, persistences=None, protocol=None, region=None, tenant_id=None):
        """Create a Pool resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if admin_state_up and not isinstance(admin_state_up, bool):
            raise TypeError('Expected property admin_state_up to be a bool')
        __self__.admin_state_up = admin_state_up
        """
        The administrative state of the pool.
        A valid value is true (UP) or false (DOWN).
        """
        __props__['adminStateUp'] = admin_state_up

        if description and not isinstance(description, basestring):
            raise TypeError('Expected property description to be a basestring')
        __self__.description = description
        """
        Human-readable description for the pool.
        """
        __props__['description'] = description

        if not lb_method:
            raise TypeError('Missing required property lb_method')
        elif not isinstance(lb_method, basestring):
            raise TypeError('Expected property lb_method to be a basestring')
        __self__.lb_method = lb_method
        """
        The load balancing algorithm to
        distribute traffic to the pool's members. Must be one of
        ROUND_ROBIN, LEAST_CONNECTIONS, or SOURCE_IP.
        """
        __props__['lbMethod'] = lb_method

        if listener_id and not isinstance(listener_id, basestring):
            raise TypeError('Expected property listener_id to be a basestring')
        __self__.listener_id = listener_id
        """
        The Listener on which the members of the pool
        will be associated with. Changing this creates a new pool.
        Note:  One of LoadbalancerID or ListenerID must be provided.
        """
        __props__['listenerId'] = listener_id

        if loadbalancer_id and not isinstance(loadbalancer_id, basestring):
            raise TypeError('Expected property loadbalancer_id to be a basestring')
        __self__.loadbalancer_id = loadbalancer_id
        """
        The load balancer on which to provision this
        pool. Changing this creates a new pool.
        Note:  One of LoadbalancerID or ListenerID must be provided.
        """
        __props__['loadbalancerId'] = loadbalancer_id

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        Human-readable name for the pool.
        """
        __props__['name'] = name

        if persistences and not isinstance(persistences, list):
            raise TypeError('Expected property persistences to be a list')
        __self__.persistences = persistences
        """
        Omit this field to prevent session persistence.  Indicates
        whether connections in the same session will be processed by the same Pool
        member or not. Changing this creates a new pool.
        """
        __props__['persistences'] = persistences

        if not protocol:
            raise TypeError('Missing required property protocol')
        elif not isinstance(protocol, basestring):
            raise TypeError('Expected property protocol to be a basestring')
        __self__.protocol = protocol
        """
        See Argument Reference above.
        """
        __props__['protocol'] = protocol

        if region and not isinstance(region, basestring):
            raise TypeError('Expected property region to be a basestring')
        __self__.region = region
        """
        The region in which to obtain the V2 Networking client.
        A Networking client is needed to create an . If omitted, the
        `region` argument of the provider is used. Changing this creates a new
        pool.
        """
        __props__['region'] = region

        if tenant_id and not isinstance(tenant_id, basestring):
            raise TypeError('Expected property tenant_id to be a basestring')
        __self__.tenant_id = tenant_id
        """
        Required for admins. The UUID of the tenant who owns
        the pool.  Only administrative users can specify a tenant UUID
        other than their own. Changing this creates a new pool.
        """
        __props__['tenantId'] = tenant_id

        super(Pool, __self__).__init__(
            'openstack:loadbalancer/pool:Pool',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'adminStateUp' in outs:
            self.admin_state_up = outs['adminStateUp']
        if 'description' in outs:
            self.description = outs['description']
        if 'lbMethod' in outs:
            self.lb_method = outs['lbMethod']
        if 'listenerId' in outs:
            self.listener_id = outs['listenerId']
        if 'loadbalancerId' in outs:
            self.loadbalancer_id = outs['loadbalancerId']
        if 'name' in outs:
            self.name = outs['name']
        if 'persistences' in outs:
            self.persistences = outs['persistences']
        if 'protocol' in outs:
            self.protocol = outs['protocol']
        if 'region' in outs:
            self.region = outs['region']
        if 'tenantId' in outs:
            self.tenant_id = outs['tenantId']
