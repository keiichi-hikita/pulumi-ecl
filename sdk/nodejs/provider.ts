// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the ecl package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://pulumi.io/reference/programming-model.html#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {

    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProviderArgs, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        {
            inputs["authUrl"] = (args ? args.authUrl : undefined) || utilities.getEnv("OS_AUTH_URL");
            inputs["cacertFile"] = (args ? args.cacertFile : undefined) || utilities.getEnv("OS_CACERT");
            inputs["cert"] = (args ? args.cert : undefined) || utilities.getEnv("OS_CERT");
            inputs["cloud"] = (args ? args.cloud : undefined) || utilities.getEnv("OS_CLOUD");
            inputs["defaultDomain"] = (args ? args.defaultDomain : undefined) || (utilities.getEnv("OS_DEFAULT_DOMAIN") || "default");
            inputs["domainId"] = (args ? args.domainId : undefined) || utilities.getEnv("OS_DOMAIN_ID");
            inputs["domainName"] = (args ? args.domainName : undefined) || utilities.getEnv("OS_DOMAIN_NAME");
            inputs["endpointType"] = (args ? args.endpointType : undefined) || utilities.getEnv("OS_ENDPOINT_TYPE");
            inputs["forceSssEndpoint"] = args ? args.forceSssEndpoint : undefined;
            inputs["insecure"] = pulumi.output((args ? args.insecure : undefined) || utilities.getEnvBoolean("OS_INSECURE")).apply(JSON.stringify);
            inputs["key"] = (args ? args.key : undefined) || utilities.getEnv("OS_KEY");
            inputs["password"] = (args ? args.password : undefined) || utilities.getEnv("OS_PASSWORD");
            inputs["projectDomainId"] = (args ? args.projectDomainId : undefined) || utilities.getEnv("OS_PROJECT_DOMAIN_ID");
            inputs["projectDomainName"] = (args ? args.projectDomainName : undefined) || utilities.getEnv("OS_PROJECT_DOMAIN_NAME");
            inputs["region"] = (args ? args.region : undefined) || utilities.getEnv("OS_REGION_NAME");
            inputs["tenantId"] = (args ? args.tenantId : undefined) || utilities.getEnv("OS_TENANT_ID", "OS_PROJECT_ID");
            inputs["tenantName"] = (args ? args.tenantName : undefined) || utilities.getEnv("OS_TENANT_NAME", "OS_PROJECT_NAME");
            inputs["token"] = (args ? args.token : undefined) || utilities.getEnv("OS_TOKEN", "OS_AUTH_TOKEN");
            inputs["userDomainId"] = (args ? args.userDomainId : undefined) || utilities.getEnv("OS_USER_DOMAIN_ID");
            inputs["userDomainName"] = (args ? args.userDomainName : undefined) || utilities.getEnv("OS_USER_DOMAIN_NAME");
            inputs["userId"] = (args ? args.userId : undefined) || utilities.getEnv("OS_USER_ID");
            inputs["userName"] = (args ? args.userName : undefined) || utilities.getEnv("OS_USERNAME");
        }
        super("ecl", name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * The Identity authentication URL.
     */
    readonly authUrl?: pulumi.Input<string>;
    /**
     * A Custom CA certificate.
     */
    readonly cacertFile?: pulumi.Input<string>;
    /**
     * A client certificate to authenticate with.
     */
    readonly cert?: pulumi.Input<string>;
    /**
     * An entry in a `clouds.yaml` file to use.
     */
    readonly cloud?: pulumi.Input<string>;
    /**
     * The name of the Domain ID to scope to if no other domain is specified. Defaults to `default` (Identity v3).
     */
    readonly defaultDomain?: pulumi.Input<string>;
    /**
     * The ID of the Domain to scope to (Identity v3).
     */
    readonly domainId?: pulumi.Input<string>;
    /**
     * The name of the Domain to scope to (Identity v3).
     */
    readonly domainName?: pulumi.Input<string>;
    readonly endpointType?: pulumi.Input<string>;
    /**
     * The SSS Endpoint URL to send API.
     */
    readonly forceSssEndpoint?: pulumi.Input<string>;
    /**
     * Trust self-signed certificates.
     */
    readonly insecure?: pulumi.Input<boolean>;
    /**
     * A client private key to authenticate with.
     */
    readonly key?: pulumi.Input<string>;
    /**
     * Password to login with.
     */
    readonly password?: pulumi.Input<string>;
    /**
     * The ID of the domain where the proejct resides (Identity v3).
     */
    readonly projectDomainId?: pulumi.Input<string>;
    /**
     * The name of the domain where the project resides (Identity v3).
     */
    readonly projectDomainName?: pulumi.Input<string>;
    /**
     * The Enterprise Cloud region to connect to.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.
     */
    readonly tenantId?: pulumi.Input<string>;
    /**
     * The name of the Tenant (Identity v2) or Project (Identity v3) to login with.
     */
    readonly tenantName?: pulumi.Input<string>;
    /**
     * Authentication token to use as an alternative to username/password.
     */
    readonly token?: pulumi.Input<string>;
    /**
     * The ID of the domain where the user resides (Identity v3).
     */
    readonly userDomainId?: pulumi.Input<string>;
    /**
     * The name of the domain where the user resides (Identity v3).
     */
    readonly userDomainName?: pulumi.Input<string>;
    /**
     * Username to login with.
     */
    readonly userId?: pulumi.Input<string>;
    /**
     * Username to login with.
     */
    readonly userName?: pulumi.Input<string>;
}
