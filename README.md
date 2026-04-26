# Akilah Web

A Next.js web application displaying the Akilah video.

## Project Details

- **Name**: stock-dashboard-app (package name)
- **Framework**: Next.js 15.3.3 with React 19
- **Styling**: Chakra UI + Tailwind CSS
- **Firebase Project**: `akilahstack` (Project ID: akilahstack)
- **Firebase Account**: <google@akilah.io>
- **Repository**: GitHub - incrediblesadi/akilahWeb (main branch)
- **Current Status**: Video landing page with Akilah.mp4 - local only, not deployed

## Tech Stack

- Next.js 15 with Turbopack
- React 19
- Chakra UI v3
- Tailwind CSS v4
- TypeScript 5
- Firebase App Hosting (configured but not deployed)

## Getting Started

1. Install dependencies:

```bash
npm install
```

1. Run the development server:

```bash
npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000) - you'll see the Akilah video.

---

## Complete Firebase Infrastructure Audit

### Project 1: `akilah-memory` (ID: akilah-memory, #75561070726)

**Firebase Hosting Sites (3 total):**

- <https://akilah.web.app> - ⚠️ Created but empty
- <https://akilah-memory.web.app> - ⚠️ Created but empty
- <https://myakilah1.web.app> - ⚠️ Created but empty (has App ID)

**Cloud Functions:** None deployed
**App Hosting:** No backends


Deployments: 
# Akila API Gateway - Architecture & Features Matrix

**Version:** 1.0  
**Last Updated:** December 16, 2025

---

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                             │
│                                                                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │  Web App │  │  Mobile  │  │   CLI    │  │  CI/CD   │        │
│  │          │  │   App    │  │   Tool   │  │ Pipeline │        │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘        │
│       │             │             │             │                │
└───────┼─────────────┼─────────────┼─────────────┼────────────────┘
        │             │             │             │
        └─────────────┴─────────────┴─────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│                    INTERNET / HTTPS                              │
└─────────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│                  GOOGLE CLOUD PLATFORM                           │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │              CLOUD RUN (Auto-Scaling)                      │ │
│  │                                                             │ │
│  │  URL: akilahapigateway-858627689875.us-central1.run.app   │ │
│  │  Region: us-central1                                       │ │
│  │  Container: gcr.io/akilahstack/akilahapigateway           │ │
│  │                                                             │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │         Docker Container (Node:18-slim)              │ │ │
│  │  │                                                       │ │ │
│  │  │  ┌─────────────────────────────────────────────┐    │ │ │
│  │  │  │       EXPRESS.JS APPLICATION                │    │ │ │
│  │  │  │                                              │    │ │ │
│  │  │  │  ┌────────────────────────────────────────┐ │    │ │ │
│  │  │  │  │      API GATEWAY LAYER                 │ │    │ │ │
│  │  │  │  │                                         │ │    │ │ │
│  │  │  │  │  • Request Parsing (express.json())   │ │    │ │ │
│  │  │  │  │  • Route Matching                      │ │    │ │ │
│  │  │  │  │  • Response Formatting                 │ │    │ │ │
│  │  │  │  │  • Error Handling                      │ │    │ │ │
│  │  │  │  └────────────────────────────────────────┘ │    │ │ │
│  │  │  │                     │                         │    │ │ │
│  │  │  │  ┌──────────────────┴─────────────────────┐ │    │ │ │
│  │  │  │  │                                         │ │    │ │ │
│  │  │  │  │      ROUTE LOADER (routes/loader.js)   │ │    │ │ │
│  │  │  │  │                                         │ │    │ │ │
│  │  │  │  └──┬─────────────┬────────────┬─────────┘ │    │ │ │
│  │  │  │     │             │            │            │    │ │ │
│  │  │  │  ┌──▼──────┐  ┌──▼─────┐  ┌──▼─────────┐  │    │ │ │
│  │  │  │  │ GitHub  │  │ Notion │  │  Firebase  │  │    │ │ │
│  │  │  │  │ Routes  │  │ Routes │  │   Routes   │  │    │ │ │
│  │  │  │  │ (10)    │  │  (5)   │  │    (2)     │  │    │ │ │
│  │  │  │  └──┬──────┘  └──┬─────┘  └──┬─────────┘  │    │ │ │
│  │  │  │     │             │            │            │    │ │ │
│  │  │  │  ┌──▼─────────────▼────────────▼─────────┐ │    │ │ │
│  │  │  │  │                                        │ │    │ │ │
│  │  │  │  │      SDK INTEGRATION LAYER            │ │    │ │ │
│  │  │  │  │                                        │ │    │ │ │
│  │  │  │  │  ┌──────────┐ ┌──────────┐ ┌────────┐│ │    │ │ │
│  │  │  │  │  │ Octokit  │ │  Notion  │ │Firebase││ │    │ │ │
│  │  │  │  │  │  Client  │ │   SDK    │ │  Admin ││ │    │ │ │
│  │  │  │  │  └──────────┘ └──────────┘ └────────┘│ │    │ │ │
│  │  │  │  │                                        │ │    │ │ │
│  │  │  │  └────────────────────────────────────────┘ │    │ │ │
│  │  │  │                                              │    │ │ │
│  │  │  │  ┌────────────────────────────────────────┐ │    │ │ │
│  │  │  │  │      UTILITY LAYER                     │ │    │ │ │
│  │  │  │  │                                         │ │    │ │ │
│  │  │  │  │  • Session Management                  │ │    │ │ │
│  │  │  │  │  • Libsodium Encryption                │ │    │ │ │
│  │  │  │  │  • Luxon Date/Time (EST)               │ │    │ │ │
│  │  │  │  │  • Environment Config                  │ │    │ │ │
│  │  │  │  └────────────────────────────────────────┘ │    │ │ │
│  │  │  │                                              │    │ │ │
│  │  │  └──────────────────────────────────────────────┘    │ │ │
│  │  │                                                       │ │ │
│  │  └───────────────────────────────────────────────────────┘ │ │
│  │                                                             │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │              CLOUD INFRASTRUCTURE                           │ │
│  │                                                              │ │
│  │  • Container Registry (gcr.io)                              │ │
│  │  • Cloud Logging (logging.logWriter)                        │ │
│  │  • Cloud Build (builds.editor)                              │ │
│  │  • Service Account (858627689875-compute@...)               │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
                          │
        ┌─────────────────┴─────────────────┬────────────────┐
        │                                   │                │
        ▼                                   ▼                ▼
┌───────────────┐              ┌────────────────┐  ┌────────────────┐
│    GITHUB     │              │     NOTION     │  │    FIREBASE    │
│               │              │                │  │                │
│ • REST API    │              │  • REST API    │  │ • Realtime DB  │
│ • GraphQL API │              │  • SDK         │  │ • Admin SDK    │
│ • OAuth       │              │  • OAuth       │  │                │
└───────────────┘              └────────────────┘  └────────────────┘
```

