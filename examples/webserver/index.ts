import * as os from "@pulumi/ecl";

// flavorName and imageName may need to change based on what's available in the
// Enterprise CLoud installation you're using.
const instance = new os.compute.Instance("test", {
	flavorName: "s1-2",
	imageName: "Ubuntu 16.04",
});

export let instanceIP = instance.accessIpV4;
