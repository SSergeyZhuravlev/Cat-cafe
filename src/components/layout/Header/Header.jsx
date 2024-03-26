import { Logo } from '../../ui/Logo/Logo';
import { Nav } from '../Nav/Nav';
import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    )
}