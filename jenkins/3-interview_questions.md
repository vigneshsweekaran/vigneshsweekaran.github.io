# Interview Questions

# Reference:
https://www.guru99.com/jenkins-interview-questions.html

# Questions:
### How to copy from one server to another jenkins server
Simply copy the jenkins home directory or use aws ebs(Any network strorage, create snapshots out of it and move to another server)

### How to restore the Deleted job

### How to take backup of the jenkins
Generally just copy the JENKINS_HOME diretory for copy, we can use ThinBackup pulgin to do the backup

ThinBackup: https://devopscube.com/jenkins-backup-data-configurations/

To move the jenkins_home directory to another path and create the symlink (We can also use AWS EBS and mount)

  1.Shutdown you Jenkins.
  Move all files from /var/lib/jenkins to /app/jenkins

  2. mv /var/lib/jenkins /app/
  Replace /var/lib/jenkins with a symbolic link to /app/jenkins

  3. ln -s /app/jenkins /var/lib/jenkins
  Start Jenkins again.

  That way all the files are actually stored under /app but all paths to /var/lib/jenkins stay valid due to the symbolic link.

### GitHUb webhook and what is application/json in it

### Install jenkins in Ubuntu
```
Prerequisite: Java should be installed (sudo apt-get install openjdk-8-jre)
Installing Long Term Support
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > \
    /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins
```

### How the tenants(multiple customers/products) are isolated in single jenkins instance
Using Folder concept(Folder plugin needs to be installed)

Each tenant will be assigned with one Folder and the jobs are created under that Folder. The credentails are also created and managed in the folder itself

We can restrict user to access particular Folder, so that other tenants folder will not be shown to the user
