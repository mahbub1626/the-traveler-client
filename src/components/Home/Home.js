import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Partnership from '../Partnership/Partnership';
import Services from '../Services/Services/Services';
import ServicesCard from '../Services/Services/ServicesCard';
import ShortIntro from '../ShortIntro/ShortIntro';
import Banner from './Banner/Banner';

const Home = () => {
    const [services, setServices] = useState([])
    const [empty, setEmpty] = useState('')

    useEffect(() => {
        fetch('https://the-traveler-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                // SPLICE FOR 3 CARD ON HOME PAGE
                if (data.length > 0) {
                    const result = data.splice(0, 3)
                    setServices(result);
                    console.log(result);

                }
                else {
                    setEmpty('');
                }
            })
    }, [])
    return (
        <div className='my-4 '>
            {/* banner */}

            <Banner></Banner>

            {/* services */}
            <div className='my-8 '>
                <h1 className='text-3xl text-center my-4'> Available Services</h1>
                {services.length === 0 && <p className='text-3xl text-center my-10 text-gray-500'>Service not available</p>}

                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-10 justify-between'>
                    {
                        services.map(service => <ServicesCard
                            key={service._id}
                            service={service}
                        ></ServicesCard>)
                    }
                </div>
                <div className="w-36  my-4 mx-auto">
                    <Link to='/services'>
                        <button className="btn btn-primary  mx-auto">See more</button>
                    </Link>
                </div>
            </div>

            <div>
                <ShortIntro></ShortIntro>
            </div>

            {/* in partnership */}
            <div className='text-3xl text-center my-4'>
                <Partnership></Partnership>
            </div>

        </div>
    );
};

export default Home;