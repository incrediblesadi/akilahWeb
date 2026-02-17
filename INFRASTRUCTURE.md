# Akilah System Infrastructure

Complete audit of all Firebase/Google Cloud resources across all projects.

**Last Updated:** February 17, 2026
**Account:** <google@akilah.io>

---

## ⚠️ CRITICAL FINDINGS

### APIs are NOT automatically enabled

Each project has different APIs enabled based on what services were used/configured. Not all Google Cloud APIs are enabled by default.

### Project: `akilahstack` - 3 Cloud Functions FAILED

- **akilah** - FAILED (HTTP Trigger, us-central1, 2nd gen)
- **systemCheck** - FAILED (HTTP Trigger, us-central1, 2nd gen)
- **yourFunctionName** - FAILED (HTTP Trigger, us-central1, 2nd gen)

These functions exist but are in FAILED state and need attention!

---

## Google Cloud APIs (Enabled Services)

### Project: `akilahstack` (ID: akilahstack, #858627689875)

**Total Enabled APIs:** 138

<details>
<summary>View All Enabled APIs</summary>

- admin.googleapis.com
- alertcenter.googleapis.com
- alloydb.googleapis.com
- analyticshub.googleapis.com
- apigateway.googleapis.com
- appengine.googleapis.com
- apphub.googleapis.com
- areainsights.googleapis.com
- artifactregistry.googleapis.com
- autoscaling.googleapis.com
- batch.googleapis.com
- bigquery.googleapis.com
- bigqueryconnection.googleapis.com
- bigquerydatapolicy.googleapis.com
- bigquerymigration.googleapis.com
- bigqueryreservation.googleapis.com
- bigquerystorage.googleapis.com
- bigtableadmin.googleapis.com
- binaryauthorization.googleapis.com
- caldav.googleapis.com
- calendar-json.googleapis.com
- cloudaicompanion.googleapis.com (Gemini for Google Cloud)
- cloudapis.googleapis.com
- cloudasset.googleapis.com
- cloudbuild.googleapis.com
- cloudchannel.googleapis.com
- clouddeploy.googleapis.com
- cloudfunctions.googleapis.com
- cloudidentity.googleapis.com
- cloudkms.googleapis.com
- cloudresourcemanager.googleapis.com
- cloudscheduler.googleapis.com
- cloudsearch.googleapis.com
- cloudtrace.googleapis.com
- compute.googleapis.com
- container.googleapis.com (Kubernetes Engine)
- containeranalysis.googleapis.com
- containerfilesystem.googleapis.com
- containerregistry.googleapis.com
- customsearch.googleapis.com
- dataform.googleapis.com
- dataplex.googleapis.com
- datastore.googleapis.com
- datastream.googleapis.com
- deploymentmanager.googleapis.com
- developerconnect.googleapis.com
- directions-backend.googleapis.com
- discoveryengine.googleapis.com
- dns.googleapis.com
- docs.googleapis.com
- drive.googleapis.com
- driveactivity.googleapis.com
- eventarc.googleapis.com
- eventarcpublishing.googleapis.com
- fcm.googleapis.com (Firebase Cloud Messaging)
- fcmdata.googleapis.com
- fcmregistrations.googleapis.com
- file.googleapis.com
- firebase.googleapis.com
- firebaseappcheck.googleapis.com
- firebaseappdistribution.googleapis.com
- firebaseapphosting.googleapis.com
- firebasedatabase.googleapis.com (Realtime Database)
- firebasedataconnect.googleapis.com
- firebasedynamiclinks.googleapis.com
- firebaseextensions.googleapis.com
- firebasehosting.googleapis.com
- firebaseinappmessaging.googleapis.com
- firebaseinstallations.googleapis.com
- firebaseremoteconfig.googleapis.com
- firebaseremoteconfigrealtime.googleapis.com
- firebaserules.googleapis.com
- firebasestorage.googleapis.com
- firestore.googleapis.com
- firestorekeyvisualizer.googleapis.com
- forms.googleapis.com
- geminicloudassist.googleapis.com
- gkebackup.googleapis.com
- gmail.googleapis.com
- gmailpostmastertools.googleapis.com
- iam.googleapis.com
- iamcredentials.googleapis.com
- iap.googleapis.com
- identitytoolkit.googleapis.com
- jobs.googleapis.com
- logging.googleapis.com
- meet.googleapis.com
- monitoring.googleapis.com
- mybusinessaccountmanagement.googleapis.com
- networkconnectivity.googleapis.com
- networkmanagement.googleapis.com
- oslogin.googleapis.com
- people.googleapis.com
- places-backend.googleapis.com
- places.googleapis.com
- plus.googleapis.com
- privilegedaccessmanager.googleapis.com
- pubsub.googleapis.com
- recommender.googleapis.com
- retail.googleapis.com
- routeoptimization.googleapis.com
- run.googleapis.com (Cloud Run)
- runtimeconfig.googleapis.com
- script.googleapis.com
- secretmanager.googleapis.com
- securetoken.googleapis.com
- servicecontrol.googleapis.com
- servicemanagement.googleapis.com
- servicenetworking.googleapis.com
- serviceusage.googleapis.com
- sheets.googleapis.com
- source.googleapis.com
- sql-component.googleapis.com
- sqladmin.googleapis.com
- storage-api.googleapis.com
- storage-component.googleapis.com
- storage.googleapis.com (Cloud Storage)
- storageinsights.googleapis.com
- street-view-image-backend.googleapis.com
- tasks.googleapis.com
- testing.googleapis.com
- timezone-backend.googleapis.com
- vision.googleapis.com
- weather.googleapis.com

