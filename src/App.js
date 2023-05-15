import React from 'react';
import { BrowserRouter , Routes ,Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
// import NotFound from './pages/NotFound';
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/WorldCountries/" element={<Home />} />
    <Route path='/WorldCountries/about' element={<About />} />
    {/* <Route path="*" element={<NotFound />} />  */}
     {/* ou bien utiliser cette route pour dire que cette page n'éxiste pas  */}
    <Route path='/WorldCountries/*' element={<Home />} />
       
   </Routes>
   </BrowserRouter>
   </>
  );
};

export default App;