"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
function getVolume(args, opts) {
    args = args || {};
    return pulumi.runtime.invoke("ecl:storage/getVolume:getVolume", {
        "name": args.name,
        "volumeId": args.volumeId,
    }, opts);
}
exports.getVolume = getVolume;
//# sourceMappingURL=getVolume.js.map