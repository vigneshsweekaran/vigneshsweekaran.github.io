## How to compile Java code

Lets create a sample Java file `HelloWorld.java`

```
ubuntu@manikandan:~$ ll
total 4
-rw-rw-r-- 1 ubuntu ubuntu 118 Jun  4 23:48 HelloWorld.java
```

```
ubuntu@manikandan:~$ cat HelloWorld.java 
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}
```

We cannot directly run the Java file, first we have to compile the Java file.

Lets compile the Java file `HelloWorld.java`

Run the `javac FILE_NAME` to compile the single Java file
```
ubuntu@manikandan:~$ javac HelloWorld.java
```

Once the compilation is success, you will see the `HelloWorld.class` file
```
ubuntu@manikandan:~$ ll
total 8
-rw-rw-r-- 1 ubuntu ubuntu 427 Jun  4 23:50 HelloWorld.class
-rw-rw-r-- 1 ubuntu ubuntu 118 Jun  4 23:48 HelloWorld.java
```

Now type the `java HelloWorld` to run the java program 
```
ubuntu@manikandan:~$ java HelloWorld 
Hello, World!
```

### Why we need to compile the Java code
The Java code written is only understandable by Human's, computer/machine cannot understand this code.

### How to install maven in linux operating system

`Ubuntu`
Run the following command to install maven in ubuntu operating system
```
sudo apt update
sudo apt install maven
```

`Centos`
Run the following command to install maven in Centos operating system
```
sudo yum update
sudo yum install maven
```

### How to check the version of git
```
mvn --version
```

##### Next Topic
[How to generate a sample java application using Maven](/content/maven/tutorials/02-generate-a-sample-java-application-using-maven)