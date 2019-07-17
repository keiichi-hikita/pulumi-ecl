"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
class Volume extends pulumi.CustomResource {
    /**
     * Get an existing Volume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state, opts) {
        return new Volume(name, state, Object.assign({}, opts, { id: id }));
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["errorMessage"] = state ? state.errorMessage : undefined;
            inputs["initiatorIqns"] = state ? state.initiatorIqns : undefined;
            inputs["iopsPerGb"] = state ? state.iopsPerGb : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["size"] = state ? state.size : undefined;
            inputs["throughput"] = state ? state.throughput : undefined;
            inputs["virtualStorageId"] = state ? state.virtualStorageId : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.size === undefined) {
                throw new Error("Missing required property 'size'");
            }
            if (!args || args.virtualStorageId === undefined) {
                throw new Error("Missing required property 'virtualStorageId'");
            }
            inputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["errorMessage"] = args ? args.errorMessage : undefined;
            inputs["initiatorIqns"] = args ? args.initiatorIqns : undefined;
            inputs["iopsPerGb"] = args ? args.iopsPerGb : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["size"] = args ? args.size : undefined;
            inputs["throughput"] = args ? args.throughput : undefined;
            inputs["virtualStorageId"] = args ? args.virtualStorageId : undefined;
        }
        super("ecl:storage/volume:Volume", name, inputs, opts);
    }
}
exports.Volume = Volume;
//# sourceMappingURL=volume.js.map