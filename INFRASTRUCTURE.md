# Akilah System Infrastructure

Complete audit of all Firebase/Google Cloud resources and GitHub repositories.

**Last Updated:** February 17, 2026
**Account:** <google@akilah.io>
**GitHub:** @incrediblesadi

_

## The CI/CD Build Services Across Clouds:

| Cloud Provider | CI/CD Build Service | What It Does |
|----------------|---------------------|--------------|
| **Google Cloud** | **Cloud Build** | Builds containers, runs tests, deploys |
| **AWS** | **CodeBuild** | Builds containers, runs tests, deploys |
| **Azure/Microsoft** | **Azure Pipelines** | Builds containers, runs tests, deploys |
| **GitHub** | **GitHub Actions** | Builds containers, runs tests, deploys |

---

## AWS Equivalent:

**AWS CodeBuild** = Cloud Build
- Part of **AWS CodePipeline** (full CI/CD suite)
- Spins up build workers
- Compiles code, builds containers
- Runs in EC2 instances

**Not Lambda** - Lambda is serverless compute for running apps, not for building them

**Not API Gateway** - That's just routing HTTP requests

---

## Azure/Microsoft Equivalent:

**Azure Pipelines** = Cloud Build = CodeBuild
- Part of **Azure DevOps**
- Microsoft-hosted agents (their "runners")
- Builds, tests, deploys

---

## Full AWS CI/CD Stack:

- **CodeCommit** = GitHub (Git repos)
- **CodeBuild** = Cloud Build (builds code)
- **CodeDeploy** = Deployment service
- **CodePipeline** = Orchestrates all of above

---

## Why They All Exist:

Each cloud wants to **keep you in their ecosystem**:
- **Google** wants you using Cloud Build → Cloud Run
- **AWS** wants you using CodeBuild → Lambda/ECS
- **Azure** wants you using Azure Pipelines → App Service
- **GitHub** wants you using Actions → anywhere

**Cloud Build = CodeBuild = Azure Pipelines = GitHub Actions**

Better to use the one that integrates best with your existing tools and workflow.

--

## GitHub Infrastructure

### Overview

**Total Repositories:** 36 (12 Public, 24 Private, 7 Forks)
**Created:** Various dates (oldest: 4 years ago)
**Primary Language:** JavaScript/TypeScript, Python
**Infrastructure Repos:** AWS_Buildout, devops_repo, Global_System

### Authentication & Credentials

**GitHub Account:** @incrediblesadi
**Authentication Status:** ✅ Logged in via keyring
**Git Protocol:** HTTPS
**Token Scopes:** `gist`, `read:org`, `repo`
**Token:** gho_**** (stored securely in keyring)

### GitHub APIs & SDKs

#### REST API

**Status:** ✅ Available
**Endpoint:** `https://api.github.com`
**Best For:**

- Simple CRUD operations (create, read, update, delete)
- Webhook management
- Repository administration
- Single resource operations
- Rate limit: 5,000 requests/hour (authenticated)

**Current Token Capabilities:**

- ✅ `repo` - Full control of private repositories
- ✅ `read:org` - Read org and team membership
- ✅ `gist` - Create and manage gists

#### GraphQL API

**Status:** ✅ Available
**Endpoint:** `https://api.github.com/graphql`
**Best For:**

- Fetching nested/related data in single request
- Complex queries across multiple resources
- Reducing API calls (get exactly what you need)
- Real-time data with specific fields
- Rate limit: 5,000 points/hour (varies by query complexity)

**When to Use Each:**

- Use **REST API** for: Webhooks, simple gets, repository settings, deployments
- Use **GraphQL API** for: Dashboard data, repository stats, bulk queries, nested data

#### Available SDKs

- **Octokit.js** - Official JavaScript SDK for Node.js and browser
- **PyGithub** - Python library for GitHub API
- **gh CLI** - Official command-line tool (currently in use)
- **GitHub Actions SDK** - For workflow automation

### Webhooks & Integrations

**Active Webhooks:** 0 (checked akilahWeb, dashboard - no webhooks configured)
**Organization Webhooks:** Not checked (requires org admin access)

**Available Webhook Events:**

- Push events (code commits)
- Pull request events
- Issues events
- Deployment events
- Workflow run events
- Release events

**Socket Connections:**

