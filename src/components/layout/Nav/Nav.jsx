import { Button } from "../../ui/Button/Button"

export const Nav = () => {
    return (
        <nav>
            <Button className='header__btn buy-btn' onClick={() => console.log('Купить')}>Купить билет</Button>
        </nav>
    )
}