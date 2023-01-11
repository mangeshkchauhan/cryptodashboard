import React from 'react';
import { BsFillBarChartFill, BsFillBrightnessHighFill } from 'react-icons/bs';
import {
	AiTwotoneCustomerService,
	AiOutlineFolder,
	AiOutlineBell,
} from 'react-icons/ai';
import { FaHotjar } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineDocumentReport } from 'react-icons/hi';


const SideList = ({ list }) => {


	const iconComponent = (reactIcon) => {
		switch (reactIcon) {
			case 'BsFillBarChartFill': return <BsFillBarChartFill />
			case 'AiTwotoneCustomerService': return <AiTwotoneCustomerService />
			case 'AiOutlineFolder': return <AiOutlineFolder />
			case 'AiOutlineBell': return <AiOutlineBell />
			case 'FaHotjar': return <FaHotjar />
			case 'CgProfile': return <CgProfile />
			case 'HiOutlineDocumentReport': return <HiOutlineDocumentReport />
			default: return <BsFillBrightnessHighFill />
		}
	};

	return (
		<div className='list'>
			<div className='list-head'>{list.title}</div>
			<div className='list-body'>
				{list.list.map((item, index) => {
					return (
						<div className='list-item' key={item.name}>
							<div className='list-icon'>{iconComponent(item.icon)} &nbsp; &nbsp;</div>
							<div className='list-name'>{item.name}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SideList;
