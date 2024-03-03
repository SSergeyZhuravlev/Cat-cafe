import './Logo.css';

export const Logo = () => {
    return (
        <div className="logo">
            <img className="logo__image" src="/src/assets/cat-cafe-logo.svg" alt="Логотип кафе" />
            <b className="logo__text">КОТОКАФЕ</b>
        </div>
    )
}