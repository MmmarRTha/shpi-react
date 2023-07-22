import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'

import Home from '../Home'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home />},
        { path: '/women\'s clothing', element: <Home />},
        { path: '/men\'s clothing', element: <Home />},
        { path: '/electronics', element: <Home />},
        { path: '/jewelery', element: <Home />},
        { path: '/my-order', element: <MyOrder />},
        { path: '/my-orders', element: <MyOrders />},
        { path: '/my-orders/last', element: <MyOrder />},
        { path: '/my-orders/:id', element: <MyOrder />},
        { path: '*', element: <NotFound />},
    ])
    return routes
}

const App = () => {
    return (
        <ShoppingCartProvider>
            <BrowserRouter> 
                <AppRoutes />
                <Navbar /> 
                <CheckoutSideMenu />
            </BrowserRouter>
        </ShoppingCartProvider>
    )
}

export default App