---

## CI/CD Pipeline Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                       GITHUB REPOSITORY                          │
│                   incrediblesadi/akilahapigateway                │
└──────────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │   Git Push to     │
                    │   'main' branch   │
                    └─────────┬─────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                    GITHUB ACTIONS WORKFLOWS                      │
│                                                                   │
│  ┌────────────────┐  ┌────────────────┐  ┌──────────────────┐  │
│  │   deploy.yml   │  │   test.yml     │  │ env-sync.yml     │  │
│  │                │  │                │  │                  │  │
│  │ 1. Checkout    │  │ 1. Checkout    │  │ 1. Parse .env    │  │
│  │ 2. GCP Auth    │  │ 2. npm install │  │ 2. Encrypt vals  │  │
│  │ 3. Deploy to   │  │ 3. Run Jest    │  │ 3. Update GitHub │  │
│  │    Cloud Run   │  │                │  │    Secrets       │  │
│  └────────┬───────┘  └────────┬───────┘  └──────────┬───────┘  │
│           │                   │                     │           │
│  ┌────────▼────────┐ ┌───────▼────────┐ ┌─────────▼────────┐  │
│  │generate-repo-   │ │deploy-auto-tag │ │env-to-secrets.yml│  │
│  │map.yml          │ │                │ │                  │  │
│  │                 │ │ 1. Check deploy│ │ 1. Convert vars  │  │
│  │ 1. Scan repo    │ │ 2. Create tag  │ │ 2. Encrypt w/    │  │
│  │ 2. Generate MD  │ │ 3. Push tag    │ │    libsodium     │  │
│  └─────────────────┘ └────────────────┘ └──────────────────┘  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                    GOOGLE CLOUD BUILD                            │
│                                                                   │
│  1. Pull Docker base image (node:18-slim)                        │
│  2. Copy package.json and install dependencies                   │
│  3. Copy application source code                                 │
│  4. Build container image                                        │
│  5. Push to gcr.io/akilahstack/akilahapigateway                 │
│  6. Deploy to Cloud Run with service account                     │
│  7. Configure auto-scaling and networking                        │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                      PRODUCTION DEPLOYMENT                       │
│                                                                   │
│  🟢 Live at: https://akilahapigateway-858627...run.app          │
│  📊 Auto-scaling: 0-1000 instances                              │
│  🔒 Access: Public (unauthenticated)                            │
│  📍 Region: us-central1                                         │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

---

## Features Matrix

### GitHub Integration Features

