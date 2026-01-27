import NavLink from '../ui/NavLink'
import logo from '../../assets/logo.svg'

const Header = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/why', label: 'Why ICP' },
    { path: '/framework', label: 'Framework' },
    { path: '/checklist', label: 'Checklist' },
    { path: '/resources', label: 'Resources' }
  ]

  return (
    <header className="text-black h-15">
      <div className="w-full flex items-center justify-between px-4">
        <div className="logo">
          <img src={logo} alt="Company Logo" className="" />
        </div>
        <nav>
          <ul className="flex space-x-8">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <NavLink to={path}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header