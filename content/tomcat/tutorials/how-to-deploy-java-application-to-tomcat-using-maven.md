# How to deploy the java application to Tomcat 9 webserver using Maven

### References:
* [How to install Tomcat](/content/tomcat/tutorials/installation)
* [How to manually deploy the java application to Tomcat 9 webserver](/content/tomcat/tutorials/how-to-manually-deploy-java-application-to-tomcat)

We are going to deploy the java application war file to Tomcat webserver using maven, which means without touching the Tomcat manager GUI we are going to deploy the java application.

To create users in Tomcat, open the file **/var/lib/tomcat9/conf/tomcat-users.xml**
```
sudo vi /var/lib/tomcat9/conf/tomcat-users.xml
```

Go to end of the file and paste the following lines inside tomcat-users block and save it.

Here we have defined one role **manager-script** and created user **deployer** and assigned the role to the deployer user.

The **manager-script** role will not give access to Tomcat manager web application GUI, it will give access to deploy the application using scripts.

```
  <role rolename="manager-script"/>
  <user username="deployer" password="deployer" roles="manager-script"/>
```

![tomcat](/content/tomcat/tutorials/images/manually-deploy-app/tomcat-user-script.png)

Then restart the tomcat9
```
sudo systemctl restart tomcat9
```

Now to deploy the java web application to tomcat, we have to compile the Java code and package it to .war file extension type.

I have a sample hello-world maven project in github [hello-world](https://github.com/vigneshsweekaran/hello-world)

To download and compile this code we need two tools to be installed in our system **git** and **maven**

If you are using **Ubuntu** machine, you can easily install git and maven using following commands.
```
sudo apt install -y git maven
```

![tomcat](/content/tomcat/tutorials/images/manually-deploy-app/tomcat-install-git-maven.png)

Now we can clone the **hello-world** project from Github
```
git clone https://github.com/vigneshsweekaran/hello-world.git
```

![tomcat](/content/tomcat/tutorials/images/manually-deploy-app/tomcat-git-clone.png)

Go inside hello-world folder
```
cd hello-world
```

Now we run the maven commands to compile the Java code and package it to .war file extension.
```
mvn clean package
```

![tomcat](/content/tomcat/tutorials/images/manually-deploy-app/tomcat-mvn-clean-package.png)

After compilation, the **hello-world.war** file is generated in **target** folder

![tomcat](/content/tomcat/tutorials/images/manually-deploy-app/tomcat-target-folder.png)

Now we have our artifact **hello-world.war** in **/home/ubuntu/hello-world/target** folder

Lets deploy the **hello-world.war** to tomact using Manager GUI

Goto Tomcat manager GUI --> **Deploy directory or WAR file located on server** section

Since we have our **hello-world.war** file in the same server. We will use this option.

Enter **/hello-world** in the **Context Path:** feild and war file absolute path /home/ubuntu/hello-world/target/hello-world.war in **WAR or Directory path:** feild

![tomcat](/content/tomcat/tutorials/images/manually-deploy-app/tomcat-deploy-war-gui.png)

Now we can verify the deployment by checking the list in **Applications** section.

![tomcat](/content/tomcat/tutorials/images/manually-deploy-app/tomcat-deployed-gui.png)

Now we can access the deployed application from browser by http://your-ip-address:8080/hello-world

![tomcat](/content/tomcat/tutorials/images/manually-deploy-app/tomcat-hello-world-context.png)

Hurray! we have succesfully deployed the java web application manually to Tomcat 9 using Manager GUI

### Previous Topic
* [How to manually deploy the java application to Tomcat 9 webserver](/content/tomcat/tutorials/how-to-manually-deploy-java-application-to-tomcat)