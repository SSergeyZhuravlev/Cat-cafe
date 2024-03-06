import { GallerySlider } from '../../ui/GallerySlider/GallerySlider';
import { Title, TITLE_SIZE } from '../../ui/title/Title';
import './Gallery.css';

export const Gallery = ( { gallery } ) => {
    return (
        <section className='gallery'>
            <Title size={`${TITLE_SIZE.big} gallery__title`} priority='2'>Галерея нашего кафе</Title>
            <GallerySlider gallery={gallery} />
        </section>
    )
}