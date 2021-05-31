# Gerrit
### Reference
Jenkins build trigger : 
* https://nofluffjuststuff.com/magazine/2016/06/understanding_and_applying_gerrit_part_4_integrating_jenkins_with_gerrit
* https://nofluffjuststuff.com/magazine/2016/10/understanding_and_applying_gerrit_part_5_doing_verification_builds_with_jenkins
* https://plugins.jenkins.io/gerrit-trigger/

Gerrit Merge Types: 
* https://nofluffjuststuff.com/magazine/2016/04/understanding_and_applying_gerrit_part_3_gerrit_submit_types_and_git_review

### To create a change and push for code review
git push origin HEAD:refs/for/branch_name (eg: git push origin HEAD:refs/for/master) The branch should be already created in remote repository.
For each change created the one change-id will be created along with the commit message using commit-msg hook. This should be locally installed on local repository. We can copy this hook from remote repository to local using scp
```
scp -p mygerrit:hooks/commit-msg .git/hooks/
```
If you are amending the change created the new change-id will not be created, instead patch set 2 will be created in the same change published.
If you did not amend and push, it will be created as new change and the new commit-id will be created.

### To push directly to branch, bypassing the code-review proccess
git push origin branch_name (eg: git push origin master)
To push directly to master you need a proper access.

### To add permissions to push directly to branch without code-review process
1. Create a Group and add users to that group
![Adding user to group](https://github.com/vigneshsweekaran/notes/blob/master/gerrit/images/gerrit-adding-users-to-group.PNG)

2. Give push permissions to that group, add the group name under push in refs/heads/*
![add-user-to-group](https://github.com/vigneshsweekaran/notes/blob/master/gerrit/images/add-permissions-to-group.PNG)

3. To give read access to projects for new user, add the user to the group, add te group to read access in refs/*
![to-give-read-access-to-projects](https://github.com/vigneshsweekaran/notes/blob/master/gerrit/images/to-provide-read-access-to-projects.PNG)

### To make some branch as default (eg. master branch)
Edit the HEAD branch and update the value to master and save. After this by default git clone will download the master branch

### Important: after adding the gerrit instance to jenkins, restart the jenkins server to take effect
