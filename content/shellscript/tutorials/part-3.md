## Shellscript Part - 3

### Youtube
[![Shellscript part-1](/content/shellscript/tutorials/images/part-3.png)](https://www.youtube.com/watch?v=GIk1wW7Y-uo)

### What is while loop ?

While loop is a control flow statement that allows code or commands to be executed repeatedly based on a given condition

The while loop continues to run till the condition is true, once the condition becomes false, it comes out of the loop

![While loop](/content/shellscript/tutorials/images/while.png)

To clone the shellscript git repo
```
[opc@new-k8s ~]$ git clone https://github.com/vigneshsweekaran/shellscript.git
Cloning into 'shellscript'...
remote: Enumerating objects: 78, done.
remote: Counting objects: 100% (78/78), done.
remote: Compressing objects: 100% (70/70), done.
remote: Total 78 (delta 13), reused 56 (delta 5), pack-reused 0
Unpacking objects: 100% (78/78), done.
```

```

```

```
#!/bin/bash

count=1

while [ $count -le 5 ]
do
  echo "The count value is ${count}"
  count=$(( $count + 1 ))
done
```

```

```



### while loop using single line





### Breaking the infinite loop