| Feature Category | Endpoint | HTTP Method | Status | Description |
|-----------------|----------|-------------|--------|-------------|
| **Repository Management** |
| List Repositories | `/repos` | GET | ✅ Live | List all accessible repos (100/page) |
| Get Repo Details | `/repos/:owner/:repo` | GET | ✅ Live | Fetch repo metadata |
| Create Repository | `/repos/create` | POST | ✅ Live | Create new repo with privacy settings |
| **File Operations** |
| Read File | `/files/:owner/:repo/*` | GET | ✅ Live | Get file contents (base64 decoded) |
| Write/Update File | `/files/:owner/:repo/*` | PUT | ✅ Live | Create or update file with commit msg |
| Delete File | `/files/:owner/:repo/*` | DELETE | ✅ Live | Remove file from repository |
| **Issue Tracking** |
| List Issues | `/issues/:owner/:repo` | GET | ✅ Live | Get all open issues |
| Get Issue Details | `/issues/:owner/:repo/:num` | GET | ✅ Live | Fetch specific issue |
| Create Issue | `/issues/:owner/:repo/create` | POST | ✅ Live | Create new issue with title/body |
| **Workflow Management** |
| List Workflows | `/workflows/:owner/:repo` | GET | ✅ Live | Get all repository workflows |
| Trigger Workflow | `/workflows/:owner/:repo/:id/run` | POST | ✅ Live | Manual workflow dispatch |
| Cancel Workflow | `/workflows/:owner/:repo/runs/:id/cancel` | POST | ✅ Live | Cancel running workflow |
| **Secrets Management** |
| List Secrets | `/secrets/:owner/:repo` | GET | ✅ Live | Get secret names (not values) |
| Create/Update Secret | `/secrets/:owner/:repo/:name` | POST | ✅ Live | Encrypted secret storage (libsodium) |
| Delete Secret | `/secrets/:owner/:repo/:name` | DELETE | ✅ Live | Remove repository secret |
| **Gist Management** |
| List Gists | `/gists` | GET | ✅ Live | Get user's gists with metadata |
| Create Gist | `/gists/create` | POST | ✅ Live | Create public/private gist |
| Delete Gist | `/gists/:gist_id` | DELETE | ✅ Live | Remove specific gist |
| **Webhook Management** |
| List Webhooks | `/hooks/:owner/:repo` | GET | ✅ Live | Get repository webhooks |
| Create Webhook | `/hooks/:owner/:repo/create` | POST | ✅ Live | Add webhook with event subscriptions |
| Delete Webhook | `/hooks/:owner/:repo/:hook_id` | DELETE | ✅ Live | Remove webhook |
| **Deployment Management** |
| List Deployments | `/deploys/:owner/:repo` | GET | ✅ Live | Get 10 most recent deployments |
| Trigger Deployment | `/deploys/:owner/:repo` | POST | ✅ Live | Create new deployment |
| Get Deploy Status | `/deploys/:owner/:repo/:id/status` | GET | ✅ Live | Check deployment status |
| **Codespaces** |
| List Codespaces | `/codespaces` | GET | ✅ Live | Get active codespaces |
| Create Codespace | `/codespaces/create` | POST | ✅ Live | Launch new codespace from repo |

### Notion Integration Features

| Feature Category | Endpoint | HTTP Method | Status | Description |
|-----------------|----------|-------------|--------|-------------|
| **Page Management** |
| Get Workspace Overview | `/notion/get-overview` | GET | ✅ Live | List pages with block previews (10 blocks) |
| Create Page | `/notion/create-page` | POST | ✅ Live | Create new page with title and content |
| **Content Management** |
| Read Block | `/notion/read-block` | GET | ✅ Live | Retrieve specific block content |
| Append to Page | `/notion/append-to-page/:pageId` | POST | ✅ Live | Add new blocks to existing page |
| Edit Request | `/notion/edit-request` | POST | ✅ Live | Update existing block content |

### Firebase Integration Features

| Feature Category | Endpoint | HTTP Method | Status | Description |
|-----------------|----------|-------------|--------|-------------|
| **Logging** |
| Server Logger | `/firebase/logger` | POST | ✅ Live | Write timestamped logs to Realtime DB |
| **Notes** |
| Session Notes | `/firebase/notes` | POST | ✅ Live | Structured notes with metadata (tags, sentiment) |

### System Features

| Feature Category | Endpoint | HTTP Method | Status | Description |
|-----------------|----------|-------------|--------|-------------|
| **Health Checks** |
| Root Health Check | `/` | GET | ✅ Live | Server status ("Server is running.") |
| Ping/Trace | `/ping/trace` | GET | ✅ Live | Network diagnostics |
| GPT Test Endpoint | `/gpt` | POST | ✅ Live | Integration test endpoint |

---

## Technical Capabilities Matrix

