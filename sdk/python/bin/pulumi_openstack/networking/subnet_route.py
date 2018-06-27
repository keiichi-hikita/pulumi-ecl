# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class SubnetRoute(pulumi.CustomResource):
    """
    Creates a routing entry on a OpenStack V2 subnet.
    """
    def __init__(__self__, __name__, __opts__=None, destination_cidr=None, next_hop=None, region=None, subnet_id=None):
        """Create a SubnetRoute resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not destination_cidr:
            raise TypeError('Missing required property destination_cidr')
        elif not isinstance(destination_cidr, basestring):
            raise TypeError('Expected property destination_cidr to be a basestring')
        __self__.destination_cidr = destination_cidr
        """
        CIDR block to match on the packet’s destination IP. Changing
        this creates a new routing entry.
        """
        __props__['destinationCidr'] = destination_cidr

        if not next_hop:
            raise TypeError('Missing required property next_hop')
        elif not isinstance(next_hop, basestring):
            raise TypeError('Expected property next_hop to be a basestring')
        __self__.next_hop = next_hop
        """
        IP address of the next hop gateway.  Changing
        this creates a new routing entry.
        """
        __props__['nextHop'] = next_hop

        if region and not isinstance(region, basestring):
            raise TypeError('Expected property region to be a basestring')
        __self__.region = region
        """
        The region in which to obtain the V2 networking client.
        A networking client is needed to configure a routing entry on a subnet. If omitted, the
        `region` argument of the provider is used. Changing this creates a new
        routing entry.
        """
        __props__['region'] = region

        if not subnet_id:
            raise TypeError('Missing required property subnet_id')
        elif not isinstance(subnet_id, basestring):
            raise TypeError('Expected property subnet_id to be a basestring')
        __self__.subnet_id = subnet_id
        """
        ID of the subnet this routing entry belongs to. Changing
        this creates a new routing entry.
        """
        __props__['subnetId'] = subnet_id

        super(SubnetRoute, __self__).__init__(
            'openstack:networking/subnetRoute:SubnetRoute',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'destinationCidr' in outs:
            self.destination_cidr = outs['destinationCidr']
        if 'nextHop' in outs:
            self.next_hop = outs['nextHop']
        if 'region' in outs:
            self.region = outs['region']
        if 'subnetId' in outs:
            self.subnet_id = outs['subnetId']
