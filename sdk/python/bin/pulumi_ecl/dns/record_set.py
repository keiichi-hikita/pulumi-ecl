# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class RecordSet(pulumi.CustomResource):
    description: pulumi.Output[str]
    """
    Description for the recordset.
    """
    name: pulumi.Output[str]
    """
    DNS Name for the recordset.
    """
    record: pulumi.Output[str]
    """
    Data for the recordset.
    """
    ttl: pulumi.Output[float]
    """
    TTL (Time to Live) for the recordset.
    """
    type: pulumi.Output[str]
    """
    RRTYPE of the recordset. 
    Valid Values: A | AAAA | MX | CNAME | SRV | SPF | TXT | PTR | NS
    """
    zone_id: pulumi.Output[str]
    """
    Zone ID for the recordset.
    """
    def __init__(__self__, resource_name, opts=None, description=None, name=None, record=None, ttl=None, type=None, zone_id=None, __name__=None, __opts__=None):
        """
        Manages a V2 recordset resource within Enterprise Cloud.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: Description for the recordset.
        :param pulumi.Input[str] name: DNS Name for the recordset.
        :param pulumi.Input[str] record: Data for the recordset.
        :param pulumi.Input[float] ttl: TTL (Time to Live) for the recordset.
        :param pulumi.Input[str] type: RRTYPE of the recordset. 
               Valid Values: A | AAAA | MX | CNAME | SRV | SPF | TXT | PTR | NS
        :param pulumi.Input[str] zone_id: Zone ID for the recordset.
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

        __props__['description'] = description

        __props__['name'] = name

        if record is None:
            raise TypeError("Missing required property 'record'")
        __props__['record'] = record

        if ttl is None:
            raise TypeError("Missing required property 'ttl'")
        __props__['ttl'] = ttl

        if type is None:
            raise TypeError("Missing required property 'type'")
        __props__['type'] = type

        if zone_id is None:
            raise TypeError("Missing required property 'zone_id'")
        __props__['zone_id'] = zone_id

        super(RecordSet, __self__).__init__(
            'ecl:dns/recordSet:RecordSet',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

