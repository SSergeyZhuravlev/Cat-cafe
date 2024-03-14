import { TITLE_SIZE, Title } from '../../ui/title/Title';
import { BuyForm } from '../BuyForm/BuyForm';
import './BuySection.css';

export const BuySection = ( { buyOptions } ) => {
    return (
        <section className='buy-section'>
            <Title size={`${TITLE_SIZE.big} buy-section__title`} priority='2'>Купить билет</Title>
            <BuyForm buyOptions={buyOptions} />
        </section>
    )
}