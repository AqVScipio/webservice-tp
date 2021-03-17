import React from 'react'
import Select from 'react-select'

const Gender: React.FC<Props> = () => {

    const fetchGenders = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=6f37a27ccec1e836ed19a476c66b2213&language=en-US`)
        const data = await res.json()
        console.log(data);
    }

    return (
        <button onClick={() => fetchGenders()}>TEST</button>
    )
}

interface Props{

}

export default Gender
