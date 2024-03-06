import { Gallery } from '../blocks/Gallery/Gallery';
import { BuySection } from '../blocks/BuySection/BuySection';
import { gallery } from '../../mocks/gallery';
import { buyOptions } from '../../mocks/buyOptions';

export const BuyPage = () => {
    return (
        <>
            <Gallery gallery={gallery} />
            <BuySection buyOptions={buyOptions} />
        </>
    )
}