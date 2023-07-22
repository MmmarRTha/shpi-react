import {useContext} from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

function ProductDetail() {
    const context = useContext(ShoppingCartContext)

  return (
    <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} fixed flex-col right-1 product-card product-detail`}>
        <div className='flex items-center justify-between p-9'>
            <h2 className='text-xl font-medium'>Detail</h2>
            <div>
                <XMarkIcon 
                className="w-6 h-6 text-black cursor-pointer" 
                onClick={() => context.closeProductDetail()}/>
            </div>
        </div>
        <figure className='px-10'>
            <img 
            className='w-full h-[300px] object-contain rounded-lg'
            src={context.productToShow.image}
            alt={context.productToShow.title} />
        </figure>
        <p className='flex flex-col p-11 gap-y-4'>
            <span className='mb-2 text-2xl font-medium'>${context.productToShow.price}</span>
            <span className='font-medium text-md'>{context.productToShow.title}</span>
            <span className='text-sm font-light'>{context.productToShow.description}</span>
            <span className='self-center px-2 py-1 text-base font-normal text-white rounded-full bg-fuchsia-500/90'>{context.productToShow.category}</span>
        </p>
    </aside>
  )
}

export default ProductDetail