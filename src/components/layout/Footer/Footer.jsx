import { Logo } from '../../ui/Logo/Logo';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <Logo />
            <p className="footer__created">Создано 2024</p>
        </footer>
    )
}