# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class VolumeV1(pulumi.CustomResource):
    """
    Manages a V1 volume resource within OpenStack.
    """
    def __init__(__self__, __name__, __opts__=None, availability_zone=None, description=None, image_id=None, metadata=None, name=None, region=None, size=None, snapshot_id=None, source_vol_id=None, volume_type=None):
        """Create a VolumeV1 resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if availability_zone and not isinstance(availability_zone, basestring):
            raise TypeError('Expected property availability_zone to be a basestring')
        __self__.availability_zone = availability_zone
        """
        The availability zone for the volume.
        Changing this creates a new volume.
        """
        __props__['availabilityZone'] = availability_zone

        if description and not isinstance(description, basestring):
            raise TypeError('Expected property description to be a basestring')
        __self__.description = description
        """
        A description of the volume. Changing this updates
        the volume's description.
        """
        __props__['description'] = description

        if image_id and not isinstance(image_id, basestring):
            raise TypeError('Expected property image_id to be a basestring')
        __self__.image_id = image_id
        """
        The image ID from which to create the volume.
        Changing this creates a new volume.
        """
        __props__['imageId'] = image_id

        if metadata and not isinstance(metadata, dict):
            raise TypeError('Expected property metadata to be a dict')
        __self__.metadata = metadata
        """
        Metadata key/value pairs to associate with the volume.
        Changing this updates the existing volume metadata.
        """
        __props__['metadata'] = metadata

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        A unique name for the volume. Changing this updates the
        volume's name.
        """
        __props__['name'] = name

        if region and not isinstance(region, basestring):
            raise TypeError('Expected property region to be a basestring')
        __self__.region = region
        """
        The region in which to create the volume. If
        omitted, the `region` argument of the provider is used. Changing this
        creates a new volume.
        """
        __props__['region'] = region

        if not size:
            raise TypeError('Missing required property size')
        elif not isinstance(size, int):
            raise TypeError('Expected property size to be a int')
        __self__.size = size
        """
        The size of the volume to create (in gigabytes). Changing
        this creates a new volume.
        """
        __props__['size'] = size

        if snapshot_id and not isinstance(snapshot_id, basestring):
            raise TypeError('Expected property snapshot_id to be a basestring')
        __self__.snapshot_id = snapshot_id
        """
        The snapshot ID from which to create the volume.
        Changing this creates a new volume.
        """
        __props__['snapshotId'] = snapshot_id

        if source_vol_id and not isinstance(source_vol_id, basestring):
            raise TypeError('Expected property source_vol_id to be a basestring')
        __self__.source_vol_id = source_vol_id
        """
        The volume ID from which to create the volume.
        Changing this creates a new volume.
        """
        __props__['sourceVolId'] = source_vol_id

        if volume_type and not isinstance(volume_type, basestring):
            raise TypeError('Expected property volume_type to be a basestring')
        __self__.volume_type = volume_type
        """
        The type of volume to create.
        Changing this creates a new volume.
        """
        __props__['volumeType'] = volume_type

        __self__.attachments = pulumi.runtime.UNKNOWN
        """
        If a volume is attached to an instance, this attribute will
        display the Attachment ID, Instance ID, and the Device as the Instance
        sees it.
        """

        super(VolumeV1, __self__).__init__(
            'openstack:blockstorage/volumeV1:VolumeV1',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'attachments' in outs:
            self.attachments = outs['attachments']
        if 'availabilityZone' in outs:
            self.availability_zone = outs['availabilityZone']
        if 'description' in outs:
            self.description = outs['description']
        if 'imageId' in outs:
            self.image_id = outs['imageId']
        if 'metadata' in outs:
            self.metadata = outs['metadata']
        if 'name' in outs:
            self.name = outs['name']
        if 'region' in outs:
            self.region = outs['region']
        if 'size' in outs:
            self.size = outs['size']
        if 'snapshotId' in outs:
            self.snapshot_id = outs['snapshotId']
        if 'sourceVolId' in outs:
            self.source_vol_id = outs['sourceVolId']
        if 'volumeType' in outs:
            self.volume_type = outs['volumeType']
