# CAMPUS 360° — VIT-AP

This version is deliberately dependency-light and uses local mock data only for the first working prototype. It removes Firebase and Framer Motion from the runtime path so a blank page caused by an optional integration cannot block the UI.

## Run

npm install
npm run dev

Open http://localhost:5173

## Flow

Home → Mahatma Gandhi Block → Floor 1 → Floor Map → P1/P2/P3/P4/P5 → Room 101/102 → Back to Corridor → Floor Map.

## Panorama

Replace `public/panoramas/sample-360.jpg` with your own 2:1 equirectangular panorama.

## Data

Edit `src/data/campus.js` to change viewpoints, rooms, connections, and map positions.

Firebase can be added later behind a service layer after the local prototype is verified.
