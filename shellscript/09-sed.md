# sed -> stream editor

### To delete a second line
```
sed -e '2d' /etc/passwd
```
### To delete all line
```
sed -e 'd' /etc/passwd
```
### For replace a word in a file
```
sed "s/new_value/existing_value/" filename --> This will only change the output printing to screen not the actual file and it will only replace the first occurance
s --> substitution

sed "s/new_value/existing_value/g" filename  --> with "g" option it will replace all the matches
sed -i "s/new_value/existing_value/g" filename  --> with -i it will change the actual file also
```
### Commad to replace a unknown words in between known words
```
I love python and it is very easy. I use python version 3.6.7 in my development environment
Here I want to replace the 3.6.7 dynamicaly without using the version in sed command. (.*) is used to fill the unknown characters in middele of two known words
"sed -i 's#version.*in#version 3.6.7 in#' Dockerfile
Here i have used # for separator instead of / we can use any single character for separator
```
