import { MinusCircleIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
    const {id, title, imageUrl, price, handleDelete} = props
    let renderMinusCircleIcon
    if (handleDelete) {
        renderMinusCircleIcon = <MinusCircleIcon onClick={() => handleDelete(id)} className="w-6 h-6 text-red-400 cursor-pointer" />
    }

  return (
    <div className="flex items-center justify-between px-4 mb-8 rounded-lg order-card">
        <div className='flex items-center gap-2'>
            <figure className='w-24 h-20'>
                <img className=' p-1 object-contain w-full h-[70px]' 
                src={imageUrl} alt={title} />
            </figure>
            <p className='pl-4 pr-6 text-sm font-light'>{title}</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='text-lg font-medium'>${price}</p>
            {renderMinusCircleIcon}
        </div>
    </div>
  )
}

export default OrderCard