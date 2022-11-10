import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {
    const [reviews, setReviews] = useState([])
    const [empty, setEmpty] = useState({})
    const { user } = useContext(AuthContext)
    // console.log(user.email)
    // console.log(reviews)

    useEffect(() => {
        fetch('https://the-traveler-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data)
                // const data1 = data.map()
                // if (data.email !== user.email) {
                //     setEmpty("");

                // }
                // else {
                //     const remaining = data.filter(data.email !== user.email)
                //     setReviews(remaining);

                // }
            })
    }, [])
    return (

        <div>
            <div className='my-8'>
                {/* {empty.length === 0 && <p className='text-4xl font-bold text-gray-500 text-center'>Your review not matched.</p>} */}
            </div>
            <div className='grid lg:grid-cols-3 gap-4 my-8'>

                {
                    reviews.map(review => <MyReviewsCard
                        key={review._id}
                        review={review}
                    ></MyReviewsCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;