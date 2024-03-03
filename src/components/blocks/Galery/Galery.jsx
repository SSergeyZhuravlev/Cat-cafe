import { GalarySlider } from "../../ui/GalerySlider/GalarySlider"
import { Title, TITLE_SIZE } from "../../ui/title/Title"

export const Galery = () => {
    return (
        <>
            <Title size={TITLE_SIZE.big} priority='2'>Галерея нашего кафе</Title>
            <GalarySlider />
        </>
    )
}