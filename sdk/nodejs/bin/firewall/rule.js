"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * Manages a v1 firewall rule resource within OpenStack.
 */
class Rule extends pulumi.CustomResource {
    /**
     * Get an existing Rule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new Rule(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["action"] = state ? state.action : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["destinationIpAddress"] = state ? state.destinationIpAddress : undefined;
            inputs["destinationPort"] = state ? state.destinationPort : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["ipVersion"] = state ? state.ipVersion : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["protocol"] = state ? state.protocol : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["sourceIpAddress"] = state ? state.sourceIpAddress : undefined;
            inputs["sourcePort"] = state ? state.sourcePort : undefined;
            inputs["tenantId"] = state ? state.tenantId : undefined;
            inputs["valueSpecs"] = state ? state.valueSpecs : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.action === undefined) {
                throw new Error("Missing required property 'action'");
            }
            if (!args || args.protocol === undefined) {
                throw new Error("Missing required property 'protocol'");
            }
            inputs["action"] = args ? args.action : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["destinationIpAddress"] = args ? args.destinationIpAddress : undefined;
            inputs["destinationPort"] = args ? args.destinationPort : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["ipVersion"] = args ? args.ipVersion : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["protocol"] = args ? args.protocol : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["sourceIpAddress"] = args ? args.sourceIpAddress : undefined;
            inputs["sourcePort"] = args ? args.sourcePort : undefined;
            inputs["tenantId"] = args ? args.tenantId : undefined;
            inputs["valueSpecs"] = args ? args.valueSpecs : undefined;
        }
        super("openstack:firewall/rule:Rule", name, inputs, opts);
    }
}
exports.Rule = Rule;
//# sourceMappingURL=rule.js.map