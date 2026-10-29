# CAMPUS 360° — Streamlit Community Cloud package

The uploaded project is a Vite/React website. Community Cloud runs Python entrypoints, so this package adds a small Streamlit wrapper and same-origin static asset route around the website build. The original website source remains in `campus360_fixed2/`.

## Build the website

From the repository root, run:

```bash
cd campus360_fixed2
npm install
npm run build
cd ..
```

The generated `campus360_fixed2/dist/` folder must be included in the GitHub repository because the Streamlit wrapper serves those static files. Keep the source folder too, so it can be rebuilt when changed. The Vite config uses relative asset URLs to make the embedded app work at its Streamlit route.

## Deploy

1. Create a GitHub repository and upload the contents of this folder (`streamlit_app.py`, `requirements.txt`, `README.md`, and `campus360_fixed2/`).
2. Ensure `campus360_fixed2/dist/index.html` is present in the repository.
3. Sign in at [Streamlit Community Cloud](https://share.streamlit.io/) with the GitHub account that can access the repository.
4. Choose **Create app**, select the repository and branch, and set **Main file path** to `streamlit_app.py`.
5. Choose a subdomain if desired, then select **Deploy**.

The app will not be live until it is deployed from the user's GitHub and Streamlit accounts.

## Recommended hosting

For this React app, static hosting such as GitHub Pages, Netlify, or Vercel is a more direct fit and avoids the Streamlit iframe wrapper. The wrapper is provided only to satisfy a Streamlit Community Cloud deployment target.
