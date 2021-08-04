# Interview Questions

* How will you install Jenkins ?

  [Install Jenkins](https://devopspilot.com/content/jenkins/tutorials/common/01-how-to-install-jenkins)

* In what are the ways you can install Jenkins ?

  Jenkins as service in linux server
  Jenkins as Docker Containers
  Jenkins as Pod in Kubernetes

* How you can install plugins in Jenkins ?

  [Install plugins in Jenkins](https://devopspilot.com/content/jenkins/tutorials/common/02-how-to-install-plugins)

* What is Global Tool Configuration in Jenkins ?

  Global Tool Configurations in Jenkins is used to install and configure multiple versions of tools like maven, gradle, Java, Node Js ... 
  
  For installing the tools, we have to install the respective plugins. Eg: To have multive versions of Node Js we have to install NodeJS plugin

  [Configure Global Tool Configuration](https://devopspilot.com/content/jenkins/tutorials/common/03-global-tool-configurations)

* How to securely store Credentials in Jenkins ?

  We can securely store credentials in Jenkins using Credentials section in `Manage Jenkins`
  
  [Store Credentials](https://devopspilot.com/content/jenkins/tutorials/common/04-how-to-store-credentials-in-jenkins)

* How to copy Jenkins configuration data from server to another server ?
  
  Simply copy the jenkins home directory or use aws ebs(Any network strorage, create snapshots out of it and move to another server)

* How to restore the Deleted job ?

  Using `Job Configuration History` plugin we can restore the deleted Job.

  This plugin saves a copy of the configuration file of jobs and agents (config.xml) for every change made and of the system configuration. 
  
  [Restore deleted Jenkins Job](https://devopspilot.com/content/jenkins/tutorials/common/how-to-restore-deleted-job)

* How to take backup of the jenkins

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

* GitHUb webhook and what is application/json in it
  
* How the tenants(multiple customers/products) are isolated in single jenkins instance
  Using Folder concept(Folder plugin needs to be installed)

  Each tenant will be assigned with one Folder and the jobs are created under that Folder. The credentails are also created and managed in the folder itself

  We can restrict user to access particular Folder, so that other tenants folder will not be shown to the user
