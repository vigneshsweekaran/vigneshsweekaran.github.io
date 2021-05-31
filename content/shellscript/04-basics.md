# Shell Script Basics
### Brackets

$(command) or \`command\` – the command substitution

${variable_name} or $variable_name – the parameter substitution/variable expansion

### IFS - Internal Field Separator
The IFS is a special shell variable.

You can change the value of IFS as per your requirments.

The Internal Field Separator (IFS) that is used for word splitting after expansion and to split lines into words with the read builtin command.

The default value is <space><tab><newline>. You can print it with the following command:

IFS='|'
$@ expanded as "$1" "$2" "$3" ... "$n"
$* expanded as "$1y$2y$3y...$n", where y is the value of IFS variable i.e. "$*" is one long string and $IFS act as an separator or token delimiters.

$@ and $* are special command line arguments shell variables.
The $@ holds list of all arguments passed to the script.
The $* holds list of all arguments passed to the script.

### To print array
${array_name[*]}

${array_name[@]}

### For loop
```
#!/bin/sh
for i in 1 2 3 4 5
do
  echo "Looping ... number $i"
done
```

### source file_name
The source command reads and executes commands from the file specified as its argument in the *current shell environment.* It is useful to load functions, variables, and configuration files into shell scripts.

source is a shell built-in in Bash and other popular shells used in Linux and UNIX operating systems. Its behavior may be slightly different from shell to shell.

### To check file exits or not
[ -e FILE ] True if FILE exists.

This will return true for both /etc/hosts and /dev/null and for directories.

[ -f FILE ] True if FILE exists and is a regular file. 

This will return true for /etc/hosts and false for /dev/null (because it is not a regular file), and false for /dev since it is a directory.

### To get filename without extension
$(basename $PACKAGE_NAME .tgz)

### To encode base64
echo data | base64

### To decode base64
echo encoded_value(eg. ZGVmYXVsdA==) | base64 -d

### To untar a file
tar -xvzf file.tgz

### To compress and generate .tgz file
tar -cvzf file_name.tgz folder_name/

### Special symbols in shellscript
$? --> takes the result of last command executed

### If we dont want to print the output of command to screen/stdout, we can write the output to this file /dev/null
ping -c1 8.8.8.8 &> /dev/null

### To print a value
echo "This is my data"
printf "Hello shellscript \n" --> we have to add \n in printf or else next command output will print in the same line

### To read data from user and store to variable
read variable_name

### To store command error to variable
Here helm tool is not installed it will return error status, so by default the error message printed to stdout and not stored to variable
```
helm_cmd_output=$(helm 2>&1)
```

### To check the command is executed successfully or not
Here helm tool is not installed it will return error status
```
helm version
if [[ $? != 0 ]]; then
    curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash
fi
```

### redirecting
https://www.brianstorti.com/understanding-shell-script-idiom-redirect/
