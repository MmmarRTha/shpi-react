import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart * Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail * Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu * Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail * Show product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart * Add products to cart
    const [cart, setCart] = useState([])

    // Shopping Cart * Order
    const [order, setOrder] = useState([])

    // Get products
    const [items, setItems] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(items => items.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(items => items.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
          return filteredItemsByTitle(items, searchByTitle)
        }
    
        if (searchType === 'BY_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory)
        }
    
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
    
        if (!searchType) {
          return items
        }
      }
    
      useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredProducts(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredProducts(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredProducts(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredProducts(filterBy(null, items, searchByTitle, searchByCategory))
      }, [items, searchByTitle, searchByCategory])
    
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cart,
            setCart, 
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredProducts,
            searchByCategory,
            setSearchByCategory 
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}