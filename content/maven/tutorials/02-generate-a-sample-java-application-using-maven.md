# Generate a sample java application using maven

### Reference
* [Official documentaion](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)

Maven has a build in command to generate a sample maven application.

Run the following command to generate the sample java application
```
mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false
```