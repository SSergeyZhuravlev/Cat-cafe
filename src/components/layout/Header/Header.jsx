import { Logo } from '../../ui/Logo/Logo';
import { Nav } from '../Nav/Nav';
import './Header.css';

export const Header = ({link}) => {
    return (
        <header className="header">
            <Logo />
            <Nav link={link} />
        </header>
    )
}