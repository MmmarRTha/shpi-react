import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

    if (index === 'last') index = context.order?.length - 1
    
  return (
    <Layout>
        <div className='flex items-center justify-between w-6/12 px-8 mb-6'>
            <Link to="/my-orders">
                <ChevronLeftIcon className='w-6 h-6 text-black cursor-pointer' />
            </Link>
            <h1 className='text-xl font-medium'>My Order</h1>
        </div>
        <div className='flex-1 w-7/12 h-full pb-3 overflow-x-hidden overflow-y-auto scrollbar-hide px-9'>
            {
                context.order?.[index]?.products.map(product => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                    />
                ))
            }
        </div>
    </Layout>
  )
}

export default MyOrder