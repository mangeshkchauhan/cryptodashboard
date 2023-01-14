import React from 'react';

const SalesCard = ({ content }) => {
	return (
		<div className='bg-slate-100 rounded-md flex justify-evenly p-5 flex-col border h-32 w-80'>
			<div className='card-title uppercase text-gray-500 font-bold'>
				{content?.title}
			</div>
			<div className='secondrow flex flex-row  mt-4 items-center relative'>
				<div className=' font-bold text-3xl'>${content?.amount}</div>
				<div className='upOrDown flex self-end text-xl absolute right-0'>
					{content?.up ? (
						<div className=' text-green-500'> +{` ${content?.change}%`} &uarr;</div>
					) : (
						<div className=' text-red-500'> -{` ${content?.change}%`} &darr;</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SalesCard;
