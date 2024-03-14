import { Title, TITLE_SIZE } from '../../../ui/title/Title';
import './BuyFormDuration.css';

export const BuyFormDuration = ( { duration, onChange, currentDuration } ) => {
    return (
        <div className='buy-form__duration'>
            <Title size={`${TITLE_SIZE.small} buy-form__duration__title`} priority='2'>Продолжительность (часов)</Title>
            <ul className='buy-form__duration-list'>
                {
                    duration.map(durationOption => {
                        const isChecked = durationOption === currentDuration;

                        return (
                            <li className='buy-form__duration-list__item' key={`duration${durationOption}`}>
                                <label className={isChecked ? 'buy-form__duration-label buy-form__duration-label--active' : 'buy-form__duration-label'}>
                                    <input className='buy-form__visually-hidden-input' type="radio" name='duration' value={durationOption} checked={isChecked} onChange={onChange} />
                                    <span>{durationOption}</span>
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}