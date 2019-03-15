// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class CommonFunctionGateway extends pulumi.CustomResource {
    /**
     * Get an existing CommonFunctionGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CommonFunctionGatewayState, opts?: pulumi.CustomResourceOptions): CommonFunctionGateway {
        return new CommonFunctionGateway(name, <any>state, { ...opts, id: id });
    }

    public readonly commonFunctionPoolId: pulumi.Output<string>;
    public readonly description: pulumi.Output<string | undefined>;
    public readonly name: pulumi.Output<string>;
    public /*out*/ readonly networkId: pulumi.Output<string>;
    public /*out*/ readonly subnetId: pulumi.Output<string>;
    public readonly tenantId: pulumi.Output<string>;

    /**
     * Create a CommonFunctionGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CommonFunctionGatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CommonFunctionGatewayArgs | CommonFunctionGatewayState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: CommonFunctionGatewayState = argsOrState as CommonFunctionGatewayState | undefined;
            inputs["commonFunctionPoolId"] = state ? state.commonFunctionPoolId : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["networkId"] = state ? state.networkId : undefined;
            inputs["subnetId"] = state ? state.subnetId : undefined;
            inputs["tenantId"] = state ? state.tenantId : undefined;
        } else {
            const args = argsOrState as CommonFunctionGatewayArgs | undefined;
            if (!args || args.commonFunctionPoolId === undefined) {
                throw new Error("Missing required property 'commonFunctionPoolId'");
            }
            inputs["commonFunctionPoolId"] = args ? args.commonFunctionPoolId : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["tenantId"] = args ? args.tenantId : undefined;
            inputs["networkId"] = undefined /*out*/;
            inputs["subnetId"] = undefined /*out*/;
        }
        super("ecl:network/commonFunctionGateway:CommonFunctionGateway", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering CommonFunctionGateway resources.
 */
export interface CommonFunctionGatewayState {
    readonly commonFunctionPoolId?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly networkId?: pulumi.Input<string>;
    readonly subnetId?: pulumi.Input<string>;
    readonly tenantId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CommonFunctionGateway resource.
 */
export interface CommonFunctionGatewayArgs {
    readonly commonFunctionPoolId: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly tenantId?: pulumi.Input<string>;
}
