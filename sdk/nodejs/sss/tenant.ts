// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class Tenant extends pulumi.CustomResource {
    /**
     * Get an existing Tenant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TenantState, opts?: pulumi.CustomResourceOptions): Tenant {
        return new Tenant(name, <any>state, { ...opts, id: id });
    }

    public readonly contractId: pulumi.Output<string>;
    public readonly description: pulumi.Output<string>;
    public /*out*/ readonly startTime: pulumi.Output<string>;
    public /*out*/ readonly tenantId: pulumi.Output<string>;
    public readonly tenantName: pulumi.Output<string>;
    public readonly tenantRegion: pulumi.Output<string>;

    /**
     * Create a Tenant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TenantArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TenantArgs | TenantState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: TenantState = argsOrState as TenantState | undefined;
            inputs["contractId"] = state ? state.contractId : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["startTime"] = state ? state.startTime : undefined;
            inputs["tenantId"] = state ? state.tenantId : undefined;
            inputs["tenantName"] = state ? state.tenantName : undefined;
            inputs["tenantRegion"] = state ? state.tenantRegion : undefined;
        } else {
            const args = argsOrState as TenantArgs | undefined;
            if (!args || args.description === undefined) {
                throw new Error("Missing required property 'description'");
            }
            if (!args || args.tenantName === undefined) {
                throw new Error("Missing required property 'tenantName'");
            }
            if (!args || args.tenantRegion === undefined) {
                throw new Error("Missing required property 'tenantRegion'");
            }
            inputs["contractId"] = args ? args.contractId : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["tenantName"] = args ? args.tenantName : undefined;
            inputs["tenantRegion"] = args ? args.tenantRegion : undefined;
            inputs["startTime"] = undefined /*out*/;
            inputs["tenantId"] = undefined /*out*/;
        }
        super("ecl:sss/tenant:Tenant", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Tenant resources.
 */
export interface TenantState {
    readonly contractId?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly startTime?: pulumi.Input<string>;
    readonly tenantId?: pulumi.Input<string>;
    readonly tenantName?: pulumi.Input<string>;
    readonly tenantRegion?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Tenant resource.
 */
export interface TenantArgs {
    readonly contractId?: pulumi.Input<string>;
    readonly description: pulumi.Input<string>;
    readonly tenantName: pulumi.Input<string>;
    readonly tenantRegion: pulumi.Input<string>;
}
