import React from 'react';
import { AiOutlinePlus, AiOutlineHome } from 'react-icons/ai';
import SideList from './SideList';
import {analytics, support, shop} from '../constants'
import { useRecoilValue } from 'recoil';
import { isMobileScreenState } from '../states/isMobileScreenState';

import './Sidebar.scss';

const Sidebar = () => {
	const isMobileScreen = useRecoilValue(isMobileScreenState);
	return (
		<>
			<div className='sidebar-body'>
				<div
					className={`connect-btn ${
						isMobileScreen ? 'h-16 text-center text-5xl' : ''
					}`}
				>
					<AiOutlinePlus className={!isMobileScreen ? 'mr-4' : ''} />
					{!isMobileScreen && 'Connect New Account'}
				</div>
				<div
					className={`side-head ${
						isMobileScreen ? 'justify-center text-4xl' : ' text-3xl'
					}`}
				>
					<AiOutlineHome />
					{!isMobileScreen && <div className='ml-4'>Dashboard</div>}
				</div>
				<SideList list={analytics} />
				<SideList list={support} />
				<SideList list={shop} />
			</div>
		</>
	);
};

export default Sidebar;
