import React from 'react';
import './mainpage.css';
import { Header } from '../Header';
import { Hero } from '../Hero';
import { Activity } from '../Activity';
import { UserData } from '../UserData';

const MainPage = ({ }) => {
    return (
        <div className='mainpage'>
            <Header />
            <Hero />
            <Activity />
            <UserData />
        </div>
    );
}

export { MainPage };