</details>

### Project: `akilah-memory` (ID: akilah-memory, #75561070726)

**Total Enabled APIs:** 107

<details>
<summary>View All Enabled APIs</summary>

- addressvalidation.googleapis.com
- admin.googleapis.com
- aerialview.googleapis.com
- airquality.googleapis.com
- analyticshub.googleapis.com
- appengine.googleapis.com
- appenginereporting.googleapis.com
- apphub.googleapis.com
- appsmarket-component.googleapis.com
- appsmarket.googleapis.com
- artifactregistry.googleapis.com
- bigquery.googleapis.com
- bigqueryconnection.googleapis.com
- bigquerydatapolicy.googleapis.com
- bigquerymigration.googleapis.com
- bigqueryreservation.googleapis.com
- bigquerystorage.googleapis.com
- calendar-json.googleapis.com
- cloudaicompanion.googleapis.com
- cloudapis.googleapis.com
- cloudbilling.googleapis.com
- cloudbuild.googleapis.com
- cloudfunctions.googleapis.com
- cloudresourcemanager.googleapis.com
- cloudsearch.googleapis.com
- cloudtrace.googleapis.com
- containeranalysis.googleapis.com
- containerregistry.googleapis.com
- containerscanning.googleapis.com
- dataform.googleapis.com
- dataplex.googleapis.com
- datastore.googleapis.com
- deploymentmanager.googleapis.com
- developerconnect.googleapis.com
- directions-backend.googleapis.com
- distance-matrix-backend.googleapis.com
- docs.googleapis.com
- drive.googleapis.com
- elevation-backend.googleapis.com
- eventarc.googleapis.com
- fcm.googleapis.com
- fcmregistrations.googleapis.com
- firebase.googleapis.com
- firebaseappdistribution.googleapis.com
- firebaseapphosting.googleapis.com
- firebasedatabase.googleapis.com (Realtime Database)
- firebasedataconnect.googleapis.com
- firebasedynamiclinks.googleapis.com
- firebaseextensions.googleapis.com
- firebasehosting.googleapis.com
- firebaseinstallations.googleapis.com
- firebaseremoteconfig.googleapis.com
- firebaseremoteconfigrealtime.googleapis.com
- firebaserules.googleapis.com
- firebasestorage.googleapis.com
- firestore.googleapis.com
- forms.googleapis.com
- geminicloudassist.googleapis.com
- geocoding-backend.googleapis.com
- geolocation.googleapis.com
- gmailpostmastertools.googleapis.com
- gsuiteaddons.googleapis.com
- iam.googleapis.com
- iamcredentials.googleapis.com
- identitytoolkit.googleapis.com
- logging.googleapis.com
- maps-backend.googleapis.com
- maps-embed-backend.googleapis.com
- mapsplatformdatasets.googleapis.com
- meet.googleapis.com
- monitoring.googleapis.com
- navigationsdk.googleapis.com
- places.googleapis.com
- placewidgets.googleapis.com
- pollen.googleapis.com
- pubsub.googleapis.com
- roads.googleapis.com
- routeoptimization.googleapis.com
- routes.googleapis.com
- run.googleapis.com (Cloud Run)
- runtimeconfig.googleapis.com
- script.googleapis.com
- secretmanager.googleapis.com
- securetoken.googleapis.com
- servicemanagement.googleapis.com
- serviceusage.googleapis.com
- sheets.googleapis.com
- solar.googleapis.com
- source.googleapis.com
- sql-component.googleapis.com
- sqladmin.googleapis.com
- storage-api.googleapis.com
- storage-component.googleapis.com
- storage.googleapis.com
- street-view-image-backend.googleapis.com
- testing.googleapis.com
- tile.googleapis.com
- timezone-backend.googleapis.com
- weather.googleapis.com
- workspaceevents.googleapis.com

