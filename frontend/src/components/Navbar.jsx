import { NavLink } from 'react-router-dom'
import { MdHomeFilled, MdCategory, MdShop2 } from 'react-icons/md'

const Navbar = ({containerStyles}) => {
    return (
        <nav className={`${containerStyles}`}>   
            <NavLink to='/' className={({isActive}) => isActive ? 'active_link' : ''}>
                <div className='flexCenter gap-x-1'>
                    <MdHomeFilled/>
                    Home
                </div>
            </NavLink>

            <NavLink to='/servicios' className={({isActive}) => isActive ? 'active_link' : ''}>
                <div className='flexCenter gap-x-1'>
                    <MdCategory/>
                    Servicios
                </div>
            </NavLink>

            <NavLink to='/productos' className={({isActive}) => isActive ? 'active_link' : ''}>
                <div className='flexCenter gap-x-1'>
                    <MdShop2/>
                    Productos
                </div>
            </NavLink>
        </nav>
    )
}

export default Navbar
