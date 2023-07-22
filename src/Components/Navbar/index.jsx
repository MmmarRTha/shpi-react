import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-8 decoration-1 font-normal'

    return (
        <nav className='fixed top-0 z-10 flex items-center justify-between w-full px-8 text-xl font-medium py-7 text-blue-950 side-bar'>
            <ul className='flex items-center gap-4'>
                <li className='text-2xl font-semibold'>
                    <NavLink to='/'
                    className='cursor-default text-fuchsia-500'>
                        eStore
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        onClick={() => context.setSearchByCategory('')}
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined                            
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/women's clothing"
                        onClick={() => context.setSearchByCategory('women\'s clothing')}
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined                            
                        }>
                        Woman
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/men's clothing"
                        onClick={() => context.setSearchByCategory('men\'s clothing')}
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined                            
                        }>
                        Men
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined                            
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/jewelery'
                        onClick={() => context.setSearchByCategory('jewelery')}
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined                            
                        }>
                        Jewelery
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-4'>
                <li className='font-light'>
                    marthanieto@me.com
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive}) =>
                            isActive ? activeStyle : undefined   
                        }>
                        MyOrders
                    </NavLink>
                </li>
                <li className='flex items-center text-base'>
                    <ShoppingBagIcon className='w-6 h-6 text-black'></ShoppingBagIcon>
                    <div className='w-6 h-6 text-center rounded-full bg-fuchsia-300'>{context.count}</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar