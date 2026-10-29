from pathlib import Path
import shutil

import streamlit as st

ROOT = Path(__file__).parent
DIST = ROOT / "campus360_fixed2" / "dist"
STATIC = ROOT / "static"

st.set_page_config(page_title="CAMPUS 360° · VIT-AP", layout="wide")

if not (DIST / "index.html").exists():
    st.error("The web app has not been built yet. Follow the build steps in README.md.")
    st.stop()

shutil.copytree(DIST, STATIC, dirs_exist_ok=True)

st.markdown(
    """
    <style>
      [data-testid="stAppViewContainer"] { padding: 0; }
      [data-testid="stHeader"], footer { display: none; }
      .campus-frame { width: 100%; height: calc(100vh - 2rem); min-height: 700px; border: 0; }
    </style>
    <iframe class="campus-frame" title="CAMPUS 360° VIT-AP" src="/app/static/index.html" allow="fullscreen"></iframe>
    """,
    unsafe_allow_html=True,
)
