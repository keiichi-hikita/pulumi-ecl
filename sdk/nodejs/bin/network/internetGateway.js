"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
class InternetGateway extends pulumi.CustomResource {
    /**
     * Get an existing InternetGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state, opts) {
        return new InternetGateway(name, state, Object.assign({}, opts, { id: id }));
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["description"] = state ? state.description : undefined;
            inputs["internetServiceId"] = state ? state.internetServiceId : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["qosOptionId"] = state ? state.qosOptionId : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["tenantId"] = state ? state.tenantId : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.internetServiceId === undefined) {
                throw new Error("Missing required property 'internetServiceId'");
            }
            if (!args || args.qosOptionId === undefined) {
                throw new Error("Missing required property 'qosOptionId'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["internetServiceId"] = args ? args.internetServiceId : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["qosOptionId"] = args ? args.qosOptionId : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["tenantId"] = args ? args.tenantId : undefined;
        }
        super("ecl:network/internetGateway:InternetGateway", name, inputs, opts);
    }
}
exports.InternetGateway = InternetGateway;
//# sourceMappingURL=internetGateway.js.map