- GitHub Actions runners (when workflows execute)
- Dependabot connections (active on akilahWeb, portal.akilah.io)
- Copilot connections (active on dashboard, portal.akilah.io)

**Third-party Integrations:**

- ✅ **Dependabot** - Automated dependency updates (akilahWeb, portal.akilah.io)
- ✅ **GitHub Copilot** - AI code assistance (dashboard, portal.akilah.io)
- ✅ **GitHub Pages** - Static site hosting (akilahWeb)
- ❓ Vercel/Netlify - Not detected
- ❓ Cloud Run CI/CD - Not detected

**Potential Integrations:**

- Firebase App Hosting auto-deploy
- Cloud Build triggers
- Slack/Discord notifications
- Status badges

### GitHub Actions & Workflows

**Repositories with Actions:** 4 of 36 repositories have workflows

#### Active Workflows by Repository

**akilahWeb (2 workflows)**

- Dependabot Updates (active)
- pages-build-deployment (active)

**dashboard (4 workflows)**

- Auto Update Repo Map (active)
- Auto File Contents Update (active)
- Copilot coding agent (active)
- Copilot code review (active)

**akilahapigateway (5 workflows)**

- Auto file contents (active)
- Deploy auto tag (active)
- Deploy to Cloud Run (active) ⭐
- Deploy status (active)
- Env sync (active)

**portal.akilah.io (4 workflows)**

- Documentation Validation (disabled - inactivity)
- Copilot code review (active)
- Copilot (active)
- Dependabot Updates (active)

**Workflow Categories:**

- **Deployment:** 1 (Cloud Run deployment in akilahapigateway)
- **Automation:** 3 (Auto updates, env sync)
- **Quality:** 3 (Copilot code review, documentation)
- **Security:** 2 (Dependabot)
- **CI/CD:** 1 (Deploy to Cloud Run)

**Total Active Workflows:** 14 across 4 repositories
**Total Disabled Workflows:** 1

---

## GitHub Repositories

**Total Repositories:** 36 (12 Public, 24 Private)
**Forks:** 7

### All Repositories (Complete List)

