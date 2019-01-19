# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Instance(pulumi.CustomResource):
    access_ip_v4: pulumi.Output[str]
    """
    The first detected Fixed IPv4 address _or_ the
    Floating IP.
    """
    access_ip_v6: pulumi.Output[str]
    """
    The first detected Fixed IPv6 address.
    """
    admin_pass: pulumi.Output[str]
    """
    The administrative password to assign to the server.
    Changing this changes the root password on the existing server.
    """
    all_metadata: pulumi.Output[dict]
    """
    Contains all instance metadata, even metadata not set
    by Terraform.
    """
    availability_zone: pulumi.Output[str]
    """
    The availability zone in which to create
    the server. Changing this creates a new server.
    """
    block_devices: pulumi.Output[list]
    """
    Configuration of block devices. The block_device
    structure is documented below. Changing this creates a new server.
    You can specify multiple block devices which will create an instance with
    multiple disks. This configuration is very flexible, so please see the
    following [reference](http://docs.openstack.org/developer/nova/block_device_mapping.html)
    for more information.
    """
    config_drive: pulumi.Output[bool]
    """
    Whether to use the config_drive feature to
    configure the instance. Changing this creates a new server.
    """
    flavor_id: pulumi.Output[str]
    """
    The flavor ID of
    the desired flavor for the server. Changing this resizes the existing server.
    """
    flavor_name: pulumi.Output[str]
    """
    The name of the
    desired flavor for the server. Changing this resizes the existing server.
    """
    force_delete: pulumi.Output[bool]
    """
    Whether to force the OpenStack instance to be
    forcefully deleted. This is useful for environments that have reclaim / soft
    deletion enabled.
    """
    image_id: pulumi.Output[str]
    """
    (Optional; Required if `image_name` is empty and not booting
    from a volume. Do not specify if booting from a volume.) The image ID of
    the desired image for the server. Changing this creates a new server.
    """
    image_name: pulumi.Output[str]
    """
    (Optional; Required if `image_id` is empty and not booting
    from a volume. Do not specify if booting from a volume.) The name of the
    desired image for the server. Changing this creates a new server.
    """
    key_pair: pulumi.Output[str]
    """
    The name of a key pair to put on the server. The key
    pair must already be created and associated with the tenant's account.
    Changing this creates a new server.
    """
    metadata: pulumi.Output[dict]
    """
    Metadata key/value pairs to make available from
    within the instance. Changing this updates the existing server metadata.
    """
    name: pulumi.Output[str]
    """
    A unique name for the resource.
    """
    networks: pulumi.Output[list]
    """
    An array of one or more networks to attach to the
    instance. The network object structure is documented below. Changing this
    creates a new server.
    """
    personalities: pulumi.Output[list]
    """
    Customize the personality of an instance by
    defining one or more files and their contents. The personality structure
    is described below.
    """
    power_state: pulumi.Output[str]
    """
    Provide the VM state. Only 'active' and 'shutoff'
    are supported values. *Note*: If the initial power_state is the shutoff
    the VM will be stopped immediately after build and the provisioners like
    remote-exec or files are not supported.
    """
    region: pulumi.Output[str]
    """
    The region in which to create the server instance. If
    omitted, the `region` argument of the provider is used. Changing this
    creates a new server.
    """
    scheduler_hints: pulumi.Output[list]
    """
    Provide the Nova scheduler with hints on how
    the instance should be launched. The available hints are described below.
    """
    security_groups: pulumi.Output[list]
    """
    An array of one or more security group names
    to associate with the server. Changing this results in adding/removing
    security groups from the existing server. *Note*: When attaching the
    instance to networks using Ports, place the security groups on the Port
    and not the instance.
    """
    stop_before_destroy: pulumi.Output[bool]
    """
    Whether to try stop instance gracefully
    before destroying it, thus giving chance for guest OS daemons to stop correctly.
    If instance doesn't stop within timeout, it will be destroyed anyway.
    """
    user_data: pulumi.Output[str]
    """
    The user data to provide when launching the instance.
    Changing this creates a new server.
    """
    vendor_options: pulumi.Output[dict]
    """
    Map of additional vendor-specific options.
    Supported options are described below.
    """
    def __init__(__self__, __name__, __opts__=None, access_ip_v4=None, access_ip_v6=None, admin_pass=None, availability_zone=None, block_devices=None, config_drive=None, flavor_id=None, flavor_name=None, force_delete=None, image_id=None, image_name=None, key_pair=None, metadata=None, name=None, networks=None, personalities=None, power_state=None, region=None, scheduler_hints=None, security_groups=None, stop_before_destroy=None, user_data=None, vendor_options=None):
        """
        Manages a V2 VM instance resource within OpenStack.
        
        
        :param str __name__: The name of the resource.
        :param pulumi.ResourceOptions __opts__: Options for the resource.
        :param pulumi.Input[str] access_ip_v4: The first detected Fixed IPv4 address _or_ the
               Floating IP.
        :param pulumi.Input[str] access_ip_v6: The first detected Fixed IPv6 address.
        :param pulumi.Input[str] admin_pass: The administrative password to assign to the server.
               Changing this changes the root password on the existing server.
        :param pulumi.Input[str] availability_zone: The availability zone in which to create
               the server. Changing this creates a new server.
        :param pulumi.Input[list] block_devices: Configuration of block devices. The block_device
               structure is documented below. Changing this creates a new server.
               You can specify multiple block devices which will create an instance with
               multiple disks. This configuration is very flexible, so please see the
               following [reference](http://docs.openstack.org/developer/nova/block_device_mapping.html)
               for more information.
        :param pulumi.Input[bool] config_drive: Whether to use the config_drive feature to
               configure the instance. Changing this creates a new server.
        :param pulumi.Input[str] flavor_id: The flavor ID of
               the desired flavor for the server. Changing this resizes the existing server.
        :param pulumi.Input[str] flavor_name: The name of the
               desired flavor for the server. Changing this resizes the existing server.
        :param pulumi.Input[bool] force_delete: Whether to force the OpenStack instance to be
               forcefully deleted. This is useful for environments that have reclaim / soft
               deletion enabled.
        :param pulumi.Input[str] image_id: (Optional; Required if `image_name` is empty and not booting
               from a volume. Do not specify if booting from a volume.) The image ID of
               the desired image for the server. Changing this creates a new server.
        :param pulumi.Input[str] image_name: (Optional; Required if `image_id` is empty and not booting
               from a volume. Do not specify if booting from a volume.) The name of the
               desired image for the server. Changing this creates a new server.
        :param pulumi.Input[str] key_pair: The name of a key pair to put on the server. The key
               pair must already be created and associated with the tenant's account.
               Changing this creates a new server.
        :param pulumi.Input[dict] metadata: Metadata key/value pairs to make available from
               within the instance. Changing this updates the existing server metadata.
        :param pulumi.Input[str] name: A unique name for the resource.
        :param pulumi.Input[list] networks: An array of one or more networks to attach to the
               instance. The network object structure is documented below. Changing this
               creates a new server.
        :param pulumi.Input[list] personalities: Customize the personality of an instance by
               defining one or more files and their contents. The personality structure
               is described below.
        :param pulumi.Input[str] power_state: Provide the VM state. Only 'active' and 'shutoff'
               are supported values. *Note*: If the initial power_state is the shutoff
               the VM will be stopped immediately after build and the provisioners like
               remote-exec or files are not supported.
        :param pulumi.Input[str] region: The region in which to create the server instance. If
               omitted, the `region` argument of the provider is used. Changing this
               creates a new server.
        :param pulumi.Input[list] scheduler_hints: Provide the Nova scheduler with hints on how
               the instance should be launched. The available hints are described below.
        :param pulumi.Input[list] security_groups: An array of one or more security group names
               to associate with the server. Changing this results in adding/removing
               security groups from the existing server. *Note*: When attaching the
               instance to networks using Ports, place the security groups on the Port
               and not the instance.
        :param pulumi.Input[bool] stop_before_destroy: Whether to try stop instance gracefully
               before destroying it, thus giving chance for guest OS daemons to stop correctly.
               If instance doesn't stop within timeout, it will be destroyed anyway.
        :param pulumi.Input[str] user_data: The user data to provide when launching the instance.
               Changing this creates a new server.
        :param pulumi.Input[dict] vendor_options: Map of additional vendor-specific options.
               Supported options are described below.
        """
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['access_ip_v4'] = access_ip_v4

        __props__['access_ip_v6'] = access_ip_v6

        __props__['admin_pass'] = admin_pass

        __props__['availability_zone'] = availability_zone

        __props__['block_devices'] = block_devices

        __props__['config_drive'] = config_drive

        __props__['flavor_id'] = flavor_id

        __props__['flavor_name'] = flavor_name

        __props__['force_delete'] = force_delete

        __props__['image_id'] = image_id

        __props__['image_name'] = image_name

        __props__['key_pair'] = key_pair

        __props__['metadata'] = metadata

        __props__['name'] = name

        __props__['networks'] = networks

        __props__['personalities'] = personalities

        __props__['power_state'] = power_state

        __props__['region'] = region

        __props__['scheduler_hints'] = scheduler_hints

        __props__['security_groups'] = security_groups

        __props__['stop_before_destroy'] = stop_before_destroy

        __props__['user_data'] = user_data

        __props__['vendor_options'] = vendor_options

        __props__['all_metadata'] = None

        super(Instance, __self__).__init__(
            'openstack:compute/instance:Instance',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

