"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
class ImageMemberAccepter extends pulumi.CustomResource {
    /**
     * Get an existing ImageMemberAccepter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state, opts) {
        return new ImageMemberAccepter(name, state, Object.assign({}, opts, { id: id }));
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["imageMemberId"] = state ? state.imageMemberId : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["status"] = state ? state.status : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.imageMemberId === undefined) {
                throw new Error("Missing required property 'imageMemberId'");
            }
            if (!args || args.status === undefined) {
                throw new Error("Missing required property 'status'");
            }
            inputs["imageMemberId"] = args ? args.imageMemberId : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["status"] = args ? args.status : undefined;
        }
        super("ecl:imagestorages/imageMemberAccepter:ImageMemberAccepter", name, inputs, opts);
    }
}
exports.ImageMemberAccepter = ImageMemberAccepter;
//# sourceMappingURL=imageMemberAccepter.js.map