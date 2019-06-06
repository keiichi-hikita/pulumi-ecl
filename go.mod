module github.com/keiichi-hikita/pulumi-ecl

replace (
	github.com/Nvveen/Gotty => github.com/ijc25/Gotty v0.0.0-20170406111628-a8b993ba6abd
	github.com/golang/glog => github.com/pulumi/glog v0.0.0-20180820174630-7eaa6ffb71e4
	github.com/pulumi/pulumi-terraform => ../pulumi-terraform
)

require (
	github.com/hashicorp/terraform v0.12.1
	github.com/nttcom/terraform-provider-ecl v1.1.0
	github.com/pkg/errors v0.8.1
	github.com/pulumi/pulumi v0.17.15
	github.com/pulumi/pulumi-terraform v0.0.0-00010101000000-000000000000
	github.com/stretchr/testify v1.3.1-0.20190311161405-34c6fa2dc709
)
