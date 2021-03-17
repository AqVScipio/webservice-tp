import React from 'react'
import { useState } from 'react'
import Gender from './Gender'
import SearchBar from './SearchBar'

const Search: React.FC<Props> = ({mediaType}) => {

    return (
        <div className="container">
            <h3>Search for a {mediaType}</h3>

            <SearchBar target='MediaTitle' label='Title :' />
            <SearchBar target='MediaDirector' label='Director :' />

            <Gender />
        </div>
    )
}

interface Props{
    mediaType?: string;
}

export default Search
