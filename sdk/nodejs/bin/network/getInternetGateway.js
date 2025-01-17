"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
function getInternetGateway(args, opts) {
    args = args || {};
    return pulumi.runtime.invoke("ecl:network/getInternetGateway:getInternetGateway", {
        "description": args.description,
        "internetGatewayId": args.internetGatewayId,
        "internetServiceId": args.internetServiceId,
        "name": args.name,
        "qosOptionId": args.qosOptionId,
        "region": args.region,
        "status": args.status,
        "tenantId": args.tenantId,
    }, opts);
}
exports.getInternetGateway = getInternetGateway;
//# sourceMappingURL=getInternetGateway.js.map