## Aure Bastion

### Notes
* Connect(SSH/RDP) to virtual machines privately
  * A subnet named AzureBastionSubnet - The subnet inside your virtual network to which the Bastion resource will be deployed must have the name AzureBastionSubnet. The name lets Azure know which subnet to deploy the Bastion resource to
  * An Azure Bastion host - The Azure Bastion service is a fully platform-managed PaaS service that you provision inside your virtual network. It provides secure and seamless RDP/SSH connectivity to your virtual machines directly in the Azure portal over TLS. When you connect via Azure Bastion, your virtual machines do not need a public IP address
  * A HTML5-supported web browser - The RDP connection to the virtual machine happens via Bastion host in the Azure portal (over HTML5) using port 443 and the Bastion service
