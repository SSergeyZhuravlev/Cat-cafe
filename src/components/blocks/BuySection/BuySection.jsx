import { TITLE_SIZE, Title } from '../../ui/title/Title';
import { BuyForm } from '../BuyForm/BuyForm';

export const BuySection = ( { buyOptions } ) => {
    return (
        <section className='buy-section'>
            <Title size={TITLE_SIZE.big} priority='2'>Купить билет</Title>
            <BuyForm buyOptions={buyOptions} />
        </section>
    )
}