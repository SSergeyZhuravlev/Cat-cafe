import { forwardRef } from 'react';

export const BuyFormAccordionItem = forwardRef(( { price, title, description, isChecked, onClick, onChange, height, isHtml }, ref ) => {
    return (
        <>
            <label className='buy-form__options-list__item__title'>
                <input type='radio' className='' value={price} name='buy-form-radio' checked={isChecked}
                    onClick={onClick}
                    onChange={onChange} /> 
                {title}
            </label>
            <div 
                className='buy-form__options-list__item__descr__wrapper' 
                style={
                    height ? {height: height} : {height: 0}
                }>
                {
                    isHtml ? <p ref={ref ? ref : null} className='buy-form__options-list__item__descr' dangerouslySetInnerHTML={{__html: description}}></p>
                    : <p ref={ref ? ref : null} className='buy-form__options-list__item__descr'>{description}</p>
                }
            </div>
        </>
    )
})
