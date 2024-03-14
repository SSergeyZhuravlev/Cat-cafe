import { Button } from "../../ui/Button/Button";

export const Nav = ({link}) => {
    return (
        <nav>
            <Button link={link} className='header__btn buy-btn' onClick={() => console.log('Купить')}>{
                link ? 'На главную' : 'Купить билет'
            }</Button>
        </nav>
    )
}