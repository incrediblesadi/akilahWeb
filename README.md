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
**Cloud Run:** No services

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
