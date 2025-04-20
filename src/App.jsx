import { useState } from 'react'
import './App.css'
import SectionMerge from './components/common/SectionMerge';
import Header from './pages/Header';
import Summary from './pages/Summary';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Certification from './pages/Certification';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Summary />
      <Skills />
      <SectionMerge>
        <Education />
        <Certification />
      </SectionMerge>
      <Experience />
    </div>
  )
}

export default App
