## How to install JenkinsX 3 in Kubernetes

### Prerequisites
* Kubernetes cluster up and running with LoadBalancer capability and default storageclass configured
* Kube config file configured in your local workstation
* `jx` cli installed
* Create PAT in Github

### Install jx cli
You can install `jx` cli either in your workstation(where your kubectl is configured) or Kubernetes master node

[Official Documentation](https://jenkins-x.io/v3/admin/setup/jx3/)

##### On Linux
```
curl -L https://github.com/jenkins-x/jx/releases/download/v3.2.196/jx-linux-amd64.tar.gz | tar xzv
chmod +x jx 
sudo mv jx /usr/local/bin
```

##### On Windows
Download the binary, extract it and add binary location to PATH environment variable

[Download Link](https://github.com/jenkins-x/jx/releases/download/v3.2.196/jx-windows-amd64.zip)

### Create Github Personal access token
[Click here to create a Github PAT](https://github.com/settings/tokens/new?scopes=repo,read:user,read:org,user:email,admin:repo_hook,write:packages,read:packages,write:discussion,workflow)

### Create a Jenkinsx git-ops repository from template
[Click here to create a git-ops repository from template](https://github.com/jx3-gitops-repositories/jx3-kubernetes/generate)

Type the repository name eg: jx-gitops

### Clone the newwly created repo to workstation
clone the repository to local workstation
```
git clone
```

### Update the configuration files
Update your domain in `domain:` section in jx-requirements.yml file

```
ingress:
  domain: devopspilot.tk
```

### Install Gitops operator
```
jx admin operator --username <your-github-username> --token <your-github-PAT>
```
eg:
```
jx admin operator --username <your-github-username> --token <your-github-PAT>
```