import React, { useContext } from 'react';

const Review = ({ id, serviceName }) => {
// const {user} = useContext()
    const handlePlaceOrder = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const details = form.details.value;
        console.log(name, photo, rating, photo, price, details)

        const review = {
            name,
            photo,
            rating,
            price,
            details

        }
        // if (phone.length > 10) {
        //     alert('Phone number should be the 10 characters or longer')
        // }
        // else {

        // }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

    }
    return (
        <div className='my-20'>
            <p className='text-center text-3xl font-bold'>Review</p>
            <form onSubmit={handlePlaceOrder}>
                <div className='text-center my-4'>
                    {/* <h2 className="text-4xl">Add New Services {}</h2> */}
                    <h4 className="text-2xl">Service name: {serviceName}</h4>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    <input name="name" type="text" placeholder="Service Name" className="input input-bordered w-full " />
                    <input name="photo" type="photo" placeholder="Photo Link" className="input input-bordered w-full " />
                    <input name="rating" type="number" placeholder="Rating" className="input input-bordered w-full " />
                    <input name="price" type="number" placeholder="Service Price" className="input input-bordered w-full " />
                </div>
                <textarea name="details" className="textarea textarea-bordered h-24 w-full my-4" placeholder="Service Details"></textarea>
                <input className='btn btn-primary' type="submit" value="Review" />
            </form>
        </div>
    );
};


export default Review;