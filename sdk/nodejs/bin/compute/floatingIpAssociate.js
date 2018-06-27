"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * Associate a floating IP to an instance. This can be used instead of the
 * `floating_ip` options in `openstack_compute_instance_v2`.
 */
class FloatingIpAssociate extends pulumi.CustomResource {
    /**
     * Get an existing FloatingIpAssociate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new FloatingIpAssociate(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["fixedIp"] = state ? state.fixedIp : undefined;
            inputs["floatingIp"] = state ? state.floatingIp : undefined;
            inputs["instanceId"] = state ? state.instanceId : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["waitUntilAssociated"] = state ? state.waitUntilAssociated : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.floatingIp === undefined) {
                throw new Error("Missing required property 'floatingIp'");
            }
            if (!args || args.instanceId === undefined) {
                throw new Error("Missing required property 'instanceId'");
            }
            inputs["fixedIp"] = args ? args.fixedIp : undefined;
            inputs["floatingIp"] = args ? args.floatingIp : undefined;
            inputs["instanceId"] = args ? args.instanceId : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["waitUntilAssociated"] = args ? args.waitUntilAssociated : undefined;
        }
        super("openstack:compute/floatingIpAssociate:FloatingIpAssociate", name, inputs, opts);
    }
}
exports.FloatingIpAssociate = FloatingIpAssociate;
//# sourceMappingURL=floatingIpAssociate.js.map