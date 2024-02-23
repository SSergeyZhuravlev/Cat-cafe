import { About } from '../blocks/about/About';
import { StarsList } from '../blocks/stars-list/StarsList';
import starList from '../../mocks/starList';

export const MainPage = () => {
    return (
        <>
            <About />
            <StarsList starList={starList} />
        </>
    )
}