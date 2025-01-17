# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Volume(pulumi.CustomResource):
    attachments: pulumi.Output[list]
    """
    If a volume is attached to an instance, this attribute will
    display the Attachment ID, Instance ID, and the Device as the Instance
    sees it.
    """
    availability_zone: pulumi.Output[str]
    """
    The availability zone for the volume.
    Changing this creates a new volume.
    """
    description: pulumi.Output[str]
    """
    A description of the volume. Changing this updates
    the volume's description.
    """
    image_id: pulumi.Output[str]
    """
    The image ID from which to create the volume.
    Changing this creates a new volume.
    """
    metadata: pulumi.Output[dict]
    """
    Metadata key/value pairs to associate with the volume.
    Changing this updates the existing volume metadata.
    """
    name: pulumi.Output[str]
    """
    A unique name for the volume. Changing this updates the
    volume's name.
    """
    region: pulumi.Output[str]
    """
    The region in which to create the volume. If
    omitted, the `region` argument of the provider is used. Changing this
    creates a new volume.
    """
    size: pulumi.Output[float]
    """
    The size of the volume to create (in gigabytes). Changing
    this creates a new volume.
    User can choice following volume sizes.
    """
    source_replica: pulumi.Output[str]
    """
    The volume ID to replicate with.
    """
    volume_type: pulumi.Output[str]
    """
    The type of volume to create.
    Changing this creates a new volume.
    """
    def __init__(__self__, resource_name, opts=None, availability_zone=None, description=None, image_id=None, metadata=None, name=None, region=None, size=None, source_replica=None, volume_type=None, __name__=None, __opts__=None):
        """
        Manages a V2 volume resource within Enterprise Cloud.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] availability_zone: The availability zone for the volume.
               Changing this creates a new volume.
        :param pulumi.Input[str] description: A description of the volume. Changing this updates
               the volume's description.
        :param pulumi.Input[str] image_id: The image ID from which to create the volume.
               Changing this creates a new volume.
        :param pulumi.Input[dict] metadata: Metadata key/value pairs to associate with the volume.
               Changing this updates the existing volume metadata.
        :param pulumi.Input[str] name: A unique name for the volume. Changing this updates the
               volume's name.
        :param pulumi.Input[str] region: The region in which to create the volume. If
               omitted, the `region` argument of the provider is used. Changing this
               creates a new volume.
        :param pulumi.Input[float] size: The size of the volume to create (in gigabytes). Changing
               this creates a new volume.
               User can choice following volume sizes.
        :param pulumi.Input[str] source_replica: The volume ID to replicate with.
        :param pulumi.Input[str] volume_type: The type of volume to create.
               Changing this creates a new volume.
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

        __props__['availability_zone'] = availability_zone

        __props__['description'] = description

        __props__['image_id'] = image_id

        __props__['metadata'] = metadata

        __props__['name'] = name

        __props__['region'] = region

        if size is None:
            raise TypeError("Missing required property 'size'")
        __props__['size'] = size

        __props__['source_replica'] = source_replica

        __props__['volume_type'] = volume_type

        __props__['attachments'] = None

        super(Volume, __self__).__init__(
            'ecl:compute/volume:Volume',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

