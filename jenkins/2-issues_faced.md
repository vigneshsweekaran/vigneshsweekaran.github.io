# Issues Faced in Jenkins

### Docker commands not working in freestyle job and in jenkins pipeline
Add jenkins user to docker group and restart the jenkins server(Restart using systemctl/service command)

### kubectl command not working when using as commands in Freestyle/pipeline/ansibble-playbook, if kubernetes plugin is used, it will handle the configuration
create .kube diretory in jenkins home directory and copy the config file to .kube folder

### Forget the admin password
Go to /var/lib/jenkins/config.xml and change the <useSecurity>true</useSecurity> to "false" (eg. <useSecurity>false</useSecurity>)
Now jenkins will not ask for username/password, go to manage jenkins --> create new password --> Go to /var/lib/jenkins/config.xml and change the <useSecurity>true</useSecurity>
to "true" Now jenkins will start asking for username/password

### Unknowingly assigned the read only role to admin user and not able to see anything in Jenkins UI after login
Open the /var/lib/jenkins/config.xml move the admin user to read only role to admin role and restart the jenkins
