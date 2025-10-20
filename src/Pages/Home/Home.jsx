import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Banner2 from '../../Components/Banner2/Banner2';
import HomeApp from '../HomeApp/HomeApp';
import { useLoaderData } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';

const Home = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <Banner></Banner>
            <Banner2></Banner2>

            <HomeApp data={data}></HomeApp>
        </div>
    );
};

export default Home;