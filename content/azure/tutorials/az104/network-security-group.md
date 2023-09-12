## Network security group
* Limit network traffic to resources in a virtual network
* Contains a list of security rules that allow or deny inbound or outbound network traffic
* Can be associated to a subnet or a network interface

### NSG Rules
* Security rules in NSs enable you to filter network traffic that can flow in and out of virtual network subnets and network interfaces
* There are default security rules. You cannot delete the default rules, but you can add other rules with a higher priority.

### NSG Effective Rules
* NSGs are evaluated independently for the subnet and NIC
* An "allow" rule must exist at both levels for traffic to be admitted
* Use the Effective Rules link if you are not sure which security rules are being applied

### Notes
* In order for you to associate a network security group to a subnet, both the virtual network and the network security group must be in the same region
* Removing the NSG from the network interface would allow the VM to use the NSG associated with the subnet, which is best practice