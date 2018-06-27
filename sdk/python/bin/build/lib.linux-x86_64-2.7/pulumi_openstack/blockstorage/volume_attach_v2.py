# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

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
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if attach_mode and not isinstance(attach_mode, basestring):
            raise TypeError('Expected property attach_mode to be a basestring')
        __self__.attach_mode = attach_mode
        """
        Specify whether to attach the volume as Read-Only
        (`ro`) or Read-Write (`rw`). Only values of `ro` and `rw` are accepted.
        If left unspecified, the Block Storage API will apply a default of `rw`.
        """
        __props__['attachMode'] = attach_mode

        if device and not isinstance(device, basestring):
            raise TypeError('Expected property device to be a basestring')
        __self__.device = device
        """
        The device to tell the Block Storage service this
        volume will be attached as. This is purely for informational purposes.
        You can specify `auto` or a device such as `/dev/vdc`.
        """
        __props__['device'] = device

        if not host_name:
            raise TypeError('Missing required property host_name')
        elif not isinstance(host_name, basestring):
            raise TypeError('Expected property host_name to be a basestring')
        __self__.host_name = host_name
        """
        The host to attach the volume to.
        """
        __props__['hostName'] = host_name

        if initiator and not isinstance(initiator, basestring):
            raise TypeError('Expected property initiator to be a basestring')
        __self__.initiator = initiator
        """
        The iSCSI initiator string to make the connection.
        """
        __props__['initiator'] = initiator

        if ip_address and not isinstance(ip_address, basestring):
            raise TypeError('Expected property ip_address to be a basestring')
        __self__.ip_address = ip_address
        """
        The IP address of the `host_name` above.
        """
        __props__['ipAddress'] = ip_address

        if multipath and not isinstance(multipath, bool):
            raise TypeError('Expected property multipath to be a bool')
        __self__.multipath = multipath
        """
        Whether to connect to this volume via multipath.
        """
        __props__['multipath'] = multipath

        if os_type and not isinstance(os_type, basestring):
            raise TypeError('Expected property os_type to be a basestring')
        __self__.os_type = os_type
        """
        The iSCSI initiator OS type.
        """
        __props__['osType'] = os_type

        if platform and not isinstance(platform, basestring):
            raise TypeError('Expected property platform to be a basestring')
        __self__.platform = platform
        """
        The iSCSI initiator platform.
        """
        __props__['platform'] = platform

        if region and not isinstance(region, basestring):
            raise TypeError('Expected property region to be a basestring')
        __self__.region = region
        """
        The region in which to obtain the V2 Block Storage
        client. A Block Storage client is needed to create a volume attachment.
        If omitted, the `region` argument of the provider is used. Changing this
        creates a new volume attachment.
        """
        __props__['region'] = region

        if not volume_id:
            raise TypeError('Missing required property volume_id')
        elif not isinstance(volume_id, basestring):
            raise TypeError('Expected property volume_id to be a basestring')
        __self__.volume_id = volume_id
        """
        The ID of the Volume to attach to an Instance.
        """
        __props__['volumeId'] = volume_id

        if wwnn and not isinstance(wwnn, basestring):
            raise TypeError('Expected property wwnn to be a basestring')
        __self__.wwnn = wwnn
        """
        A wwnn name. Used for Fibre Channel connections.
        """
        __props__['wwnn'] = wwnn

        if wwpns and not isinstance(wwpns, list):
            raise TypeError('Expected property wwpns to be a list')
        __self__.wwpns = wwpns
        """
        An array of wwpn strings. Used for Fibre Channel
        connections.
        """
        __props__['wwpns'] = wwpns

        __self__.data = pulumi.runtime.UNKNOWN
        """
        This is a map of key/value pairs that contain the connection
        information. You will want to pass this information to a provisioner
        script to finalize the connection. See below for more information.
        """
        __self__.driver_volume_type = pulumi.runtime.UNKNOWN
        """
        The storage driver that the volume is based on.
        """
        __self__.mount_point_base = pulumi.runtime.UNKNOWN
        """
        A mount point base name for shared storage.
        """

        super(VolumeAttachV2, __self__).__init__(
            'openstack:blockstorage/volumeAttachV2:VolumeAttachV2',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'attachMode' in outs:
            self.attach_mode = outs['attachMode']
        if 'data' in outs:
            self.data = outs['data']
        if 'device' in outs:
            self.device = outs['device']
        if 'driverVolumeType' in outs:
            self.driver_volume_type = outs['driverVolumeType']
        if 'hostName' in outs:
            self.host_name = outs['hostName']
        if 'initiator' in outs:
            self.initiator = outs['initiator']
        if 'ipAddress' in outs:
            self.ip_address = outs['ipAddress']
        if 'mountPointBase' in outs:
            self.mount_point_base = outs['mountPointBase']
        if 'multipath' in outs:
            self.multipath = outs['multipath']
        if 'osType' in outs:
            self.os_type = outs['osType']
        if 'platform' in outs:
            self.platform = outs['platform']
        if 'region' in outs:
            self.region = outs['region']
        if 'volumeId' in outs:
            self.volume_id = outs['volumeId']
        if 'wwnn' in outs:
            self.wwnn = outs['wwnn']
        if 'wwpns' in outs:
            self.wwpns = outs['wwpns']
