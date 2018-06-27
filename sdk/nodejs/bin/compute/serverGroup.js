"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * Manages a V2 Server Group resource within OpenStack.
 */
class ServerGroup extends pulumi.CustomResource {
    /**
     * Get an existing ServerGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new ServerGroup(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["members"] = state ? state.members : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["policies"] = state ? state.policies : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["valueSpecs"] = state ? state.valueSpecs : undefined;
        }
        else {
            const args = argsOrState;
            inputs["name"] = args ? args.name : undefined;
            inputs["policies"] = args ? args.policies : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["valueSpecs"] = args ? args.valueSpecs : undefined;
            inputs["members"] = undefined /*out*/;
        }
        super("openstack:compute/serverGroup:ServerGroup", name, inputs, opts);
    }
}
exports.ServerGroup = ServerGroup;
//# sourceMappingURL=serverGroup.js.map