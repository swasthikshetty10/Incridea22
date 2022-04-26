import React from 'react';
import './sponsor.css';

const EventsCard = ({
	ImageSrc,
	SponsorTitle,
	SponsorDesc,
	SponsorWebsiteLink,
}) => {
	return (
		<>
			{console.log(ImageSrc, SponsorTitle, SponsorDesc, SponsorWebsiteLink)}
			<div className='event__card'>
				<div className='event__img__wrapper'>
					<img className='event__img' src={ImageSrc} alt='' />
				</div>
				<div className='event__content_wrapper'>
					<h5 className='event__heading text-3xl'>{SponsorTitle}</h5>
					<p className='event__description'>{SponsorDesc}</p>
					<a href={SponsorWebsiteLink}>
						<button
							type='button'
							className='text-white bg-[#DA0037] hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-none text-sm px-5 py-2.5 text-center mr-2 my-2 max-w-fit   '
						>
							Go to Website
						</button>
					</a>
				</div>
			</div>
		</>
	);
};

export default EventsCard;
