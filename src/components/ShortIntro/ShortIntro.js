import React from 'react';

const ShortIntro = () => {
    return (
        <div className='relative w-full'>
            <div>
                <img src="https://i.ibb.co/XYNGS8w/11.jpg" alt="" />

            </div>

                <div className="absolute flex justify-start transform -translate-y-1 left-20 top-1/4  ">
                    <h2 className='lg:text-5xl text-base font-bold text-white'>
                    First-class Impressions <br />
                    are Waiting for You!
                    </h2>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1 left-20 top-2/4">
                    <p className='text-base w-2/3 text-white'>
                    Our agency offers travelers various tours !
                    </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1 left-20 top-3/4">
                    <button className="btn btn-primary  text-base ">Book a tour now</button> 
                </div>

           
        </div>
    );
};

export default ShortIntro;