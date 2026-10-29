from pathlib import Path
import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="CAMPUS 360° · VIT-AP", layout="wide")
app_path = Path(__file__).parent / "static" / "index.html"
if not app_path.exists():
    st.error("The built website is missing from the static folder.")
    st.stop()
components.iframe("/app/static/index.html", height=1000, scrolling=True)
