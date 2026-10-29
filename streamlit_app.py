from pathlib import Path
import streamlit as st

st.set_page_config(page_title="CAMPUS 360° · VIT-AP", page_icon="🏛️", layout="wide")
ROOT = Path(__file__).parent
PANORAMA = ROOT / "static" / "panoramas" / "sample-360.png"
st.markdown("""<style>
.stApp{background:#07111c;color:#eef5fb}.hero{padding:3rem 1rem;border:1px solid #1b3548;border-radius:24px;background:radial-gradient(circle at 82% 25%,#173c50,#0c1e2c 45%,#091522)}
.eyebrow{color:#51d6c0;letter-spacing:.18em;font-size:.8rem;font-weight:700}.hero h1{color:#f4f8fb;font-size:clamp(2.5rem,6vw,5rem);line-height:1.05}.hero p{color:#b7c9d6;font-size:1.08rem;max-width:40rem}
[data-testid=stMetric]{background:#0d1e2b;border:1px solid #1b3548;padding:1rem;border-radius:14px}div.stButton>button{border-radius:12px;min-height:2.7rem}
</style>""",unsafe_allow_html=True)
if "page" not in st.session_state: st.session_state.page="home"
if "point" not in st.session_state: st.session_state.point=1
with st.sidebar:
 st.markdown("## 🏛️ CAMPUS 360°")
 st.caption("VIT-AP VIRTUAL NAVIGATION")
 if st.button("Home",use_container_width=True): st.session_state.page="home"
 if st.button("Explore campus",use_container_width=True): st.session_state.page="building"
 st.divider(); st.caption("Prototype · Mahatma Gandhi Block")
page=st.session_state.page
if page=="home":
 st.markdown('<section class="hero"><span class="eyebrow">DIGITAL CAMPUS EXPERIENCE</span><h1>Explore VIT-AP<br>from anywhere.</h1><p>An interactive virtual navigation experience for exploring campus buildings, corridors and rooms.</p></section>',unsafe_allow_html=True)
 st.write("")
 a,b=st.columns([1,1])
 with a:
  if st.button("Explore Campus →",type="primary",key="home_explore"): st.session_state.page="building"; st.rerun()
  st.markdown("### From floor plan to presence")
  st.write("Select a block, choose a viewpoint on the floor map, then explore the campus panorama.")
 with b:
  st.markdown("### Your virtual tour")
  x,y,z=st.columns(3); x.metric("Experience","360°"); y.metric("Floors","01"); z.metric("Viewpoints","05")
elif page=="building":
 st.markdown("## Explore campus")
 with st.container(border=True):
  st.markdown("### Mahatma Gandhi Block")
  st.caption("VIT-AP University · Prototype available")
  if st.button("Open building →",type="primary"): st.session_state.page="floor"; st.rerun()
elif page=="floor":
 st.markdown("## Mahatma Gandhi Block")
 with st.container(border=True):
  st.markdown("### Floor 1")
  st.caption("Five 360° viewpoints · Prototype floor")
  if st.button("View floor map →",type="primary"): st.session_state.page="map"; st.rerun()
elif page=="map":
 st.markdown("## Floor 1 · Viewpoint map")
 st.caption("Choose a point to open its 360° view.")
 st.markdown("<div style='height:190px;border:1px solid #315064;border-radius:18px;background:linear-gradient(90deg,#102333,#19394b,#102333);display:flex;align-items:center;justify-content:center;color:#b7d4e2;font-size:1.2rem'>FLOOR 1 · MAIN CORRIDOR</div>",unsafe_allow_html=True)
 cols=st.columns(5)
 for i,col in enumerate(cols,1):
  with col:
   if st.button(f"📍 P{i}",key=f"p{i}",use_container_width=True): st.session_state.point=i; st.session_state.page="panorama"; st.rerun()
elif page=="panorama":
 i=st.session_state.point
 st.markdown(f"## 360° View · P{i}")
 st.caption("Explore the sample campus panorama.")
 if PANORAMA.exists(): st.image(str(PANORAMA),use_container_width=True)
 else: st.error("Panorama image is missing from static/panoramas/sample-360.png.")
 a,b,c=st.columns([1,2,1])
 with a:
  if i>1 and st.button("← Previous"): st.session_state.point=i-1; st.rerun()
 with b:
  if st.button("Back to floor map",use_container_width=True): st.session_state.page="map"; st.rerun()
 with c:
  if i<5 and st.button("Next →"): st.session_state.point=i+1; st.rerun()
