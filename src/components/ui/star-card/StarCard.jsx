import { Title, TITLE_SIZE } from '../title/Title';
import './StarCard.css';

export const StarCard = ( { name, about, image, feature } ) => {
    return (
        <article className="star-card">
            { feature && ( <span className={`star-card__icon--${feature}`}>
                    {feature === 'soft' ? 'Ласковый' : feature}
                </span> ) }
            <img className="star-card__image" src={image} alt={name} />
            <Title size={TITLE_SIZE.small} priority='3' />
            <p className="star-card__text" dangerouslySetInnerHTML={{ __html: about }}></p>
        </article>
    )
}