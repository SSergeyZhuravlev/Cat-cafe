import { useState } from 'react';
import { Title, TITLE_SIZE } from '../../ui/title/Title';
import { BuyFormAccordion } from './BuyFormAccordion/BuyFormAccordion';
import { BuyFormDuration } from './BuyFormDuration/BuyFormDuration';
import './BuyForm.css';

export const BuyForm = ( { buyOptions } ) => {
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
            <div>
                <Title size={TITLE_SIZE.small} priority='3'>Цена</Title>
                <p>
                    {`${visitTypePrice * currentDuration}`}
                </p>
            </div>
        </form>
    )
}