import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {
    const [user, setUser] = useState({ username: '', email: '', password: '', cpassword: '' })
    const redirect = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!user.username || !user.email || !user.password || !user.cpassword) { toast.error("please fill all the fields"); return }
        if (user.password != user.cpassword) { toast.error("password not match"); return }
        try {
            await fetch("https://6735a56a5995834c8a938362.mockapi.io/users", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(user)
            })
            toast.success("registered successfully")
            redirect('/login')
        }
        catch (err) { toast.error(err.message) }
    }
    return (
        <div className='flex justify-center items-center mt-7'>
            <form className='w-full max-w-md mt-7' onSubmit={handleSubmit}>
                <h1 className='block text-2xl font-bold text-center mb-7 text-indigo-800'>Register</h1>
                <div className="mb-3">
                    <label htmlFor="" className="block mb-3">Username</label>
                    <input type="text" className="w-full border py-1 focus:ring-2 focus:outline-none focus:shadow-md focus:shadow-indigo-500 focus:ring-indigo-600 rounded-md"
                        value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="block mb-3">Email</label>
                    <input type="text" className="w-full border py-1 focus:ring-2 focus:outline-none focus:shadow-md focus:shadow-indigo-500 focus:ring-indigo-600 rounded-md"
                        value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="block mb-3">Password</label>
                    <input type="password" className="w-full border py-1 focus:ring-2 focus:outline-none focus:shadow-md focus:shadow-indigo-500 focus:ring-indigo-600 rounded-md"
                        value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="block mb-3">Cpassword</label>
                    <input type="password" className="w-full border py-1 focus:ring-2 focus:outline-none focus:shadow-md focus:shadow-indigo-500 focus:ring-indigo-600 rounded-md"
                        value={user.cpassword} onChange={(e) => setUser({ ...user, cpassword: e.target.value })} />
                </div>
                <button type="submit" className="w-full border bg-indigo-800 text-white rounded-md py-1 hover:bg-indigo-700">Register</button>
            </form>
        </div>
    )
}

export default Register