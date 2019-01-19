// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a V3 Project resource within OpenStack Keystone.
 * 
 * Note: You _must_ have admin privileges in your OpenStack cloud to use
 * this resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as openstack from "@pulumi/openstack";
 * 
 * const openstack_identity_project_v3_project_1 = new openstack.identity.Project("project_1", {
 *     description: "A project",
 *     name: "project_1",
 * });
 * ```
 */
export class Project extends pulumi.CustomResource {
    /**
     * Get an existing Project resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProjectState, opts?: pulumi.CustomResourceOptions): Project {
        return new Project(name, <any>state, { ...opts, id: id });
    }

    /**
     * A description of the project.
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * The domain this project belongs to.
     */
    public readonly domainId: pulumi.Output<string>;
    /**
     * Whether the project is enabled or disabled. Valid
     * values are `true` and `false`.
     */
    public readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Whether this project is a domain. Valid values
     * are `true` and `false`.
     */
    public readonly isDomain: pulumi.Output<boolean | undefined>;
    /**
     * The name of the project.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The parent of this project.
     */
    public readonly parentId: pulumi.Output<string>;
    /**
     * The region in which to obtain the V3 Keystone client.
     * If omitted, the `region` argument of the provider is used. Changing this
     * creates a new User.
     */
    public readonly region: pulumi.Output<string>;

    /**
     * Create a Project resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProjectArgs | ProjectState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ProjectState = argsOrState as ProjectState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["domainId"] = state ? state.domainId : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["isDomain"] = state ? state.isDomain : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["parentId"] = state ? state.parentId : undefined;
            inputs["region"] = state ? state.region : undefined;
        } else {
            const args = argsOrState as ProjectArgs | undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["domainId"] = args ? args.domainId : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["isDomain"] = args ? args.isDomain : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parentId"] = args ? args.parentId : undefined;
            inputs["region"] = args ? args.region : undefined;
        }
        super("openstack:identity/project:Project", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Project resources.
 */
export interface ProjectState {
    /**
     * A description of the project.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The domain this project belongs to.
     */
    readonly domainId?: pulumi.Input<string>;
    /**
     * Whether the project is enabled or disabled. Valid
     * values are `true` and `false`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Whether this project is a domain. Valid values
     * are `true` and `false`.
     */
    readonly isDomain?: pulumi.Input<boolean>;
    /**
     * The name of the project.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The parent of this project.
     */
    readonly parentId?: pulumi.Input<string>;
    /**
     * The region in which to obtain the V3 Keystone client.
     * If omitted, the `region` argument of the provider is used. Changing this
     * creates a new User.
     */
    readonly region?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Project resource.
 */
export interface ProjectArgs {
    /**
     * A description of the project.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The domain this project belongs to.
     */
    readonly domainId?: pulumi.Input<string>;
    /**
     * Whether the project is enabled or disabled. Valid
     * values are `true` and `false`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Whether this project is a domain. Valid values
     * are `true` and `false`.
     */
    readonly isDomain?: pulumi.Input<boolean>;
    /**
     * The name of the project.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The parent of this project.
     */
    readonly parentId?: pulumi.Input<string>;
    /**
     * The region in which to obtain the V3 Keystone client.
     * If omitted, the `region` argument of the provider is used. Changing this
     * creates a new User.
     */
    readonly region?: pulumi.Input<string>;
}
