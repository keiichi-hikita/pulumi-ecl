# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class Project(pulumi.CustomResource):
    """
    Manages a V3 Project resource within OpenStack Keystone.
    
    Note: You _must_ have admin privileges in your OpenStack cloud to use
    this resource.
    """
    def __init__(__self__, __name__, __opts__=None, description=None, domain_id=None, enabled=None, is_domain=None, name=None, parent_id=None, region=None):
        """Create a Project resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['description'] = description

        __props__['domain_id'] = domain_id

        __props__['enabled'] = enabled

        __props__['is_domain'] = is_domain

        __props__['name'] = name

        __props__['parent_id'] = parent_id

        __props__['region'] = region

        super(Project, __self__).__init__(
            'openstack:identity/project:Project',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

