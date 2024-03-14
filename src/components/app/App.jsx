import { Header } from '../layout/Header/Header';
import { MainPage } from '../pages/MainPage';
import { Footer } from '../layout/Footer/Footer';
import { BuyPage } from '../pages/BuyPage';
import './App.css';

const link = '/';

function App() {
  return (
    <>
        {/* <Header link={link} /> */}
        <Header />
        <main className="page-wrapper__main">
            {/* <MainPage /> */}
            <BuyPage />
        </main>
        <Footer />
    </>
  )
}

export default App
