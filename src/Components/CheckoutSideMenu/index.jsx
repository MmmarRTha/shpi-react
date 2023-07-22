import {useContext} from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../utils'
import { Link } from 'react-router-dom'

function CheckoutSideMenu() {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredCart = context.cart.filter(product => product.id !== id)
        context.setCart(filteredCart)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date().toLocaleDateString(),
            products: context.cart,
            totalProducts: context.cart.length,
            totalPrice: totalPrice(context.cart)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCart([])
        context.setCount(0)
        context.closeCheckoutSideMenu()
        context.setSearchByTitle(null)
    }

  return (
    <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} fixed flex-col right-1 product-card product-detail`}>
        <div className='flex items-center justify-between p-9'>
            <h2 className='text-xl font-medium'>My Order</h2>
            <div>
                <XMarkIcon 
                className="w-6 h-6 text-black cursor-pointer" 
                onClick={() => context.closeCheckoutSideMenu()}/>
            </div>
        </div>
        <div className='flex-1 overflow-x-hidden overflow-y-auto scrollbar-hide px-9'>
            {
                context.cart.map(product => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                ))
            }
        </div> 
        <div className='px-10 mb-8'>
            <p className='flex items-center justify-between mb-4'>
                <span className='text-2xl font-medium text-fuchsia-700'>Total:</span>
                <span className='text-3xl font-medium'>${totalPrice(context.cart)}</span>
            </p>
            <Link to="/my-orders/last">
                <button className='w-full py-5 text-2xl font-bold text-white btn' onClick={() => handleCheckout()}>CHECKOUT</button>
            </Link>
        </div>
    </aside>
  )
}

export default CheckoutSideMenu