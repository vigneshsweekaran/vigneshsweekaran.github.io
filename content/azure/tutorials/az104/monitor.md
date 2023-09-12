## Azure MOnitor

### Notes
* To view CPU utilization metrics on both virtual machines from two different subscriptions
  * Turn on VM insights in Azure Monitor - VM insights integration with Azure Monitor Logs delivers powerful aggregation and filtering, allowing Azure Monitor to analyze VM data trends over time. You can view this data in a single VM from the virtual machine directly, or you can use Azure Monitor to deliver an aggregated view of your VMs where the view supports Azure resource-context or workspace-context modes
  * Create a Log Analytics workspace for both VMs - You can view metrics data (such as CPU utilization percentage) over time by sending your metrics data to a Log Analytics workspace. This workspace can collect metrics data from multiple VMs, no matter if they are located in the same or different subscriptions.