import { forwardRef } from 'react';
import './Button.css';

export const Button = forwardRef(( { children, className, onClick, link }, ref ) => {
    return (
        link ? 
        (<a href={link} className={className} ref={ref}>{children}</a>)
        : ( <button className={className} onClick={onClick} ref={ref}>{children}</button> )
    )
});
