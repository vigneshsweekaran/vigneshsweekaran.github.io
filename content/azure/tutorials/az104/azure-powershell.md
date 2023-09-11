## Azure powershell

### Azure powershell
* Lets you connect to your Azure subscription and manage resources
* Adds the Azure-specific commands - new Az module
* Available inside a browser via the Azure Cloud Shell
* Available as a local installation on Linux, macOS, or Windows
* Has an interactive and a scripting mode

#### Install azure module in windows powershell
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine

Install-Module -Name Az -AllowClobber
```

#### To connect to azure account
```
Connect-AzAccount
```

#### To list the subscription
```
Get-AzSubscription
```

#### To list the Resource groups
```
Get-AzResourceGroup
```

#### To create Resource group
```
New-AzResourceGroup -Name "vignesh-test-ps" -Location 'East US'
```

#### To create a virtual machine
```
New-AzVm -ResourceGroupName "vignesh-test-ps" -Name "ubuntu-test" -Image "UbuntuLTs" -Location "East US" -Size "Standard_B2s"
```

#### To delete virtual machine
```

```

#### To delete resource group
```
Remove-AzResourceGroup -Name "vignesh-test-ps"
```
