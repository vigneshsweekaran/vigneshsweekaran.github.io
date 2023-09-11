## Azure cli
### To connect to azure account
```
az login

or

az login --user <myAlias@myCompany.com> -password <myPassword>
```

### To list the subscription
```
# get the current default subscription using show
az account show --output table

# get the current default subscription using list
az account list --query "[?isDefault]"

# change the active subscription using the subscription name
az account set --subscription "My Demos"

# change the active subscription using the subscription ID
az account set --subscription "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

### To list the Resource groups
```
az group list
```

### To create Resource group
```
az group create --name vignesh-test-cli --location eastus
```

### To create a virtual machine
```
az vm create \
    --resource-group vignesh-test-cli \
    --name windows-test \
    --image Win2022AzureEditionCore \
    --public-ip-sku Standard \
    --admin-username azureuser
```

### To delete virtual machine
```
az vm delete \
    --resource-group vignesh-test-cli \
    --name windows-test \
    --force-deletion none
```

### To delete resource group
```
az group delete --name vignesh-test-cli
```

### To create AKS cluster
```
az aks create -g RESOURCE_GROUP_NAME -n CLUSTER_NAME --generate-ssh-keys --node-count WORKER_NODES_COUNT
eg: az aks create -g RG1 -n AKS1 --generate-ssh-keys --node-count 3
```

### To deallocate and remove the VMs within a VMSS (Virtual machine scale set)
```
az vmss deallocate --instance-ids 5 --name myScaleSet --resource-group testgroup
```