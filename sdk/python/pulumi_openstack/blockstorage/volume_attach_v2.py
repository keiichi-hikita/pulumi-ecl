# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class VolumeAttachV2(pulumi.CustomResource):
    """
    This resource is experimental and may be removed in the future! Feedback
    is requested if you find this resource useful or if you find any problems
    with it.
    
    Creates a general purpose attachment connection to a Block
    Storage volume using the OpenStack Block Storage (Cinder) v2 API.
    Depending on your Block Storage service configuration, this
    resource can assist in attaching a volume to a non-OpenStack resource
    such as a bare-metal server or a remote virtual machine in a
    different cloud provider.
    
    This does not actually attach a volume to an instance. Please use
    the `openstack_compute_volume_attach_v2` resource for that.
    """
    def __init__(__self__, __name__, __opts__=None, attach_mode=None, device=None, host_name=None, initiator=None, ip_address=None, multipath=None, os_type=None, platform=None, region=None, volume_id=None, wwnn=None, wwpns=None):
        """Create a VolumeAttachV2 resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['attachMode'] = attach_mode

        __props__['device'] = device

        if not host_name:
            raise TypeError('Missing required property host_name')
        __props__['hostName'] = host_name

        __props__['initiator'] = initiator

        __props__['ipAddress'] = ip_address

        __props__['multipath'] = multipath

        __props__['osType'] = os_type

        __props__['platform'] = platform

        __props__['region'] = region

        if not volume_id:
            raise TypeError('Missing required property volume_id')
        __props__['volumeId'] = volume_id

        __props__['wwnn'] = wwnn

        __props__['wwpns'] = wwpns

        __props__['data'] = None
        __props__['driver_volume_type'] = None
        __props__['mount_point_base'] = None

        super(VolumeAttachV2, __self__).__init__(
            'openstack:blockstorage/volumeAttachV2:VolumeAttachV2',
            __name__,
            __props__,
            __opts__)

