import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
const cart = React.createContext()
const CartContext = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)

    // AddCartItem
    const addtocart = (product) => {
        const itemIndex = cartItems.findIndex((item) => item.id == product.id)
        if (itemIndex == -1) {
            setCartItems([...cartItems, { ...product, qty: 1 }])
            toast.success(`${product.title} added`)
        }
        else {
            toast.warning(`${product.title} alredy added`)
        }

    }
    // Increment
    const increment = (product) => {
        const itemIndex = cartItems.findIndex((item) => item.id == product.id)
        if (product.stock > cartItems[itemIndex].qty) {
            cartItems[itemIndex].qty++
        } else {
            toast.warning(`only ${product.stock} avilable`)
        }
        setCartItems([...cartItems])
    }
    // Decrement
    const decrement = (product) => {
        const itemIndex = cartItems.findIndex((item) => item.id == product.id)
        if (cartItems[itemIndex].qty > 1) {
            cartItems[itemIndex].qty--
        } else {
            cartItems[itemIndex].qty = 1
        }
        setCartItems([...cartItems])
    }

    // Remove Form cart
    const remove_from_cart = (id) => {
        // mothod1
        // const itemIndex = cartItems.findIndex((item) => item.id == id)
        // cartItems.slice(itemIndex, 1)
        // setCartItems([...cartItems])

        // mothod2
        const filters = cartItems.filter((item) => item.id != id)
        setCartItems([...filters])
    }

    // Empty cart 
    const emptycart = () => { setCartItems([]); setTotal(0) }
    // Total
    const calulate_total = () => {
        let total = cartItems.reduce((prev, curr) => { return prev + curr.qty * curr.price }, 0)
        setTotal(total)
    }
    return (
        <cart.Provider value={{ cartItems, total, addtocart, increment, decrement, remove_from_cart, emptycart, calulate_total }}>
            {children}
        </cart.Provider>
    )
}

export default CartContext
export const useCart = () => useContext(cart)