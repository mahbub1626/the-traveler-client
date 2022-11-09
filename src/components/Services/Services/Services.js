import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data);
            })
    }, [])
    return (
        <div className='my-8'>
            <h1>Services: {services.length} </h1>
            <div className='grid lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className="w-36  my-4 mx-auto">
                <button className="btn btn-primary  mx-auto">See more</button>

            </div>
        </div>
    );
};

export default Services;