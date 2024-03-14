import { useState } from 'react';
import { Title, TITLE_SIZE } from '../../ui/title/Title';
import { BuyFormAccordion } from './BuyFormAccordion/BuyFormAccordion';
import { BuyFormDuration } from './BuyFormDuration/BuyFormDuration';
import { Button } from "../../ui/Button/Button";
import './BuyForm.css';

export const BuyForm = ( { buyOptions, link } ) => {
    const { durationOptions, ticketOptions } = buyOptions;
    const [currentDuration, setCurrentDuration] = useState(durationOptions[0]);
    const [visitTypePrice, setVisitTypePrice] = useState(ticketOptions[0].price);

    return (
        <form className='buy-form'>
            <BuyFormDuration
                duration={durationOptions}
                onChange={(e) => {
                    setCurrentDuration(Number(e.target.value));
                    e.currentTarget.className
                }}
                currentDuration={currentDuration}
            />
            <BuyFormAccordion 
                ticketOptions={ticketOptions} 
                onClick={(e) => {
                    setVisitTypePrice(Number(e.target.value));
                }} 
            />
            <div className='buy-form__price'>
                <Title size={`${TITLE_SIZE.small} buy-form__price__title`} priority='3'>Цена</Title>
                <p className='buy-form__price__text'>
                    {`${visitTypePrice * currentDuration} руб.`}
                </p>
            </div>
            <Button className='buy-form__btn buy-btn' onClick={() => console.log('Купить')}>Купить билет</Button>
        </form>
    )
}