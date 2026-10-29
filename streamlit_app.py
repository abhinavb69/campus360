from pathlib import Path
import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="CAMPUS 360° · VIT-AP", layout="wide")
html_path = Path(__file__).parent / "static" / "index.html"
html = html_path.read_text(encoding="utf-8")
html = html.replace("<head>", '<head><base href="https://campus360-xijrdavzpeb.streamlit.app/app/static/">', 1)
components.html(html, height=1000, scrolling=True)
