"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * Manages a V2 flavor resource within OpenStack.
 */
class Flavor extends pulumi.CustomResource {
    /**
     * Get an existing Flavor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new Flavor(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["disk"] = state ? state.disk : undefined;
            inputs["ephemeral"] = state ? state.ephemeral : undefined;
            inputs["extraSpecs"] = state ? state.extraSpecs : undefined;
            inputs["isPublic"] = state ? state.isPublic : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["ram"] = state ? state.ram : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["rxTxFactor"] = state ? state.rxTxFactor : undefined;
            inputs["swap"] = state ? state.swap : undefined;
            inputs["vcpus"] = state ? state.vcpus : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.disk === undefined) {
                throw new Error("Missing required property 'disk'");
            }
            if (!args || args.ram === undefined) {
                throw new Error("Missing required property 'ram'");
            }
            if (!args || args.vcpus === undefined) {
                throw new Error("Missing required property 'vcpus'");
            }
            inputs["disk"] = args ? args.disk : undefined;
            inputs["ephemeral"] = args ? args.ephemeral : undefined;
            inputs["extraSpecs"] = args ? args.extraSpecs : undefined;
            inputs["isPublic"] = args ? args.isPublic : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["ram"] = args ? args.ram : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["rxTxFactor"] = args ? args.rxTxFactor : undefined;
            inputs["swap"] = args ? args.swap : undefined;
            inputs["vcpus"] = args ? args.vcpus : undefined;
        }
        super("openstack:compute/flavor:Flavor", name, inputs, opts);
    }
}
exports.Flavor = Flavor;
//# sourceMappingURL=flavor.js.map