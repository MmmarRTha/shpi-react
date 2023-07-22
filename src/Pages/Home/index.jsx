import { useContext} from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
    const context = useContext(ShoppingCartContext)

    const renderView = () => {
        if (context.filteredProducts?.length > 0) {
            return (
              context.filteredProducts?.map(item => (
                <Card key={item.id} data={item} />
              ))
            )
        } else {
            return (
                <div className="p-10 text-xl text-red-800 w-[410%]" role="alert">
                    <h4 className="font-mono text-center">No product found!</h4>
                </div>
            )
        }
    }
   
  return (
    <Layout>
        <div className='relative flex items-center justify-center mb-3 w-80'>
            <h1 className='text-2xl font-medium'>Exclusive Products</h1>
        </div>
        <input 
            className='p-4 mb-6 font-light text-center rounded-lg input-search w-96'
            type="text" 
            placeholder='Search a product' 
            onChange={(event) => context.setSearchByTitle(event.target.value)}/>
        <div className='grid w-full max-w-screen-lg grid-cols-4 gap-y-10 gap-x-4'>
            {renderView()}
        </div>
        <ProductDetail />
    </Layout>
  )
}

export default Home