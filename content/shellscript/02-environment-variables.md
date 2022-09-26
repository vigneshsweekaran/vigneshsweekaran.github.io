* To create Shell variables (Shell variables means only accessible within the shell script)
```
TEST_VAR='Hello World!'
```

* To make shell vraibles as Environemnet variables (Environment Variables are accesible to child process)
```
export TEST_VAR
```

* To create new Environment variables (Once the shell is closed the environment variables are destroyed. And the child process environment variables cannot be accessed by parent)
```
export NEW_VAR="Testing export"
```

* To see the environment variables
```
printenv
printenv variable_name (To print the environment variable value)
```

* To list all shell variables, environmental variables, local variables, and shell functions
```
set
```
  
* To change Environment variable to shell variable
```
export -n TEST_VAR
```

* If we want to completely unset a variable, either shell or environmental
```
unset TEST_VAR
```