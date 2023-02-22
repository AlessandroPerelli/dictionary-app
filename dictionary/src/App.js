import { useEffect, useState } from 'react'
import Axios from 'axios'
import { NextUIProvider } from '@nextui-org/react';
import Search from './components/Search';

function App() {
  const [data, setData] = useState(null)

  Axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/water").then((res) => {
    setData(res.data[0].meanings[0].definitions[0].definition)
  })

  return (
    <NextUIProvider>
      <Search />
    </NextUIProvider>
  );
}

export default App;
