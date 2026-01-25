import ReactLogo from '../assets/react.svg';
import './NavBar.css';

function NavBar() {
    return (
        <header>
            <nav>
                <img src={ReactLogo} />
                <span>ReactFacts</span>
            </nav>
        </header>
    );
}

export default NavBar