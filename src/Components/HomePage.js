import React from 'react';
import Profilepage from './Profilepage';
import Account from './Account';
import CreateUser from './CreateUser';
import Cards from './Cards';
import About from './About';
import ContactUs from './ContactUs';
import Booking from './Booking';
import List from './List';


const HomePage = ({ page }) => {
    const renderContent = () => {
        switch (page) {
            case 'Profile':
                return <div><Profilepage /></div>;
            case 'Cards':
                return <div><Cards /></div>;
            case 'Account':
                return <div><Account /></div>;
            case 'CreateUser':
                return <div><CreateUser /></div>;
            case 'ContactUs':
                return <div><ContactUs /></div>;
            case 'About':
                return <div><About /></div>;
            case 'Booking':
                return <div><Booking /></div>;
            case 'List':
                return <div><List /></div>;
            case 'Logout':
                return <div>Log Out Page</div>;
            default:
                return (
                    <div className='w-full h-full flex'>
                        <div className="text w-[60%] flex flex-col py-60">
                            <h1 className="px-[10%] text-5xl text-black text-bold text-center">
                                WELCOME TO OUR WEBSITE
                            </h1>
                            <h6 className="text-2xl text-bold text-center ">
                                Grow with us.
                            </h6>
                        </div>
                        <div className="w-[40%] py-28 overflow-hidden  object-cover">
                            <img className="w-[17rem]  rounded-xl" src='https://images.unsplash.com/photo-1472157510410-64a053cbc39f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="flex-1 p-8">
            {renderContent()}
        </div>
    );
};

export default HomePage;
