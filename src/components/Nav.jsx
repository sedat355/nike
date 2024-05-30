import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'


const Nav = () => {
  return (
    <header className='px-8 py-3 z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        {/* Logo */}
        <a href="#">
          <img src={headerLogo} alt="nike logo" width={130} height={30} />
        </a>

        {/* Main menu */}
        <ul className='hidden lg:flex flex-1 gap-4 justify-center items-center'>
          {navLinks.map(link => {
            return(
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="font-montserrat leading-normal text-lg text-slate-gray">
                    {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Sign */}
        <div className='flex space-x-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href="#">Sign in</a>
          <span>/</span>
          <a href="#">Explore now</a>
        </div>

        {/* Hamburger menu */}
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="hamburger menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav