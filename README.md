[![Build Status](https://travis-ci.com/pulumi/pulumi-ecl.svg?token=eHg7Zp5zdDDJfTjY8ejq&branch=master)](https://travis-ci.com/pulumi/pulumi-ecl)

# Enterprise Cloud Resource Provider

The Enterprise Cloud resource provider for Pulumi lets you use Enterprise Cloud resources in your cloud programs.  To use
this package, please [install the Pulumi CLI first](https://pulumi.io/).

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @pulumi/ecl

or `yarn`:

    $ yarn add @pulumi/ecl

### Python

To use from Python, install using `pip`:

    $ pip install pulumi_ecl

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/pulumi/pulumi-ecl/sdk/go/...

## Concepts

The `@pulumi/ecl` package provides a strongly-typed means to build cloud applications that create
and interact closely with Enterprise Cloud resources.
Resources are exposed for the entire Enterprise Cloud surface area,
including (but not limited to), 'compute', 'network', 'storage', and more.

## Reference

For detailed reference documentation, please visit [the API docs](
https://pulumi.io/reference/pkg/nodejs/@pulumi/ecl/index.html).
