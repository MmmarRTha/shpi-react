function Layout( {children}) {
  return (
    <div className='flex flex-col items-center mt-32 gap-y-2'>
        {children}
    </div>
  )
}

export default Layout