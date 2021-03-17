import React from 'react'

const SearchBar:React.FC<Props> = ({target, label}) => {
    return (
        <div>
            <label htmlFor={target}>{label}</label>
            <input id={target} type="text" />
        </div>
    )
}

interface Props{
    target: string;
    label:string;
}

export default SearchBar
