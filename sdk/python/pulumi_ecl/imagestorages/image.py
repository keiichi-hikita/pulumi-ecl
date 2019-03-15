# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Image(pulumi.CustomResource):
    checksum: pulumi.Output[str]
    container_format: pulumi.Output[str]
    created_at: pulumi.Output[str]
    disk_format: pulumi.Output[str]
    file: pulumi.Output[str]
    license_switch: pulumi.Output[str]
    local_file_path: pulumi.Output[str]
    metadata: pulumi.Output[dict]
    min_disk_gb: pulumi.Output[int]
    min_ram_mb: pulumi.Output[int]
    name: pulumi.Output[str]
    owner: pulumi.Output[str]
    properties: pulumi.Output[dict]
    protected: pulumi.Output[bool]
    region: pulumi.Output[str]
    schema: pulumi.Output[str]
    size_bytes: pulumi.Output[int]
    status: pulumi.Output[str]
    tags: pulumi.Output[list]
    update_at: pulumi.Output[str]
    verify_checksum: pulumi.Output[bool]
    visibility: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, container_format=None, disk_format=None, license_switch=None, local_file_path=None, min_disk_gb=None, min_ram_mb=None, name=None, properties=None, protected=None, region=None, tags=None, verify_checksum=None, visibility=None, __name__=None, __opts__=None):
        """
        Create a Image resource with the given unique name, props, and options.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] container_format
        :param pulumi.Input[str] disk_format
        :param pulumi.Input[str] license_switch
        :param pulumi.Input[str] local_file_path
        :param pulumi.Input[int] min_disk_gb
        :param pulumi.Input[int] min_ram_mb
        :param pulumi.Input[str] name
        :param pulumi.Input[dict] properties
        :param pulumi.Input[bool] protected
        :param pulumi.Input[str] region
        :param pulumi.Input[list] tags
        :param pulumi.Input[bool] verify_checksum
        :param pulumi.Input[str] visibility
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

        if container_format is None:
            raise TypeError('Missing required property container_format')
        __props__['container_format'] = container_format

        if disk_format is None:
            raise TypeError('Missing required property disk_format')
        __props__['disk_format'] = disk_format

        __props__['license_switch'] = license_switch

        if local_file_path is None:
            raise TypeError('Missing required property local_file_path')
        __props__['local_file_path'] = local_file_path

        __props__['min_disk_gb'] = min_disk_gb

        __props__['min_ram_mb'] = min_ram_mb

        __props__['name'] = name

        __props__['properties'] = properties

        __props__['protected'] = protected

        __props__['region'] = region

        __props__['tags'] = tags

        __props__['verify_checksum'] = verify_checksum

        __props__['visibility'] = visibility

        __props__['checksum'] = None
        __props__['created_at'] = None
        __props__['file'] = None
        __props__['metadata'] = None
        __props__['owner'] = None
        __props__['schema'] = None
        __props__['size_bytes'] = None
        __props__['status'] = None
        __props__['update_at'] = None

        super(Image, __self__).__init__(
            'ecl:imagestorages/image:Image',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
