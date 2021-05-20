# Terraform basics

* If we define variable in .tf file without the value, while terraform apply it will prompt to enter the value for that varaible. While terraform destroy also it will prompt to enter the value, we can press enter to skip that

* we can also pass variable value as parameter to terraform apply command
```
terraform apply -var "variable_name=value"
```

* Berrter way is to create a terraform.tfvars file and put the variable name and values there

* If we have diffrent name for variable file like this example.tfvars, then we have to pass the file name in the terraform apply command
```
terraform apply --var-file example.tfvars
```

* we can also pass the default value in the variable definition .tf file

* If we want our variable to type constraint we can specificy the type in variable definition
```
variable "aws_region" {
  description = "AWS region"
  #default = ap-south-1
  type = string
}
```