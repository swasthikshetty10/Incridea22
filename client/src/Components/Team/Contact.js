import React from 'react'
import { FaPhoneAlt } from "react-icons/fa"
import { BiCurrentLocation } from "react-icons/bi"
import { HiOutlineMail } from "react-icons/hi"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';



const center = {
    lat: -3.745,
    lng: -38.523
};

function Contact() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_API_KEY"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    return (

        <>
            <div className="flex h-fit flex-col justify-center w-[80vw] md:w-[70vw] mx-auto gap-3   ">
                <div className="leading-[2.5rem]  text-5xl text-center md:text-6xl font-title pb-0 text-white sm:ml-4 p-4 sm:p-12 tracking-widest"  >Contact Us</div>
                <div className='flex flex-col md:flex-row gap-2 items-center justify-between' >
                    <div className="flex flex-col text-left  ">
                        <div className=' font-body text-xl text-white py-1.5 ' ><p className='hidden md:inline'> </p> <a className='text-igold hover:text-white m-3' target="_blank" href="https://www.google.com/maps/place/N.M.A.M.+Institute+of+Technology/@13.1830026,74.9318003,17z/data=!3m1!4b1!4m5!3m4!1s0x3bbb56415ad85e5b:0x10b77ac6f6afc7fa!8m2!3d13.1830026!4d74.933989"> <br /> N.M.A.M. Institute of Technology</a> <br /> Nitte, Karkala Taluk, <br />
                            Udupi - 574110 <br />
                            Karnataka, India <br /> </div>
                        <div className=' font-body text-xl  text-white py-1.5 ' > <p className=' md:inline'> Phone :</p><a className='text-igold  hover:text-white ' href="tel:9649409088"> 9649409088</a></div>
                        <div className=' font-body text-xl  text-white py-1.5 ' >  <p className=' md:inline'> Email Us :</p>  <a className='text-igold hover:text-white ' href="mailto:random@gmail.com"> random@gmail.com </a></div>

                    </div>
                    {/* <div className='p-4 m-4   '>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.673053282866!2d74.93180031474265!3d13.183002590717427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb56415ad85e5b%3A0x10b77ac6f6afc7fa!2sN.M.A.M.%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1651616824025!5m2!1sen!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='bg-white min-h-[50vh] min-w-[30vw] ' ></iframe>
                    </div> */}
                </div>


            </div>
        </>
    )
}

export default Contact


//icons
{/* <FaPhoneAlt className=' text-igold inline mr-3' /> 
<BiCurrentLocation className=' text-igold inline mr-3' />
<HiOutlineMail className=' text-igold inline mr-3' /> */}