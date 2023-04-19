# Linux commands part-8

### |
Pipe is used to pass the output from one command/program to the input for another command

```
[opc@new-k8s test]$ pwd
/home/opc/test
[opc@new-k8s test]$ ll
total 8
drwxrwxr-x. 2 opc opc 27 Mar 17 14:03 client
-rw-rw-r--. 1 opc opc 77 Apr 12 12:26 Dockerfile
-rw-rw-r--. 1 opc opc  0 Apr 12 12:54 hello.txt
-rw-rw-r--. 1 opc opc 23 Apr 12 12:56 mani.txt
-rw-rw-r--. 1 opc opc  0 Mar 17 14:03 server
drwxrwxr-x. 3 opc opc 18 Apr 13 12:46 vignesh
[opc@new-k8s test]$ ll | wc -l
7
```

### jq
Used to read the JSON data or Json file

```
[opc@new-k8s ~]$ pwd
/home/opc
[opc@new-k8s ~]$ ll
total 3072012
-rw-rw-r--. 1 opc  opc         852 Apr 15 03:15 fruits.txt
drwxrwxr-x. 2 opc  opc          39 Apr 15 12:46 myprogram
-rwxrwxr-x. 1 opc  opc          81 Apr 15 13:27 newtest
-rw-rw-r--. 1 opc  opc        2026 Apr 18 11:39 output.json
drwxrwxr-x. 2 opc  opc          25 Nov 26  2021 prometheus
-rw-r--r--. 1 root root 3145728000 Jan 11  2022 swapfile
drwxrwxr-x. 4 opc  opc         100 Apr 15 13:04 test
[opc@new-k8s ~]$ cat output.json | jq .
{
  "url": "https://api.github.com/repos/vigneshsweekaran/hello-world/releases/43010389",
  "assets_url": "https://api.github.com/repos/vigneshsweekaran/hello-world/releases/43010389/assets",
  "upload_url": "https://uploads.github.com/repos/vigneshsweekaran/hello-world/releases/43010389/assets{?name,label}",
  "html_url": "https://github.com/vigneshsweekaran/hello-world/releases/tag/clean",
  "id": 43010389,
  "author": {
    "login": "vigneshsweekaran",
    "id": 40670015,
    "node_id": "MDQ6VXNlcjQwNjcwMDE1",
    "avatar_url": "https://avatars.githubusercontent.com/u/40670015?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/vigneshsweekaran",
    "html_url": "https://github.com/vigneshsweekaran",
    "followers_url": "https://api.github.com/users/vigneshsweekaran/followers",
    "following_url": "https://api.github.com/users/vigneshsweekaran/following{/other_user}",
    "gists_url": "https://api.github.com/users/vigneshsweekaran/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vigneshsweekaran/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vigneshsweekaran/subscriptions",
    "organizations_url": "https://api.github.com/users/vigneshsweekaran/orgs",
    "repos_url": "https://api.github.com/users/vigneshsweekaran/repos",
    "events_url": "https://api.github.com/users/vigneshsweekaran/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vigneshsweekaran/received_events",
    "type": "User",
    "site_admin": false
  },
  "node_id": "MDc6UmVsZWFzZTQzMDEwMzg5",
  "tag_name": "clean",
  "target_commitish": "master",
  "name": "Clean repo with maven application",
  "draft": false,
  "prerelease": false,
  "created_at": "2021-05-16T06:18:49Z",
  "published_at": "2021-05-16T06:26:47Z",
  "assets": [],
  "tarball_url": "https://api.github.com/repos/vigneshsweekaran/hello-world/tarball/clean",
  "zipball_url": "https://api.github.com/repos/vigneshsweekaran/hello-world/zipball/clean",
  "body": ""
}
```

