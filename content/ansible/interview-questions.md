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

### How to run only specific tasks on ansible playbook ?
```
Using ansible tags feature we can run only specific tasks

ansible-playbook playbook.yaml --tags=install,config,deploy
```

### How you can run all tasks except one task in ansible playbook ?
```
Using ansible tags feature we can skip one task and run all othere tasks

ansible-playbook playbook.yaml --skip-tags=install
```

### What are the special tags in ansible ?
```
always and never
```

### What is always tag in ansible ?
```
If you assign a always tag to tasks or play, ansible will always run that task or play.

If you even want to skip that tag, we can use --skip-tags=always
```

### What is never tag in ansible ?
```
If you assign a never tag to tasks or play, ansible will skip that task or play.

If you even want to run that tag, we can use --tags=never
```

### What is gathering_facts in ansible ? Is it enabled by default ?
```
This module takes care of executing the configured facts modules, the default is to use the ansible.builtin.setup module.

This module is automatically called by playbooks to gather useful variables about remote hosts that can be used in playbooks.

It can also be executed directly by /usr/bin/ansible to check what variables are available to a host.

Ansible provides many facts about the system, automatically.

Yes its enabled by default. We can disable by setting gatherings_afcts: false in playbook
```