| Capability | Implemented | In Progress | Planned | Notes |
|-----------|-------------|-------------|---------|-------|
| **Security** |
| API Key Authentication | ❌ | | ✅ | Critical for production |
| Rate Limiting | ❌ | | ✅ | Prevent abuse |
| Request Validation | 🟡 | | | Basic validation in place |
| Secret Encryption | ✅ | | | libsodium for GitHub secrets |
| HTTPS/TLS | ✅ | | | Cloud Run default |
| **Performance** |
| Response Caching | ❌ | | ✅ | Reduce external API calls |
| Database Connection Pooling | N/A | | | Not using traditional DB |
| Request Compression | ✅ | | | Express default |
| CDN Integration | ❌ | | 🔵 | Consider for static assets |
| **Monitoring** |
| Cloud Logging | ✅ | | | GCP native logging |
| Error Tracking | 🟡 | | | Basic console.error |
| Performance Metrics | ❌ | | ✅ | APM integration needed |
| Uptime Monitoring | ❌ | | ✅ | External service recommended |
| **Testing** |
| Unit Tests | 🟡 | | | Minimal coverage (~5%) |
| Integration Tests | ❌ | | ✅ | Critical for reliability |
| End-to-End Tests | ❌ | | 🔵 | Nice to have |
| Load Testing | ❌ | | ✅ | Before scaling |
| **Documentation** |
| API Reference | 🟡 | | | Inline in code, no formal docs |
| OpenAPI/Swagger | ❌ | | ✅ | Industry standard |
| Code Comments | 🟡 | | | Partial coverage |
| Architecture Docs | ✅ | | | This document |
| **DevOps** |
| CI/CD Pipeline | ✅ | | | GitHub Actions fully automated |
| Infrastructure as Code | 🟡 | | | Docker + workflow YAML |
| Automated Deployment | ✅ | | | On main branch push |
| Rollback Strategy | ❌ | | ✅ | Manual Cloud Run revert |
| **Scalability** |
| Auto-scaling | ✅ | | | Cloud Run native |
| Load Balancing | ✅ | | | Cloud Run native |
| Multi-region Deployment | ❌ | | 🔵 | Currently single region |
| Database Sharding | N/A | | | Firebase auto-scales |

**Legend:**
- ✅ Implemented and working
- 🟡 Partially implemented
- ❌ Not implemented
- 🔵 Future consideration
- N/A Not applicable

---

## Data Flow Diagrams

### 1. GitHub Secret Creation Flow

```
┌──────────┐                ┌──────────────┐              ┌─────────────┐
│  Client  │                │ API Gateway  │              │   GitHub    │
│          │                │  (Cloud Run) │              │   API       │
└────┬─────┘                └──────┬───────┘              └──────┬──────┘
     │                             │                             │
     │ POST /secrets/:owner/       │                             │
     │ :repo/:name                 │                             │
     │ Body: { value: "secret" }   │                             │
     ├────────────────────────────>│                             │
     │                             │                             │
     │                             │ GET /repos/:owner/:repo/    │
     │                             │ actions/secrets/public-key  │
     │                             ├────────────────────────────>│
     │                             │                             │
     │                             │ { key: "base64...",         │
     │                             │   key_id: "123..." }        │
     │                             │<────────────────────────────┤
     │                             │                             │
     │                             │ [Encrypt secret with        │
     │                             │  libsodium using public key]│
     │                             │                             │
     │                             │ PUT /repos/:owner/:repo/    │
     │                             │ actions/secrets/:name       │
     │                             │ { encrypted_value, key_id } │
     │                             ├────────────────────────────>│
     │                             │                             │
     │                             │ { status: 201 }             │
     │                             │<────────────────────────────┤
     │                             │                             │
     │ { status: "stored",         │                             │
     │   name: "MY_SECRET" }       │                             │
     │<────────────────────────────┤                             │
     │                             │                             │
```

### 2. Notion Page Creation Flow

```
┌──────────┐                ┌──────────────┐              ┌─────────────┐
│  Client  │                │ API Gateway  │              │   Notion    │
│          │                │  (Cloud Run) │              │   API       │
└────┬─────┘                └──────┬───────┘              └──────┬──────┘
     │                             │                             │
     │ POST /notion/create-page    │                             │
     │ { title: "My Page",         │                             │
     │   content: "Hello world" }  │                             │
     ├────────────────────────────>│                             │
     │                             │                             │
     │                             │ [Build Notion API payload]  │
     │                             │                             │
     │                             │ POST /v1/pages              │
     │                             │ {                           │
     │                             │   parent: { page_id },      │
     │                             │   properties: { title },    │
     │                             │   children: [blocks]        │
     │                             │ }                           │
     │                             ├────────────────────────────>│
     │                             │                             │
     │                             │ { id: "page-uuid",          │
     │                             │   created_time: "..." }     │
     │                             │<────────────────────────────┤
     │                             │                             │
     │ { status: "created",        │                             │
     │   pageId: "page-uuid" }     │                             │
     │<────────────────────────────┤                             │
     │                             │                             │
```

### 3. Firebase Logging Flow

