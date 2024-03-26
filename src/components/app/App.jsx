import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from '../ui/ScrollToTop';
import { AppLayout } from '../layout/AppLayout';
import { MainPage } from '../pages/MainPage';
import { BuyPage } from '../pages/BuyPage';
import './App.css';

function App() {
  return (
    <>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<AppLayout />}>
              <Route index element={<MainPage />} />
              <Route path='buy-page' element={<BuyPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
