import { Link } from 'react-router-dom';
import { Title, TITLE_SIZE } from '../../ui/title/Title';
import { StarCard } from '../../ui/star-card/StarCard';
import './StarsList.css';

export const StarsList = ( { starList } ) => {
    return (
        <section className="star-list">
            <Title size={TITLE_SIZE.big} priority='2'>Наши звезды</Title>
            <ul className="star-list__list">
                {
                    starList.map(( { id, name, about, image, feature } ) => {
                        return (
                            <li key={id} className="star-list__item">
                                <StarCard name={name} about={about} image={image} feature={feature} />
                            </li>
                        )
                    })
                }
            </ul>
            <Link to='/buy-page' className='star-list__btn buy-btn'>Купить билет</Link>
        </section>
    )
}