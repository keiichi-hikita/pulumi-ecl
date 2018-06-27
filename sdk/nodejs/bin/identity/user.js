"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * Manages a V3 User resource within OpenStack Keystone.
 *
 * Note: You _must_ have admin privileges in your OpenStack cloud to use
 * this resource.
 */
class User extends pulumi.CustomResource {
    /**
     * Get an existing User resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new User(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["defaultProjectId"] = state ? state.defaultProjectId : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["domainId"] = state ? state.domainId : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["extra"] = state ? state.extra : undefined;
            inputs["ignoreChangePasswordUponFirstUse"] = state ? state.ignoreChangePasswordUponFirstUse : undefined;
            inputs["ignoreLockoutFailureAttempts"] = state ? state.ignoreLockoutFailureAttempts : undefined;
            inputs["ignorePasswordExpiry"] = state ? state.ignorePasswordExpiry : undefined;
            inputs["multiFactorAuthEnabled"] = state ? state.multiFactorAuthEnabled : undefined;
            inputs["multiFactorAuthRules"] = state ? state.multiFactorAuthRules : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["password"] = state ? state.password : undefined;
            inputs["region"] = state ? state.region : undefined;
        }
        else {
            const args = argsOrState;
            inputs["defaultProjectId"] = args ? args.defaultProjectId : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["domainId"] = args ? args.domainId : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["extra"] = args ? args.extra : undefined;
            inputs["ignoreChangePasswordUponFirstUse"] = args ? args.ignoreChangePasswordUponFirstUse : undefined;
            inputs["ignoreLockoutFailureAttempts"] = args ? args.ignoreLockoutFailureAttempts : undefined;
            inputs["ignorePasswordExpiry"] = args ? args.ignorePasswordExpiry : undefined;
            inputs["multiFactorAuthEnabled"] = args ? args.multiFactorAuthEnabled : undefined;
            inputs["multiFactorAuthRules"] = args ? args.multiFactorAuthRules : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["password"] = args ? args.password : undefined;
            inputs["region"] = args ? args.region : undefined;
        }
        super("openstack:identity/user:User", name, inputs, opts);
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map