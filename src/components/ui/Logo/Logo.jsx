import catCafeLogo from '/src/assets/cat-cafe-logo.svg';
import './Logo.css';

export const Logo = () => {
    return (
        <div className="logo">
            <img className="logo__image" src={catCafeLogo} alt="Логотип кафе" />
            <b className="logo__text">КОТОКАФЕ</b>
        </div>
    )
}