### Using jq command directly with curl output
```
[opc@new-k8s ~]$ curl https://api.github.com/repos/vigneshsweekaran/hello-world/releases/latest | jq .
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  2026  100  2026    0     0   3455      0 --:--:-- --:--:-- --:--:--  3463
{
  "url": "https://api.github.com/repos/vigneshsweekaran/hello-world/releases/43010389",
  "assets_url": "https://api.github.com/repos/vigneshsweekaran/hello-world/releases/43010389/assets",
  "upload_url": "https://uploads.github.com/repos/vigneshsweekaran/hello-world/releases/43010389/assets{?name,label}",
  "html_url": "https://github.com/vigneshsweekaran/hello-world/releases/tag/clean",
  "id": 43010389,
  "author": {
    "login": "vigneshsweekaran",
    "id": 40670015,
    "node_id": "MDQ6VXNlcjQwNjcwMDE1",
    "avatar_url": "https://avatars.githubusercontent.com/u/40670015?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/vigneshsweekaran",
    "html_url": "https://github.com/vigneshsweekaran",
    "followers_url": "https://api.github.com/users/vigneshsweekaran/followers",
    "following_url": "https://api.github.com/users/vigneshsweekaran/following{/other_user}",
    "gists_url": "https://api.github.com/users/vigneshsweekaran/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vigneshsweekaran/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vigneshsweekaran/subscriptions",
    "organizations_url": "https://api.github.com/users/vigneshsweekaran/orgs",
    "repos_url": "https://api.github.com/users/vigneshsweekaran/repos",
    "events_url": "https://api.github.com/users/vigneshsweekaran/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vigneshsweekaran/received_events",
    "type": "User",
    "site_admin": false
  },
  "node_id": "MDc6UmVsZWFzZTQzMDEwMzg5",
  "tag_name": "clean",
  "target_commitish": "master",
  "name": "Clean repo with maven application",
  "draft": false,
  "prerelease": false,
  "created_at": "2021-05-16T06:18:49Z",
  "published_at": "2021-05-16T06:26:47Z",
  "assets": [],
  "tarball_url": "https://api.github.com/repos/vigneshsweekaran/hello-world/tarball/clean",
  "zipball_url": "https://api.github.com/repos/vigneshsweekaran/hello-world/zipball/clean",
  "body": ""
}
```

### Redaing only one data from JSON file using jq
```
[opc@new-k8s ~]$ cat output.json | jq .url
"https://api.github.com/repos/vigneshsweekaran/hello-world/releases/43010389"
```

### Redaing only one data from JSON file using jq and removing the double quotes from output
```
[opc@new-k8s ~]$ cat output.json | jq -r .url
https://api.github.com/repos/vigneshsweekaran/hello-world/releases/43010389
```

### How to read the value from JSON using, which is two level inner
```
[opc@new-k8s ~]$ cat output.json | jq .
{
  "url": "https://api.github.com/repos/vigneshsweekaran/hello-world/releases/43010389",
  "assets_url": "https://api.github.com/repos/vigneshsweekaran/hello-world/releases/43010389/assets",
  "upload_url": "https://uploads.github.com/repos/vigneshsweekaran/hello-world/releases/43010389/assets{?name,label}",
  "html_url": "https://github.com/vigneshsweekaran/hello-world/releases/tag/clean",
  "id": 43010389,
  "author": {
    "login": "vigneshsweekaran",
    "id": 40670015,
    "node_id": "MDQ6VXNlcjQwNjcwMDE1",
    "avatar_url": "https://avatars.githubusercontent.com/u/40670015?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/vigneshsweekaran",
    "html_url": "https://github.com/vigneshsweekaran",
    "followers_url": "https://api.github.com/users/vigneshsweekaran/followers",
    "following_url": "https://api.github.com/users/vigneshsweekaran/following{/other_user}",
    "gists_url": "https://api.github.com/users/vigneshsweekaran/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vigneshsweekaran/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vigneshsweekaran/subscriptions",
    "organizations_url": "https://api.github.com/users/vigneshsweekaran/orgs",
    "repos_url": "https://api.github.com/users/vigneshsweekaran/repos",
    "events_url": "https://api.github.com/users/vigneshsweekaran/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vigneshsweekaran/received_events",
    "type": "User",
    "site_admin": false
  },
  "node_id": "MDc6UmVsZWFzZTQzMDEwMzg5",
  "tag_name": "clean",
  "target_commitish": "master",
  "name": "Clean repo with maven application",
  "draft": false,
  "prerelease": false,
  "created_at": "2021-05-16T06:18:49Z",
  "published_at": "2021-05-16T06:26:47Z",
  "assets": [],
  "tarball_url": "https://api.github.com/repos/vigneshsweekaran/hello-world/tarball/clean",
  "zipball_url": "https://api.github.com/repos/vigneshsweekaran/hello-world/zipball/clean",
  "body": ""
}
[opc@new-k8s ~]$ cat output.json | jq .author.login
"vigneshsweekaran"
```

### How to check the status code of last executed command
$? is a special variable, which will hold the status code of last command executed

