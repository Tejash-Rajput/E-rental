import React from 'react';

const Profilepage = () => {
    return (
        <div className="container mt-14">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <header className="bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-t-lg p-6 flex items-center">
                    <div className="mr-4">
                        <img className="w-20 h-20 rounded-full" src="https://images.unsplash.com/photo-1579783483458-83d02161294e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Profile Picture" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Jaydon Frankie</h1>
                        <p className="text-lg">Data Analyst</p>
                    </div>
                </header>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="col-span-1">
                            <div className="p-6 bg-white rounded-lg shadow-md">
                                <h2 className="text-xl font-bold mb-4">About</h2>
                                <p className="mb-4">Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer.</p>
                                <ul className="space-y-2">
                                    <li><strong>Live at:</strong> Andorra</li>
                                    <li><strong>Email:</strong> ashlynn_ohara562@gmail.com</li>
                                    <li><strong>Job:</strong> Data Analyst at Gleichner, Mueller and Tromp</li>
                                    <li><strong>Education:</strong> Studied at Nikolaus - Leuschke</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-md mt-4">
                                <h2 className="text-xl font-bold mb-4">Social</h2>
                                <ul className="space-y-2">
                                    <li><a href="https://www.facebook.com/caitlyn.kerluke" className="text-blue-600 hover:underline">Facebook</a></li>
                                    <li><a href="https://www.instagram.com/caitlyn.kerluke" className="text-pink-600 hover:underline">Instagram</a></li>
                                    <li><a href="https://www.linkedin.com/in/caitlyn.kerluke" className="text-blue-700 hover:underline">LinkedIn</a></li>
                                    <li><a href="https://www.twitter.com/caitlyn.kerluke" className="text-blue-400 hover:underline">Twitter</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <p className="text-gray-500 mb-4">01 Jun 2024</p>
                                <p className="mb-4">The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.</p>
                                <div className="rounded overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1579783483458-83d02161294e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Post Image" className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profilepage;
