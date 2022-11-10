import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddServices = () => {
    // const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const details = form.details.value;
        console.log(name, photo, rating, photo, price, details)

        const service = {
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

        fetch('https://the-traveler-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                toast.success('Successfully added!')

            })
            .catch(error => {
                console.error(error)
                toast.error("Service not added.")
            });

    }
    return (
        <div className='my-20'>
            <form onSubmit={handlePlaceOrder}>
                <div className='text-center my-4'>
                <h2 className="text-4xl">Add New Services {}</h2>
                <h4 className="text-2xl">for traveler and torist</h4>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="name" type="text" placeholder="Service Name" className="input input-bordered w-full " />
                    <input name="photo" type="photo" placeholder="Photo Link" className="input input-bordered w-full " />
                    <input name="rating" type="number" placeholder="Rating" className="input input-bordered w-full " />
                    <input name="price" type="number" placeholder="Service Price" className="input input-bordered w-full " />
                </div>
                <textarea name="details" className="textarea textarea-bordered h-24 w-full my-4" placeholder="Service Details"></textarea>
                <input className='btn btn-primary' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddServices;