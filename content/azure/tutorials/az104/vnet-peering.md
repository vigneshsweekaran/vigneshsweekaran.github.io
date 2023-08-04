## Vnet peering

### Configuring vnet peering
```
Configuring a Peering
1. Select the Vnet -> Settings - Peerings
2. Select + Add
3. Enter Name ... and other details
4. Know my resource ID
  If you have read access to the virtual network you want to peer with, leave this checkbox unchecked.
If you don't have read access to the virtual network or subscription you want to peer with, check this box.
Allow virtual network access:
  Select Enabled (default) if you want to enable communication between the two virtual networks. You might select Disabled if you've peered a virtual network with another
virtual network, but occasionally want to disable traffic flow between the two virtual networks.
Allow forwarded traffic: 
  Check this box to allow traffic forwarded by a network virtual appliance in a virtual network (that didn't originate from the virtual network) to flow to
this virtual network through a peering. You don't need to check this setting if traffic is forwarded between virtual networks through an Azure VPN Gateway.
Allow gateway transit: Check this box if you have a virtual network gateway attached to this virtual network and want to allow traffic from the peered virtual network to flow through the gateway.
Use remote gateways:
  Check this box to allow traffic from this virtual network to flow through a virtual network gateway attached to the virtual network you're peering with.
``` 

### Task
1. Create resource group `test-vnet-peer`

2. Create virtual network `vnet-1` in `US East` region
```
Resource Group: test-vnet-peer
Vnet name: vnet-1
Region: US East
CIDR: 10.0.0.0/16
Subnet: 10.0.0.0/24
```

3. Create virtual network `vnet-2` in `US West` region
```
Resource Group: test-vnet-peer
Vnet name: vnet-2
Region: US West
CIDR: 10.1.0.0/16
Subnet: 10.1.0.0/24
```

4. Create Ubuntu vm `vm-east` in vnet `vnet-1`
```
Resource Group: test-vnet-peer
VM Name: vm-east
Region: US East
Username: azureuser
Vnet name: vnet-1
```
4. Create Ubuntu vm `vm-west` in vnet `vnet-2`
```
Resource Group: test-vnet-peer
VM Name: vm-west
Region: US West
Username: azureuser
Vnet name: vnet-2
```

5. ssh to `vm-east` virtual machine using `public ip-address`
```
ssh azureuser@public-ipaddress
```
6. From `vm-east` virtual machine ssh to `vm-west` virtual machine using `private ip-address`  (This will not work)

7. Go to virtual network `vnet-1` do `peering` to virtual network `vnet-2`

8. Repeat step 6. It should connect now