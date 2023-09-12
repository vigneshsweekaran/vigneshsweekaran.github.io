## Network watcher

### Notes
* calculate network performance metrics like packet loss and link latency
  * Network Watcher Agent - To make Connection Monitor recognize your Azure VMs as monitoring sources, you need to install the Network Watcher Agent virtual machine extension on them. Azure virtual machines require the extension to trigger end-to-end monitoring and other advanced functionality
  * Connection Monitor - Connection Monitor provides unified, end-to-end connection monitoring in Azure Network Watcher and supports hybrid and Azure cloud deployments. Connection Monitor provides support for connectivity checks that are based on HTTP, Transmission Control Protocol (TCP), and Internet Control Message Protocol (ICMP)
*  To verify if the problem is the network security group
  IP flow verify tool in Azure Network Watcher - The IP flow verify tool checks if a packet is allowed or denied to or from a virtual machine. The information consists of direction, protocol, local IP, remote IP, local port, and a remote port. If the packet is denied by a security group, the name of the rule that denied the packet is returned
* Which Network Watcher tools could you use to investigate all traffic between VM1 and VM2 for a duration of 3 hours ?
  * Packet capture - The packet capture tool can be used to investigate all traffic between VM1 and VM2 for a duration of time
