import { NavLink } from 'react-router-dom';
import './Header.css';

function Header(): JSX.Element {
    return (
        <div className='Header'>
            <h1>Travelground: Best Vacations for you</h1>
            <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/lorem-ipsums">LoremIposums</NavLink>
            <NavLink to="/lorem-ipsums/add">Add LoremIposum</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
        </div>
    );
}

export default Header;