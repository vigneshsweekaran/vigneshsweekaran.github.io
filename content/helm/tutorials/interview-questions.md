# Helm Interview Questions

* Whats is the folder structure of Helm chart?

  |Chart.yaml        |A YAML file containing information about the chart|
  |LICENSE           |OPTIONAL: A plain text file containing the license for the chart|
  |README.md         |OPTIONAL: A human-readable README file|
  |values.yaml       |The default configuration values for this chart|
  |values.schema.json|OPTIONAL: A JSON Schema for imposing a structure on the values.yaml file|
  |charts/           |A directory containing any charts upon which this chart depends.|
  |crds/             |Custom Resource Definitions|
  |templates/        |A directory of templates that, when combined with values, will generate valid Kubernetes manifest files.|
  |templates/NOTES.txt|OPTIONAL: A plain text file containing short usage notes|

  [Official](https://helm.sh/docs/topics/charts/#the-chart-file-structure)

* How you can mark the Helm chart as Deprecated ?

  `deprecated` field in Chart.yaml can be used to mark a chart as deprecated.

  [Official](https://helm.sh/docs/topics/charts/#deprecating-charts)

* You have installed the chart which has CRDs. Now you are updating the same Release with updated chart, what will happen to the CRDs ?

  CRDs are never reinstalled. If Helm determines that the CRDs in the crds/ directory are already present (regardless of version), Helm will not attempt to install or upgrade.

  CRDs are never installed on upgrade or rollback. Helm will only create CRDs on installation operations.

* You have installed the chart which has CRD. Now you have uninstalled the chart, what will happen to the craeted CRDs ?
  
  The created CRDs will not be deleted automatically during helm uninstall. We have to explicitly delete the CRDs.
