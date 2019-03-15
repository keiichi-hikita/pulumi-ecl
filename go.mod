module github.com/keiichi-hikita/pulumi-ecl

require (
	github.com/Nvveen/Gotty v0.0.0-20120604004816-cd527374f1e5 // indirect
	github.com/apache/thrift v0.12.0 // indirect
	github.com/aws/aws-sdk-go v1.18.3 // indirect
	github.com/codahale/hdrhistogram v0.0.0-20161010025455-3a0bb77429bd // indirect
	github.com/djherbis/times v1.2.0 // indirect
	github.com/docker/docker v1.13.1 // indirect
	github.com/gedex/inflector v0.0.0-20170307190818-16278e9db813 // indirect
	github.com/gofrs/flock v0.7.1 // indirect
	github.com/grpc-ecosystem/grpc-opentracing v0.0.0-20180507213350-8e809c8a8645 // indirect
	github.com/hashicorp/terraform v0.11.13
	github.com/ngpf-public/terraform-provider-ecl v0.0.0-20190314021648-afdd71f087be
	github.com/opentracing/opentracing-go v1.0.2 // indirect
	github.com/pelletier/go-toml v1.2.0 // indirect
	github.com/pkg/errors v0.8.0
	github.com/pulumi/pulumi v0.15.1
	github.com/pulumi/pulumi-terraform v0.15.1
	github.com/reconquest/loreley v0.0.0-20190201065212-7824c7cf5983 // indirect
	github.com/spf13/cast v1.3.0 // indirect
	github.com/spf13/cobra v0.0.3 // indirect
	github.com/spf13/pflag v1.0.3 // indirect
	github.com/stretchr/testify v1.3.0
	github.com/texttheater/golang-levenshtein v0.0.0-20180516184445-d188e65d659e // indirect
	github.com/uber/jaeger-client-go v2.15.0+incompatible // indirect
	github.com/uber/jaeger-lib v1.5.0+incompatible // indirect
	gopkg.in/AlecAivazis/survey.v1 v1.8.2 // indirect
	gopkg.in/src-d/go-git.v4 v4.10.0 // indirect
)

replace (
	github.com/ngpf-public/eclcloud => ../eclcloud
	github.com/ngpf-public/terraform-provider-ecl => ../terraform-provider-ecl
)
