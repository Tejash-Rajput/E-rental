import React, { useEffect, useState } from 'react'
import { Userdata } from './Userdata'

const List = () => {

    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(0)
    const [id, setId] = useState(0)
    const [isUpdate, setIsUpdate] = useState(false)

    useEffect(() => {
        setData(Userdata)
    }, [])

    const handleEdit = (id) => {
        const dt = data.filter((item) => item.id === id)
        if (dt !== undefined) {
            setIsUpdate(true)
            setId(id)
            setName(dt[0].name)
            setEmail(dt[0].email)
            setPhone(dt[0].phone)
        }
    }

    const handleDelete = (id) => {
        if (id > 0) {
            if (window.confirm("are you sure to delete this item ?")) {
                const dt = data.filter(item => item.id != id);
                setData(dt)
            }
        }
    }

    const handleSave = (e) => {
        let error = '';

        if (name === '')
            error += 'name is required, '

        if (email === '')
            error += 'email is required, '

        if (phone <= 0)
            error += 'phone is required, '

        if (error === '') {
            e.preventDefault();
            const dt = [...data];
            const newObject = {
                "id": Userdata.length + 1,
                name: name,
                email: email,
                phone: phone,
            }
            dt.push(newObject);
            setData(dt)
        }
        else{
            alert(error)
        }
    }

    const handleUpdate = () => {
        const index = data.map((item, index) => {
            return item.id
        }).indexOf(id)

        const dt = [...data];
        dt[index].name = name;
        dt[index].email = email;
        dt[index].phone = phone;

        setData(dt);
        handleClear();
    }


    const handleClear = () => {
        setId(0)
        setName('')
        setEmail('')
        setPhone('')
        setIsUpdate(false)
    }


    return (
        <div className="mt-20">
            <div className="flex justify-center mt-3 mb-3 gap-8">
                <div>
                    <label>Name:
                        <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)} value={name} className='border-2 border-black' />
                    </label>
                </div>
                <div>
                    <label>Email:
                        <input type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} className='border-2 border-black' />
                    </label>
                </div>
                <div>
                    <label>Phone:
                        <input type='text' placeholder='phone' onChange={(e) => setPhone(e.target.value)} value={phone} className='border-2 border-black' />
                    </label>
                </div>
                <div className='flex gap-2'>
                    {
                        !isUpdate ?
                            <button className='btn btn-primary' onClick={(e) => handleSave(e)}>Save</button>
                            :
                            <button className='btn btn-primary' onClick={() => handleUpdate()}>Update</button>
                    }
                    <button className='btn btn-danger' onClick={(e) => handleClear()}>Clear</button>
                </div>
            </div>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <td>Sr no.</td>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <button className='btn btn-primary' onClick={(e) => handleEdit(item.id)}>Edit</button> &nbsp;
                                        <button className='btn btn-danger' onClick={(e) => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List