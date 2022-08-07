# Maven Interview Questions

### What is Super pom ?
```
The Super POM is Maven's default POM. All POMs extend the Super POM unless explicitly set, meaning the configuration specified in the Super POM is inherited by the POMs you created for your projects.

Reference: https://maven.apache.org/ref/3.0.4/maven-model-builder/super-pom.html
```

### What is the need of settings.xml ?
```
settings.xml is used to configuring the mirror, private remote repositories and storing some common secrets
Used for configuring jfrog repositories to pull and push dependencies from Jfrog
For configuring the plugin repositories
For configuring the proxy
For configuring the profiles

Reference: https://maven.apache.org/settings.html
```

### Where settings.cml file is located ?
```
There are two locations where a settings.xml file may live:

The Maven install: ${maven.home}/conf/settings.xml
A user's install: ${user.home}/.m2/settings.xml

Reference: https://maven.apache.org/settings.html
```

### Which has highest precedence, remote repositories configured in settings.xml or in pom.xml
```
Remote repositories configured in pom.xml has highest precedence

Reference: https://maven.apache.org/guides/introduction/introduction-to-repositories.html
```

### How you can define username and password for internal repository defined in pom.xml
```
The id of the repository from the pom.xml has to be added under server block of setting.xml and then username , password or privatekey can be added there.

Reference: https://maven.apache.org/settings.html#servers
```

### What is mirror repository ?
```
You may want to use an alternative mirror for a particular repository without changing the project files.

Some reasons to use a mirror are:
There is a synchronized mirror on the internet that is geographically closer and faster
You want to replace a particular repository with your own internal repository which you have greater control over
You want to run a repository manager to provide a local cache to a mirror and need to use its URL instead

Eg: Setting internal repository as maven central repository

<settings>
  ...
  <mirrors>
    <mirror>
      <id>other-mirror</id>
      <name>Other Mirror Repository</name>
      <url>https://other-mirror.repo.other-company.com/maven2</url>
      <mirrorOf>central</mirrorOf>
    </mirror>
  </mirrors>
  ...
</settings>

Note: <mirrorOf>central</mirrorOf> is important to match the central repository id

Reference: https://maven.apache.org/guides/mini/guide-mirror-settings.html#using-mirrors-for-repositories
```

### How you can force single repository for all dependencies
```
By setting <mirrorOf>*</mirrorOf> in mirror section

<settings>
  ...
  <mirrors>
    <mirror>
      <id>internal-repository</id>
      <name>Maven Repository Manager running on repo.mycompany.com</name>
      <url>http://repo.mycompany.com/proxy</url>
      <mirrorOf>*</mirrorOf>
    </mirror>
  </mirrors>
  ...
</settings>

Reference: https://maven.apache.org/guides/mini/guide-mirror-settings.html#using-a-single-repository
```
