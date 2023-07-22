import { ChevronRightIcon } from '@heroicons/react/24/solid'
import {CalendarDaysIcon} from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const {totalPrice, totalProducts} = props
    const date = new Date().toLocaleDateString()

  return (
    <div className="flex items-center justify-between mb-6 w-[40rem] h-24 orders-card px-6 rounded-xl">
        <div className="flex justify-between w-full">
            <div className='flex items-center gap-6'>
                <CalendarDaysIcon className='w-6 h-6'/>
                <p>
                    <span className='text-2xl'>{date}</span>
                </p>
                    <span className='font-medium'>({totalProducts}) articles</span>
            </div>
            <p className='flex items-center gap-3'>
                <span className="text-3xl font-medium">${totalPrice}</span>
                <ChevronRightIcon className='w-5 h-5 text-2xl text-black cursor-pointer'/>
            </p>
        </div>
    </div>
  )
}

export default OrdersCard