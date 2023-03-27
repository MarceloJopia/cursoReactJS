import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import logoBlanco from './assets/logo-blanco.png'
import { Link } from 'react-router-dom'

const Nabvar = () => {
    return (
        <nav className="navGridBase">
            <Link to='/'>
                <img src={logoBlanco} className='logoNavBar'></img>
            </Link>
            <ul className="navGridList">
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/categoria/video-juegos'>Video Juegos</Link>
                </li>
                <li>
                    <Link to='/categoria/consolas'>Consolas</Link>
                </li>
                <li>
                    <Link to='/categoria/otros'>Otros</Link>
                </li>
            </ul>
            <a href="#">
                <CartWidget productosEnCarrito={'0'}/>
            </a>
        </nav> 
    ) 
}

export default Nabvar
