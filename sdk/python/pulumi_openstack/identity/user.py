# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import pulumi
import pulumi.runtime
from .. import utilities, tables

class User(pulumi.CustomResource):
    default_project_id: pulumi.Output[str]
    """
    The default project this user belongs to.
    """
    description: pulumi.Output[str]
    """
    A description of the user.
    """
    domain_id: pulumi.Output[str]
    """
    The domain this user belongs to.
    """
    enabled: pulumi.Output[bool]
    """
    Whether the user is enabled or disabled. Valid
    values are `true` and `false`.
    """
    extra: pulumi.Output[dict]
    """
    Free-form key/value pairs of extra information.
    """
    ignore_change_password_upon_first_use: pulumi.Output[bool]
    """
    User will not have to
    change their password upon first use. Valid values are `true` and `false`.
    """
    ignore_lockout_failure_attempts: pulumi.Output[bool]
    """
    User will not have a failure
    lockout placed on their account. Valid values are `true` and `false`.
    """
    ignore_password_expiry: pulumi.Output[bool]
    """
    User's password will not expire.
    Valid values are `true` and `false`.
    """
    multi_factor_auth_enabled: pulumi.Output[bool]
    """
    Whether to enable multi-factor
    authentication. Valid values are `true` and `false`.
    """
    multi_factor_auth_rules: pulumi.Output[list]
    """
    A multi-factor authentication rule.
    The structure is documented below. Please see the
    [Ocata release notes](https://docs.openstack.org/releasenotes/keystone/ocata.html)
    for more information on how to use mulit-factor rules.
    """
    name: pulumi.Output[str]
    """
    The name of the user.
    """
    password: pulumi.Output[str]
    """
    The password for the user.
    """
    region: pulumi.Output[str]
    """
    The region in which to obtain the V3 Keystone client.
    If omitted, the `region` argument of the provider is used. Changing this
    creates a new User.
    """
    def __init__(__self__, __name__, __opts__=None, default_project_id=None, description=None, domain_id=None, enabled=None, extra=None, ignore_change_password_upon_first_use=None, ignore_lockout_failure_attempts=None, ignore_password_expiry=None, multi_factor_auth_enabled=None, multi_factor_auth_rules=None, name=None, password=None, region=None):
        """
        Manages a V3 User resource within OpenStack Keystone.
        
        Note: You _must_ have admin privileges in your OpenStack cloud to use
        this resource.
        
        
        :param str __name__: The name of the resource.
        :param pulumi.ResourceOptions __opts__: Options for the resource.
        :param pulumi.Input[str] default_project_id: The default project this user belongs to.
        :param pulumi.Input[str] description: A description of the user.
        :param pulumi.Input[str] domain_id: The domain this user belongs to.
        :param pulumi.Input[bool] enabled: Whether the user is enabled or disabled. Valid
               values are `true` and `false`.
        :param pulumi.Input[dict] extra: Free-form key/value pairs of extra information.
        :param pulumi.Input[bool] ignore_change_password_upon_first_use: User will not have to
               change their password upon first use. Valid values are `true` and `false`.
        :param pulumi.Input[bool] ignore_lockout_failure_attempts: User will not have a failure
               lockout placed on their account. Valid values are `true` and `false`.
        :param pulumi.Input[bool] ignore_password_expiry: User's password will not expire.
               Valid values are `true` and `false`.
        :param pulumi.Input[bool] multi_factor_auth_enabled: Whether to enable multi-factor
               authentication. Valid values are `true` and `false`.
        :param pulumi.Input[list] multi_factor_auth_rules: A multi-factor authentication rule.
               The structure is documented below. Please see the
               [Ocata release notes](https://docs.openstack.org/releasenotes/keystone/ocata.html)
               for more information on how to use mulit-factor rules.
        :param pulumi.Input[str] name: The name of the user.
        :param pulumi.Input[str] password: The password for the user.
        :param pulumi.Input[str] region: The region in which to obtain the V3 Keystone client.
               If omitted, the `region` argument of the provider is used. Changing this
               creates a new User.
        """
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['default_project_id'] = default_project_id

        __props__['description'] = description

        __props__['domain_id'] = domain_id

        __props__['enabled'] = enabled

        __props__['extra'] = extra

        __props__['ignore_change_password_upon_first_use'] = ignore_change_password_upon_first_use

        __props__['ignore_lockout_failure_attempts'] = ignore_lockout_failure_attempts

        __props__['ignore_password_expiry'] = ignore_password_expiry

        __props__['multi_factor_auth_enabled'] = multi_factor_auth_enabled

        __props__['multi_factor_auth_rules'] = multi_factor_auth_rules

        __props__['name'] = name

        __props__['password'] = password

        __props__['region'] = region

        super(User, __self__).__init__(
            'openstack:identity/user:User',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

