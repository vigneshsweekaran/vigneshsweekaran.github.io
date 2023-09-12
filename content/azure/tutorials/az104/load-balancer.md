## Load balancer

### Notes
* The pricing for a Standard load balancer is based on the number of rules configured (load balancer rules and NAT rules) and data processed. However, there is no hourly charge for the Standard load balancer itself when no rules are configured. Since this load balancer contains rules, it should be removed to save money
* Application Gateway - Application Gateway is used to balance traffic between backend pools, and it provides multisite load balancing capabilities.
* You need to direct all incoming TCP traffic on port 5000 to port 22 internally for connecting to Linux VMs
  * A Network Address Translation (NAT) rule - NAT rules work alongside NSG rules to provide a connection to a VM that's behind a load balancer.
  * A network security group (NSG) - The NSG rules work alongside the NAT rules to provide a connection to a VM that's behind a load balancer.
* To check the availability of virtual machines in the backend pool of a Basic Load Balancer
  * Health probe - A health probe is utilized to check the availability of VMs in the backend pool to ensure they are healthy and can serve traffic distributed from the load balancer
* which load balancing solution in Azure that provides a 99.99% SLA, but it also wants to minimize costs
  * tandard Load Balancer - Standard Load Balancers provide a 99.99% SLA, whereas Basic Load Balancers do not