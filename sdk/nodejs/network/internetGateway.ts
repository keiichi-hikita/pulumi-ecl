// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class InternetGateway extends pulumi.CustomResource {
    /**
     * Get an existing InternetGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InternetGatewayState, opts?: pulumi.CustomResourceOptions): InternetGateway {
        return new InternetGateway(name, <any>state, { ...opts, id: id });
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly internetServiceId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly qosOptionId!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    public readonly tenantId!: pulumi.Output<string>;

    /**
     * Create a InternetGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InternetGatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InternetGatewayArgs | InternetGatewayState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as InternetGatewayState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["internetServiceId"] = state ? state.internetServiceId : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["qosOptionId"] = state ? state.qosOptionId : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["tenantId"] = state ? state.tenantId : undefined;
        } else {
            const args = argsOrState as InternetGatewayArgs | undefined;
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

/**
 * Input properties used for looking up and filtering InternetGateway resources.
 */
export interface InternetGatewayState {
    readonly description?: pulumi.Input<string>;
    readonly internetServiceId?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly qosOptionId?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly tenantId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InternetGateway resource.
 */
export interface InternetGatewayArgs {
    readonly description?: pulumi.Input<string>;
    readonly internetServiceId: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly qosOptionId: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly tenantId?: pulumi.Input<string>;
}
