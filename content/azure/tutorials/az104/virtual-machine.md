## Virtual Machine

###

### Notes
* Once you have created the VM, the availability zone cannot be changed
* Virtual machines with Premium SSD disks qualify for the 99.9% connectivity SLA
* Custom data - You might need to inject a script or other metadata into a Microsoft Azure virtual machine (VM) at provisioning time. Microsoft Azure calls this feature custom data. Custom data is made available to the VM during first startup or setup, which is called provisioning. Provisioning is the process where VM creation parameters (for example, host name, username, password, certificates, custom data, and keys) are made available to the VM.
* Moving vm onhardware failures
  * Changing Subscription won't affect the downtime, it will just you change the billing. You would need to redeploy the VM. After you redeploy a VM, the temporary disk is lost, and dynamic IP addresses associated with virtual network interface are updated.
  * From Overview there is no option to move the VM to another hardware to skip the maintenance.
  * Ideally you need an Availability Set and defining the Update Domains