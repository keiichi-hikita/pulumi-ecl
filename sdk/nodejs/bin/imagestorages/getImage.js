"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
function getImage(args, opts) {
    args = args || {};
    return pulumi.runtime.invoke("ecl:imagestorages/getImage:getImage", {
        "memberStatus": args.memberStatus,
        "mostRecent": args.mostRecent,
        "name": args.name,
        "owner": args.owner,
        "properties": args.properties,
        "region": args.region,
        "sizeMax": args.sizeMax,
        "sizeMin": args.sizeMin,
        "sortDirection": args.sortDirection,
        "sortKey": args.sortKey,
        "tag": args.tag,
        "visibility": args.visibility,
    }, opts);
}
exports.getImage = getImage;
//# sourceMappingURL=getImage.js.map