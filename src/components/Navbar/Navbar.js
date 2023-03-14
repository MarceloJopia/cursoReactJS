import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import logoBlanco from './assets/logo-blanco.png'

const Nabvar = () => {
    return (
        <nav className="navGridBase">
            <a href="#">
                <img src={logoBlanco} className='logoNavBar'></img>
            </a>
            <ul className="navGridList">
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Video Juegos</a>
                </li>
                <li>
                    <a href="#">Consolas</a>
                </li>
                <li>
                    <a href="#">Otros</a>
                </li>
            </ul>
            <a href="#">
                <CartWidget productosEnCarrito={'0'}/>
            </a>
        </nav> 
    ) 
}

export default Nabvar
