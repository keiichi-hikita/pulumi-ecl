// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class PublicIP extends pulumi.CustomResource {
    /**
     * Get an existing PublicIP resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PublicIPState, opts?: pulumi.CustomResourceOptions): PublicIP {
        return new PublicIP(name, <any>state, { ...opts, id: id });
    }

    public /*out*/ readonly cidr!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly internetGwId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    public readonly submaskLength!: pulumi.Output<number>;
    public readonly tenantId!: pulumi.Output<string>;

    /**
     * Create a PublicIP resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicIPArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PublicIPArgs | PublicIPState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PublicIPState | undefined;
            inputs["cidr"] = state ? state.cidr : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["internetGwId"] = state ? state.internetGwId : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["submaskLength"] = state ? state.submaskLength : undefined;
            inputs["tenantId"] = state ? state.tenantId : undefined;
        } else {
            const args = argsOrState as PublicIPArgs | undefined;
            if (!args || args.internetGwId === undefined) {
                throw new Error("Missing required property 'internetGwId'");
            }
            if (!args || args.submaskLength === undefined) {
                throw new Error("Missing required property 'submaskLength'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["internetGwId"] = args ? args.internetGwId : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["submaskLength"] = args ? args.submaskLength : undefined;
            inputs["tenantId"] = args ? args.tenantId : undefined;
            inputs["cidr"] = undefined /*out*/;
        }
        super("ecl:network/publicIP:PublicIP", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PublicIP resources.
 */
export interface PublicIPState {
    readonly cidr?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly internetGwId?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly submaskLength?: pulumi.Input<number>;
    readonly tenantId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PublicIP resource.
 */
export interface PublicIPArgs {
    readonly description?: pulumi.Input<string>;
    readonly internetGwId: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly submaskLength: pulumi.Input<number>;
    readonly tenantId?: pulumi.Input<string>;
}
