import React, { useState } from 'react'
import Axios from 'axios'
import { useLocation } from 'react-router-dom'

export default function Result(props) {
    const location = useLocation()
    const { word } = location.word
    const [data, setData] = useState(null)

    Axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/".concat("", word)).then((res) => {
        setData(res.data[0].meanings[0].definitions[0].definition)
    })

    console.log(word)

    return (
    <div>
        {data}
    </div>
    )
}
