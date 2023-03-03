import {CartIcon} from './icons'
import {useSelector} from 'react-redux'

const Navbar = () => {

const NavBar = useSelector((state) => state.navbar)

    return(
        <nav>
            <div className='div-center'>
                <h3>Redux Toolkit</h3>
            </div>
            <div className='nav-container'>
                <CartIcon />
                <div className='amount-container'>
                <p className='total-amount'>{amount}</p>
                 </div>
            </div>
        </nav>
     );
};

export default Navbar