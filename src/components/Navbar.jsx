import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex flex-row gap-8 bg-gray-900 p-4 justify-center shadow-lg border-b border-gray-800 mb-8 w-full'>
      <NavLink 
        to="/" 
        className={({isActive}) => isActive ? "text-blue-500 font-bold text-lg" : "text-gray-300 hover:text-blue-400 font-medium text-lg transition-colors"}
      >
        Home
      </NavLink>
      <NavLink 
        to="/pastes" 
        className={({isActive}) => isActive ? "text-blue-500 font-bold text-lg" : "text-gray-300 hover:text-blue-400 font-medium text-lg transition-colors"}
      >
        Pastes
      </NavLink>
    </div>
  )
}

export default Navbar;


// import React from 'react'
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className='flex flex-row gap-4'>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/pastes">Pastes</NavLink>
//     </div>
//   )
// }

// export default Navbar
