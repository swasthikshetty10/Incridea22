import React from 'react';
import Navbar from '../Navbar';
import EventsCard from './EventsCard';
import codeNinja from '../../Images/Sponsor/codingninja.png';
import redfm from '../../Images/Sponsor/redfm.png';
import lifestyle from '../../Images/Sponsor/lifestyle.png';
import dlithe from '../../Images/Sponsor/dlithe.png';

const SponsorDetails = [
	{
		name: 'Coding Ninjas',
		description:
			'Coding Ninjas is a place that trains passionate people in various technologies. Our core programs are intensive, immersive training that transforms people into outstanding developers.',
		image: codeNinja,
		url: 'https://www.codingninjas.com/',
	},
	{
		name: 'Red FM',
		description:
			"Red FM is an Indian FM radio network headquartered in Chennai and owned by Chennai-based Sun Group. Red FM 93.5 is India's only Hindi CHR FM radio network spread across 48 cities.",
		image: redfm,
		url: 'https://www.redfmindia.in',
	},
	{
		name: 'Lifestyle',
		description:
			'Originating in India in 1999, Lifestyle is an Emirati retail fashion brand which comes under Dubai-based retail and hospitality conglomerate, the Landmark Group.',
		image: lifestyle,
		url: 'https://www.lifestylestores.com/in/en/',
	},
	{
		name: 'Dlithe',
		description:
			'Being agile is the need of hour. The world is on disruptive mode. The world is looking for agile workforce that are adoptable and produce quicker results.',
		image: dlithe,
		url: 'https://dlithe.com/',
	},
];

const Sponsor = () => {
	return (
		<>
			{console.log(SponsorDetails)}
			<Navbar tab='sponsor' />
			<div className='bg-[#171717] '>
				<div className='text-center pt-2'>
					<h1 className='text-5xl md:text-6xl tracking-widest  font-bold text-[#EDEDED]'>
						Our Sponsors
					</h1>
					<div className=''>
						{SponsorDetails.map((sponorDetail) => (
							<EventsCard
								ImageSrc={sponorDetail.image}
								SponsorTitle={sponorDetail.name}
								SponsorDesc={sponorDetail.description}
								SponsorWebsiteLink={sponorDetail.url}
							/>
						))}
					</div>
				</div>
			</div>
			{console.log(SponsorDetails)}
		</>
	);
};

export default Sponsor;
