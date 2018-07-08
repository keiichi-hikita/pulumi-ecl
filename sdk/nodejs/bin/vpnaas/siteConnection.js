"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * Manages a V2 Neutron IPSec site connection resource within OpenStack.
 */
class SiteConnection extends pulumi.CustomResource {
    /**
     * Get an existing SiteConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new SiteConnection(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["adminStateUp"] = state ? state.adminStateUp : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["dpds"] = state ? state.dpds : undefined;
            inputs["ikepolicyId"] = state ? state.ikepolicyId : undefined;
            inputs["initiator"] = state ? state.initiator : undefined;
            inputs["ipsecpolicyId"] = state ? state.ipsecpolicyId : undefined;
            inputs["localEpGroupId"] = state ? state.localEpGroupId : undefined;
            inputs["localId"] = state ? state.localId : undefined;
            inputs["mtu"] = state ? state.mtu : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["peerAddress"] = state ? state.peerAddress : undefined;
            inputs["peerCidrs"] = state ? state.peerCidrs : undefined;
            inputs["peerEpGroupId"] = state ? state.peerEpGroupId : undefined;
            inputs["peerId"] = state ? state.peerId : undefined;
            inputs["psk"] = state ? state.psk : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["tenantId"] = state ? state.tenantId : undefined;
            inputs["valueSpecs"] = state ? state.valueSpecs : undefined;
            inputs["vpnserviceId"] = state ? state.vpnserviceId : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.ikepolicyId === undefined) {
                throw new Error("Missing required property 'ikepolicyId'");
            }
            if (!args || args.ipsecpolicyId === undefined) {
                throw new Error("Missing required property 'ipsecpolicyId'");
            }
            if (!args || args.peerAddress === undefined) {
                throw new Error("Missing required property 'peerAddress'");
            }
            if (!args || args.peerId === undefined) {
                throw new Error("Missing required property 'peerId'");
            }
            if (!args || args.psk === undefined) {
                throw new Error("Missing required property 'psk'");
            }
            if (!args || args.vpnserviceId === undefined) {
                throw new Error("Missing required property 'vpnserviceId'");
            }
            inputs["adminStateUp"] = args ? args.adminStateUp : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["dpds"] = args ? args.dpds : undefined;
            inputs["ikepolicyId"] = args ? args.ikepolicyId : undefined;
            inputs["initiator"] = args ? args.initiator : undefined;
            inputs["ipsecpolicyId"] = args ? args.ipsecpolicyId : undefined;
            inputs["localEpGroupId"] = args ? args.localEpGroupId : undefined;
            inputs["localId"] = args ? args.localId : undefined;
            inputs["mtu"] = args ? args.mtu : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["peerAddress"] = args ? args.peerAddress : undefined;
            inputs["peerCidrs"] = args ? args.peerCidrs : undefined;
            inputs["peerEpGroupId"] = args ? args.peerEpGroupId : undefined;
            inputs["peerId"] = args ? args.peerId : undefined;
            inputs["psk"] = args ? args.psk : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["tenantId"] = args ? args.tenantId : undefined;
            inputs["valueSpecs"] = args ? args.valueSpecs : undefined;
            inputs["vpnserviceId"] = args ? args.vpnserviceId : undefined;
        }
        super("openstack:vpnaas/siteConnection:SiteConnection", name, inputs, opts);
    }
}
exports.SiteConnection = SiteConnection;
//# sourceMappingURL=siteConnection.js.map