```
┌──────────┐                ┌──────────────┐              ┌─────────────┐
│  Client  │                │ API Gateway  │              │  Firebase   │
│          │                │  (Cloud Run) │              │ Realtime DB │
└────┬─────┘                └──────┬───────┘              └──────┬──────┘
     │                             │                             │
     │ POST /firebase/logger       │                             │
     │ { result: "Log message" }   │                             │
     ├────────────────────────────>│                             │
     │                             │                             │
     │                             │ [Generate timestamp in EST] │
     │                             │ timestamp = "2025-12-16_    │
     │                             │             143022"         │
     │                             │                             │
     │                             │ PUT /0001currentsession/    │
     │                             │ 99serverlogs/{timestamp}    │
     │                             │ Value: "Log message"        │
     │                             ├────────────────────────────>│
     │                             │                             │
     │                             │ { status: 200 }             │
     │                             │<────────────────────────────┤
     │                             │                             │
     │ { status: "logged",         │                             │
     │   timestamp: "...",         │                             │
     │   path: "..." }             │                             │
     │<────────────────────────────┤                             │
     │                             │                             │
```

---

## Session Management Architecture

```
┌────────────────────────────────────────────────────────────────┐
│                     SESSION LAYER                              │
│                    (src/session/)                              │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  buildCurrentSession.js                                  │ │
│  │                                                           │ │
│  │  • Fetches user data from Firebase                       │ │
│  │  • Fetches GitHub repository context                     │ │
│  │  • Fetches Notion workspace pages                        │ │
│  │  • Builds unified session object                         │ │
│  │  • Writes to currentSession.json (cache)                 │ │
│  └──────────────────────────────────────────────────────────┘ │
│                            │                                   │
│                            ▼                                   │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  currentSession.json                                     │ │
│  │                                                           │ │
│  │  {                                                        │ │
│  │    "user": { ... },                                       │ │
│  │    "repos": [ ... ],                                      │ │
│  │    "notionPages": [ ... ],                                │ │
│  │    "timestamp": "2025-12-16T..."                          │ │
│  │  }                                                        │ │
│  └──────────────────────────────────────────────────────────┘ │
│                            │                                   │
│                            ▼                                   │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  index.js (Session Module Initializer)                  │ │
│  │                                                           │ │
│  │  • Exports session access methods                        │ │
│  │  • Provides session refresh triggers                     │ │
│  └──────────────────────────────────────────────────────────┘ │
│                            │                                   │
│                            ▼                                   │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  rebuild.js (Session Reset)                              │ │
│  │                                                           │ │
│  │  • Clears cached session data                            │ │
│  │  • Resets to default state                               │ │
│  │  • Used for testing or repo switching                    │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Integration SDK Architecture

```
┌────────────────────────────────────────────────────────────────┐
│                      SDK CLIENTS                               │
│                     (src/sdk/)                                 │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  githubClient.js                                         │ │
│  │                                                           │ │
│  │  • Octokit REST client initialization                    │ │
│  │  • Authentication: GITHUB_PAT env variable               │ │
│  │  • Exports: getGitHubData() helper function              │ │
│  │  • Features:                                             │ │
│  │    - List branches                                       │ │
│  │    - List issues                                         │ │
│  │    - Repository metadata                                 │ │
│  │  • Security: DOMPurify for error message sanitization   │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  notionClient.js                                         │ │
│  │                                                           │ │
│  │  • @notionhq/client SDK initialization                   │ │
│  │  • Authentication: NOTION_TOKEN env variable             │ │
│  │  • Exports: notion client instance                       │ │
│  │  • ⚠️ CRITICAL SECURITY ISSUE: Token was hardcoded       │ │
│  │    Must be removed and rotated immediately               │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  firebaseClient.js                                       │ │
│  │                                                           │ │
│  │  • firebase-admin SDK initialization                     │ │
│  │  • Service account authentication                        │ │
│  │  • Exports: Realtime Database reference                 │ │
│  │  • Features:                                             │ │
│  │    - Read/write to Firebase Realtime DB                 │ │
│  │    - Admin-level operations                             │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Environment Configuration Map

### Required Environment Variables (37 total)

