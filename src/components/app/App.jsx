import { Header } from '../layout/Header/Header';
import { MainPage } from '../pages/MainPage';
import { Footer } from '../layout/Footer/Footer';
import './App.css';
import { BuyPage } from '../pages/BuyPage';

function App() {
  return (
    <>
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
