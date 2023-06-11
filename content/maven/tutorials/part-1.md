## How to install Java and compile single Java file

### Install Java in Ubuntu Operating system
```
sudo apt install openjdk-11-jdk
```

### Install Java in Centos Operating system
```
sudo yum install java-11-openjdk
```

### To check Java version
```
ubuntu@manikandan:~$ java -version
openjdk version "11.0.19" 2023-04-18
OpenJDK Runtime Environment (build 11.0.19+7-post-Ubuntu-0ubuntu122.04.1)
OpenJDK 64-Bit Server VM (build 11.0.19+7-post-Ubuntu-0ubuntu122.04.1, mixed mode, sharing)
```

### 
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
The Java code written is only understandable by Human's, computer/machine cannot understand this code. Computer can understand only 0 and 1

So the Java compiler will convert the Java code to machine understandable code

### What is compiler ?
* A compiler is a program that takes a high-level language as input and outputs a low-level language (such as assembly or machine code). 

* It is essentially a computer program that converts programming language code into machine code (human-readable code to a binary 0 and 1 bits language for a computer processor to understand).

* The computer then executes the machine code in order to complete the task.

#### Key points of Compiler:
* Compilers check all types of errors, limits, and ranges.

* It takes longer to run and also requires more memory.

### What is Maven

### How to install maven in linux operating system

`Ubuntu Operating system`
Run the following command to install maven
```
sudo apt update
sudo apt install maven
```

`Centos Operating system`
If Java is not installed, run the following command to install Java
```
sudo yum install java-11-openjdk
```

Run the following command to install maven
```
sudo yum update
sudo yum install maven
```

### To check the version of maven
```
ubuntu@manikandan:~$ mvn --version
Apache Maven 3.6.3
Maven home: /usr/share/maven
Java version: 11.0.19, vendor: Ubuntu, runtime: /usr/lib/jvm/java-11-openjdk-amd64
Default locale: en, platform encoding: UTF-8
OS name: "linux", version: "5.15.0-1033-oracle", arch: "amd64", family: "unix"
```

##### Next Topic
[How to generate a sample java application using Maven](/content/maven/tutorials/02-generate-a-sample-java-application-using-maven)