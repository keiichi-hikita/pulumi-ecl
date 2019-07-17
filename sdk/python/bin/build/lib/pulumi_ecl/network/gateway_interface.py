# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GatewayInterface(pulumi.CustomResource):
    aws_gw_id: pulumi.Output[str]
    """
    AWS Gateway to which this port is connected.
    Conflicts with "azure_gw_id", "gcp_gw_id", "interdc_gw_id", "internet_gw_id" and "vpn_gw_id".
    """
    azure_gw_id: pulumi.Output[str]
    """
    Azure Gateway to which this port is connected.
    Conflicts with "aws_gw_id", "gcp_gw_id", "interdc_gw_id", "internet_gw_id" and "vpn_gw_id".
    """
    description: pulumi.Output[str]
    """
    Description of the Gateway Interface resource.
    """
    gcp_gw_id: pulumi.Output[str]
    """
    GCP Gateway to which this port is connected.
    Conflicts with "aws_gw_id", "azure_gw_id", "interdc_gw_id", "internet_gw_id" and "vpn_gw_id".
    """
    gw_vipv4: pulumi.Output[str]
    """
    IP version 4 address to be assigned virtual router on VRRP.
    """
    gw_vipv6: pulumi.Output[str]
    """
    IP version 6 address to be assigned virtual router on VRRP.
    """
    interdc_gw_id: pulumi.Output[str]
    """
    Inter DC Gateway to which this port is connected.
    Conflicts with "aws_gw_id", "azure_gw_id", "gcp_gw_id", "internet_gw_id" and "vpn_gw_id".
    """
    internet_gw_id: pulumi.Output[str]
    """
    Internet GW to which this port is connected.
    Conflicts with "aws_gw_id", "azure_gw_id", "gcp_gw_id", "interdc_gw_id" and "vpn_gw_id".
    """
    name: pulumi.Output[str]
    """
    Name of the Gateway Interface resource.
    """
    netmask: pulumi.Output[float]
    """
    Netmask for IPv4 addresses.
    """
    network_id: pulumi.Output[str]
    """
    Network connected to this interface.
    """
    primary_ipv4: pulumi.Output[str]
    """
    IP version 4 address to be assigned to primary device on VRRP.
    """
    primary_ipv6: pulumi.Output[str]
    """
    IP version 6 address to be assigned to primary device on VRRP.
    """
    region: pulumi.Output[str]
    """
    The region in which to obtain the V2 Network client.
    Gateway interfaces are associated with accounts, but a Network client is needed to
    create one. If omitted, the `region` argument of the provider is used.
    Changing this creates a new gateway interface.
    """
    secondary_ipv4: pulumi.Output[str]
    """
    IP version 4 address to be assigned to secondary device on VRRP.
    """
    secondary_ipv6: pulumi.Output[str]
    """
    IP version 6 address to be assigned to secondary device on VRRP.
    """
    service_type: pulumi.Output[str]
    """
    Service type for this interface.
    Must be one of "aws", "azure", "gcp", "interdc", "internet" and "vpn".
    """
    tenant_id: pulumi.Output[str]
    """
    Tenant ID of the owner (UUID).
    """
    vpn_gw_id: pulumi.Output[str]
    """
    VPN Gateway to which this port is connected.
    Conflicts with "aws_gw_id", "azure_gw_id", "gcp_gw_id", "interdc_gw_id" and "internet_gw_id".
    """
    vrid: pulumi.Output[float]
    """
    VRRP Group ID for this GW Interface.
    """
    def __init__(__self__, resource_name, opts=None, aws_gw_id=None, azure_gw_id=None, description=None, gcp_gw_id=None, gw_vipv4=None, gw_vipv6=None, interdc_gw_id=None, internet_gw_id=None, name=None, netmask=None, network_id=None, primary_ipv4=None, primary_ipv6=None, region=None, secondary_ipv4=None, secondary_ipv6=None, service_type=None, tenant_id=None, vpn_gw_id=None, vrid=None, __name__=None, __opts__=None):
        """
        Manages a V2 gateway interface resource within Enterprise Cloud.
        
        > **Notice** We only support Gateway interface with service_type "internet" for now.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] aws_gw_id: AWS Gateway to which this port is connected.
               Conflicts with "azure_gw_id", "gcp_gw_id", "interdc_gw_id", "internet_gw_id" and "vpn_gw_id".
        :param pulumi.Input[str] azure_gw_id: Azure Gateway to which this port is connected.
               Conflicts with "aws_gw_id", "gcp_gw_id", "interdc_gw_id", "internet_gw_id" and "vpn_gw_id".
        :param pulumi.Input[str] description: Description of the Gateway Interface resource.
        :param pulumi.Input[str] gcp_gw_id: GCP Gateway to which this port is connected.
               Conflicts with "aws_gw_id", "azure_gw_id", "interdc_gw_id", "internet_gw_id" and "vpn_gw_id".
        :param pulumi.Input[str] gw_vipv4: IP version 4 address to be assigned virtual router on VRRP.
        :param pulumi.Input[str] gw_vipv6: IP version 6 address to be assigned virtual router on VRRP.
        :param pulumi.Input[str] interdc_gw_id: Inter DC Gateway to which this port is connected.
               Conflicts with "aws_gw_id", "azure_gw_id", "gcp_gw_id", "internet_gw_id" and "vpn_gw_id".
        :param pulumi.Input[str] internet_gw_id: Internet GW to which this port is connected.
               Conflicts with "aws_gw_id", "azure_gw_id", "gcp_gw_id", "interdc_gw_id" and "vpn_gw_id".
        :param pulumi.Input[str] name: Name of the Gateway Interface resource.
        :param pulumi.Input[float] netmask: Netmask for IPv4 addresses.
        :param pulumi.Input[str] network_id: Network connected to this interface.
        :param pulumi.Input[str] primary_ipv4: IP version 4 address to be assigned to primary device on VRRP.
        :param pulumi.Input[str] primary_ipv6: IP version 6 address to be assigned to primary device on VRRP.
        :param pulumi.Input[str] region: The region in which to obtain the V2 Network client.
               Gateway interfaces are associated with accounts, but a Network client is needed to
               create one. If omitted, the `region` argument of the provider is used.
               Changing this creates a new gateway interface.
        :param pulumi.Input[str] secondary_ipv4: IP version 4 address to be assigned to secondary device on VRRP.
        :param pulumi.Input[str] secondary_ipv6: IP version 6 address to be assigned to secondary device on VRRP.
        :param pulumi.Input[str] service_type: Service type for this interface.
               Must be one of "aws", "azure", "gcp", "interdc", "internet" and "vpn".
        :param pulumi.Input[str] tenant_id: Tenant ID of the owner (UUID).
        :param pulumi.Input[str] vpn_gw_id: VPN Gateway to which this port is connected.
               Conflicts with "aws_gw_id", "azure_gw_id", "gcp_gw_id", "interdc_gw_id" and "internet_gw_id".
        :param pulumi.Input[float] vrid: VRRP Group ID for this GW Interface.
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

        __props__['aws_gw_id'] = aws_gw_id

        __props__['azure_gw_id'] = azure_gw_id

        __props__['description'] = description

        __props__['gcp_gw_id'] = gcp_gw_id

        if gw_vipv4 is None:
            raise TypeError("Missing required property 'gw_vipv4'")
        __props__['gw_vipv4'] = gw_vipv4

        __props__['gw_vipv6'] = gw_vipv6

        __props__['interdc_gw_id'] = interdc_gw_id

        __props__['internet_gw_id'] = internet_gw_id

        __props__['name'] = name

        if netmask is None:
            raise TypeError("Missing required property 'netmask'")
        __props__['netmask'] = netmask

        if network_id is None:
            raise TypeError("Missing required property 'network_id'")
        __props__['network_id'] = network_id

        if primary_ipv4 is None:
            raise TypeError("Missing required property 'primary_ipv4'")
        __props__['primary_ipv4'] = primary_ipv4

        __props__['primary_ipv6'] = primary_ipv6

        __props__['region'] = region

        if secondary_ipv4 is None:
            raise TypeError("Missing required property 'secondary_ipv4'")
        __props__['secondary_ipv4'] = secondary_ipv4

        __props__['secondary_ipv6'] = secondary_ipv6

        if service_type is None:
            raise TypeError("Missing required property 'service_type'")
        __props__['service_type'] = service_type

        __props__['tenant_id'] = tenant_id

        __props__['vpn_gw_id'] = vpn_gw_id

        if vrid is None:
            raise TypeError("Missing required property 'vrid'")
        __props__['vrid'] = vrid

        super(GatewayInterface, __self__).__init__(
            'ecl:network/gatewayInterface:GatewayInterface',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
