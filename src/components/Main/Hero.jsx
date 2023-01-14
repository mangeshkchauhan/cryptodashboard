import React from 'react';
import SalesCard from '../../common/SalesCard';

const Hero = () => {
	const storeStat = [
		{
			title: "Today's Sale",
			amount: '12,426',
			change: '36',
			up: true,
		},
		{
			title: 'Total Sales',
			amount: '38,485',
			change: '14',
			up: false,
		},
		{
			title: 'Total Orders',
			amount: '84,426',
			change: '9',
			up: true,
		},
		{
			title: 'Total Customers',
			amount: '84,426',
			change: '90',
			up: true,
		},
		{
			title: 'Total Orders',
			amount: '84,426',
			change: '9',
			up: true,
		},
		{
			title: 'Total Customers',
			amount: '84,426',
			change: '90',
			up: true,
		},
	];
	return (
		<div className='container p-12'>
			<div className='heading text-xl'>
				<span className=' font-bold'>Hey Mangesh - </span>
				here's what's happening with your store today
			</div>
			<div className='sales-data my-5 flex flex-wrap gap-6 justify-center'>
				{storeStat.map((item, index) => {
					return <SalesCard key={index} content={item} />;
				})}
			</div>
		</div>
	);
};

export default Hero;