```yaml
# Google Cloud Platform (8 variables)
GCP_CLIENT_ID: OAuth client ID for GCP
GCP_CLIENT_SECRET: OAuth client secret
GCP_BROWSER_API_KEY: Browser-based API key
GCP_SERVICE_ACCOUNT_EMAIL: Service account email
GCP_COMPUTE_SERVICE_ACCOUNT: Compute engine service account
GCP_PROJECT_ID: Google Cloud project ID (akilahstack)
GCP_REGION: Deployment region (us-central1)

# Firebase (2 variables)
FIREBASE_DATABASE_URL: Realtime Database URL
FIREBASE_STORAGE_BUCKET: Cloud Storage bucket

# GitHub (5 variables)
GITHUB_CLIENT_ID: GitHub OAuth app client ID
GITHUB_CLIENT_SECRET: GitHub OAuth app secret
GITHUB_OAUTH_CLIENT_ID: GitHub OAuth (alternative app)
GITHUB_OAUTH_CLIENT_SECRET: OAuth secret
GITHUB_FINE_GRAINED_PAT: Fine-grained personal access token
GITHUB_PAT: Personal access token (legacy)

# LinkedIn (4 variables)
LINKEDIN_AUTH_URL: OAuth redirect URL
LINKEDIN_CLIENT_ID: LinkedIn app client ID
LINKEDIN_CLIENT_SECRET: LinkedIn app secret
LINKEDIN_SADI_PROFILE_PAT: Profile access token

# AWS (4 variables)
AWS_ACCESS_KEY_ID: AWS IAM access key
AWS_SECRET_ACCESS_KEY: AWS IAM secret key
AWS_AMPLIFY_KEY: Amplify service key
AWS_AMPLIFY_SECRET: Amplify service secret

# Notion (4 variables)
NOTION_CLIENT_ID: Notion OAuth app ID
NOTION_CLIENT_SECRET: Notion OAuth secret
NOTION_WORKSPACE_ID: Workspace identifier
NOTION_INTERNAL_INTEGRATION_SECRET: Internal integration token
NOTION_TOKEN: API access token (used by SDK)

# Application (varies)
PORT: Server port (default: 8080)
NODE_ENV: Environment (development/production)
```

---

## Security Architecture

```
┌────────────────────────────────────────────────────────────────┐
│                    SECURITY LAYERS                             │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  LAYER 1: Network Security                               │ │
│  │                                                           │ │
│  │  ✅ HTTPS/TLS encryption (Cloud Run enforced)            │ │
│  │  ❌ No API key authentication (PUBLIC ACCESS)            │ │
│  │  ❌ No rate limiting (abuse vulnerability)               │ │
│  │  ❌ No IP allowlisting                                   │ │
│  └──────────────────────────────────────────────────────────┘ │
│                            │                                   │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  LAYER 2: Application Security                           │ │
│  │                                                           │ │
│  │  🟡 Input validation (basic JSON parsing)                │ │
│  │  ❌ No XSS protection middleware                         │ │
│  │  ❌ No CSRF protection                                   │ │
│  │  ❌ No SQL injection protection (not using SQL)          │ │
│  │  🟡 Error handling (try-catch, but exposes stack traces) │ │
│  └──────────────────────────────────────────────────────────┘ │
│                            │                                   │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  LAYER 3: Secrets Management                             │ │
│  │                                                           │ │
│  │  ✅ Environment variables for credentials                │ │
│  │  ✅ GitHub Secrets encryption (libsodium)                │ │
│  │  ⚠️  Hardcoded tokens in source code (CRITICAL ISSUE)    │ │
│  │  ❌ No secrets rotation strategy                         │ │
│  │  ❌ No credential vault integration                      │ │
│  └──────────────────────────────────────────────────────────┘ │
│                            │                                   │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  LAYER 4: External Service Security                      │ │
│  │                                                           │ │
│  │  ✅ GitHub PAT with scoped permissions                   │ │
│  │  ✅ Firebase service account authentication              │ │
│  │  ✅ Notion internal integration                          │ │
│  │  ❌ No webhook signature verification                    │ │
│  │  ❌ No OAuth token refresh implementation                │ │
│  └──────────────────────────────────────────────────────────┘ │
│                            │                                   │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  LAYER 5: Infrastructure Security                        │ │
│  │                                                           │ │
│  │  ✅ GCP service account with minimal roles               │ │
│  │  ✅ Container security (official Node.js image)          │ │
│  │  ❌ No vulnerability scanning in CI/CD                   │ │
│  │  ❌ No dependency security audits                        │ │
│  │  ✅ Private container registry (gcr.io)                  │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Critical Security Issues to Address

1. **IMMEDIATE (P0):**
   - Remove hardcoded Notion token from `src/sdk/notionClient.js`
   - Implement API key authentication for all routes
   - Add rate limiting (100 req/hour per IP recommended)

2. **HIGH PRIORITY (P1):**
   - Implement request validation middleware
   - Add comprehensive error handling (no stack trace exposure)
   - Set up automated dependency vulnerability scanning

3. **MEDIUM PRIORITY (P2):**
   - Implement webhook signature verification
   - Add request/response logging for audit trail
   - Set up secrets rotation schedule

---

## Scalability Considerations

### Current Architecture Limits

| Resource | Current | Recommended | Max Capacity |
|----------|---------|-------------|--------------|
| Cloud Run Instances | 0-1000 | 0-100 (cost control) | 1000 |
| Concurrent Requests/Instance | 80 | 80 | 80 |
| Memory per Instance | 512MB (default) | 1GB | 4GB |
| CPU per Instance | 1 vCPU | 1 vCPU | 2 vCPU |
| Request Timeout | 300s (default) | 60s | 3600s |
| Cold Start Time | ~2-3s | <1s (keep warm) | N/A |

### Bottleneck Analysis

```
┌────────────────────────────────────────────────────────────────┐
│                    POTENTIAL BOTTLENECKS                       │
│                                                                 │
│  1. GitHub API Rate Limits                                     │
│     • 5,000 requests/hour (authenticated)                      │
│     • Solution: Implement caching layer (Redis)                │
│     • Solution: Request queuing for batch operations           │
│                                                                 │
│  2. Notion API Rate Limits                                     │
│     • 3 requests/second (rate limited)                         │
│     • Solution: Request throttling middleware                  │
│     • Solution: Batch operations where possible                │
│                                                                 │
│  3. Firebase Realtime DB                                       │
│     • Concurrent connections: 100,000                          │
│     • Bandwidth: 10 GB/month (free tier)                       │
│     • Solution: Migrate to Firestore for scale                 │
│                                                                 │
│  4. Cold Start Latency                                         │
│     • ~2-3 seconds for first request                           │
│     • Solution: Keep minimum 1 instance warm                   │
│     • Cost: ~$5-10/month                                       │
│                                                                 │
│  5. No Caching Layer                                           │
│     • Every request hits external APIs                         │
│     • Solution: Redis/Memcached for 5-15 min TTL               │
│     • Estimated savings: 60-80% reduction in API calls         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Deployment Checklist

