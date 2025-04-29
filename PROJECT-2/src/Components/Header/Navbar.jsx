import React from 'react';
export default function Navbar(e){
    
    return (
        <>
        <nav className='flex justify-between py-8 text-lg '>
            <h3>Portfolio</h3>
            <div className='flex gap-[35px]'>
                <a href="/" className=''>Home</a>
                <a href="/" className='opacity-30'>About </a>
                <a href="/" className='opacity-30'>Contact</a>
                <a href="/" className='opacity-30'>Work Together</a>
            </div>
        </nav>
        </>
    );
}

