import { Link, useLocation } from 'react-router-dom';

export const Nav = () => {
    const { pathname } = useLocation();

    return (
        <nav>
            {
                pathname === '/' ?
                <Link to='/buy-page' className='header__btn buy-btn'>Купить</Link>
                : <Link to='/' className='header__btn__back'>На главную</Link>
            }
        </nav>
    )
}