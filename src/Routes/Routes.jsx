import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home'
import Projects from '../Pages/Projects/Projects';

function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projetos' element={<Projects />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    )
}

export default Rotas;