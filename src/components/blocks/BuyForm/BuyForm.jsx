import { useRef, useState } from 'react';
import './BuyForm.css';

export const BuyForm = ( { buyOptions } ) => {
    const duration = buyOptions.durationOptions;
    const [time, setTime] = useState(duration[0]);

    return (
        <form className='buy-form'>
            {
                duration.map(option => {
                    return (
                        <label className='buy-form__duration' key={`duration${option}`} onChange={(e) => {
                            setTime(Number(e.target.value));
                        }}>
                            <input className='buy-form__visually-hidden-input' type="radio" name='duration' value={option} />
                            <span>{option}</span>
                        </label>
                    )
                })
            }

            <div>
                {`Стоимость получилась ${time * 1000}`}
            </div>
        </form>
    )
}