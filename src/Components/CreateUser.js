import React, { useState } from 'react';

const CreateUser = () => {
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        address: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if (!newUser.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!newUser.email.trim()) {
            newErrors.email = 'Email is required';
        }
        if (newUser.phone.toString().length !== 10) {
            newErrors.phone = 'Phone number must be a 10-digit number';
        }
        if (!newUser.country.trim()) {
            newErrors.country = 'Country is required';
        }
        if (!newUser.address.trim()) {
            newErrors.address = 'Address is required';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        console.log('User details updated:', newUser);
    };

    return (
        <div className="flex flex-col items-center justify-center max-h-screen py-24">
            <div className="max-w-4xl w-full mx-auto bg-white shadow-lg rounded-lg p-8 flex">
                <div className="w-1/3 flex flex-col items-center">
                    <div>
                        <div className="flex flex-col items-center mt-2">
                            <img
                                src={newUser.avatar || "https://images.unsplash.com/photo-1579783483458-83d02161294e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"}
                                alt="User Avatar"
                                className="rounded-full h-32 w-32 mb-4"
                            />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setNewUser((prevUser) => ({
                                            ...prevUser,
                                            avatar: reader.result
                                        }));
                                    };
                                    if (file) {
                                        reader.readAsDataURL(file);
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-2/3 ml-8">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newUser.name}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.name && 'border-red-500'}`}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={newUser.email}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.email && 'border-red-500'}`}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="number"
                                    name="phone"
                                    value={newUser.phone}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.phone && 'border-red-500'}`}
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={newUser.country}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.country && 'border-red-500'}`}
                                />
                                {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={newUser.address}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.address && 'border-red-500'}`}
                                />
                                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                            </div>
                        </div>
                        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                            Create User
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;
