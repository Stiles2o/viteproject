import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useCart } from '../cart/CartContext'

const Product = () => {
    let cartcon = useCart()
    // this one is set a product from dummy data using api
    let [products, setProducts] = useState([])
    let getData = async () => {
        try {
            let res = await fetch("https://dummyjson.com/products")
            let data = await res.json()
            // console.log(data)
            setProducts(data.products)
        }
        catch (err) {
            toast.error(err)
        }
    }
    // use to get itme and show
    useEffect(() => { getData() }, [])
    const handleCart = (product) => {
        // use for cart item add
        cartcon.addtocart(product)
    }
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.length == 0 && <h1>No Product Found</h1>}
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    alt={product.title}
                                    src={product.images[0]}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        {product.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                            <button className='bg-orange-600 text-white p-2 rounded-xl shadow-xl hover:bg-orange-500 mt-2' onClick={() => handleCart(product)}>Add to cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product