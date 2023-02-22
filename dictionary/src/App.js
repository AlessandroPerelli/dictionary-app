import { Routes, Route } from "react-router-dom"
import { NextUIProvider } from '@nextui-org/react';
import Search from './components/Search';
import Result from './components/Result';

function App() {
  return (
    <NextUIProvider>
      <Routes>
        <Route path='/' element={<Search/>} />
        <Route path='/result' element={<Result/>} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
