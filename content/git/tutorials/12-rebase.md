# What is git rebase and how to use it

Git rebase is used to synchronize your current bramch with the target-branch / created-branch / any-branch

In current branch, the commits comming from target-branch will be kept below the commits done in the current branch.

**Pros:**

* Used to reduce one merge commit and have cleaner commit history

Example:
Lets create a branch called **feature-1** from **dev** branch and do two commits in **feature-1** branch 

![git](/content/git/tutorials/images/rebase/rebase-feature-1-commits.PNG)


![git](/content/git/tutorials/images/rebase/rebase-feature-1-log.PNG)

![git](/content/git/tutorials/images/rebase/rebase-feature-1-commits.PNG)

![git](/content/git/tutorials/images/rebase/rebase-feature-1-commits.PNG)

![git](/content/git/tutorials/images/rebase/rebase-feature-1-commits.PNG)

![git](/content/git/tutorials/images/rebase/rebase-feature-1-commits.PNG)