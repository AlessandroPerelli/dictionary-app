import React from 'react'
import { css, Text, Input } from '@nextui-org/react';
import './search.css'

export default function Search() {
  return (
    <div className='search'>
        <Text>Search for a word</Text>
        <Text>Enter the word you would like to discover the defnition of</Text>
        <Input placeholder='Find interesting words...' clearable='true' fullWidth='true' />
    </div>
  )
}
