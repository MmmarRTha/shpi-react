import { useContext } from 'react'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'
import { Link } from 'react-router-dom'

function MyOrders() {
    const context = useContext(ShoppingCartContext)
    
  return (
    <Layout>
        <div className='relative flex items-center justify-center mb-3 w-80'>
            <h1 className='text-xl font-medium'>MyOrders</h1>
        </div>
        {
            context.order.map((order, index) =>(
                <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard 
                    totalPrice={order.totalPrice} 
                    totalProducts={order.totalProducts} />
                </Link>
            ))
        }
    </Layout>
  )
}

export default MyOrders