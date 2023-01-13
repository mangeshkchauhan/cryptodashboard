import './App.css'
import Nav, {NavPhone} from './components/Nav/Nav'
import Hero from './components/Main/Hero';
import Sidebar from './components/Main/Sidebar';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <NavPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='main-content'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='content'>
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default App
