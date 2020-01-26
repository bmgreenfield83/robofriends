import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

const App = () => {
    const [ state, setState ] = useState({
        robots: [],
        searchField: ''
    })

    const getRobots = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const payload = await res.json()
        setState(prevState => ({ ...prevState, robots: payload }) )
    }

    useEffect(() => {
        getRobots()
    }, [])

    const searchChange = text => {
        setState(prevState => ({
            ...prevState,
            searchField: text
        }))
    }

    const filteredRobots = state.robots.filter(robot => robot.name.toLowerCase().includes(state.searchField.toLowerCase()))

    return (
        <div className='tc'>
            <h1 className="f2">RoboFriends</h1>
            <SearchBox searchChange={searchChange} />
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
        </div>
    )
}

export default App