</details>

---

## Cloud Run

### Project: `akilahstack`

**Status:** ⚠️ No services deployed
**API Enabled:** ✅ Yes (run.googleapis.com)

### Project: `akilah-memory`

**Status:** ⚠️ No services deployed
**API Enabled:** ✅ Yes (run.googleapis.com)

---

## Cloud Functions

### Project: `akilahstack`

**Status:** ⚠️ No functions deployed
**API Enabled:** ✅ Yes (cloudfunctions.googleapis.com)

### Project: `akilah-memory`

**Status:** ⚠️ No functions deployed
**API Enabled:** ✅ Yes (cloudfunctions.googleapis.com)

---

## Cloud Build

### Project: `akilahstack`

**Status:** API Enabled
**API Enabled:** ✅ Yes (cloudbuild.googleapis.com)

### Project: `akilah-memory`

**Status:** API Enabled
**API Enabled:** ✅ Yes (cloudbuild.googleapis.com)

---

## Cloud Storage

### Project: `akilahstack`

**Status:** API Enabled
**API Enabled:** ✅ Yes (storage.googleapis.com, storage-api.googleapis.com)

### Project: `akilah-memory`

**Status:** API Enabled
**API Enabled:** ✅ Yes (storage.googleapis.com, storage-api.googleapis.com)

---

## Firebase Services

### Firebase Hosting

#### Project: `akilahstack` (1 site)

- <https://akilahstack.web.app> - ⚠️ Created but empty

#### Project: `akilah-memory` (3 sites)

- <https://akilah.web.app> - ⚠️ Created but empty
- <https://akilah-memory.web.app> - ⚠️ Created but empty
- <https://myakilah1.web.app> - ⚠️ Created but empty (has App ID)

### Firebase Realtime Database

#### Project: `akilahstack`

**API Enabled:** ✅ Yes (firebasedatabase.googleapis.com)

#### Project: `akilah-memory`

**API Enabled:** ✅ Yes (firebasedatabase.googleapis.com)

### Firebase App Hosting

#### Project: `akilahstack`

**Status:** ⚠️ No backends deployed
**API Enabled:** ✅ Yes (firebaseapphosting.googleapis.com)
**Associated Repository:** incrediblesadi/akilahWeb

#### Project: `akilah-memory`

**Status:** ⚠️ No backends deployed
**API Enabled:** ✅ Yes (firebaseapphosting.googleapis.com)

---

## System-Wide Summary

**Total Firebase Projects:** 2
**Total Hosting Sites:** 4 (all empty)
**Total Cloud Run Services:** 0
**Total Cloud Functions:** 3 (all FAILED in akilahstack)
**Total App Hosting Backends:** 0
**Total Enabled APIs:** 245 (combined across both projects)

