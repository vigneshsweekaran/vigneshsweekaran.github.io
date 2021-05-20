# HELM-3 commands
* To install helm chart
  ```
  helm install -f myvalues.yaml myredis ./redis
  or helm install --set name=prod myredis ./redis
  or helm install --set-string long_int=1234567890 myredis ./redis
  or helm install --set-file my_script=dothings.sh myredis ./redis
  ```
* To install helm charts on specific namespace
  ```  
  helm install -f myvalues.yaml myredis ./redis -n nemespace_name
  ```
* we can pass multiple values.yaml or --set , but which is the rightmost will have the precedance
  ```  
  helm install -f myvalues.yaml -f override.yaml  myredis ./redis
  ```
* Dry-run
  ```  
  helm install -f myvalues.yaml myredis ./redis --dry-run
  ```
* To delete helm chart
  ```
  helm uninstall release_name
  helm uninstall release_name --dry-run
  helm uninstall release_name -n namespace_name (To delete helm chart which was installed on specific namespace)
  ```  
* To list the installed charts
  ```  
  helm list
  helm list -n namespace_name (To list installed helm charts on specific namespace)
  ```  
* To timeout the helm install command
  ```
  helm install -f values.yaml test . -n cnf --timeout 20s  (Default is 5 minutes if we didnt pass the --timeout parameter)
  ```  
* To get the config file(manifest) which we used during helm install
  ```
  helm get manifest release_name
  helm get manifest reease_name -n namespace_name
  ```
* To add a helm chart repo
  ```
  helm repo add [NAME] [URL] [flags]
  helm repo add bitnami https://charts.bitnami.com/bitnami
  
  helm repo add - add a chart repository
  helm repo index - generate an index file given a directory containing packaged charts
  helm repo list - list chart repositories
  helm repo remove - remove one or more chart repositories
  helm repo update - update information of available charts locally from chart repositories
  ```
* To search helm charts in that repo
  ```
  helm search repo repo-name (eg. helm search repo bitnami/)
  ```  
* To search for mongodb chart 
  ```  
  helm search repo bitnami/mango
  ```  
* To install helm plugin
  ```
  helm plugin install https://github.com/helm/helm-2to3
  ```
* To list installed plugin
  ```
  helm plugin lsit
  ```
* To add helm offical stable repo
  ```
  helm repo add stable https://charts.helm.sh/stable
  ```
* To download only the values.yaml from chart
  ```
  helm inspect values repo_name/chart_name > /tmp/values.yam (eg. helm inspect values stable/jenkins > /tmp/values.yaml)
  ```

# Helm 2 to 3 migration commands
* Install helm version 3 and rename the binary to helm3
* Installing plugin
  ``` 
  helm3 plugin install https://github.com/helm/helm-2to3
  ```
* Migrate Helm v2 configuration (Moves Chart starters, Repositories, Plugins)
  ```
  helm3 2to3 move config --dry-run
  helm3 2to3 move config
  ```
* The plugin also supports non default Helm v2 home and Helm v3 config and data folders, an example of it's use:
  ```
  export HELM_V2_HOME=$HOME/.helm2
  export HELM_V3_CONFIG=$HOME/.helm3
  export HELM_V3_DATA=$PWD/.helm3
  helm3 2to3 move config
  ```
* Migrate Helm v2 releases
  ```
  helm3 2to3 convert Release_name  (now release information is available in both version 2 and 3)
  helm3 2to3 convert Release_name --delete-v2-releases (To delete information in helm 2)
  If you are using Tillerless Helm v2, just add --tiller-out-cluster to migrate the release:
  helm3 2to3 convert postgres --tiller-out-cluster
  ```
* Clean up of Helm v2 data (Configuration (Helm home directory), v2 release data, Tiller deployment)
  ```
  helm3 2to3 cleanup --dry-run
  if you are using Tillerless Helm v2, just add --tiller-out-cluster to clean up Helm v2 data.
  The plugin also supports non default Helm v2 home data folder and Tiller releases namespace
  export HELM_V2_HOME=$PWD/.helm2
  helm 2to3 cleanup --tiller-ns some_namespace
  ```
  
# HELM-2
