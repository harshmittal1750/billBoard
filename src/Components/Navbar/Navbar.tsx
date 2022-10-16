import React from 'react'

const Navbar = () => {
    return (
        <div><ul className="flex border-b">
            <li className="-mb-px mr-1">
                <a href="/" className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" >Active</a>
            </li>
            <li className="mr-1">
                <a href="/" className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" >Tab</a>
            </li>
            <li className="mr-1">
                <a href="/" className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" >Tab</a>
            </li>
            <li className="mr-1">
                <a href="/" className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" >Tab</a>
            </li>
        </ul></div>
    )
}

export default Navbar