**Key Finding:** All infrastructure and APIs are enabled and ready, but nothing is successfully deployed. 3 failed Cloud Functions in akilahstack need attention.

---

## IAM Roles & Permissions

### Project: `akilahstack` - 146 IAM Roles Configured

<details>
<summary>View All IAM Roles (146 total)</summary>

**Key Roles:**

- roles/owner
- roles/editor
- roles/firebase.admin
- roles/cloudfunctions.admin
- roles/run.admin
- roles/cloudbuild.builds.editor
- roles/storage.admin
- roles/firebasehosting.admin
- roles/firebaseapphosting.computeRunner
- roles/firebaseapphosting.serviceAgent
- roles/firebasedatabase.admin
- roles/secretmanager.admin
- roles/iam.serviceAccountAdmin
- roles/iam.serviceAccountUser

**Full List:**

- roles/accesscontextmanager.gcpAccessAdmin
- roles/actions.Admin
- roles/aiplatform.extensionCustomCodeServiceAgent
- roles/apigateway.admin
- roles/apigateway.serviceAgent
- roles/apigee.securityAdmin
- roles/apigeeregistry.admin
- roles/appengine.appAdmin
- roles/artifactregistry.admin
- roles/artifactregistry.containerRegistryMigrationAdmin
- roles/artifactregistry.createOnPushRepoAdmin
- roles/artifactregistry.createOnPushWriter
- roles/artifactregistry.reader
- roles/artifactregistry.repoAdmin
- roles/artifactregistry.serviceAgent
- roles/artifactregistry.writer
- roles/bigquery.dataOwner
- roles/bigquerydatapolicy.admin
- roles/binaryauthorization.serviceAgent
- roles/cloudaicompanion.serviceAgent
- roles/cloudaicompanion.settingsAdmin
- roles/cloudbuild.builds.builder
- roles/cloudbuild.builds.editor
- roles/cloudbuild.builds.viewer
- roles/cloudbuild.connectionAdmin
- roles/cloudbuild.integrationsOwner
- roles/cloudbuild.loggingServiceAgent
- roles/cloudbuild.serviceAgent
- roles/cloudbuild.workerPoolUser
- roles/clouddeploy.admin
- roles/clouddeploy.approver
- roles/clouddeploy.developer
- roles/clouddeploy.jobRunner
- roles/clouddeploy.operator
- roles/clouddeploy.policyAdmin
- roles/clouddeploy.serviceAgent
- roles/cloudfunctions.admin
- roles/cloudfunctions.developer
- roles/cloudfunctions.invoker
- roles/cloudfunctions.serviceAgent
- roles/cloudkms.cryptoKeyDecrypter
- roles/cloudkms.serviceAgent
- roles/cloudscheduler.admin
- roles/cloudscheduler.jobRunner
- roles/cloudsql.admin
- roles/cloudsql.instanceUser
- roles/cloudsql.serviceAgent
- roles/cloudtasks.enqueuer
- roles/composer.environmentAndStorageObjectAdmin
- roles/compute.instanceAdmin.v1
- roles/compute.serviceAgent
- roles/container.developer
- roles/container.serviceAgent
- roles/containeranalysis.ServiceAgent
- roles/containeranalysis.admin
- roles/containerregistry.ServiceAgent
- roles/databasecenter.admin
- roles/datapipelines.invoker
- roles/dataplex.storageDataWriter
- roles/datastore.owner
- roles/developerconnect.readTokenAccessor
- roles/developerconnect.serviceAgent
- roles/developerconnect.tokenAccessor
- roles/discoveryengine.serviceAgent
- roles/editor
- roles/eventarc.serviceAgent
- roles/file.serviceAgent
- roles/firebase.admin
- roles/firebase.managementServiceAgent
- roles/firebase.sdkAdminServiceAgent
- roles/firebase.sdkProvisioningServiceAgent
- roles/firebaseappcheck.admin
- roles/firebaseapphosting.computeRunner
- roles/firebaseapphosting.serviceAgent
- roles/firebaseauth.admin
- roles/firebasedatabase.admin
- roles/firebasedataconnect.admin
- roles/firebasedataconnect.dataAdmin
- roles/firebasedataconnect.serviceAgent
- roles/firebasehosting.admin
- roles/firebasemods.serviceAgent
- roles/firebasenotifications.admin
- roles/firebaserules.system
- roles/firebasestorage.admin
- roles/firebasestorage.serviceAgent
- roles/firestore.serviceAgent
- roles/gkemulticloud.controlPlaneMachineServiceAgent
- roles/iam.oauthClientAdmin
- roles/iam.roleAdmin
- roles/iam.serviceAccountAdmin
- roles/iam.serviceAccountCreator
- roles/iam.serviceAccountKeyAdmin
- roles/iam.serviceAccountTokenCreator
- roles/iam.serviceAccountUser
- roles/integrations.integrationInvoker
- roles/integrations.serviceAgent
- roles/livestream.serviceAgent
- roles/logging.admin
- roles/logging.bucketWriter
- roles/logging.logWriter
- roles/logging.serviceAgent
- roles/logging.viewer
- roles/mediaasset.serviceAgent
- roles/monitoring.notificationServiceAgent
- roles/monitoring.viewer
- roles/networkmanagement.serviceAgent
- roles/orgpolicy.policyViewer
- roles/owner
- roles/pubsub.admin
- roles/pubsub.publisher
- roles/pubsub.subscriber
- roles/resourcemanager.organizationAdmin
- roles/resourcemanager.projectIamAdmin
- roles/run.admin
- roles/run.builder
- roles/run.developer
- roles/run.invoker
- roles/run.jobsExecutor
- roles/run.serviceAgent
- roles/run.servicesInvoker
- roles/run.sourceDeveloper
- roles/runapps.developer
- roles/runtimeconfig.admin
- roles/secretmanager.admin
- roles/secretmanager.secretAccessor
- roles/servicemanagement.admin
- roles/servicenetworking.serviceAgent
- roles/serviceusage.apiKeysAdmin
- roles/storage.admin
- roles/storage.objectCreator
- roles/storageinsights.serviceAgent
- roles/storagetransfer.admin
- roles/workstations.admin

