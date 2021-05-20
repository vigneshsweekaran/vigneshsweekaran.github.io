Reference : https://bash.cyberciti.biz/guide/$IFS

IFS Effect On The Values of "$@" And "$*"
$@ and $* are special command line arguments shell variables.
The $@ holds list of all arguments passed to the script.
The $* holds list of all arguments passed to the script.
Create a shell script called ifsargs.sh:
#!/bin/bash
# ifsargs.sh - Cmd args - positional parameter demo
echo "Command-Line Arguments Demo"
echo "*** All args displayed using \$@ positional parameter ***"
echo $@
echo "*** All args displayed using \$* positional parameter ***"
echo $*
Save and close the file. Run it as follows:

chmod +x ifsargs.sh
./ifsargs.sh honda yamaha harley-davidson kawasaki
Sample outputs:

Command-Line Arguments Demo
*** All args displayed using $@ positional parameter ***
honda yamaha harley-davidson kawasaki
*** All args displayed using $* positional parameter ***
honda yamaha harley-davidson kawasaki
As you can see, the values of $@ and $* are same.
However, the values of "$@" and "$*" are different (note double quotes).
Edit ifsargs.sh as follows
#!/bin/bash
# ifsargs.sh - Cmd args - positional parameter demo

#### Set the IFS to | ####
IFS='|'

echo "Command-Line Arguments Demo"

echo "*** All args displayed using \$@ positional parameter ***"
echo "$@"        #*** double quote added ***#

echo "*** All args displayed using \$* positional parameter ***"
echo "$*"        #*** double quote added ***#
Save and close the file. Run it as follows:

./ifsargs.sh honda yamaha harley-davidson kawasaki
Sample outputs:

Command-Line Arguments Demo
*** All args displayed using $@ positional parameter ***
honda yamaha harley-davidson kawasaki
*** All args displayed using $* positional parameter ***
honda|yamaha|harley-davidson|kawasaki
$@ expanded as "$1" "$2" "$3" ... "$n"
$* expanded as "$1y$2y$3y...$n", where y is the value of IFS variable i.e. "$*" is one long string and $IFS act as an separator or token delimiters.
