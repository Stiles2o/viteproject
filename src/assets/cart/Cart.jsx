import React, { useEffect } from 'react'
import { useCart } from './CartContext'
import { BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Cart = () => {
    const cartcon = useCart()
    let { cartItems, total, increment, decrement, remove_from_cart, emptycart, calulate_total } = cartcon
    useEffect(() => {
        calulate_total()
    }, [cartItems])
    return (
        <>
            <div className="max-w-7xl mx-auto p-8 bg-gray-100">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center justify-between py-6 border-b border-gray-200">
                                    <div className="flex items-center gap-6">
                                        <img src={item.images[0]} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                                            <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                                            <p className="text-gray-600">Total Price: ${(item.qty * item.price).toFixed(2)}</p>
                                            <div className="flex items-center mt-4">
                                                <button type="button" className="w-12 p-2" onClick={() => decrement(item)}>-</button>
                                                <input type="text" value={item.qty}
                                                    className="w-12 p-2 border border-gray-300 rounded-lg text-center"
                                                />
                                                <button type="button" className="w-12 p-2" onClick={() => increment(item)}>+</button>
                                            </div>  </div>  </div>
                                    <button type='button' className='text-red-500 text-2xl' onClick={() => remove_from_cart(item.id)}><BsTrash></BsTrash></button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/3">
                        <div className="bg-white shadow-lg p-8 rounded-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
                            <div className="flex justify-between text-lg mb-4">
                                <span className="text-gray-700">Subtotal</span>
                                <span className="font-medium text-gray-900">${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-lg mb-4">
                                <span className="text-gray-700">Shipping</span>
                                <span className="font-medium text-gray-900">{total > 0 && total < 50 ? "$5.00" : "$0.00"}</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold border-t pt-6">
                                <span>Total</span>
                                <span className="text-gray-900">${<>{total > 0 && total < 50 ? (total + 5).toFixed(2) : (total + 0).toFixed(2)} </>}</span>
                            </div>
                            <div className="flex justify-between">
                                <button className="mt-8 w-52 bg-red-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition duration-200 me-2" onClick={() => emptycart()}>
                                    Empty Cart
                                </button>
                                <Link to="/checkout">
                                    <button className="mt-8 w-52 bg-indigo-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-200">
                                        Checkout
                                    </button>
                                </Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
