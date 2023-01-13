import './App.css'
import Nav, {NavPhone} from './components/Nav/Nav'
import Hero from './components/Main/Hero';
import Sidebar from './components/Main/Sidebar';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useRecoilState } from 'recoil';
import { isMobileScreenState } from './components/states/isMobileScreenState';

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	const isMobile = useMediaQuery({ query: '(max-width: 800px)' });
	const [isMobileScreen, setIsMobileScreen] =
		useRecoilState(isMobileScreenState);

	useEffect(() => {
		setIsMobileScreen(isMobile);
	}, [isMobile, isMobileScreen]);

	return (
		<div className='App'>
			<NavPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className='main-content'>
				<div className={`sidebar ${isMobileScreen ? 'w-28' : 'w-96'}`}>
					<Sidebar />
				</div>
				<div className='content'>
					<Hero />
				</div>
			</div>
		</div>
	);
}

export default App
