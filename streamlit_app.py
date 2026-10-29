import base64
from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components

ROOT = Path(__file__).parent
DIST = ROOT / "campus360_fixed2" / "dist"

st.set_page_config(page_title="CAMPUS 360° · VIT-AP", layout="wide")

if not (DIST / "index.html").exists():
    st.error("The web app build is missing. Check campus360_fixed2/dist in the repository.")
    st.stop()

js_file = next((DIST / "assets").glob("*.js"))
css_file = next((DIST / "assets").glob("*.css"))
js = js_file.read_text(encoding="utf-8")
css = css_file.read_text(encoding="utf-8")
panorama = DIST / "panoramas" / "sample-360.jpg"
panorama_data = base64.b64encode(panorama.read_bytes()).decode("ascii")
js = js.replace(
    "./panoramas/sample-360.jpg",
    f"data:image/jpeg;base64,{panorama_data}",
)

page = f"""<!doctype html>
<html lang=\"en\">
<head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><style>{css}html,body,#root{{margin:0;min-height:100%;width:100%;}}</style></head>
<body><div id=\"root\"></div><script type=\"module\">{js}</script></body>
</html>"""
components.html(page, height=1000, scrolling=True)
