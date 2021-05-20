In the current branch we have done some changes in the file and we havent committed those changes, now you want to work on some other idea, but you want to save this changes for
future purpose we can save it. Run "git stash" and the current branch will become clean.
git stash or git stash save (By default if we run git stash it will append the "save" keyword to it )

To list the stash
git stash list

To drop the latest stash from list
git stash drop

To apply the stash to the current branch
git stash apply

If we do some chnages in the tracked file and also in one untacked file (new file). If we run git stash now, it will only stash the tracked files, it wont stash the untracked
files
git stash -u --> to stash both tracked and untracked files
we can add the untracked file and run "git stash" also

To do git stash apply and git stash drop in a single command --> git stash pop

Create a stash with message
git stash save "message"

To know the file changes in stash
git stash show stah@{index_no}  --> latest stash will be assigned with index no '0'

To apply the specific stash from stash list
git stash apply stash@{index_no}

To drop specific stash
git stash drop stash@{index_no}

To drop all stashes from list in one shot
git stash clear

To take changes from one branch to another branch
First stash the files in the current branch then exceute the following command, it will automatically create a new branch, switch to that branch and take all the changes to
that branch and that stash will be dropped from the stash list
git stash branch new_branch_name
