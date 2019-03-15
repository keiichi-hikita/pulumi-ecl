# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class Instance(pulumi.CustomResource):
    """
    Manages a V2 VM instance resource within Enterprise Cloud.
    """
    def __init__(__self__, __name__, __opts__=None, access_ip_v4=None, availability_zone=None, block_devices=None, flavor_id=None, flavor_name=None, image_id=None, image_name=None, key_pair=None, metadata=None, name=None, networks=None, power_state=None, region=None, stop_before_destroy=None, user_data=None):
        """Create a Instance resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if access_ip_v4 and not isinstance(access_ip_v4, basestring):
            raise TypeError('Expected property access_ip_v4 to be a basestring')
        __self__.access_ip_v4 = access_ip_v4
        """
        The first detected Fixed IPv4 address _or_ the
        Floating IP.
        """
        __props__['accessIpV4'] = access_ip_v4

        if availability_zone and not isinstance(availability_zone, basestring):
            raise TypeError('Expected property availability_zone to be a basestring')
        __self__.availability_zone = availability_zone
        """
        The availability zone in which to create
        the server. Changing this creates a new server.
        """
        __props__['availabilityZone'] = availability_zone

        if block_devices and not isinstance(block_devices, list):
            raise TypeError('Expected property block_devices to be a list')
        __self__.block_devices = block_devices
        """
        Configuration of block devices. The block_device
        structure is documented below. Changing this creates a new server.
        You can specify multiple block devices which will create an instance with
        multiple disks. This configuration is very flexible, so please see the
        following [reference](http://docs.openstack.org/developer/nova/block_device_mapping.html)
        for more information.
        """
        __props__['blockDevices'] = block_devices

        if flavor_id and not isinstance(flavor_id, basestring):
            raise TypeError('Expected property flavor_id to be a basestring')
        __self__.flavor_id = flavor_id
        """
        The flavor ID of
        the desired flavor for the server. Changing this resizes the existing server.
        """
        __props__['flavorId'] = flavor_id

        if flavor_name and not isinstance(flavor_name, basestring):
            raise TypeError('Expected property flavor_name to be a basestring')
        __self__.flavor_name = flavor_name
        """
        The name of the
        desired flavor for the server. Changing this resizes the existing server.
        """
        __props__['flavorName'] = flavor_name

        if image_id and not isinstance(image_id, basestring):
            raise TypeError('Expected property image_id to be a basestring')
        __self__.image_id = image_id
        """
        (Optional; Required if `image_name` is empty and not booting
        from a volume. Do not specify if booting from a volume.) The image ID of
        the desired image for the server. Changing this creates a new server.
        """
        __props__['imageId'] = image_id

        if image_name and not isinstance(image_name, basestring):
            raise TypeError('Expected property image_name to be a basestring')
        __self__.image_name = image_name
        """
        (Optional; Required if `image_id` is empty and not booting
        from a volume. Do not specify if booting from a volume.) The name of the
        desired image for the server. Changing this creates a new server.
        """
        __props__['imageName'] = image_name

        if key_pair and not isinstance(key_pair, basestring):
            raise TypeError('Expected property key_pair to be a basestring')
        __self__.key_pair = key_pair
        """
        The name of a key pair to put on the server. The key
        pair must already be created and associated with the tenant's account.
        Changing this creates a new server.
        """
        __props__['keyPair'] = key_pair

        if metadata and not isinstance(metadata, dict):
            raise TypeError('Expected property metadata to be a dict')
        __self__.metadata = metadata
        """
        Metadata key/value pairs to make available from
        within the instance. Changing this updates the existing server metadata.
        """
        __props__['metadata'] = metadata

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        A unique name for the resource.
        """
        __props__['name'] = name

        if networks and not isinstance(networks, list):
            raise TypeError('Expected property networks to be a list')
        __self__.networks = networks
        """
        An array of one or more networks to attach to the
        instance. The network object structure is documented below. Changing this
        creates a new server.
        """
        __props__['networks'] = networks

        if power_state and not isinstance(power_state, basestring):
            raise TypeError('Expected property power_state to be a basestring')
        __self__.power_state = power_state
        """
        Provide the VM state. Only 'active' and 'shutoff'
        are supported values. *Note*: If the initial power_state is the shutoff
        the VM will be stopped immediately after build and the provisioners like
        remote-exec or files are not supported.
        """
        __props__['powerState'] = power_state

        if region and not isinstance(region, basestring):
            raise TypeError('Expected property region to be a basestring')
        __self__.region = region
        """
        The region in which to create the server instance. If
        omitted, the `region` argument of the provider is used. Changing this
        creates a new server.
        """
        __props__['region'] = region

        if stop_before_destroy and not isinstance(stop_before_destroy, bool):
            raise TypeError('Expected property stop_before_destroy to be a bool')
        __self__.stop_before_destroy = stop_before_destroy
        """
        Whether to try stop instance gracefully
        before destroying it, thus giving chance for guest OS daemons to stop correctly.
        If instance doesn't stop within timeout, it will be destroyed anyway.
        """
        __props__['stopBeforeDestroy'] = stop_before_destroy

        if user_data and not isinstance(user_data, basestring):
            raise TypeError('Expected property user_data to be a basestring')
        __self__.user_data = user_data
        """
        The user data to provide when launching the instance.
        Changing this creates a new server.
        """
        __props__['userData'] = user_data

        __self__.all_metadata = pulumi.runtime.UNKNOWN
        """
        Contains all instance metadata, even metadata not set
        by Terraform.
        """

        super(Instance, __self__).__init__(
            'ecl:compute/instance:Instance',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'accessIpV4' in outs:
            self.access_ip_v4 = outs['accessIpV4']
        if 'allMetadata' in outs:
            self.all_metadata = outs['allMetadata']
        if 'availabilityZone' in outs:
            self.availability_zone = outs['availabilityZone']
        if 'blockDevices' in outs:
            self.block_devices = outs['blockDevices']
        if 'flavorId' in outs:
            self.flavor_id = outs['flavorId']
        if 'flavorName' in outs:
            self.flavor_name = outs['flavorName']
        if 'imageId' in outs:
            self.image_id = outs['imageId']
        if 'imageName' in outs:
            self.image_name = outs['imageName']
        if 'keyPair' in outs:
            self.key_pair = outs['keyPair']
        if 'metadata' in outs:
            self.metadata = outs['metadata']
        if 'name' in outs:
            self.name = outs['name']
        if 'networks' in outs:
            self.networks = outs['networks']
        if 'powerState' in outs:
            self.power_state = outs['powerState']
        if 'region' in outs:
            self.region = outs['region']
        if 'stopBeforeDestroy' in outs:
            self.stop_before_destroy = outs['stopBeforeDestroy']
        if 'userData' in outs:
            self.user_data = outs['userData']
