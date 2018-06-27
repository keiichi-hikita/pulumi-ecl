"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * Manages a V2 volume resource within OpenStack.
 */
class VolumeV2 extends pulumi.CustomResource {
    /**
     * Get an existing VolumeV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new VolumeV2(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["attachments"] = state ? state.attachments : undefined;
            inputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            inputs["consistencyGroupId"] = state ? state.consistencyGroupId : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["imageId"] = state ? state.imageId : undefined;
            inputs["metadata"] = state ? state.metadata : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["size"] = state ? state.size : undefined;
            inputs["snapshotId"] = state ? state.snapshotId : undefined;
            inputs["sourceReplica"] = state ? state.sourceReplica : undefined;
            inputs["sourceVolId"] = state ? state.sourceVolId : undefined;
            inputs["volumeType"] = state ? state.volumeType : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.size === undefined) {
                throw new Error("Missing required property 'size'");
            }
            inputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            inputs["consistencyGroupId"] = args ? args.consistencyGroupId : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["imageId"] = args ? args.imageId : undefined;
            inputs["metadata"] = args ? args.metadata : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["size"] = args ? args.size : undefined;
            inputs["snapshotId"] = args ? args.snapshotId : undefined;
            inputs["sourceReplica"] = args ? args.sourceReplica : undefined;
            inputs["sourceVolId"] = args ? args.sourceVolId : undefined;
            inputs["volumeType"] = args ? args.volumeType : undefined;
            inputs["attachments"] = undefined /*out*/;
        }
        super("openstack:blockstorage/volumeV2:VolumeV2", name, inputs, opts);
    }
}
exports.VolumeV2 = VolumeV2;
//# sourceMappingURL=volumeV2.js.map