In Linux, 0 means success, any other value is failure

```
[opc@new-k8s ~]$ ll
total 3072008
-rw-rw-r--. 1 opc  opc         852 Apr 15 03:15 fruits.txt
-rwxrwxr-x. 1 opc  opc          81 Apr 15 13:27 newtest
drwxrwxr-x. 2 opc  opc          25 Nov 26  2021 prometheus
-rw-r--r--. 1 root root 3145728000 Jan 11  2022 swapfile
drwxrwxr-x. 4 opc  opc         100 Apr 15 13:04 test
[opc@new-k8s ~]$ echo $?
0
[opc@new-k8s ~]$ ddhghg
-bash: ddhghg: command not found
[opc@new-k8s ~]$ echo $?
127
```

### grep
grep command is used to serach for a word and print those lines

```
[opc@new-k8s ~]$ cat /etc/passwd | grep bash
root:x:0:0:root:/root:/bin/bash
opc:x:1000:1000:Oracle Public Cloud User:/home/opc:/bin/bash
vignesh:x:1001:1001::/home/vignesh:/bin/bash
```

### grep command - ignoring the case
-i --> Is used to ignore the case

```
[opc@new-k8s ~]$ cat /etc/passwd | grep BASH
[opc@new-k8s ~]$ cat /etc/passwd | grep -i BASH
root:x:0:0:root:/root:/bin/bash
opc:x:1000:1000:Oracle Public Cloud User:/home/opc:/bin/bash
vignesh:x:1001:1001::/home/vignesh:/bin/bash
```

### grep - find the match and print next n number of lines
-An --> arugument used to print the next n number of lines

```
[opc@new-k8s ~]$ cat states.txt | grep -i tamil
Tamil Nadu
[opc@new-k8s ~]$ cat states.txt | grep -i -A5 tamil
Tamil Nadu
Tripura
Telangana
Uttar Pradesh
Uttarakhand
West Bengal
```

### grep - find the match and print n number of lines before the match
-Bn --> arugument used to print the next n number of lines

```
[opc@new-k8s ~]$ cat states.txt | grep -i tamil
Tamil Nadu
[opc@new-k8s ~]$ cat states.txt | grep -i -B5 tamil
Nagaland
Odisha
Punjab
Rajasthan
Sikkim
Tamil Nadu
```

### awk
awk command is used to print the specific columns from the output.

It has lot of features to operate on the outputs

```
[opc@new-k8s ~]$ ll
total 3072024
-rw-rw-r--. 1 opc  opc         852 Apr 15 03:15 fruits.txt
-rw-rw-r--. 1 opc  opc        9943 Apr 19 11:16 india.txt
-rwxrwxr-x. 1 opc  opc          81 Apr 15 13:27 newtest
drwxrwxr-x. 2 opc  opc          25 Nov 26  2021 prometheus
-rw-rw-r--. 1 opc  opc         282 Apr 19 11:22 states.txt
-rw-r--r--. 1 root root 3145728000 Jan 11  2022 swapfile
drwxrwxr-x. 4 opc  opc         100 Apr 15 13:04 test
[opc@new-k8s ~]$ ll | awk '{print $9}'

fruits.txt
india.txt
newtest
prometheus
states.txt
swapfile
test
```

### awk - customising the output

```
[opc@new-k8s ~]$ ll
total 3072024
-rw-rw-r--. 1 opc  opc         852 Apr 15 03:15 fruits.txt
-rw-rw-r--. 1 opc  opc        9943 Apr 19 11:16 india.txt
-rwxrwxr-x. 1 opc  opc          81 Apr 15 13:27 newtest
drwxrwxr-x. 2 opc  opc          25 Nov 26  2021 prometheus
-rw-rw-r--. 1 opc  opc         282 Apr 19 11:22 states.txt
-rw-r--r--. 1 root root 3145728000 Jan 11  2022 swapfile
drwxrwxr-x. 4 opc  opc         100 Apr 15 13:04 test
[opc@new-k8s ~]$ ll | awk '{print $1 "\t" $9}'
total
-rw-rw-r--.     fruits.txt
-rw-rw-r--.     india.txt
-rwxrwxr-x.     newtest
drwxrwxr-x.     prometheus
-rw-rw-r--.     states.txt
-rw-r--r--.     swapfile
drwxrwxr-x.     test
```

### cut
cut command can be used to print the specific column





