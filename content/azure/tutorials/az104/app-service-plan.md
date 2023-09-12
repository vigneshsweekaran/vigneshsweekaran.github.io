## App Service plan

#### Shared compute
Free and Shared, the two base tiers, runs an app on the same Azure VM as other App Service apps, including apps of other customers. These tiers allocate CPU quotas to each app that runs on the shared resources, and the resources cannot scale out. These tiers are intended to be used only for development and testing purposes

#### Dedicated compute
The Basic, Standard, Premium, PremiumV2, and PremiumV3 tiers run apps on dedicated Azure VMs. Only apps in the same App Service plan share the same compute resources. The higher the tier, the more VM instances are available to you for scale-out

#### Isolated
The Isolated and IsolatedV2 tiers run dedicated Azure VMs on dedicated Azure Virtual Networks. It provides network isolation on top of compute isolation to your apps. It provides the maximum scale-out capabilities.

## Web Apps

### Notes
* Deploying to stating environment
  * Add a new deployment slot to App1 to release the test version of App1 - Deployment slots allow greater flexibility within app services, providing a built-in staging environment for your app and access to your application without deploying it to production
  * Create a build server with the master branch of Git1 as the trigger - You have the option of creating a build server natively in App Services by selecting Deployment Center in the App1 blade. This will trigger a build every time a commit is made to the master branch of Git1