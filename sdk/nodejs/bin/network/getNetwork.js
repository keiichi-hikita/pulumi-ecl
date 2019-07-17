"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
function getNetwork(args, opts) {
    args = args || {};
    return pulumi.runtime.invoke("ecl:network/getNetwork:getNetwork", {
        "description": args.description,
        "matchingSubnetCidr": args.matchingSubnetCidr,
        "name": args.name,
        "networkId": args.networkId,
        "plane": args.plane,
        "region": args.region,
    }, opts);
}
exports.getNetwork = getNetwork;
//# sourceMappingURL=getNetwork.js.map