import { Link, useLocation } from 'react-router-dom'

const NavLink = ({ to, children }) => {
  const location = useLocation()
  const isActive = location.pathname === to
  
  return (
    <Link 
      to={to} 
      className={`font-medium transition-colors ${
        isActive 
          ? 'text-blue-400' 
          : 'text-black hover:text-blue-400'
      }`}
    >
      {children}
    </Link>
  )
}

export default NavLink