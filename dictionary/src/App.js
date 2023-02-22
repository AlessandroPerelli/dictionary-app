import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Axios from 'axios'
import { NextUIProvider } from '@nextui-org/react';
import Search from './components/Search';
import Result from './components/Result';

function App() {
  const [data, setData] = useState(null)

  Axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/water").then((res) => {
    setData(res.data[0].meanings[0].definitions[0].definition)
  })

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
