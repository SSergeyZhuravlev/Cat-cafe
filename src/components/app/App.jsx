import { Header } from '../layout/Header/Header';
import { MainPage } from '../pages/MainPage';
import { Footer } from '../layout/Footer/Footer';
import { BuyPage } from '../pages/BuyPage';
import './App.css';

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
