## Azure Cli

## Virtual Machine
### To create virtual machine
```
az vm create \
  --resource-group learn-3bf6c57d-f2b7-49c9-9111-4ccb3cf6006a \
  --name my-vm \
  --image UbuntuLTS \
  --admin-username azureuser \
  --generate-ssh-keys
```

