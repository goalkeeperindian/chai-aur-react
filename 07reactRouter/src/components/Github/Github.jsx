import React, { useEffect, useState } from 'react'

function Github() {

    const [data, SetData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/goalkeeperindian')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                SetData(data)
            })
    }, [])


    return (
        <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>Github Followers: {data.followers}</div>
    )
}

export default Github