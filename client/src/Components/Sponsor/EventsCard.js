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
			{/* {console.log(ImageSrc, SponsorTitle, SponsorDesc, SponsorWebsiteLink)} */}
			<div className='event__card'>
				<div className='event__img__wrapper'>
					<img className='event__img' src={ImageSrc} alt='' />
				</div>
				<div className='event__content_wrapper py-4 gap-3 '>
					<h5 className='event__heading text-3xl'>{SponsorTitle}</h5>
					<p className='event__description  '>{SponsorDesc}</p>
					<a href={SponsorWebsiteLink}>
						<button
							type='button'
							className='text-white bg-[#9d7643]  font-medium rounded-none text-sm px-5 py-2.5 text-center mr-2 my-2 max-w-fit   '
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
