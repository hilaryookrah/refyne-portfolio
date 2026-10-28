# REFYNE portfolio

Static site: plain HTML, CSS and JavaScript. No build step.

## Files
- `index.html` page content
- `styles.css` all styling
- `script.js` animations, custom cursor, video players
- `images/` your photos and thumbnails (swap a file to change a picture, keep the same name)
- `videos/` optional: add `raw.mp4` and `refined.mp4` here and the phone players use them instead of YouTube
- `vercel.json`, `package.json` hosting config (no need to edit)

## Deploy
1. Create a GitHub repository and upload everything inside this folder (not the zip itself).
2. On vercel.com choose Add New > Project, import the repository.
3. Framework Preset: Other. Leave Build Command and Output Directory empty. Click Deploy.
4. Add your domain under Project > Settings > Domains.

## Editing later
Change a file on GitHub and commit. Vercel redeploys automatically.
