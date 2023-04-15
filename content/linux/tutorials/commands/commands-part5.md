# Linux commands part-5

### head
Prints first 10 lines of a file

head fruits.txt

```
[opc@new-k8s ~]$ head fruits.txt
Apple
Apricot
Avocado
Banana
Bilberry
Blackberry
Blackcurrant
Blueberry
Boysenberry
Currant
```

### To print first n no of lines in a file

head -n 15 fruits.txt

```
[opc@new-k8s ~]$ head -n 15 fruits.txt
Apple
Apricot
Avocado
Banana
Bilberry
Blackberry
Blackcurrant
Blueberry
Boysenberry
Currant
Cherry
Cherimoya
Chico fruit
Cloudberry
Coconut
```

### tail
Prints last 10 lines of a file

tail fruits.txt

```
[opc@new-k8s ~]$ tail fruits.txt
Salak
Satsuma
Soursop
Star fruit
Solanum quitoense
Strawberry
Tamarillo
Tamarind
Ugli fruit
Yuzu
```

### To print last n no of lines in a file

tail -n 15 fruits.txt

```
[opc@new-k8s ~]$ tail -n 15 fruits.txt
Raspberry
Salmonberry
Rambutan
Redcurrant
Salal berry
Salak
Satsuma
Soursop
Star fruit
Solanum quitoense
Strawberry
Tamarillo
Tamarind
Ugli fruit
Yuzu
```

### File permissions
```
-------
drwxrwxrwx

- - file
d - directory
l - link
r - read
w - write
x - executable


-      ---    ---    ---
-/d/l  rwx    rwx    rwx
       user   group  others
```

### chmod
```
r - 4
w - 2
x - 1

chmod 700 file_name

chmod 777 file_name
```

### chown
```
chmod test opc folder_name/file_name
```
