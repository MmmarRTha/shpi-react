import { useContext } from 'react'
import { PlusCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

function Card(data) {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCart([...context.cart, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    const renderIcon = (id) => {
        const isProductInCart = context.cart.filter(product => product.id === id).length > 0
        if (isProductInCart) {
            return (
                <button 
                    className="absolute top-0 right-0 flex items-center justify-center p-1 m-2 bg-white rounded-full">
                    <CheckCircleIcon className='w-6 h-6 fill-lime-500'></CheckCircleIcon>
                </button>
            )
        } else {
            return (
                <button 
                    className="absolute top-0 right-0 flex items-center justify-center p-1 m-2 bg-white rounded-full"
                    onClick={(event) => addToCart(event, data.data)}>
                    <PlusCircleIcon className='w-6 h-6 fill-fuchsia-500'></PlusCircleIcon>
                </button>
            )
        }
    }
    
  return (
    <div 
        className="w-56 bg-white rounded-lg cursor-pointer h-60"
        onClick={() => showProduct(data.data)}>
        <figure className="relative w-full mb-2 h4/5">
            <span className="absolute bottom-0 left-0 m-2 text-xs text-black rounded-lg bg-white/60 px-3 py-0.5">
                {data.data.category}
            </span>
            <img
                className="w-full h-[200px] rounded-lg object-contain" 
                src={data.data.image} alt ={data.data.title} />
                {renderIcon(data.data.id)}
        </figure>
        <p className="flex justify-between ">
            <span className="text-sm font-light truncate">{data.data.title}</span>
            <span className="font-medium text-medium">${data.data.price}</span>
        </p>
    </div>
  )
}

export default Card