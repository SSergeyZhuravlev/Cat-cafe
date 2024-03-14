import { useEffect, useRef, useState } from 'react';
import { BuyFormAccordionItem } from './BuyFormAccordionItem';
import { Title, TITLE_SIZE } from '../../../ui/title/Title';
import './BuyFormAccordion.css'

export const BuyFormAccordion = ( { ticketOptions, onClick } ) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [height, setHeight] = useState(0);
    const [isChecked, setIsChecked] = useState(true);
    const ref = useRef(null);

    useEffect(() => {
        setHeight(ref.current && ref.current.offsetHeight);
    }, [height, activeIndex])

    return (
        <div>
            <div>
            <Title size={TITLE_SIZE.small} priority='3'>Тип билета</Title>
                <ul className='buy-form__options-list'>
                    {
                        ticketOptions.map((item, index) => {
                            return activeIndex === index ? (
                                <li key={item.id} className='buy-form__options-list__item'>
                                    <BuyFormAccordionItem
                                        price={item.price}
                                        title={item.title}
                                        description={item.description}
                                        isChecked={isChecked}
                                        onChange={() => setIsChecked(!isChecked)}
                                        height={height}
                                        isHtml
                                        ref={ref}
                                        onClick={onClick}
                                    />
                                </li>
                            )
                            : (
                                <li key={item.id} className='buy-form__options-list__item'>
                                    <BuyFormAccordionItem
                                        price={item.price}
                                        title={item.title}
                                        description={item.description}
                                        isChecked={!isChecked}
                                        onChange={() => {
                                            setActiveIndex(index);
                                            setIsChecked(isChecked);
                                        }}
                                        isHtml
                                        onClick={onClick}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}