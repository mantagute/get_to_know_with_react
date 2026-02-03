import ChefClaudeLogo from '../assets/chef-claude-icon.png'
import './Header.css'

export default function Header() {
    return (
        <header className='header-container'>
            <img className="chef-claude-icon" src={ChefClaudeLogo} />
            <h1>Chef Claude</h1>
        </header>
    )
}