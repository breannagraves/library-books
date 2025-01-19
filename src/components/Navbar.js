import { NavLink } from 'react-router-dom'
export const Navbar = () => {
    
    const navLinkStyles = ({ isActive }) => {
        return{
            fontWeight: isActive? 'bold' : 'normal',
            textDecoration: isActive? 'none' : 'none'
        }
    }
    
    return(
        <nav>
            <NavLink style={navLinkStyles} to='/'>
                Home 
            </NavLink>
            <NavLink style={navLinkStyles} to='/books/avail'>
                Available Books 
            </NavLink>
            <NavLink style={navLinkStyles} to='/books/unavail'>
                Checked-Out Books 
            </NavLink>
            {/* <NavLink style={navLinkStyles} to='/books/unavail/check-in'>
                Return a Book
            </NavLink>
            <NavLink style={navLinkStyles} to='/books/avail/check-out'>
                Check-Out a Book
            </NavLink> */}
            
        </nav>
    )
}