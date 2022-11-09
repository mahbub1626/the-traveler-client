import React from 'react';

const MyReviewsCard = ({ review }) => {
    const { _id, name, photo, details } = review;
    return (
        <div>
            <div className='flex mx-6'>
                <div className="avatar online">
                    <div className="w-24 h-24 rounded-full">
                        <img src={photo} />
                    </div>

                </div>
                <div className='ml-4 my-auto'>
                    <h2 className='text-xl'>{name}</h2>
                    <p>{_id}</p>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">

                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsCard;