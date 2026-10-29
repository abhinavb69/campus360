from pathlib import Path

import streamlit as st


ROOT = Path(__file__).parent
DIST = ROOT / "campus360_fixed2" / "dist"

st.set_page_config(page_title="CAMPUS 360° · VIT-AP", layout="wide")

if not (DIST / "index.html").exists():
    st.error("The web app has not been built yet. Follow the build steps in README.md.")
    st.stop()

st.markdown(
    """
    <style>
      [data-testid="stAppViewContainer"] { padding: 0; }
      [data-testid="stHeader"], footer { display: none; }
      .campus-frame { width: 100%; height: calc(100vh - 2rem); min-height: 700px; border: 0; }
    </style>
    <iframe class="campus-frame" title="CAMPUS 360° VIT-AP" src="app" allow="fullscreen"></iframe>
    """,
    unsafe_allow_html=True,
)


@st.cache_data
def load_site_files():
    """Read build assets for delivery through a same-origin Streamlit route."""
    assets = {}
    for path in DIST.rglob("*"):
        if path.is_file():
            relative = path.relative_to(DIST).as_posix()
            assets[relative] = path.read_bytes()
    return assets


try:
    from tornado.web import RequestHandler

    try:
        from streamlit.web.server.routes import Route
    except ImportError:
        from streamlit.web.server.server import Route

    class CampusSiteHandler(RequestHandler):
        def get(self, asset_path=""):
            files = load_site_files()
            asset_path = asset_path or "index.html"
            if asset_path not in files:
                self.set_status(404)
                self.finish("Not found")
                return
            content_types = {".js": "text/javascript", ".css": "text/css", ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml"}
            suffix = Path(asset_path).suffix.lower()
            self.set_header("Content-Type", content_types.get(suffix, "text/html; charset=utf-8"))
            self.finish(files[asset_path])

    # Add one app route that serves the Vite build and its assets on Streamlit's
    # origin, allowing browser modules, textures, and SPA route navigation.
    server = st.runtime.get_instance()._server
    server._app.routes.append(Route(r"/app(?:/(.*))?", CampusSiteHandler))
except Exception as exc:
    st.error(f"Could not mount the bundled website: {exc}")
