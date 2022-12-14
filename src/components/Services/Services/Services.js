import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://the-traveler-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data);
                
            })
    }, [])
    return (
        <div className='my-8 '>
            <h1 className='text-3xl my-4'>Services: {services.length} </h1>

            <div className='grid lg:grid-cols-3 gap-4 lg:gap-8'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;