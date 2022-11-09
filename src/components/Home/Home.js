import React from 'react';
import Services from '../Services/Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2>This is home page</h2>
            <Services></Services>
        </div>
    );
};

export default Home;