import GlobeImage from '../assets/globe.png'
import './Header.css'

function Header() {
    return (
        <header>
            <img src={GlobeImage} />
            <p>my travel journal.</p>
        </header>
    );
}

export default Header