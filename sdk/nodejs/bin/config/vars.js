"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("../utilities");
let __config = new pulumi.Config("ecl");
/**
 * The Identity authentication URL.
 */
exports.authUrl = __config.get("authUrl") || utilities.getEnv("OS_AUTH_URL");
/**
 * A Custom CA certificate.
 */
exports.cacertFile = __config.get("cacertFile") || utilities.getEnv("OS_CACERT");
/**
 * A client certificate to authenticate with.
 */
exports.cert = __config.get("cert") || utilities.getEnv("OS_CERT");
/**
 * An entry in a `clouds.yaml` file to use.
 */
exports.cloud = __config.get("cloud") || utilities.getEnv("OS_CLOUD");
/**
 * The name of the Domain ID to scope to if no other domain is specified. Defaults to `default` (Identity v3).
 */
exports.defaultDomain = __config.get("defaultDomain") || (utilities.getEnv("OS_DEFAULT_DOMAIN") || "default");
/**
 * The ID of the Domain to scope to (Identity v3).
 */
exports.domainId = __config.get("domainId") || utilities.getEnv("OS_DOMAIN_ID");
/**
 * The name of the Domain to scope to (Identity v3).
 */
exports.domainName = __config.get("domainName") || utilities.getEnv("OS_DOMAIN_NAME");
exports.endpointType = __config.get("endpointType") || utilities.getEnv("OS_ENDPOINT_TYPE");
/**
 * The SSS Endpoint URL to send API.
 */
exports.forceSssEndpoint = __config.get("forceSssEndpoint");
/**
 * Trust self-signed certificates.
 */
exports.insecure = __config.getObject("insecure") || utilities.getEnvBoolean("OS_INSECURE");
/**
 * A client private key to authenticate with.
 */
exports.key = __config.get("key") || utilities.getEnv("OS_KEY");
/**
 * Password to login with.
 */
exports.password = __config.get("password") || utilities.getEnv("OS_PASSWORD");
/**
 * The ID of the domain where the proejct resides (Identity v3).
 */
exports.projectDomainId = __config.get("projectDomainId") || utilities.getEnv("OS_PROJECT_DOMAIN_ID");
/**
 * The name of the domain where the project resides (Identity v3).
 */
exports.projectDomainName = __config.get("projectDomainName") || utilities.getEnv("OS_PROJECT_DOMAIN_NAME");
/**
 * The Enterprise Cloud region to connect to.
 */
exports.region = __config.get("region") || utilities.getEnv("OS_REGION_NAME");
/**
 * The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.
 */
exports.tenantId = __config.get("tenantId") || utilities.getEnv("OS_TENANT_ID", "OS_PROJECT_ID");
/**
 * The name of the Tenant (Identity v2) or Project (Identity v3) to login with.
 */
exports.tenantName = __config.get("tenantName") || utilities.getEnv("OS_TENANT_NAME", "OS_PROJECT_NAME");
/**
 * Authentication token to use as an alternative to username/password.
 */
exports.token = __config.get("token") || utilities.getEnv("OS_TOKEN", "OS_AUTH_TOKEN");
/**
 * The ID of the domain where the user resides (Identity v3).
 */
exports.userDomainId = __config.get("userDomainId") || utilities.getEnv("OS_USER_DOMAIN_ID");
/**
 * The name of the domain where the user resides (Identity v3).
 */
exports.userDomainName = __config.get("userDomainName") || utilities.getEnv("OS_USER_DOMAIN_NAME");
/**
 * Username to login with.
 */
exports.userId = __config.get("userId") || utilities.getEnv("OS_USER_ID");
/**
 * Username to login with.
 */
exports.userName = __config.get("userName") || utilities.getEnv("OS_USERNAME");
//# sourceMappingURL=vars.js.map