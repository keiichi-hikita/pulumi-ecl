"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
function getVolumeType(args, opts) {
    args = args || {};
    return pulumi.runtime.invoke("ecl:storage/getVolumeType:getVolumeType", {
        "name": args.name,
        "volumeTypeId": args.volumeTypeId,
    }, opts);
}
exports.getVolumeType = getVolumeType;
//# sourceMappingURL=getVolumeType.js.map