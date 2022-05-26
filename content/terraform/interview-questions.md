# Terraform Interview Questions

`Commands`
* 

`Variables`
* what are the ways to pass AWS credentials to AWS provider ? 

  * Setting the credentials in aws provider section (Not Recommended)
  * Setting aws credentials as Environmental variable
  * Configure the credentials in ~/.aws/credentials file
  * Using AWS IAM Role

* How you can define your terraform variable as environmental variable ?

  * By prefixing the varibale name with TF_VAR_ eg: export TF_VAR_environment=dev
