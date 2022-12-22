import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = (await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/beach")).json()
      setData(result)
      console.log(result[2])
    }
    fetchData()
  }, [])

  return (
    <div>
    </div>
  );
}

export default App;
