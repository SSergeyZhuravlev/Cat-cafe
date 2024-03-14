import { forwardRef } from 'react';

export const BuyFormAccordionItem = forwardRef(( { price, title, description, isChecked, onClick, onChange, height, isHtml }, ref ) => {
    return (
        <>
            <label className='buy-form__options-list__item__title'>
                <input type='radio' className='buy-form__options-list__item__radio' value={price} name='buy-form-radio' checked={isChecked}
                    onClick={onClick}
                    onChange={onChange} /> 
                <span className='custom-radio'></span>
                <span className='buy-form__options-list__item__text'>{title}</span>
            </label>
            <div 
                className='buy-form__options-list__item__descr__wrapper' 
                style={
                    height ? {height: height} : {height: 0}
                }>
                {
                    isHtml ? <div ref={ref ? ref : null} className='buy-form__options-list__item__descr' dangerouslySetInnerHTML={{__html: description}}></div>
                    : <div ref={ref ? ref : null} className='buy-form__options-list__item__descr'>{description}</div>
                }
            </div>
        </>
    )
})
