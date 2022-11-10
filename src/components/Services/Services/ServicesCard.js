import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    // console.log(service)
    const { _id, name, price, photo, rating, details } = service;
    return (
        <div className="card lg:w-96 glass">
            <figure><img src={photo} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details.slice(0, 100,)}</p>
                <div className="card-actions justify-between">
                    <div >
                        <p className='text-xl text-black'>${price}</p>
                    </div>
                    <div>
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard; 