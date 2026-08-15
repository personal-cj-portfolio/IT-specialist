import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './home.jsx'
import './theme.css'
// Import pages (assuming they export default components, otherwise we'll wrap them)
import Deloitte from './experience/deloitte.jsx'
import Persol from './experience/persol.jsx'
import HdMedi from './experience/hdmid.jsx'
import SwAcademy from './experience/swacademy.jsx'
import Military from './experience/military.jsx'
import Chanjurun from './projects/chanjurun.jsx'
import Neurodiversity from './projects/newrodiversity.jsx'
import Iyak from './projects/iyank.jsx'
import AutoShot from './projects/chungiham.jsx'
import SwArmy from './award/swarmy.jsx'
import Hecto from './award/hecto.jsx'
import Resume from './resume/Resume.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />

        {/* Experience Routes */}
        <Route path="/experience/deloitte" element={<Deloitte />} />
        <Route path="/experience/persol" element={<Persol />} />
        <Route path="/experience/hdmid" element={<HdMedi />} />
        <Route path="/experience/swacademy" element={<SwAcademy />} />
        <Route path="/experience/military" element={<Military />} />

        {/* Project Routes */}
        <Route path="/projects/chanjurun" element={<Chanjurun />} />
        <Route path="/projects/neurodiversity" element={<Neurodiversity />} />
        <Route path="/projects/aiyak" element={<Iyak />} />
        <Route path="/projects/autoshot" element={<AutoShot />} />

        {/* Award Routes */}
        <Route path="/award/military" element={<SwArmy />} />
        <Route path="/award/hecto" element={<Hecto />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
