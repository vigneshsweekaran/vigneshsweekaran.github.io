## How to move state file from one workspace to another.

#### Pull the state file from current workspace
I am currently in default workspace, pulling the default state file
```
terraform state pull > default.tfstate
```

#### Create and switch to new workspace
Lets create new workspace `test`. When we create new workspace it will automatically switch into that workspace.
```
terraform workspace new test
```

### Push the state file
Lets push the state file to test workspace
```
terraform state push default.tfstate
```

#### Delete all states in default state file
Switch to default workspace and delete the sattes in state file 
```
terraform workspace select default
terraform state list | xargs -n 1 terraform state rm
```

#### Reference
https://stackoverflow.com/questions/66979732/in-terraform-is-it-possible-to-move-to-state-from-one-workspace-to-another