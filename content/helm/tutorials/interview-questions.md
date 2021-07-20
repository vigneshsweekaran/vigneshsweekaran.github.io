# Helm Interview Questions

* What is the folder structure of Helm chart?

  |Chart.yaml        |A YAML file containing information about the chart|
  |LICENSE           |OPTIONAL: A plain text file containing the license for the chart|
  |README.md         |OPTIONAL: A human-readable README file|
  |values.yaml       |The default configuration values for this chart|
  |values.schema.json|OPTIONAL: A JSON Schema for imposing a structure on the values.yaml file|
  |charts/           |A directory containing any charts upon which this chart depends.|
  |crds/             |Custom Resource Definitions|
  |templates/        |A directory of templates that, when combined with values, will generate valid Kubernetes manifest files.|
  |templates/NOTES.txt|OPTIONAL: A plain text file containing short usage notes|

  
  [Official Documentation](https://helm.sh/docs/topics/charts/#the-chart-file-structure)

* How you can mark the Helm chart as Deprecated ?

  `deprecated` field in Chart.yaml can be used to mark a chart as deprecated.

  [Official Documentation](https://helm.sh/docs/topics/charts/#deprecating-charts)

* How you can add the helm chart repository to the helm client ?
  
  ```
  helm repo add devopspilot https://devopspilot.com/helm/charts/
  helm update
  ```

  devopspilot --> alias repo name to point to the Helm chart repository.
  https://devopspilot.com/helm/charts/ --> Helm chart repository url.

* How you can install the helm chart to specific namespace ?

  By passing cli flag `-n` or `--namespace`

  ```
  helm install mysql devopspilot/mysql -n database
  ``` 

* You have installed Helm chart, somebody from the team updated pod manifest manually, after which when you update the same Release what will happen?


* Can we have same Release names in different namespaces?

  Yes we can have same release name in two diffrent namespaces.

  Eg: Lets install mysql chart with same Release name `mysql` in two diffrent namespaces `database1` and `database2`
  ```
  helm install mysql devopspilot/mysql -n database1
  ```
  ```
  Output:
  NAME: mysql
  LAST DEPLOYED: Tue Jul 20 20:58:55 2021
  NAMESPACE: database1
  STATUS: deployed
  REVISION: 1
  TEST SUITE: None
  ```
  ```
  helm install mysql devopspilot/mysql -n database2
  ```
  ```
  Output:
  NAME: mysql
  LAST DEPLOYED: Tue Jul 20 21:01:21 2021
  NAMESPACE: database2
  STATUS: deployed
  REVISION: 1
  TEST SUITE: None
  ```

* You are installing mysql chart in `database` namespace. But you havent't created the database namespace before installing, what will happen ?

  Helm install will fail with an error. Namespace should be created before installing chart.
  
  Eg: Here we are installing mysql chart in database namespace. But databsae namespace is not created
  ```
  helm install mysql devopspilot/mysql -n database 
  ```
  ```
  Output:
  Error: create: failed to create: namespaces "database" not found
  ```

* What functions have you used in helm charts? Can you list down some functions ?

  default, lookup, eq, ne, lt, gt, and, or

  [Official Documentation](https://helm.sh/docs/chart_template_guide/functions_and_pipelines/)

* How will you manage environment specific values.yaml?

  Maintain one values.yaml for each environmrnt.

* What is the use of _helpers.tpl?

  It is used to define some templates or functions and then it can be referred in Kubernetes manifest files in templates folder.

* Did you work on any flow controls, if yes where did you use?

  `if/else` for creating conditional blocks
  
  `with` to specify a scope
  
  `range` which provides a "for each"-style loop

  [Official Documentation](https://helm.sh/docs/chart_template_guide/control_structures/)

* You have installed the chart which has CRDs. Now you are updating the same Release with updated chart, what will happen to the CRDs ?

  CRDs are never reinstalled. If Helm determines that the CRDs in the crds/ directory are already present (regardless of version), Helm will not attempt to install or upgrade.

  CRDs are never installed on upgrade or rollback. Helm will only create CRDs on installation operations.

* You have installed the chart which has CRD. Now you have uninstalled the chart, what will happen to the created CRDs ?
  
  The created CRDs will not be deleted automatically during helm uninstall. We have to explicitly delete the CRDs.

* What is the default timeout wile installing each kubernetes object using Helm ?
  
  The default duration time to wait for any individual Kubernetes operation (like Jobs for hooks) (default 5m0s).

  We are ovveride this timout limit by passing the cli flag `--timout` to helm install/update command.

  ```
  helm install mysql devopspilot/mysql -n database --timeout 10m
  ```

* You are going to install the chart which has some hooks. While installing the chart you want to skip those hooks. Is it possible ?

  Yes its possible to skip the helm hooks during installation by passing the cli flag `--no-hooks`

  ```
  helm install easyclaim-backend devopspilot/easyclaim-backend --no-hooks
  ```

* While installing the chart, you have passed two values.yaml file for the helm install command, which has the highest priority ?
  
  The rightmost values.yaml file passed as cli flag to helm install command has highest priority.

  ```
  helm install mysql devopspilot/mysql -f values.yaml -f values-dev.yaml
  ```

* While installing the chart, you have specified both values.yaml and `--set` cli-flag for the helm install command, what will happen now ?

  If both are passed, `--set` values are merged into passed values.yaml and then the values.yaml file is passed to helm install command.

  ```
  helm install mysql devopspilot/mysql --set deploymentType=statefulset -f values.yaml
  ```
