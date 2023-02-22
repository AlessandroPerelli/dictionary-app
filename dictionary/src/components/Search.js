import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { css, Text, Input, Button } from '@nextui-org/react';
import './search.css'

export default function Search() {
    const [wordToSearch, setWordToSearch] = useState(null)

    function getWordToSearch(e) {
        setWordToSearch(e)
    }

    return (
    <div className='search'>
        <Text>Search for a word</Text>
        <Text>Enter the word you would like to discover the defnition of</Text>
        <Input placeholder='Find interesting words...' clearable='true' fullWidth='true' onChange={(e) => getWordToSearch(e.target.value)} />
        <Link to={"/result"} from={{ word: wordToSearch }}><Button>Search</Button></Link>
    </div>
    )
}
