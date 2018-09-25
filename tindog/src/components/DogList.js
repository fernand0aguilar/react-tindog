import React from 'react'

const DogList = () => {
    return (
    <ul className="dogs">
        {
            dogs.map(dog => (
                <li key={dog.id}>{dog.name}</li>
            ))
        }
    </ul>
    )
}

export default DogList;