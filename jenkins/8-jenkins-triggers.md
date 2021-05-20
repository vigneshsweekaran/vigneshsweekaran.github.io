# Jenkins build triggers

### Reference
https://blog.knoldus.com/jenkins-build-triggers/

### Github webhook
Github will notify the jenkins when some commits are pushed to remote repository.

Github webhook will work only when jenkins address is reachable from github

### Polling scm
Jenkins will check the Github periodically for any new commits has pushed. Uses cron to define how frequent it has to check

Polling is helpful, when jenkins is not reachable from github.

### Build periodically
Uses the cron to trigger the job periodically
