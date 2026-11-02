# Bank of Career Ed

A classroom play-money bank for a personal finance unit. Students type their ID number, check their accounts, pay bills, and move money between Checking and Savings. Teachers assign jobs, bills, bonuses and fees.

**All bank data stays on the iPad it was entered on.** There is no account, no online database, and nothing is sent anywhere. Each teacher's iPad has its own separate bank.

---

## Part 1: Put the app online (one person, one time)

You need a free GitHub account. The teachers only need the link you get at the end.

1. Sign in at github.com. Click **+** (top right), then **New repository**.
2. Name it (for example `bank-of-career-ed`), choose **Public**, tick **Add a README file**, and click **Create repository**.
3. In the new repo, click **Add file**, then **Upload files**.
4. Drag in everything that is *inside* this folder: `index.html`, `manifest.webmanifest`, `sw.js`, `logo.png`, and the `icons` and `fonts` folders. Drag the contents, not the zip file. Click **Commit changes**.
5. Go to **Settings**, then **Pages**. Under Source choose **Deploy from a branch**, pick `main` and `/ (root)`, and click **Save**.
6. After a minute or two the page shows your link: `https://YOURNAME.github.io/REPO-NAME/`

### Using your own address (recommended before the other teachers install)

The saved data is tied to the exact web address. If the teachers install from the github.io link and you later switch to your own domain, their iPads would open the new address empty. Pick the final address first.

With a domain bought at Cloudflare, use a subdomain such as `bank.yourdomain.com`:

1. In Cloudflare, open your domain, then **DNS**, then **Add record**: Type `CNAME`, Name `bank`, Target `YOURNAME.github.io`, Proxy status **DNS only** (grey cloud).
2. In the GitHub repo, go to **Settings**, then **Pages**, and type `bank.yourdomain.com` under **Custom domain**. Click **Save**.
3. Wait for the certificate (a few minutes up to an hour), then tick **Enforce HTTPS**.
4. GitHub adds a file called `CNAME` to the repo. Do not delete it.

## Part 2: Install on a classroom iPad

1. Open the link in **Safari**.
2. Tap **Share**, then **Add to Home Screen**, then **Add**.
3. Open the bank **from the home screen icon** from now on. Enter data there, not in the Safari tab. The icon and the Safari tab can keep separate data.
4. Tap **Teacher** and make a 6-digit teacher PIN. Each iPad has its own.

If the school manages the iPads, they may block Add to Home Screen. Ask your tech person to allow it.

It works with no internet after the first visit.

## Part 3: Back up every week

Because the data lives only on the iPad, the backup file is your safety net.

- **Teacher Center, then Backup & Restore, then Back Up Now.** Save the file to Files, then put a copy in your school Google Drive. The bank shows a reminder when it has been a week.
- **To restore** (lost or reset iPad, new iPad, mistake): open the bank, then Teacher, then Backup & Restore, then **Choose a backup file**, pick the file, and confirm. Restoring replaces everything on that iPad with the file, including the teacher PIN. Anything entered after the backup was made is gone.
- The backup file has student names, PINs and balances in it. Keep it in school storage and do not share it.

Back up before any big change, and before an app update.

## Updating the app

When a new version is sent to you:

1. Open `sw.js` and check that `VERSION` was changed (for example `bank-v1` to `bank-v2`). The new version will already have it.
2. In GitHub, click **Add file**, then **Upload files**, drag in the changed files (same names replace the old ones), and commit.
3. Each iPad picks up the update the next time it is opened with internet. It may take one extra reopen to show. Saved data is not touched.

## Good to know

- **Do not use a private browsing window.** Nothing can be saved there. The start screen shows a warning if the browser cannot save.
- **Clearing Safari website data** can erase the bank. Back up first.
- **Adding students:** the Students screen asks only for a name, a class and a 6 to 12 digit ID number (leave it blank and the bank makes one). Students sign in with that ID number. Students added before this update can still tap their cards.
- **Delete Student** and **Remove Class** are permanent. Restore from a backup if one was a mistake.
