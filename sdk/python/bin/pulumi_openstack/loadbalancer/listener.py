# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Listener(pulumi.CustomResource):
    """
    Manages a V2 listener resource within OpenStack.
    """
    def __init__(__self__, __name__, __opts__=None, admin_state_up=None, connection_limit=None, default_pool_id=None, default_tls_container_ref=None, description=None, loadbalancer_id=None, name=None, protocol=None, protocol_port=None, region=None, sni_container_refs=None, tenant_id=None):
        """Create a Listener resource with the given unique name, props, and options."""
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
        The administrative state of the Listener.
        A valid value is true (UP) or false (DOWN).
        """
        __props__['adminStateUp'] = admin_state_up

        if connection_limit and not isinstance(connection_limit, int):
            raise TypeError('Expected property connection_limit to be a int')
        __self__.connection_limit = connection_limit
        """
        The maximum number of connections allowed
        for the Listener.
        """
        __props__['connectionLimit'] = connection_limit

        if default_pool_id and not isinstance(default_pool_id, basestring):
            raise TypeError('Expected property default_pool_id to be a basestring')
        __self__.default_pool_id = default_pool_id
        """
        The ID of the default pool with which the
        Listener is associated. Changing this creates a new Listener.
        """
        __props__['defaultPoolId'] = default_pool_id

        if default_tls_container_ref and not isinstance(default_tls_container_ref, basestring):
            raise TypeError('Expected property default_tls_container_ref to be a basestring')
        __self__.default_tls_container_ref = default_tls_container_ref
        """
        A reference to a Barbican Secrets
        container which stores TLS information. This is required if the protocol
        is `TERMINATED_HTTPS`. See
        [here](https://wiki.openstack.org/wiki/Network/LBaaS/docs/how-to-create-tls-loadbalancer)
        for more information.
        """
        __props__['defaultTlsContainerRef'] = default_tls_container_ref

        if description and not isinstance(description, basestring):
            raise TypeError('Expected property description to be a basestring')
        __self__.description = description
        """
        Human-readable description for the Listener.
        """
        __props__['description'] = description

        if not loadbalancer_id:
            raise TypeError('Missing required property loadbalancer_id')
        elif not isinstance(loadbalancer_id, basestring):
            raise TypeError('Expected property loadbalancer_id to be a basestring')
        __self__.loadbalancer_id = loadbalancer_id
        """
        The load balancer on which to provision this
        Listener. Changing this creates a new Listener.
        """
        __props__['loadbalancerId'] = loadbalancer_id

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        Human-readable name for the Listener. Does not have
        to be unique.
        """
        __props__['name'] = name

        if not protocol:
            raise TypeError('Missing required property protocol')
        elif not isinstance(protocol, basestring):
            raise TypeError('Expected property protocol to be a basestring')
        __self__.protocol = protocol
        """
        The protocol - can either be TCP, HTTP, HTTPS or TERMINATED_HTTPS.
        Changing this creates a new Listener.
        """
        __props__['protocol'] = protocol

        if not protocol_port:
            raise TypeError('Missing required property protocol_port')
        elif not isinstance(protocol_port, int):
            raise TypeError('Expected property protocol_port to be a int')
        __self__.protocol_port = protocol_port
        """
        The port on which to listen for client traffic.
        Changing this creates a new Listener.
        """
        __props__['protocolPort'] = protocol_port

        if region and not isinstance(region, basestring):
            raise TypeError('Expected property region to be a basestring')
        __self__.region = region
        """
        The region in which to obtain the V2 Networking client.
        A Networking client is needed to create an . If omitted, the
        `region` argument of the provider is used. Changing this creates a new
        Listener.
        """
        __props__['region'] = region

        if sni_container_refs and not isinstance(sni_container_refs, list):
            raise TypeError('Expected property sni_container_refs to be a list')
        __self__.sni_container_refs = sni_container_refs
        """
        A list of references to Barbican Secrets
        containers which store SNI information. See
        [here](https://wiki.openstack.org/wiki/Network/LBaaS/docs/how-to-create-tls-loadbalancer)
        for more information.
        """
        __props__['sniContainerRefs'] = sni_container_refs

        if tenant_id and not isinstance(tenant_id, basestring):
            raise TypeError('Expected property tenant_id to be a basestring')
        __self__.tenant_id = tenant_id
        """
        Required for admins. The UUID of the tenant who owns
        the Listener.  Only administrative users can specify a tenant UUID
        other than their own. Changing this creates a new Listener.
        """
        __props__['tenantId'] = tenant_id

        super(Listener, __self__).__init__(
            'openstack:loadbalancer/listener:Listener',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'adminStateUp' in outs:
            self.admin_state_up = outs['adminStateUp']
        if 'connectionLimit' in outs:
            self.connection_limit = outs['connectionLimit']
        if 'defaultPoolId' in outs:
            self.default_pool_id = outs['defaultPoolId']
        if 'defaultTlsContainerRef' in outs:
            self.default_tls_container_ref = outs['defaultTlsContainerRef']
        if 'description' in outs:
            self.description = outs['description']
        if 'loadbalancerId' in outs:
            self.loadbalancer_id = outs['loadbalancerId']
        if 'name' in outs:
            self.name = outs['name']
        if 'protocol' in outs:
            self.protocol = outs['protocol']
        if 'protocolPort' in outs:
            self.protocol_port = outs['protocolPort']
        if 'region' in outs:
            self.region = outs['region']
        if 'sniContainerRefs' in outs:
            self.sni_container_refs = outs['sniContainerRefs']
        if 'tenantId' in outs:
            self.tenant_id = outs['tenantId']
