"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * Manages a V1 load balancer pool resource within OpenStack.
 */
class PoolV1 extends pulumi.CustomResource {
    /**
     * Get an existing PoolV1 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new PoolV1(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["lbMethod"] = state ? state.lbMethod : undefined;
            inputs["lbProvider"] = state ? state.lbProvider : undefined;
            inputs["monitorIds"] = state ? state.monitorIds : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["protocol"] = state ? state.protocol : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["subnetId"] = state ? state.subnetId : undefined;
            inputs["tenantId"] = state ? state.tenantId : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.lbMethod === undefined) {
                throw new Error("Missing required property 'lbMethod'");
            }
            if (!args || args.protocol === undefined) {
                throw new Error("Missing required property 'protocol'");
            }
            if (!args || args.subnetId === undefined) {
                throw new Error("Missing required property 'subnetId'");
            }
            inputs["lbMethod"] = args ? args.lbMethod : undefined;
            inputs["lbProvider"] = args ? args.lbProvider : undefined;
            inputs["monitorIds"] = args ? args.monitorIds : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["protocol"] = args ? args.protocol : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["subnetId"] = args ? args.subnetId : undefined;
            inputs["tenantId"] = args ? args.tenantId : undefined;
        }
        super("openstack:loadbalancer/poolV1:PoolV1", name, inputs, opts);
    }
}
exports.PoolV1 = PoolV1;
//# sourceMappingURL=poolV1.js.map