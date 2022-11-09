import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext)
    // console.log(user.email)
    // console.log(reviews)

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data);

            })
    }, [])
    return (
        <div className='grid lg:grid-cols-3 gap-4 my-8'>
            {
                reviews.map(review => <MyReviewsCard
                    key={review._id}
                    review={review}
                ></MyReviewsCard>)
            }
        </div>
    );
};

export default MyReviews;