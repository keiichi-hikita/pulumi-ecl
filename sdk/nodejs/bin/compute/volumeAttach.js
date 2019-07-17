"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
class VolumeAttach extends pulumi.CustomResource {
    /**
     * Get an existing VolumeAttach resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state, opts) {
        return new VolumeAttach(name, state, Object.assign({}, opts, { id: id }));
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["device"] = state ? state.device : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["serverId"] = state ? state.serverId : undefined;
            inputs["volumeId"] = state ? state.volumeId : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.serverId === undefined) {
                throw new Error("Missing required property 'serverId'");
            }
            if (!args || args.volumeId === undefined) {
                throw new Error("Missing required property 'volumeId'");
            }
            inputs["device"] = args ? args.device : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["serverId"] = args ? args.serverId : undefined;
            inputs["volumeId"] = args ? args.volumeId : undefined;
        }
        super("ecl:compute/volumeAttach:VolumeAttach", name, inputs, opts);
    }
}
exports.VolumeAttach = VolumeAttach;
//# sourceMappingURL=volumeAttach.js.map