</details>

### Project: `akilah-memory` - 36 IAM Roles Configured

<details>
<summary>View All IAM Roles (36 total)</summary>

**Key Roles:**

- roles/owner
- roles/editor
- roles/firebase.managementServiceAgent
- roles/cloudfunctions.admin
- roles/run.admin
- roles/firebasedatabase.admin
- roles/firebasestorage.admin
- roles/storage.admin
- roles/secretmanager.admin

**Full List:**

- roles/appengine.serviceAgent
- roles/artifactregistry.reader
- roles/artifactregistry.serviceAgent
- roles/artifactregistry.writer
- roles/cloudbuild.builds.builder
- roles/cloudbuild.loggingServiceAgent
- roles/cloudbuild.serviceAgent
- roles/cloudfunctions.admin
- roles/cloudfunctions.developer
- roles/cloudfunctions.serviceAgent
- roles/containeranalysis.ServiceAgent
- roles/containerregistry.ServiceAgent
- roles/containerscanning.ServiceAgent
- roles/developerconnect.readTokenAccessor
- roles/developerconnect.serviceAgent
- roles/editor
- roles/firebase.managementServiceAgent
- roles/firebase.sdkAdminServiceAgent
- roles/firebaseapphosting.computeRunner
- roles/firebaseapphosting.serviceAgent
- roles/firebasedatabase.admin
- roles/firebasemods.serviceAgent
- roles/firebasestorage.admin
- roles/firebasestorage.serviceAgent
- roles/firestore.serviceAgent
- roles/iam.serviceAccountTokenCreator
- roles/iam.serviceAccountUser
- roles/logging.admin
- roles/logging.logWriter
- roles/owner
- roles/resourcemanager.projectIamAdmin
- roles/run.admin
- roles/run.serviceAgent
- roles/secretmanager.admin
- roles/storage.admin
- roles/storage.objectViewer

</details>
