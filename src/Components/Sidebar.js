import React from 'react';

const Sidebar = ({ onChangePage }) => {
    return (
        <div className="fixed top-0 left-0 bg-white p-4 w-[20%] h-screen border-r-2 border-gray-600">
            <div className="flex flex-col gap-10">
                <div className="box  text-2xl">
                    <img className='w-20 h-20 rounded-full object-cover bg-black' src="https://images.unsplash.com/photo-1579783483458-83d02161294e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"></img>
                </div>
                <div className="prof-box flex h-15 bg-gray-300  rounded-2xl">
                    <img className="mx-3 my-2 w-9 h-9 rounded-full object-cover bg-black" src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"></img>
                    <div className="username  h-full">
                        <h1 className="text-center my-2 text-xl">
                            Jaydon Frankie
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <button onClick={() => onChangePage('Profile')} className="p-2 bg-gray-300 w-full text-left rounded">
                        Profile
                    </button>
                    <button onClick={() => onChangePage('Cards')} className="p-2 bg-gray-300 w-full text-left rounded">
                        Cards
                    </button>
                    <button onClick={() => onChangePage('Account')} className="p-2 bg-gray-300 w-full text-left rounded">
                        Account
                    </button>
                    <button onClick={() => onChangePage('CreateUser')} className="p-2 bg-gray-300 w-full text-left rounded">
                        CreateUser
                    </button>
                    <button onClick={() => onChangePage('List')} className="p-2 bg-gray-300 w-full text-left rounded">
                        List
                    </button>
                    <button onClick={() => onChangePage('Booking')} className="p-2 bg-gray-300 w-full text-left rounded">
                        Booking
                    </button>
                    <button onClick={() => onChangePage('About')} className="p-2 bg-gray-300 w-full text-left rounded">
                        About
                    </button>
                    <button onClick={() => onChangePage('ContactUs')} className="p-2 bg-gray-300 w-full text-left rounded">
                        ContactUs
                    </button>
                    <button onClick={() => onChangePage('Logout')} className="p-2 bg-gray-300 w-full text-left rounded">
                        Log Out
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Sidebar;
