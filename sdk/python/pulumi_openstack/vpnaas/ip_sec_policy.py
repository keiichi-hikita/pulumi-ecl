# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class IpSecPolicy(pulumi.CustomResource):
    """
    Manages a V2 Neutron IPSec policy resource within OpenStack.
    """
    def __init__(__self__, __name__, __opts__=None, auth_algorithm=None, description=None, encapsulation_mode=None, encryption_algorithm=None, lifetimes=None, name=None, pfs=None, region=None, tenant_id=None, transform_protocol=None, value_specs=None):
        """Create a IpSecPolicy resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if auth_algorithm and not isinstance(auth_algorithm, basestring):
            raise TypeError('Expected property auth_algorithm to be a basestring')
        __self__.auth_algorithm = auth_algorithm
        """
        The authentication hash algorithm. Valid values are sha1, sha256, sha384, sha512.
        Default is sha1. Changing this updates the algorithm of the existing policy.
        """
        __props__['authAlgorithm'] = auth_algorithm

        if description and not isinstance(description, basestring):
            raise TypeError('Expected property description to be a basestring')
        __self__.description = description
        """
        The human-readable description for the policy.
        Changing this updates the description of the existing policy.
        """
        __props__['description'] = description

        if encapsulation_mode and not isinstance(encapsulation_mode, basestring):
            raise TypeError('Expected property encapsulation_mode to be a basestring')
        __self__.encapsulation_mode = encapsulation_mode
        """
        The encapsulation mode. Valid values are tunnel and transport. Default is tunnel.
        Changing this updates the existing policy.
        """
        __props__['encapsulationMode'] = encapsulation_mode

        if encryption_algorithm and not isinstance(encryption_algorithm, basestring):
            raise TypeError('Expected property encryption_algorithm to be a basestring')
        __self__.encryption_algorithm = encryption_algorithm
        """
        The encryption algorithm. Valid values are 3des, aes-128, aes-192 and so on.
        The default value is aes-128. Changing this updates the existing policy.
        """
        __props__['encryptionAlgorithm'] = encryption_algorithm

        if lifetimes and not isinstance(lifetimes, list):
            raise TypeError('Expected property lifetimes to be a list')
        __self__.lifetimes = lifetimes
        """
        The lifetime of the security association. Consists of Unit and Value.
        - `unit` - (Optional) The units for the lifetime of the security association. Can be either seconds or kilobytes.
        Default is seconds.
        - `value` - (Optional) The value for the lifetime of the security association. Must be a positive integer.
        Default is 3600.
        """
        __props__['lifetimes'] = lifetimes

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The name of the policy. Changing this updates the name of
        the existing policy.
        """
        __props__['name'] = name

        if pfs and not isinstance(pfs, basestring):
            raise TypeError('Expected property pfs to be a basestring')
        __self__.pfs = pfs
        """
        The perfect forward secrecy mode. Valid values are Group2, Group5 and Group14. Default is Group5.
        Changing this updates the existing policy.
        """
        __props__['pfs'] = pfs

        if region and not isinstance(region, basestring):
            raise TypeError('Expected property region to be a basestring')
        __self__.region = region
        """
        The region in which to obtain the V2 Networking client.
        A Networking client is needed to create an IPSec policy. If omitted, the
        `region` argument of the provider is used. Changing this creates a new
        policy.
        """
        __props__['region'] = region

        if tenant_id and not isinstance(tenant_id, basestring):
            raise TypeError('Expected property tenant_id to be a basestring')
        __self__.tenant_id = tenant_id
        """
        The owner of the policy. Required if admin wants to
        create a policy for another project. Changing this creates a new policy.
        """
        __props__['tenantId'] = tenant_id

        if transform_protocol and not isinstance(transform_protocol, basestring):
            raise TypeError('Expected property transform_protocol to be a basestring')
        __self__.transform_protocol = transform_protocol
        """
        The transform protocol. Valid values are ESP, AH and AH-ESP.
        Changing this updates the existing policy. Default is ESP.
        """
        __props__['transformProtocol'] = transform_protocol

        if value_specs and not isinstance(value_specs, dict):
            raise TypeError('Expected property value_specs to be a dict')
        __self__.value_specs = value_specs
        """
        Map of additional options.
        """
        __props__['valueSpecs'] = value_specs

        super(IpSecPolicy, __self__).__init__(
            'openstack:vpnaas/ipSecPolicy:IpSecPolicy',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'authAlgorithm' in outs:
            self.auth_algorithm = outs['authAlgorithm']
        if 'description' in outs:
            self.description = outs['description']
        if 'encapsulationMode' in outs:
            self.encapsulation_mode = outs['encapsulationMode']
        if 'encryptionAlgorithm' in outs:
            self.encryption_algorithm = outs['encryptionAlgorithm']
        if 'lifetimes' in outs:
            self.lifetimes = outs['lifetimes']
        if 'name' in outs:
            self.name = outs['name']
        if 'pfs' in outs:
            self.pfs = outs['pfs']
        if 'region' in outs:
            self.region = outs['region']
        if 'tenantId' in outs:
            self.tenant_id = outs['tenantId']
        if 'transformProtocol' in outs:
            self.transform_protocol = outs['transformProtocol']
        if 'valueSpecs' in outs:
            self.value_specs = outs['valueSpecs']
