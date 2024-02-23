import './Title.css';

export const TITLE_SIZE = {
    big: 'big',
    small: 'small',
    default: '',
}

export const Title = ( { children, size, priority } ) => {
    const CustomTitleTag = `h${priority}`;

    return <CustomTitleTag className={`title${size ? ` title_${size}` : ''}`}>{children}</CustomTitleTag>
}