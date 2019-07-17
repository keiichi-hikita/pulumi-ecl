import * as pulumi from "@pulumi/pulumi";
/**
 * The provider type for the ecl package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://pulumi.io/reference/programming-model.html#providers) for more information.
 */
export declare class Provider extends pulumi.ProviderResource {
    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProviderArgs, opts?: pulumi.ResourceOptions);
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