### Pre-Production Checklist

- [x] Docker container builds successfully
- [x] Environment variables configured
- [x] GitHub Actions workflows tested
- [x] Cloud Run service deployed
- [x] HTTPS endpoint accessible
- [ ] API authentication implemented
- [ ] Rate limiting configured
- [ ] Monitoring and alerting set up
- [ ] Error tracking integrated
- [ ] Load testing performed
- [ ] Security audit completed
- [ ] Documentation published
- [ ] Backup and recovery tested

### Production-Ready Checklist

- [ ] Remove all hardcoded secrets
- [ ] Implement comprehensive error handling
- [ ] Add request validation middleware
- [ ] Set up monitoring dashboard
- [ ] Configure log aggregation
- [ ] Implement automated testing (80%+ coverage)
- [ ] Create incident response plan
- [ ] Set up on-call rotation
- [ ] Document API with OpenAPI spec
- [ ] Create developer onboarding guide
- [ ] Establish SLA commitments
- [ ] Implement graceful degradation
- [ ] Set up status page
- [ ] Configure automated backups
- [ ] Test disaster recovery procedures

---

**Document Version:** 1.0  
**Maintained by:** Project technical team  
**Last Review:** December 16, 2025  
**Next Review:** Upon major architectural changes


UID: akilahapigateway
runtime: Node / JavaScript
deployment_package: Docker container
cloud_platform: Google Cloud Run

→ service runs container: gcr.io/akilahstack/akilahapigateway


Single Entey Upstream_Caller:
: https://akilahapigateway-7677n7fr6q-uc.a.run.app/{route}

service_type: Express.js 
platform: Google Cloud Run




cloud_run_url_in_file: akilahapigateway-858627689875.us-central1.run.app
cloud_run_region_in_file: us-central1
cloud_run_container_in_file: gcr.io/akilahstack/akilahapigateway
runtime_in_file: Docker Container / Node:18-slim
application_type_in_file: Express.js Application
architecture_layer_in_file: API Gateway Layer




-

Deplyment: https://app-akilah-7677n7fr6q-uc.a.run.app
cloud_run_service_name: app-akilah
cloud_run_status: Ready
cloud_run_traffic: 100%
cloud_run_ingress: all internet traffic allowed
cloud_run_invoker_access: public_allUsers

cloud_run_image: gcr.io/akilahstack/akilah-app
cloud_run_container_port: 8080
cloud_run_memory: 512Mi
cloud_run_max_instances: 20
browser_fetch_result: 404 Not Found
This one also has a shell I believe is a container but but there's a Google sign on and sign in in the middle but that doesn't when I try to sign in with my Google. It's blocked. I think it's the wrong. It's probably wrong but just wanna let you know if these are.

-

cloud_run_service_name: app-akilah
cloud_run_status: Ready
cloud_run_traffic: 100%
cloud_run_ingress: all internet traffic allowed
cloud_run_invoker_access: public_allUsers
cloud_run_url: https://app-akilah-7677n7fr6q-uc.a.run.app
cloud_run_image: gcr.io/akilahstack/akilah-app
cloud_run_container_port: 8080
cloud_run_memory: 512Mi
cloud_run_max_instances: 20
browser_fetch_result: 404 Not Found

-

