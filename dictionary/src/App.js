import { useEffect, useState } from 'react'
import Axios from 'axios'

function App() {
  const [data, setData] = useState(null)

  Axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/water").then((res) => {
    setData(res.data[0].meanings[0].definitions[0].definition)
  })

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

export default App;
