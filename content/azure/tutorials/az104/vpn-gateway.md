## VPN Gateway

* Site-to-site connections connect on-premises datacenters to Azure virtual networks
* Network-to-network connections connect Azure virtual networks (custom)
* Point-to-site User VPN connections connect individual devices to Azure virtual networks

### Implement Site-to-Site VPN Connections
* Take time to carefully plan your network configuration
* The on-premises part is necessary only if you are configuring Site-to-Site
* Always verify and test your connections

### Create the Gateway Subnet
* The gateway subnet contains the IP addresses; if possible,
use a CIDR block of /28 or 127
* When you create your gateway subnet, gateway VMs are deployed to the gateway subnet and configured with the required VPN gateway settings
* Never deploy other resources (for example, additional VMs) to the gateway subnet
* Avoid associating a NSG with the gateway subnet

### VPN Gateway Types
#### Route-based VPNs use routes in the IP forwarding or routing table to direct packets
* Supports for IKEv2
* Can use dynamic routing protocols

#### Policy-based VPNs encrypt and direct packets through IPsec tunnels based on the IPsec policies.
* Support for IKEv1 only
* Legacy on-premises VPN devices

### VPN Gateway Configuration
* Most VPN types are Route-based
* Your choice of gateway SKU affects the number of connections you can have and the aggregate throughput benchmark
* Associate a virtual network that includes the gateway subnet
* The gateway needs a public IP address
* It can take up to 45 minutes to provision the VPN gateway

### Gateway SKU and Generation
|SKU|P2S Connections|S2S/VNet-to-VNet Tunnels|Aggregate Throughput Benchmark|
|Basic|128|Max. 30|100 Mbps|
|VpnGw1|128|Max. 30|650 Mbps|
|VpnGw2|128|Max. 30|1Gbps|
|VpnGw3|128|Max. 10|1.25 Gbps|

The Gateway SKU affects the connections and the throughput
* Resizing is allowed within the generation
* The Basic SKU (not shown) is legacy and should not be used

### Create the Local Network Gateway
* Defines the on-premises network configuration
* Give the site a name by which Azure can refer to it
* The local gateway needs a public IP address
* Specify the IP address prefixes that will be routed through the gateway to the VPN device

### Configure the On-Premises VPN Device
* Consult the list of supported VPN devices (Cisco, Juniper, Ubiquiti, Barracuda Networks)
* A VPN device configuration script may be available
* Remember the shared key for the Azure connection (next step)
* Specify the public IP address (previous step)

### Create the VPN Connection
* Once your VPN gateways is created and the on-premises device is configured, create a connection obiect
* Configure a name for the connection and specify the type as Site-to-site (IPsec)
* Select the VPN Gateway and the Local Network Gateway
* Enter the Shared key for the connection

### High Availability Scenarios
* VPN gateways are deployed as two instances
* Enable activelactive mode for higher availability

### Point to site connection
[Official steps](https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-howto-point-to-site-resource-manager-portal)