const DefaultLayout = ({ children }) => {

    return (
        <div className='w-full h-full overflow-y-scroll flex flex-col'>
            {children}
        </div>
    )
}

export default DefaultLayout;