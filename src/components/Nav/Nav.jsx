import React from 'react';
import logo from '../../assets/logo.jpg';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { BiMailSend, BiBell } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import './Nav.scss';
import { titleState } from '../states/titleStateAtom';
import { useRecoilState } from 'recoil';

const Nav = ({ setMenuOpen, menuOpen }) => {

	const [text, setText] = useRecoilState(titleState);

	return (
		<div className='navbar-container'>
			<div className='logo'>
				<img src={logo} alt='logo' />
				<div className='title'>Acme Inc</div>
			</div>
			<div className='helper-search'>
				<div className='search'>
					<input
						type='text'
						className='searchTerm'
						placeholder='Search?'
						onChange={(e) => setText(e.target.value)}
						value={text}
					/>
					<button type='submit' className='searchButton'>
						<AiOutlineSearch className='mx-auto' />
					</button>
				</div>
			</div>
			<NavContent setMenuOpen={setMenuOpen} />
			<div className='navBtn' onClick={() => setMenuOpen(!menuOpen)}>
				<AiOutlineMenu />
			</div>
		</div>
	);
};

export const NavPhone = ({ menuOpen, setMenuOpen }) => {
	return (
		<div className={`navPhone ${menuOpen ? 'navPhoneComes' : ''}`}>
			<NavContent setMenuOpen={setMenuOpen} />
		</div>
	);
};

const NavContent = ({ setMenuOpen }) => {
	return (
		<>
			<div className='navigator navigator-phone'>
				<div className='cross' onClick={() => setMenuOpen(false)}>
					<AiOutlineClose />
				</div>
				<div className='navigate-btn'>
					<BiMailSend />
				</div>
				<div className='navigate-btn'>
					<BiBell />
				</div>
				<div className='navigate-btn'>
					<CgProfile />
				</div>
			</div>
		</>
	);
};

export default Nav;
