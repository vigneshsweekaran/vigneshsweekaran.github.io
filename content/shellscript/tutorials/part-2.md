## Shellscript Part - 2

### Youtube
[![Shellscript part-1](/content/shellscript/tutorials/images/part-2.png)](https://github.com/vigneshsweekaran/shellscript)

### What is for loop ?

Loop foop is used to do the repeat the task until limit is reached or iterate through the items

[For loop](/content/shellscript/tutorials/images/for.png)

In the above diagram `{1..5}` chnages to `1,2,3,4,5` which means the for loop is going to repeat the command execution 5 times.

The commands will be placed inside `do, done` block

So, the echo command is going to repeat 5 times `echo "The value is $number"`

```
vignesh@Vigneshs-MacBook-Pro part-2 % cat 1-for-loop.sh 
#!/bin/bash

for number in {1..5}
do
    echo "The value is $number"
done
```

```
vignesh@Vigneshs-MacBook-Pro part-2 % ./1-for-loop.sh 
The value is 1
The value is 2
The value is 3
The value is 4
The value is 5
```