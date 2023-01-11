import React from 'react';
import { AiOutlinePlus, AiOutlineHome } from 'react-icons/ai';
import SideList from './SideList';
import {analytics, support, shop} from '../constants'

import './Sidebar.scss';

const Sidebar = () => {
	return (
		<>
			<div className="sidebar-body">
        <div className='connect-btn'>
          <AiOutlinePlus /> &nbsp; Connect New Account
        </div>
        <div className='side-head'>
          <AiOutlineHome /> &nbsp; &nbsp; Dashboard
        </div>
        <SideList list={analytics}/>
        <SideList list={support}/>
        <SideList list={shop}/>
      </div>
		</>
	);
};

export default Sidebar;
