# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class Vip(pulumi.CustomResource):
    """
    Manages a V1 load balancer vip resource within OpenStack.
    """
    def __init__(__self__, __name__, __opts__=None, address=None, admin_state_up=None, conn_limit=None, description=None, floating_ip=None, name=None, persistence=None, pool_id=None, port=None, protocol=None, region=None, subnet_id=None, tenant_id=None):
        """Create a Vip resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if address and not isinstance(address, basestring):
            raise TypeError('Expected property address to be a basestring')
        __self__.address = address
        """
        The IP address of the vip. Changing this creates a new
        vip.
        """
        __props__['address'] = address

        if admin_state_up and not isinstance(admin_state_up, bool):
            raise TypeError('Expected property admin_state_up to be a bool')
        __self__.admin_state_up = admin_state_up
        """
        The administrative state of the vip.
        Acceptable values are "true" and "false". Changing this value updates the
        state of the existing vip.
        """
        __props__['adminStateUp'] = admin_state_up

        if conn_limit and not isinstance(conn_limit, int):
            raise TypeError('Expected property conn_limit to be a int')
        __self__.conn_limit = conn_limit
        """
        The maximum number of connections allowed for the
        vip. Default is -1, meaning no limit. Changing this updates the conn_limit
        of the existing vip.
        """
        __props__['connLimit'] = conn_limit

        if description and not isinstance(description, basestring):
            raise TypeError('Expected property description to be a basestring')
        __self__.description = description
        """
        Human-readable description for the vip. Changing
        this updates the description of the existing vip.
        """
        __props__['description'] = description

        if floating_ip and not isinstance(floating_ip, basestring):
            raise TypeError('Expected property floating_ip to be a basestring')
        __self__.floating_ip = floating_ip
        """
        A *Networking* Floating IP that will be associated
        with the vip. The Floating IP must be provisioned already.
        """
        __props__['floatingIp'] = floating_ip

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The name of the vip. Changing this updates the name of
        the existing vip.
        """
        __props__['name'] = name

        if persistence and not isinstance(persistence, dict):
            raise TypeError('Expected property persistence to be a dict')
        __self__.persistence = persistence
        """
        Omit this field to prevent session persistence.
        The persistence object structure is documented below. Changing this updates
        the persistence of the existing vip.
        """
        __props__['persistence'] = persistence

        if not pool_id:
            raise TypeError('Missing required property pool_id')
        elif not isinstance(pool_id, basestring):
            raise TypeError('Expected property pool_id to be a basestring')
        __self__.pool_id = pool_id
        """
        The ID of the pool with which the vip is associated.
        Changing this updates the pool_id of the existing vip.
        """
        __props__['poolId'] = pool_id

        if not port:
            raise TypeError('Missing required property port')
        elif not isinstance(port, int):
            raise TypeError('Expected property port to be a int')
        __self__.port = port
        """
        The port on which to listen for client traffic. Changing
        this creates a new vip.
        """
        __props__['port'] = port

        if not protocol:
            raise TypeError('Missing required property protocol')
        elif not isinstance(protocol, basestring):
            raise TypeError('Expected property protocol to be a basestring')
        __self__.protocol = protocol
        """
        The protocol - can be either 'TCP, 'HTTP', or
        HTTPS'. Changing this creates a new vip.
        """
        __props__['protocol'] = protocol

        if region and not isinstance(region, basestring):
            raise TypeError('Expected property region to be a basestring')
        __self__.region = region
        """
        The region in which to obtain the V2 Networking client.
        A Networking client is needed to create a VIP. If omitted, the
        `region` argument of the provider is used. Changing this creates a new
        VIP.
        """
        __props__['region'] = region

        if not subnet_id:
            raise TypeError('Missing required property subnet_id')
        elif not isinstance(subnet_id, basestring):
            raise TypeError('Expected property subnet_id to be a basestring')
        __self__.subnet_id = subnet_id
        """
        The network on which to allocate the vip's address. A
        tenant can only create vips on networks authorized by policy (e.g. networks
        that belong to them or networks that are shared). Changing this creates a
        new vip.
        """
        __props__['subnetId'] = subnet_id

        if tenant_id and not isinstance(tenant_id, basestring):
            raise TypeError('Expected property tenant_id to be a basestring')
        __self__.tenant_id = tenant_id
        """
        The owner of the vip. Required if admin wants to
        create a vip member for another tenant. Changing this creates a new vip.
        """
        __props__['tenantId'] = tenant_id

        __self__.port_id = pulumi.runtime.UNKNOWN
        """
        Port UUID for this VIP at associated floating IP (if any).
        """

        super(Vip, __self__).__init__(
            'openstack:loadbalancer/vip:Vip',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'address' in outs:
            self.address = outs['address']
        if 'adminStateUp' in outs:
            self.admin_state_up = outs['adminStateUp']
        if 'connLimit' in outs:
            self.conn_limit = outs['connLimit']
        if 'description' in outs:
            self.description = outs['description']
        if 'floatingIp' in outs:
            self.floating_ip = outs['floatingIp']
        if 'name' in outs:
            self.name = outs['name']
        if 'persistence' in outs:
            self.persistence = outs['persistence']
        if 'poolId' in outs:
            self.pool_id = outs['poolId']
        if 'port' in outs:
            self.port = outs['port']
        if 'portId' in outs:
            self.port_id = outs['portId']
        if 'protocol' in outs:
            self.protocol = outs['protocol']
        if 'region' in outs:
            self.region = outs['region']
        if 'subnetId' in outs:
            self.subnet_id = outs['subnetId']
        if 'tenantId' in outs:
            self.tenant_id = outs['tenantId']
