## Ansible Interview Questions

### what is the diffrence between defaults and vars folder in ansible role

### What is ansible collection ?
```
Collections are a distribution format for Ansible content that can include playbooks, roles, modules, and plugins. As modules move from the core Ansible repository into collections, the module documentation will move to the collections pages.
```

### What is Dynamic invenstory ?
[Ansible dynamic inventory - AWS](https://devopscube.com/setup-ansible-aws-dynamic-inventory/){:target="_blank" rel="noopener"}

### Where ansible.cfg is located and what location of ansible.cfg has higher precedence ?
```
Changes can be made and used in a configuration file which will be searched for in the following order:

ANSIBLE_CONFIG (environment variable if set)
ansible.cfg (in the current directory)
~/.ansible.cfg (in the home directory)
/etc/ansible/ansible.cfg

Ansible will process the above list and use the first file found, all others are ignored.
```
