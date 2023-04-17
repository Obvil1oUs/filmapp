import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NaviBar from './Components/NaviBar/NaviBar';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Popular from './Pages/Popular/Popular';
import Random from './Pages/Random/Random'
import { Container } from 'react-bootstrap';
import MoviePage from './Pages/MoviePage/MoviePage';

function App() {
    return (
        <BrowserRouter>
            <Container>
                <NaviBar />
                <div className='app'>
                    <Routes>
                        <Route path='/' element={<Popular />} />
                        <Route path='/movies' element={<Movies />} />
                        <Route path='/series' element={<Series />} />
                        <Route path='/random' element={<Random />} />
                        <Route path='/movie' element={<MoviePage />} />
                    </Routes>
                </div>
            </Container>
        </BrowserRouter>
    );
}

export default App;