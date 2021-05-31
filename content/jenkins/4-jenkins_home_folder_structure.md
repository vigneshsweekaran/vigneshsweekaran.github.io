# Jenkins Folder Structure
```
/var/lib/jenkins
drwxr-xr-x  3 jenkins jenkins  4096 Jul  4 03:40 .cache/
drwx------  3 jenkins jenkins  4096 Jul  4 03:05 .gnupg/
drwxr-xr-x  3 jenkins jenkins  4096 Jul  4 03:39 .groovy/
drwxr-xr-x  3 jenkins jenkins  4096 Jul  4 03:05 .java/
-rw-r--r--  1 jenkins jenkins     0 Nov  8 15:58 .lastStarted
-rw-r--r--  1 jenkins jenkins    48 Nov  8 15:55 .owner
-rw-r--r--  1 jenkins jenkins   475 Jul  4 03:39 com.cloudbees.hudson.plugins.folder.config.AbstractFolderConfiguration.xml
-rw-r--r--  1 jenkins jenkins  1644 Nov  8 15:58 config.xml
-rw-r--r--  1 jenkins jenkins 14487 Jul 27 14:21 credentials.xml
drwxr-xr-x  3 jenkins jenkins  4096 Oct  2 01:30 fingerprints/
-rw-r--r--  1 jenkins jenkins   156 Nov  8 15:58 hudson.model.UpdateCenter.xml
-rw-r--r--  1 jenkins jenkins  1230 Jul  4 04:09 hudson.plugins.emailext.ExtendedEmailPublisher.xml
-rw-r--r--  1 jenkins jenkins   370 Jul  4 03:39 hudson.plugins.git.GitTool.xml
-rw-------  1 jenkins jenkins  1712 Jul  4 03:34 identity.key.enc
-rw-r--r--  1 jenkins jenkins     7 Jul  4 03:40 jenkins.install.InstallUtil.lastExecVersion
-rw-r--r--  1 jenkins jenkins     7 Jul  4 03:40 jenkins.install.UpgradeWizard.state
-rw-r--r--  1 jenkins jenkins   183 Jul  4 03:40 jenkins.model.JenkinsLocationConfiguration.xml
-rw-r--r--  1 jenkins jenkins   171 Jul  4 03:34 jenkins.telemetry.Correlator.xml
drwxr-xr-x  5 jenkins jenkins  4096 Sep 23 14:19 jobs/
drwxr-xr-x  4 jenkins jenkins  4096 Jul 26 15:55 logs/
-rw-r--r--  1 jenkins jenkins   907 Nov  8 15:58 nodeMonitors.xml
drwxr-xr-x  4 jenkins jenkins  4096 Jul 27 15:51 nodes/
drwxr-xr-x 93 jenkins jenkins 12288 Nov  8 15:57 plugins/
-rw-r--r--  1 jenkins jenkins   129 Nov  8 15:57 queue.xml.bak
-rw-r--r--  1 jenkins jenkins    64 Jul  4 03:34 secret.key
-rw-r--r--  1 jenkins jenkins     0 Jul  4 03:34 secret.key.not-so-secret
drwx------  4 jenkins jenkins  4096 Jul 27 14:21 secrets/
drwxr-xr-x  2 jenkins jenkins  4096 Nov  8 14:39 updates/
drwxr-xr-x  2 jenkins jenkins  4096 Jul  4 03:34 userContent/
drwxr-xr-x  3 jenkins jenkins  4096 Jul  4 03:40 users/
drwxr-xr-x  2 jenkins jenkins  4096 Jul  4 03:39 workflow-libs/
drwxr-xr-x  4 jenkins jenkins  4096 Jul 27 15:55 workspace/
```
### tree /var/lib/jenkins/jobs
```
jobs/
├── master
│   ├── builds
│   │   ├── 1
│   │   │   ├── build.xml
│   │   │   ├── changelog.xml
│   │   │   └── log
│   │   ├── legacyIds
│   │   └── permalinks
│   ├── config.xml
│   └── nextBuildNumber
└── shell_test
    ├── builds
    │   ├── legacyIds
    │   └── permalinks
    ├── config.xml
    └── nextBuildNumber
```    
### tree /var/lib/jenkins/nodes
```
nodes/
├── slave
│   └── config.xml
└── slave2
    └── config.xml
```    
### tree /var/lib/jenkins/plugins
```
├── apache-httpcomponents-client-4-api
│   ├── META-INF
│   │   ├── MANIFEST.MF
│   │   └── maven
│   │       └── org.jenkins-ci.plugins
│   │           └── apache-httpcomponents-client-4-api
│   │               ├── pom.properties
│   │               └── pom.xml
│   └── WEB-INF
│       ├── lib
│       │   ├── apache-httpcomponents-client-4-api.jar
│       │   ├── fluent-hc-4.5.10.jar
│       │   ├── httpasyncclient-4.1.4.jar
│       │   ├── httpasyncclient-cache-4.1.4.jar
│       │   ├── httpclient-4.5.10.jar
│       │   ├── httpclient-cache-4.5.10.jar
│       │   ├── httpcore-4.4.12.jar
│       │   ├── httpcore-nio-4.4.10.jar
│       │   └── httpmime-4.5.10.jar
│       └── licenses.xml
├── apache-httpcomponents-client-4-api.jpi
├── artifactory
│   ├── META-INF
│   │   ├── MANIFEST.MF
│   │   └── maven
│   │       └── org.jenkins-ci.plugins
│   │           └── artifactory
│   │               ├── pom.properties
│   │               └── pom.xml
│   ├── WEB-INF
│   │   ├── lib
│   │   │   ├── aether-api-1.1.0.jar
│   │   │   ├── aether-api-1.13.1.jar
│   │   │   ├── aether-impl-1.1.0.jar
│   │   │   ├── aether-impl-1.13.1.jar
│   │   │   ├── aether-spi-1.1.0.jar
│   │   │   ├── aether-spi-1.13.1.jar
│   │   │   ├── aether-util-1.1.0.jar
│   │   │   ├── aether-util-1.13.1.jar
│   │   │   ├── aopalliance-repackaged-2.5.0-b42.jar
│   │   │   ├── artifactory.jar
│   │   │   ├── backport-util-concurrent-3.1.jar
│   │   │   ├── bcpkix-jdk15on-1.60.jar
│   │   │   ├── bcprov-jdk15on-1.60.jar
│   │   │   ├── build-info-api-2.20.0.jar
│   │   │   ├── build-info-client-2.20.0.jar
│   │   │   ├── build-info-extractor-2.20.0.jar
│   │   │   ├── build-info-extractor-docker-2.20.0.jar
│   │   │   ├── build-info-extractor-go-2.20.0.jar
│   │   │   ├── build-info-extractor-gradle-4.18.0.jar
│   │   │   ├── build-info-extractor-ivy-2.20.0.jar
│   │   │   ├── build-info-extractor-maven3-2.20.0.jar
│   │   │   ├── build-info-extractor-npm-2.20.0.jar
│   │   │   ├── build-info-extractor-nuget-2.20.0.jar
│   │   │   ├── build-info-extractor-pip-2.20.0.jar
│   │   │   ├── build-info-vcs-2.20.0.jar
│   │   │   ├── commons-codec-1.4.jar
│   │   │   ├── commons-compress-1.19.jar
│   │   │   ├── commons-io-2.5.jar
│   │   │   ├── commons-lang-2.4.jar
│   │   │   ├── commons-lang3-3.8.1.jar
│   │   │   ├── docker-java-3.1.2.jar
│   │   │   ├── guava-18.0.jar
│   │   │   ├── hk2-api-2.5.0-b42.jar
│   │   │   ├── hk2-locator-2.5.0-b42.jar
│   │   │   ├── hk2-utils-2.5.0-b42.jar
│   │   │   ├── httpclient-4.5.12.jar
│   │   │   ├── httpcore-4.4.5.jar
│   │   │   ├── ivy-2.4.0.jar
│   │   │   ├── jackson-annotations-2.9.5.jar
│   │   │   ├── jackson-core-2.10.5.jar
│   │   │   ├── jackson-databind-2.10.5.jar
│   │   │   ├── jackson-dataformat-xml-2.11.1.jar
│   │   │   ├── jackson-jaxrs-base-2.9.8.jar
│   │   │   ├── jackson-jaxrs-json-provider-2.9.8.jar
│   │   │   ├── jackson-module-jaxb-annotations-2.11.1.jar
│   │   │   ├── jakarta.activation-api-1.2.1.jar
│   │   │   ├── jakarta.xml.bind-api-2.3.2.jar
│   │   │   ├── javassist-3.22.0-CR2.jar
│   │   │   ├── javax.activation-api-1.2.0.jar
│   │   │   ├── javax.inject-2.5.0-b42.jar
│   │   │   ├── javax.ws.rs-api-2.1.jar
│   │   │   ├── jaxb-api-2.4.0-b180830.0359.jar
│   │   │   ├── jcl-over-slf4j-1.7.25.jar
│   │   │   ├── jdom-1.1.jar
│   │   │   ├── jersey-apache-connector-2.27.jar
│   │   │   ├── jersey-client-2.27.jar
│   │   │   ├── jersey-common-2.27.jar
│   │   │   ├── jersey-hk2-2.27.jar
│   │   │   ├── jsr305-3.0.2.jar
│   │   │   ├── junixsocket-common-2.2.0.jar
│   │   │   ├── junixsocket-native-common-2.2.0.jar
│   │   │   ├── jzlib-1.1.3.jar
│   │   │   ├── maven-artifact-manager-2.2.1.jar
│   │   │   ├── maven-deploy-plugin-2.8.2.jar
│   │   │   ├── maven-model-3.1.0.jar
│   │   │   ├── maven-plugin-registry-2.2.1.jar
│   │   │   ├── maven-profile-2.2.1.jar
│   │   │   ├── maven-project-2.2.1.jar
│   │   │   ├── netty-buffer-4.1.47.Final.jar
│   │   │   ├── netty-codec-4.1.47.Final.jar
│   │   │   ├── netty-codec-http-4.1.47.Final.jar
│   │   │   ├── netty-codec-socks-4.1.47.Final.jar
│   │   │   ├── netty-common-4.1.47.Final.jar
│   │   │   ├── netty-handler-4.1.47.Final.jar
│   │   │   ├── netty-handler-proxy-4.1.31.Final.jar
│   │   │   ├── netty-resolver-4.1.47.Final.jar
│   │   │   ├── netty-transport-4.1.47.Final.jar
│   │   │   ├── netty-transport-native-epoll-4.1.31.Final.jar
│   │   │   ├── netty-transport-native-kqueue-4.1.31.Final.jar
│   │   │   ├── netty-transport-native-unix-common-4.1.31.Final.jar
│   │   │   ├── osgi-resource-locator-1.0.1.jar
│   │   │   ├── plexus-classworlds-2.5.2.jar
│   │   │   ├── plexus-container-default-1.0-alpha-6.jar
│   │   │   ├── plexus-utils-1.0.2.jar
│   │   │   ├── slf4j-api-1.7.25.jar
│   │   │   ├── slf4j-simple-1.7.30.jar
│   │   │   ├── stax2-api-4.2.1.jar
│   │   │   └── woodstox-core-6.2.1.jar
│   │   └── licenses.xml
│   ├── help
│   │   ├── ArtifactoryBuilder
│   │   │   ├── help-bypassproxy.html
│   │   │   ├── help-connectionRetry.html
│   │   │   ├── help-deploymentThreads.html
│   │   │   ├── help-password.html
│   │   │   ├── help-pipelinesIntegrationUrl.html
│   │   │   ├── help-resolverCredentials.html
│   │   │   ├── help-resolverPassword.html
│   │   │   ├── help-resolverUserName.html
│   │   │   ├── help-serverId.html
│   │   │   ├── help-timeout.html
│   │   │   ├── help-url.html
│   │   │   ├── help-useCredentialsPlugin.html
│   │   │   └── help-userName.html
│   │   ├── ArtifactoryGradleConfigurator
│   │   │   ├── help-deployIvy.html
│   │   │   ├── help-deployMaven.html
│   │   │   └── help-useArtifactoryGradlePlugin.html
│   │   ├── ArtifactoryMaven3NativeConfigurator
│   │   │   └── help.html
│   │   ├── ArtifactoryRedeployPublisher
│   │   │   └── help-evenIfUnstable.html
│   │   ├── JFrogPipelines
│   │   │   └── parameter.html
│   │   ├── Trigger
│   │   │   └── help-pathsToWatch.html
│   │   ├── common
│   │   │   ├── help-DownloadSpec.html
│   │   │   ├── help-UploadSpec.html
│   │   │   ├── help-VCSPassword.html
│   │   │   ├── help-VCSUserName.html
│   │   │   ├── help-aggregateBuildIssues.html
│   │   │   ├── help-allowPromotionOfNonStagedBuilds.html
│   │   │   ├── help-artifactPattern.html
│   │   │   ├── help-asyncBuildRetention.html
│   │   │   ├── help-combinationFilter.html
│   │   │   ├── help-customizedBuildName.html
│   │   │   ├── help-deployArtifacts.html
│   │   │   ├── help-deployBuildInfo.html
│   │   │   ├── help-deployPattern.html
│   │   │   ├── help-deployReleases.html
│   │   │   ├── help-deployRepository.html
│   │   │   ├── help-deploySnapshots.html
│   │   │   ├── help-deployedArtifactExcludePattern.html
│   │   │   ├── help-deployedArtifactIncludePattern.html
│   │   │   ├── help-deployerPassword.html
│   │   │   ├── help-deployerUserName.html
|   │   │   ├── help-deploymentProperties.html
│   │   │   ├── help-discardBuildArtifacts.html
│   │   │   ├── help-discardBuilds.html
│   │   │   ├── help-enableIssueTrackerIntegration.html
│   │   │   ├── help-envVarsExcludePatterns.html
│   │   │   ├── help-envVarsIncludePatterns.html
│   │   │   ├── help-filterExcludedArtifactsFromBuild.html
│   │   │   ├── help-includeEnvVars.html
│   │   │   ├── help-ivyPattern.html
│   │   │   ├── help-overrideBuildName.html
│   │   │   ├── help-overridingDeployerCredentials.html
│   │   │   ├── help-overridingResolverCredentials.html
│   │   │   ├── help-passIdentifiedDownstream.html
│   │   │   ├── help-recordAllDependencies.html
│   │   │   ├── help-resolvePattern.html
│   │   │   ├── help-resolverUserName.html
│   │   │   ├── help-stagingStrategies.html
│   │   │   └── help-useMavenPatterns.html
│   │   ├── pipeline
│   │   │   ├── artifactoryServerID.html
│   │   │   ├── downloadJson.html
│   │   │   └── uploadJson.html
│   │   └── release
│   │       ├── PromoteBuildAction
│   │       │   ├── help-build.html
│   │       │   ├── help-defaultPromotionTargetRepository.html
│   │       │   ├── help-failFast.html
│   │       │   ├── help-includeDependencies.html
│   │       │   ├── help-promotionComment.html
│   │       │   ├── help-promotionRepository.html
│   │       │   ├── help-promotionSourceRepository.html
│   │       │   ├── help-stagingComment.html
│   │       │   ├── help-targetStatus.html
│   │       │   └── help-useCopy.html
│   │       ├── ReleaseAction
│   │       │   ├── help-createReleaseBranch.html
│   │       │   ├── help-createVcsTag.html
│   │       │   ├── help-currentVersion.html
│   │       │   ├── help-nextDevelopmentComment.html
│   │       │   ├── help-nextVersion.html
│   │       │   ├── help-promotionPlugin.html
│   │       │   ├── help-releaseBranch.html
│   │       │   ├── help-releaseVersion.html
│   │       │   ├── help-stagingRepository.html
│   │       │   ├── help-tagComment.html
│   │       │   ├── help-tagUrl.html
│   │       │   ├── help-versioningGlobal.html
│   │       │   ├── help-versioningNone.html
│   │       │   └── help-versioningPerModule.html
│   │       ├── common
│   │       │   ├── help-defaultReleaseStagingRepository.html
│   │       │   ├── help-releaseBranchPrefix.html
│   │       │   ├── help-releaseManagement.html
│   │       │   ├── help-stagingPlugin.html
│   │       │   ├── help-tagBaseUrl.html
│   │       │   ├── help-targetRemoteName.html
│   │       │   └── help-useReleaseBranch.html
│   │       ├── gradle
│   │       │   ├── GradleReleaseAction
│   │       │   │   ├── help-nextDevelopmentValue.html
│   │       │   │   ├── help-nextDevelopmentVersion.html
│   │       │   │   ├── help-releaseValue.html
│   │       │   │   └── help-releaseVersion.html
│   │       │   └── GradleReleaseWrapper
│   │       │       ├── help-alternativeTasks.html
│   │       │       ├── help-nextIntegPropsKeys.html
│   │       │       └── help-releasePropsKeys.html
│   │       └── maven
│   │           └── MavenReleaseWrapper
│   │               ├── help-alternativeGoals.html
│   │               ├── help-tagPrefix.html
│   │               └── help-versioningDefault.html
│   └── images
│       ├── artifactory-icon.png
│       ├── artifactory-promote.png
│       ├── artifactory-release.png
│       ├── bintray.png
│       └── xray-icon.png
├── artifactory.bak
├── artifactory.jpi
├── authentication-tokens
│   ├── META-INF
│   │   ├── MANIFEST.MF
│   │   └── maven
│   │       └── org.jenkins-ci.plugins
│   │           └── authentication-tokens
│   │               ├── pom.properties
│   │               └── pom.xml
│   └── WEB-INF
│       ├── lib
│       │   └── authentication-tokens.jar
│       └── licenses.xml
├── authentication-tokens.jpi
```
### tree /var/lib/jenkins/users
```
users/
├── admin_14784160218747936979
│   └── config.xml
└── users.xml
```
### tree /var/lib/jenkins/userContent
```
userContent/
└── readme.txt
```
### tree /var/lib/jenkins/workspace
```
workspace/
├── master
└── sleep
```
### tree /var/lib/jenkins/secrets
```
secrets/
├── com.cloudbees.plugins.credentials.SecretBytes.KEY
├── filepath-filters.d
│   └── 30-default.conf
├── hudson.console.AnnotatedLargeText.consoleAnnotator
├── hudson.console.ConsoleNote.MAC
├── hudson.model.Job.serverCookie
├── hudson.util.Secret
├── jenkins.model.Jenkins.crumbSalt
├── jenkins.slaves.JnlpSlaveAgentProtocol.secret
├── master.key
├── org.jenkinsci.main.modules.instance_identity.InstanceIdentity.KEY
├── slave-to-master-security-kill-switch
└── whitelisted-callables.d
    └── default.conf
```
