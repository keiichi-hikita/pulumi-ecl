"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
/**
 * The provider type for the ecl package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://pulumi.io/reference/programming-model.html#providers) for more information.
 */
class Provider extends pulumi.ProviderResource {
    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name, args, opts) {
        let inputs = {};
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
exports.Provider = Provider;
//# sourceMappingURL=provider.js.map