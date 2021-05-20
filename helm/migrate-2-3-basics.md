# Helm 2 vs Helm 3

**Details**
* Tiller component is removed
* **Three-way strategic merge patch** In Helm 2 its two-way strategic merge patch. which means it will compare the old manifest and the proposed chart manifest. In helm3 its three-way strategic merge patch.
It will comapare the old manifest, live state(running in kubernetes cluster, think like manully changes the replica count, which was not known to helm old manifest) and
new proposed chart manifest
* For helm upgrade, in helm 3 it forces the resources in chart, lets say you deployed a pod with one app container(version 1.0.0) using helm, now you manualy installed istio service-mesh, which will attach one more side-car container to our pod, so our pod will now have 2 containers. If we upgrade the app container version to 1.1.0 using helm2,
it will check the old manifest and new manifest and it will remove that side-car container, since it doest exist in old manifest and update the app container version. Using Helm 3, it will compare the old maifest, live state and new manifest, now it knows, we have one more side-car container and will just update ony the app container version and still the side-car container will be running
* **Secrets as the default storage driver**
Helm 2 used ConfigMaps to store release information. In Helm 3, Secrets are used instead (with a secret type of helm.sh/release) as the default storage driver. This brings a few advantages and has greatly simplified the functionality of Helm. To get (and apply) the config, Helm2 had to perform quite some operations as config itself was stored encrypted and archived in one of the keys or ConfigMap. Helm3 stores the config directly in Secret so instead of performing multiple operations to get it, it can simply pull out the secret, decrypt and apply. Another advantage is that release name does not have to be unique across the cluster anymore. Secrets containing releases are stored in the namespaces where the release was installed. So you can have multiple releases with the same name as soon as they are in different namespaces.
* **JSON Schema Chart Validation**
A JSON Schema validation can now be forced upon chart values. With that functionality, you can ensure that values provided by the user follow the schema created by the chart maintainer. This creates more possibilities for OPS vs DEV cooperation (OPS team can give more freedom to DEVs) and provides better error reporting when the user tries to use an incorrect set of values for a chart.
* **Release name is now required**
In Helm 2, if no name was provided, a random name would be generated. Helm 3 will throw an error if no name is provided with helm install (eventually you can use — generate-name flag if you want to still use random names)
* **Helm serve removed**
Not many people used helm serve (which was used to run a local Chart Repository on your machine for development purposes) but for those who did — it’s removed now. Although you can still use it as a plugin instead.
* **Namespaces are not created automatically anymore**
When creating a release in a namespace that does not exist, Helm 2 would create it automatically. Helm 3 follows the behaviour of other Kubernetes tooling and returns an error if the namespace does not exist. Releases are persisted on a release namespace basis and not in the Tiller namespace anymore
* **hel search** now supports both local repository searches and making search queries against Artifact Hub
* Chart apiVersion bumped to "v2" for following specification changes:
   * Dynamically linked chart dependencies moved to Chart.yaml (requirements.yaml removed and requirements --> dependencies)
   * Library charts (helper/common charts) can now be added as dynamically linked chart dependencies
   * Charts have a type metadata field to define the chart to be of an application or library chart. It is application by default which means it is renderable          and installable
   * Helm 2 charts (apiVersion=v1) are still installable
* XDG directory specification added:
   * Helm home removed and replaced with XDG directory specification for storing configuration files
   * No longer need to initialize Helm
   * helm init and helm home removed
* local or stable repositories are not set-up by default
* crd-install hook removed and replaced with crds directory in chart where all CRDs defined in it will be installed before any rendering of the chart
* test-failure hook annotation value removed, and test-success deprecated. Use test instead
* Commands removed/replaced/added:
   * delete --> uninstall : removes all release history by default (previously needed --purge)
   * fetch --> pull
   * home (removed)
   * init (removed)
   * install: requires release name or --generate-name argument
   * inspect --> show
   * reset (removed)
   * serve (removed)
   * template: -x/--execute argument renamed to -s/--show-only
   * upgrade: Added argument --history-max which limits the maximum number of revisions saved per release (0 for no limit)
* Helm 3 Go library has undergone a lot of changes and is incompatible with the Helm 2 library

**Reference**
* https://itnext.io/helm2-vs-helm3-part-1-c76c29106e99
* https://helm.sh/docs/topics/v2_v3_migration/
