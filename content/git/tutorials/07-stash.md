# How to create, list and delete Stash

In the current branch we have done some changes in the file and we havent committed those changes, now you want to work on some other idea, but you want to save this changes for future purpose, we can save this chnages locally using stash. 

Run "git stash" and the current branch will become clean and all the chnages what you amd will be stored locally in temporary space.

git stash or git stash save (By default if we run git stash it will append the "save" keyword to it )

```
git stash
```
![git](/content/git/tutorials/images/stash/stash.png)

```
git stash save
```
![git](/content/git/tutorials/images/stash/stash-save.png)

### Create a stash with message
```
git stash save "message"
```
![git](/content/git/tutorials/images/stash/stash-save-message.png)

### To list the stash
```
git stash list
```
![git](/content/git/tutorials/images/stash/stash-list.png)

### To apply the stash to the current branch
```
git stash apply
```
![git](/content/git/tutorials/images/stash/stash-apply.png)

### To apply the specific stash from stash list
```
git stash apply stash@{index_no}
```
![git](/content/git/tutorials/images/stash/stash-apply.png)

### To stash both tracked and untracked files
If we do some chnages in the tracked file and also in one untacked file (new file). If we run git stash now, it will only stash the tracked files, it wont stash the untracked files
```
git stash -u                --> to stash both tracked and untracked files
```
![git](/content/git/tutorials/images/stash/stash-apply.png)

we can add the untracked file and run "git stash" also

### To do git stash apply and git stash drop in a single command
```
git stash pop
```
![git](/content/git/tutorials/images/stash/stash-apply.png)

### To know the file changes in stash
```
git stash show stah@{index_no}
```
latest stash will be assigned with index no '0'
![git](/content/git/tutorials/images/stash/stash-apply.png)

### To drop the latest stash from list
```
git stash drop
```
![git](/content/git/tutorials/images/stash/stash-drop.png)

### To drop the stash from stash list using stash index number
```
git stash drop stash@{0}
```
![git](/content/git/tutorials/images/stash/stash-drop-index-no.png)

### To drop all stashes from list in one shot
```
git stash clear
```
![git](/content/git/tutorials/images/stash/stash-apply.png)

### To take changes from one branch to another branch
First stash the files in the current branch then exceute the following command, it will automatically create a new branch, switch to that branch and take all the changes to that branch and that stash will be dropped from the stash list
```
git stash branch new_branch_name
```
![git](/content/git/tutorials/images/stash/stash-apply.png)