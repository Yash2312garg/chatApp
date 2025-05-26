import React, { useState } from 'react'

const FirstProblem = ({Fruits: []}) => {

    const Fruits = [
        "cherry",
        "Cranberry",
        "Date",
        "Dragonfruit",
        "Elderburry",
        "Fig",
        "Grape",
        "Grapefruit"
    ]
    const [fruits, setFruits] = useState(Fruits)
    const [search, setSearch] = useState("")


    const handleSearch = (e) => {
        const query = e.target.value;
        setSearch(query)
    }

    const fruitsFiltered = fruits.filter((fruit)=>(fruit.includes(search)))
    return (
        <div>
            <input type="text" placeholder='search text ....' value={search} onChange={handleSearch} />
            {fruitsFiltered.map((fruit, idx) => (
                <p id={idx}>{fruit}</p>
            ))}
        </div>
    )
}

export default FirstProblem
