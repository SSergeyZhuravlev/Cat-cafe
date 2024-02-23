import { Logo } from '../ui/Logo';
import { Nav } from '../layout/Nav';

export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    )
}