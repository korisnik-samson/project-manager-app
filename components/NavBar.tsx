import React from 'react'

const NavBar = () => {
    return (
        <React.Fragment>
            <div className='md:flex flex-col w-64'>
                <div className='flex items-center justify-center h-16 border-gray-500 border-2'>
                    <h1 className='text-black text-2xl font-bold'>User Name</h1>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NavBar;