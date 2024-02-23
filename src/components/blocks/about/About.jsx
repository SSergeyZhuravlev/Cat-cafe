import { Title, TITLE_SIZE } from '../../ui/title/Title';
import './About.css';

export const About = () => {
    return (
        <section className='about'>
            <div className='about__wrapper'>
                <Title size={TITLE_SIZE.big} priority='1'>Первое в России котокафе</Title>
                <p className='about__text'>Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый из них ищет новый дом. Животных можно гладить, фотографировать, играть с ними.</p>
                <p className='about__work-time'>Рабочее время с 8:00 до 23:00</p>
                <p className='about__address'>Санкт-Петербург,  набережная реки Карповки, дом 5, литера П</p>
            </div>
        </section>
    )
}