cloud_run_service_name: webapp-akilah
cloud_run_status: Ready
cloud_run_traffic: 100%
cloud_run_ingress: all internet traffic allowed
cloud_run_invoker_access: public_allUsers
cloud_run_url: https://webapp-akilah-7677n7fr6q-uc.a.run.app
cloud_run_image: us-central1-docker.pkg.dev/akilahstack/cloud-run-source-deploy/webapp-akilah
cloud_run_container_port: 8080
cloud_run_memory: 256Mi
cloud_run_max_instances: 20
browser_fetch_result: page loads
page_title: Akilah — Sign In
visible_ui: AKILAH gateway platform, Sign In, Sign Up, username/password fields, organization optional field




### Project 2: `akilahstack` (ID: akilahstack, #858627689875) - **THIS PROJECT**

**Firebase Hosting Sites (1 total):**

- <https://akilahstack.web.app> - ⚠️ Created but empty

**Cloud Functions:** None deployed
**App Hosting:** No backends configured
**Cloud Run:** No services running

**Enabled Services:**

- ✅ Firebase Hosting API
- ✅ Firebase App Hosting API
- ✅ Cloud Run Admin API
- ✅ Cloud Build API
- ✅ Cloud Functions API
- ✅ All Firebase APIs (Remote Config, Rules, Storage, etc.)

**Status:** All APIs enabled, infrastructure ready, but nothing deployed

**Local Configuration Files:**

- `.firebaserc` - Points to akilahstack ✅
- `firebase.json` - Configured for App Hosting backend "mywebapp" ✅
- `apphosting.yaml` - Cloud Run settings configured ✅
- `.firebase/hosting.Lm5leHQ.cache` - Evidence of previous deployment

---

## Current Infrastructure Summary

**Total Firebase Projects:** 2
**Total Hosting Sites:** 4 (all empty)
**Total Cloud Run Services:** 0
**Total Cloud Functions:** 0
**Total App Hosting Backends:** 0

**Key Finding:** All infrastructure exists and is ready to use, but nothing is currently deployed anywhere.

## Deployment Options

### ⚠️ Current Issue with Firebase App Hosting

The `akilahstack` project **does not have Cloud Run enabled/configured** for App Hosting deployment. While the APIs are enabled, no actual Cloud Run service exists.

### Recommended Deployment Path

#### Option 1: Vercel (Simplest - 2 minutes)

**Best for this project type**

1. Go to [vercel.com](https://vercel.com)
2. Import `incrediblesadi/akilahWeb` from GitHub
3. Click Deploy → Done!

**Why Vercel:** Next.js native support, automatic builds, instant deploys

#### Option 2: Firebase Hosting (Simple Static)

Deploy to any of the 4 existing hosting sites:

```bash
npm run build
firebase deploy --only hosting --project akilahstack
# OR deploy to akilah-memory sites:
firebase deploy --only hosting:akilah --project akilah-memory
```

#### Option 3: Firebase App Hosting (Requires Setup)

**Note:** Cloud Run service doesn't exist yet, needs full setup:

```bash
firebase apphosting:backends:create --project akilahstack
# This will prompt to connect GitHub repo and create Cloud Run service
```

#### Option 4: Netlify

1. [netlify.com](https://netlify.com) → Import from GitHub
2. Build command: `npm run build`
3. Publish directory: `.next`

---

## System-Wide Workflow Idea 💡

Create a **central documentation repository** to track all Firebase resources:

```
akilah-infrastructure/
├── README.md (Master inventory)
├── projects/
│   ├── akilah-memory.md
│   └── akilahstack.md
├── deployments/
│   ├── active-sites.md
│   └── deployment-history.md
└── workflows/
    └── deploy-checklist.md
```

**Benefits:**

- Single source of truth for all Firebase resources
- Track what's deployed where
- Document deployment workflows
- Version controlled infrastructure knowledge

Want me to create this structure?

---

## What's In This Repo

**Active Files:**

- [src/app/page.tsx](src/app/page.tsx) - Video player component
- [public/Akilah.mp4](public/Akilah.mp4) - The Akilah video
- [package.json](package.json) - Dependencies and scripts
- [firebase.json](firebase.json) - Firebase App Hosting config
- [apphosting.yaml](apphosting.yaml) - Cloud Run settings
- [.firebaserc](.firebaserc) - Project: akilahstack

**Non-Functional Files:**

- `.vscode/tasks.json` - References non-existent "akilah-data-format"
- Task definitions for Akilah format validation (placeholders only)

## Next Steps

1. **Immediate:** Deploy to Vercel (fastest, works perfectly with Next.js)
2. **Alternative:** Use Firebase Hosting for static deployment
3. **Future:** Set up proper App Hosting if Cloud Run backend needed
4. **Consider:** Create central infrastructure documentation repo
5. **Build:** Actual stock dashboard features (currently just video)
