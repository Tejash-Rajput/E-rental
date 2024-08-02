import React from 'react';

const HeroSection = () => {
    return (
        <div className="bg-white shadow-lg relative">
            <div className="rounded overflow-hidden w-full h-[70vh] shadow-lg relative">
                <img className="absolute object-cover w-full h-screen"
                    src='https://www.trulia.com/images/app-shopping/homePage/hiDpiExtraLarge.webp'></img>
                <div className="max-w-6xl absolute flex flex-col gap-7 text-center w-screen mt-36">
                    <h1 className="text-4xl font-bold text-white">
                        Discover a place
                        <br/> you'll love to live
                    </h1>
                    <div className="mt-4 flex justify-center gap-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Buy
                        </button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Rent
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Sold
                        </button>
                    </div>
                    <div className="mt-1 ml-[22%] relative w-[50%]">
                        <input
                            type="text"
                            placeholder="San Francisco, CA"
                            className="w-[50%] px-4 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                            className="absolute top-1/2 right-24 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                        >
                            <svg className="w- h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default HeroSection;