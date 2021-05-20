# Basic configuration of vagrant file

1. To create a additional disk in VM
```
Vagrant.configure("2") do |config|
  config.vm.define "hashicorp" do |h|
    h.vm.box = "hashicorp/bionic64"
    h.vm.provider :virtualbox
    h.vm.disk :disk, size: "10GB", name: "extra_storage"
  end
end
```
