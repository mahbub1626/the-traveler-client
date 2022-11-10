import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit, FaRemoveFormat } from 'react-icons/fa';

const MyReviewsCard = ({ review }) => {
    const { _id, name, serviceId, serviceName, photoURL, rating, reviewMessage, currDate, currTime } = review;
    return (
        <div>
            <div className='flex mx-6'>
                <div className="avatar online">
                    <div className="w-24 h-24 rounded-full">
                        <img src={photoURL} />
                    </div>

                </div>
                <div className='ml-4 my-auto'>
                    <h2 className='text-xl'>{name}</h2>
                    <p>{currDate} {currTime}</p>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">

                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{reviewMessage}</p>
                    <div className='flex justify-between'>
                        <div className="card-actions ">
                            <h4 className='block p-4'>{serviceName}</h4>
                            <p className='ml-2 p-4'>Rating: {rating}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="p-4 btn btn-ghost"><FaEdit /></button>
                            <button className="p-4 btn btn-ghost"><AiOutlineDelete /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsCard;