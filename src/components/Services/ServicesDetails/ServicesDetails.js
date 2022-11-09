import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const ServicesDetails = () => {
    const { _id, name, price, photo, rating, details } = useLoaderData();

    

    return (
        <div>
            <div className="card w-1/2 mx-auto my-4 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div>
                <Review
               id={ _id}
               serviceName={name}
                ></Review>

            </div>
        </div>
    );
};

export default ServicesDetails;