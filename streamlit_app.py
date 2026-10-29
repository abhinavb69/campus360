import base64
import re
from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components

ROOT = Path(__file__).parent
DIST = ROOT / "campus360_fixed2" / "dist"

st.set_page_config(page_title="CAMPUS 360° · VIT-AP", layout="wide")

index_path = DIST / "index.html"
if not index_path.exists():
    st.error("The web app build is missing. Check campus360_fixed2/dist in the repository.")
    st.stop()

index_html = index_path.read_text(encoding="utf-8")
js_name = re.search(r'src="\./assets/([^"]+\.js)"', index_html).group(1)
css_name = re.search(r'href="\./assets/([^"]+\.css)"', index_html).group(1)
js = (DIST / "assets" / js_name).read_text(encoding="utf-8")
css = (DIST / "assets" / css_name).read_text(encoding="utf-8")
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
