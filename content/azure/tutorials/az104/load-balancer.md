## Load balancer
* Azure Load Balancer
* Public Load Balancer
* Internal Load Balancer
* Load Balancer SKUs
* Backend Pools
* Load Balancer Rules
* Session Persistence
* Health Probes
* It works on OSI layer 4

### Public load balancer
* Maps public IP addresses and port number of incoming traffic to the VM's private IP address and port number, and vice versa.
* Apply load balancing rules to distribute traffic across VMs or services.

### Internal load balancer
* Directs traffic only to resources inside a virtual network or that use a VPN to access Azure infrastructure.
* Frontend IP addresses and virtual networks are never directly exposed to an internet endpoint.
* Enables load balancing within a virtual network, for cross-premises virtual networks, for multi-tier applications, and for line-of-business applications.

#### Types of Internal load balancer
* Within a Virtual network
* For a cross-premises virtual networks
* For multi-tier applications
* For line-of-business applications

### Session Persistence
* Session persistence specifies how client traffic is handled
* None (default) requests can be handled by any virtual machine
* Client IP requests will be handled by the same virtual machine
* Client IP and protocol specifies that successive requests from the same address and protocol will be handled by the same virtual machine

### Health Probes
* Allows the load balancer to monitor the status of an app
* Dynamically adds or removes VMs from the load balancer rotation based on their response to health checks
* HTTP custom probe (preferred) pings every 15 seconds
* TCP custom probe tries to establish a successful TCP session
