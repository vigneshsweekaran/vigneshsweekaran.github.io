### VPC

# Creating New VPC
whenever we create a VPC by default one route table and one NACL will be created.

The NACL created by default will have all inbound and outbound rules as allowed. For new manually created NACL all inbound and outbound rules will be added as denied

If we create a new subnet implicitly it will be attached to default route table. Its a better practice not to attach the Internet gateway to default route taable.
Better dont use the default Route table. After creating the subnet, create the new route table and attach the subnet to it.
