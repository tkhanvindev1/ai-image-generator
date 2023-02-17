import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as lay from './components'
import * as pages from './components'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <lay.NavigationBar/>
      <Routes>
      <Route path="/" element={<pages.Home/>}/>
      <Route path="/gallery" element={<pages.Gallery/>}/>
      <Route path="/about" element={<pages.About/>}/>
      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;