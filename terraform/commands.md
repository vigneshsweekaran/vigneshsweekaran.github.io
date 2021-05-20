# Terraform commands

### terraform init
will read the .tf files, and download the providers mentioned in the .tf files

### terraform plan
It a dry-run and will show the output, what will be created, deleted or modified

### terraform apply
Will execute the the .tf file and create, delete or modify the resource mentioned in the .tf file

### terraform destroy
Will destroy the resources defined in .tf, if it was created before using terrform apply

### To skip typing 'yes' during terraform apply and destroy
terraform apply --auto-approve

### To see the resources name created by terraform apply
terraform state list

### To see the particular resource state in detail
terraform state show resource_name

eg : terraform state show aws_internet_gateway.igw_dev

### To create/destroy only one resource from terraform script
terraform destroy -target resource_name

eg. terraform destroy -target aws_instance.ec2_instance_apache2
