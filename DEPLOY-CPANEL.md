# Deploy Viiva Website on cPanel (full project upload)

Upload the **whole project** to cPanel (except `node_modules` and `.next`). On the server you run **npm install**, **npm run build**, then start the app with the **start file**.

---

## 1. What to upload

Upload the **entire project folder** to cPanel (e.g. into `public_html/viiva-website` or a folder of your choice), but **exclude**:

- **`node_modules`** (install on server)
- **`.next`** (created on server by build)

You can zip the project on your computer after deleting (or excluding) `node_modules` and `.next`, then upload the zip and extract in cPanel File Manager.

**Include:** `src/`, `public/`, `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`, `server.js`, and all other files.

---

## 2. On the server (cPanel)

SSH into the server (or use cPanel Terminal), go to the project folder, then run:

```bash
cd /path/to/your/viiva-website   # your uploaded folder

npm install --production
```

**Using `npm install --production`:**  
That skips dev dependencies. You need dev dependencies to run **`npm run build`** (TypeScript, Tailwind, etc.). So:

- **Option A (recommended):** Run **`npm install`** (full), then **`npm run build`**. After that, start with **`server.js`**.
- **Option B:** Build on your PC, upload the project **including** the **`.next`** folder (still exclude `node_modules`). On the server run only **`npm install --production`**, then start with **`server.js`**.

**Recommended on server:**

```bash
npm install
npm run build
```

After that, the app is ready to start.

---

## 3. Start file for cPanel Node.js app

In cPanel → **Setup Node.js App** (or **Application Manager**):

| Setting              | Value |
|----------------------|--------|
| **Application root** | The folder that contains `server.js`, `package.json`, and (after build) `.next` |
| **Startup file**     | **`server.js`** |

So the **start file** is: **`server.js`** (in the root of your project).

cPanel will run: **`node server.js`**, which starts the Next.js production server. **`server.js`** uses the **`PORT`** environment variable (set by cPanel for Node.js apps), so the app listens on the correct port and you avoid *EADDRINUSE: address already in use :::3000*.

---

## 4. Summary

| Step | Action |
|------|--------|
| Upload | Whole project **except** `node_modules` and `.next` |
| On server | `npm install` then `npm run build` |
| Start file | **`server.js`** |
| Start command (if asked) | `node server.js` |

---

## 5. Optional: production-only install

If you prefer **`npm install --production`** and still want to build on the server, you must have dev dependencies for the build. Options:

1. **Build on your PC**, then upload the project **including** the `.next` folder (and still exclude `node_modules`). On server run only **`npm install --production`** and use **`server.js`** as start file.  
2. **Build on server**: run **`npm install`** (full) once, run **`npm run build`**, then start with **`server.js`**. You can leave dependencies as-is; no need to prune.

Your **start file** is **`server.js`** in the project root.

---

## 6. Troubleshooting: 503 / EADDRINUSE (port 3000 in use)

If you see **503** or **Error: listen EADDRINUSE: address already in use :::3000**:

1. **Use the latest `server.js`** – It is now a **custom server** that never uses port 3000. It uses **`process.env.PORT`** (or `NODE_PORT`), or 8080 if neither is set. Upload the current **server.js** and restart the app.

2. **Set PORT in cPanel** – In **Setup Node.js App** → your application → **Environment variables** (or **Edit**), add:
   - **Name:** `PORT`  
   - **Value:** the port shown for your app (e.g. `35000` or `8080`).  
   Save and **Restart** the application.

3. **Stop extra instances** – Stop all instances of the app in cPanel and start it only once.

4. **If 3000 is hard-coded** – Some panels default to 3000. Change the application port in the Node.js app settings to another port (e.g. 35000) and set **PORT** to that value so `server.js` uses it.
