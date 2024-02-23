import { Header } from '../layout/Header';
import { MainPage } from '../pages/MainPage';
import { Footer } from '../layout/Footer';
import './App.css';

function App() {
  return (
    <>
        <Header />
        <main className="page-wrapper__main">
            <MainPage />
        </main>
        <Footer />
    </>
  )
}

export default App
