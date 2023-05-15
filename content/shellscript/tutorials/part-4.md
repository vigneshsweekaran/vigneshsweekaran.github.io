## Shellscript Part - 4

### Youtube
[![Shellscript part-4](/content/shellscript/tutorials/images/part-4.png)](https://www.youtube.com/watch?v=DipqrRNJX1c)

### What is function ?

Function is used to group the set of commands/logic and it will be executed only if it is called

Mainly used for reusability purpose.

### Clone the shellscript git repo
```
ubuntu@test:~$ git clone https://github.com/vigneshsweekaran/shellscript
Cloning into 'shellscript'...
remote: Enumerating objects: 271, done.
remote: Counting objects: 100% (271/271), done.
remote: Compressing objects: 100% (200/200), done.
remote: Total 271 (delta 135), reused 189 (delta 67), pack-reused 0
Receiving objects: 100% (271/271), 31.86 KiB | 1.18 MiB/s, done.
Resolving deltas: 100% (135/135), done.
```

```
ubuntu@test:~$ cd shellscript/tutorials/part-4/
```

```
ubuntu@test:~/shellscript/tutorials/part-4$ ll
-rwxrwxr-x 1 ubuntu ubuntu  158 May 15 11:38 1-function.sh*
-rwxrwxr-x 1 ubuntu ubuntu  238 May 15 11:38 2-function-return.sh*
-rwxrwxr-x 1 ubuntu ubuntu  516 May 15 11:38 3-function-return-array.sh*
-rwxrwxr-x 1 ubuntu ubuntu  894 May 15 11:38 4-create-user.sh*
```

### Basic function

```
#!/bin/sh

# Function Definition
greeting() {
   echo "Hello $1"
}

# Calling the function
greeting "DevopsPilot"

greeting "Vignesh"

greeting "Shellscript"
```

```
ubuntu@test:~/shellscript/tutorials/part-4$ ./1-function.sh 
Hello DevopsPilot
Hello Vignesh
Hello Shellscript
```

### How to return some data from function

```
#!/bin/sh

# Function Definition
addition() {
  num1=$1
  num2=$2

  output=$(( num1 + num2 ))

  return $output
}

# Calling the function
addition 20 5

# Capture the result returned by last command
result=$?

echo "The output is $result"
```

```
ubuntu@test:~/shellscript/tutorials/part-4$ ./2-function-return.sh 
The output is 25
```

### How to return a array from function

```
ubuntu@test:~/shellscript/tutorials/part-4$ cat 3-function-return-array.sh 
#!/bin/bash

output=()

# Function Definition
calculate() {
  num1=$1
  num2=$2

  output_add=$(( num1 + num2 ))
  output_sub=$(( num1 - num2 ))
  output_multiply=$(( num1 * num2 ))
  output_division=$(( num1 / num2 ))

  output=("$output_add" "$output_sub" "$output_multiply" "$output_division")
}

# Calling the function
calculate 20 5

echo "The addition result is ${output[0]}"
echo "The subraction result is ${output[1]}"
echo "The multiplication result is ${output[2]}"
echo "The division result is ${output[3]}"
```

```
ubuntu@test:~/shellscript/tutorials/part-4$ ./3-function-return-array.sh 
The addition result is 25
The subraction result is 15
The multiplication result is 100
The division result is 4
```

### How to create and delete the linux users using script

```
#!/bin/bash

users_list=(raghav mani manoj devops)
delete_users_list=(raghav)

# Checks whether user is present or not
check_user(){
  USER=$1

  id ${USER}
  return $?
}

# To create user
create_user(){
  USER=$1
  COMMENT="Managed by script"
  useradd -c "$COMMENT" $USER --create-home
  echo "Created user $USER successfully !!!"
}

# To delete users
delete_users(){
  echo "Deleting Users ..."

  for user in ${delete_users_list[@]};
  do
    check_user $user
    user_status=$?
    
    if [[ $user_status -eq 0 ]]
    then
      userdel -r $user
    else
      echo "The user ${user} dosen't exist !!!"
    fi
  done
}

# Creating users
echo "Creating Users ..."

for user in ${users_list[@]};
do
  check_user $user
  user_status=$?

  if [[ $user_status -ne 0 ]]
  then
    create_user $user
  else
    echo "The user ${user} already exist !!!"
  fi
done

# Deleting Users
# delete_users
```

```
ubuntu@test:~/shellscript/tutorials/part-4$ sudo ./4-user-management.sh 
Creating Users ...
id: ‘raghav’: no such user
Created user raghav successfully !!!
id: ‘mani’: no such user
Created user mani successfully !!!
id: ‘manoj’: no such user
Created user manoj successfully !!!
id: ‘devops’: no such user
Created user devops successfully !!!
```