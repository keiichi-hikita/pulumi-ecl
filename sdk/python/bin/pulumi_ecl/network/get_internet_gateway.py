# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetInternetGatewayResult:
    """
    A collection of values returned by getInternetGateway.
    """
    def __init__(__self__, description=None, internet_gateway_id=None, internet_service_id=None, name=None, qos_option_id=None, region=None, status=None, tenant_id=None, id=None):
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        __self__.description = description
        """
        See Argument Reference above.
        """
        if internet_gateway_id and not isinstance(internet_gateway_id, str):
            raise TypeError("Expected argument 'internet_gateway_id' to be a str")
        __self__.internet_gateway_id = internet_gateway_id
        if internet_service_id and not isinstance(internet_service_id, str):
            raise TypeError("Expected argument 'internet_service_id' to be a str")
        __self__.internet_service_id = internet_service_id
        """
        See Argument Reference above.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        """
        See Argument Reference above.
        """
        if qos_option_id and not isinstance(qos_option_id, str):
            raise TypeError("Expected argument 'qos_option_id' to be a str")
        __self__.qos_option_id = qos_option_id
        """
        See Argument Reference above.
        """
        if region and not isinstance(region, str):
            raise TypeError("Expected argument 'region' to be a str")
        __self__.region = region
        """
        See Argument Reference above.
        """
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        __self__.status = status
        """
        See Argument Reference above.
        """
        if tenant_id and not isinstance(tenant_id, str):
            raise TypeError("Expected argument 'tenant_id' to be a str")
        __self__.tenant_id = tenant_id
        """
        See Argument Reference above.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_internet_gateway(description=None,internet_gateway_id=None,internet_service_id=None,name=None,qos_option_id=None,region=None,status=None,tenant_id=None,opts=None):
    """
    Use this data source to get the ID and Details of an Enterprise Cloud Internet gateway.
    """
    __args__ = dict()

    __args__['description'] = description
    __args__['internetGatewayId'] = internet_gateway_id
    __args__['internetServiceId'] = internet_service_id
    __args__['name'] = name
    __args__['qosOptionId'] = qos_option_id
    __args__['region'] = region
    __args__['status'] = status
    __args__['tenantId'] = tenant_id
    __ret__ = await pulumi.runtime.invoke('ecl:network/getInternetGateway:getInternetGateway', __args__, opts=opts)

    return GetInternetGatewayResult(
        description=__ret__.get('description'),
        internet_gateway_id=__ret__.get('internetGatewayId'),
        internet_service_id=__ret__.get('internetServiceId'),
        name=__ret__.get('name'),
        qos_option_id=__ret__.get('qosOptionId'),
        region=__ret__.get('region'),
        status=__ret__.get('status'),
        tenant_id=__ret__.get('tenantId'),
        id=__ret__.get('id'))