| # | Repository | Vis | Updated | Description | Secrets | Actions | Cloud Run | Cloud Func | Firebase | Branches | Webhooks | Deploy Keys | Envs | Issues | PRs | Stars | Size | Language |
|---|------------|-----|---------|-------------|---------|---------|-----------|------------|----------|----------|----------|-------------|------|--------|-----|-------|------|----------|
| 1 | [akilahWeb](https://github.com/incrediblesadi/akilahWeb) | Pub | 10m | React - Current | 0 | ❓ | ❌ | ❌ | ✅ Config | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | TS/React |
| 2 | [dashboard](https://github.com/incrediblesadi/dashboard) | Priv | 14h | New | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 3 | [akilahapigateway](https://github.com/incrediblesadi/akilahapigateway) | Pub | 22h | - | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 4 | [AkilahDevDash](https://github.com/incrediblesadi/AkilahDevDash) | Priv | 19d | - | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 5 | [akilahEnterprise](https://github.com/incrediblesadi/akilahEnterprise) | Priv | 25d | - | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 6 | [portal.akilah.io](https://github.com/incrediblesadi/portal.akilah.io) | Pub | 1mo | Portal | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 7 | [lobe-chat](https://github.com/incrediblesadi/lobe-chat) | Fork | 7mo | AI Chat | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | TS |
| 8 | [onlook](https://github.com/incrediblesadi/onlook) | Fork | 7mo | Design | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | TS |
| 9 | [akilah-dashboard](https://github.com/incrediblesadi/akilah-dashboard) | Pub | 8mo | Next+GCB | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | JS |
| 10 | [akilah-amplify-dashboard](https://github.com/incrediblesadi/akilah-amplify-dashboard) | Pub | 8mo | AWS Amp | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | JS |
| 11 | [Projects](https://github.com/incrediblesadi/Projects) | Priv | 11mo | - | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 12 | [AWS_Buildout](https://github.com/incrediblesadi/AWS_Buildout) | Pub | 11mo | - | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 13 | [AWS_Buildout_Plan](https://github.com/incrediblesadi/AWS_Buildout_Plan) | Pub | 11mo | - | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 14 | [AI-Session-Log](https://github.com/incrediblesadi/AI-Session-Log) | Priv | 11mo | - | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 15 | [Global_System](https://github.com/incrediblesadi/Global_System) | Priv | 11mo | All Projects | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 16 | [test-repo](https://github.com/incrediblesadi/test-repo) | Priv | 11mo | - | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 17 | [self-centered-intelligence](https://github.com/incrediblesadi/self-centered-intelligence) | Priv | 11mo | - | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 18 | [Central-Intelligence-Hub](https://github.com/incrediblesadi/Central-Intelligence-Hub) | Priv | 11mo | Memory Sys | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 19 | [incredible_ai](https://github.com/incrediblesadi/incredible_ai) | Priv | 11mo | - | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 20 | [devops_repo](https://github.com/incrediblesadi/devops_repo) | Priv | 11mo | CDK/Terraform | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 21 | [global_system_logs](https://github.com/incrediblesadi/global_system_logs) | Priv | 11mo | Event Logs | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 22 | [personal_knowledge_repo](https://github.com/incrediblesadi/personal_knowledge_repo) | Priv | 11mo | Knowledge | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 23 | [job_search_ai](https://github.com/incrediblesadi/job_search_ai) | Priv | 11mo | Job AI | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 24 | [SadEye](https://github.com/incrediblesadi/SadEye) | Priv | 11mo | SADI Mem | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 25 | [incredible_ai_sadi](https://github.com/incrediblesadi/incredible_ai_sadi) | Priv | 11mo | - | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 26 | [amplify-vite-react-template](https://github.com/incrediblesadi/amplify-vite-react-template) | Priv | 11mo | Amp Gen2 | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | TS |
| 27 | [AI-Logs](https://github.com/incrediblesadi/AI-Logs) | Priv | 12mo | Workflows | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 28 | [AI-Sadi](https://github.com/incrediblesadi/AI-Sadi) | Priv | 1y | - | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 29 | [incrediblesadi.com](https://github.com/incrediblesadi/incrediblesadi.com) | Priv | 1y | - | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 30 | [LibreChat](https://github.com/incrediblesadi/LibreChat) | Fork | 1y | ChatGPT | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | JS |
| 31 | [openai-cookbook](https://github.com/incrediblesadi/openai-cookbook) | Fork | 1y | OpenAI | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | Python |
| 32 | [Halal_Way](https://github.com/incrediblesadi/Halal_Way) | Priv | 1y | Work | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 33 | [halalway.xyz-](https://github.com/incrediblesadi/halalway.xyz-) | Priv | 1y | THG Portal | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| 34 | [SwiftlLLM](https://github.com/incrediblesadi/SwiftlLLM) | Fork | 1y | Swift LLM | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | Swift |
| 35 | [amplify-ui-dashboard](https://github.com/incrediblesadi/amplify-ui-dashboard) | Fork | 1y | React Dash | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | React |
| 36 | [aws-workflows-on-github](https://github.com/incrediblesadi/aws-workflows-on-github) | Fork | 4y | AWS CI/CD | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |

**Legend:**

- **Vis** = Visibility (Pub=Public, Priv=Private, Fork=Forked)
- **Secrets** = GitHub Secrets count (API keys, tokens)
- **Actions** = GitHub Actions/Workflows count
- **Cloud Run** = Services deployed from this repo to GCP Cloud Run
- **Cloud Func** = Cloud Functions deployed from this repo to GCP
- **Firebase** = Firebase services configured/used (Hosting, Realtime DB, etc.)
- **Branches** = Number of branches in repository
- **Webhooks** = Active webhooks configured for the repo
- **Deploy Keys** = SSH deploy keys for automated deployments
- **Envs** = Environments (staging, production, etc.)
- **Issues** = Open issues count
- **PRs** = Open pull requests count
- **Stars** = GitHub stars (for public repos)
- **Size** = Repository size (KB/MB)
- ❓ = To be scanned
- ✅ = Enabled/Configured/Present
- ❌ = Not used/Not configured
- Number = Actual count

**Note:** Repository data will be populated via automated scanning script.

---

## Google Cloud Infrastructure

### ⚠️ CRITICAL FINDINGS

#### APIs are NOT automatically enabled

Each project has different APIs enabled based on what services were used/configured. Not all Google Cloud APIs are enabled by default.

#### Project: `akilahstack` - 3 Cloud Functions FAILED

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
