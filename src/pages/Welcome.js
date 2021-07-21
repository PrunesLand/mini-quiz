import React from 'react'
import { useSelector } from 'react-redux'
import { selectCount } from '../features/counter/counter'

const Welcome = () => {

    const count = useSelector(selectCount);

    return (
        <div>
            <h1>This is the welcome sceen</h1>
            <h2>Initial score test is {count}</h2>
        </div>
    )
}

export default Welcome
