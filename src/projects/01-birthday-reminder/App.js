import './App.css'
import List from './List'
import data from './data'
import React from 'react'

const App = () => {
    const [people, setPeople] = React.useState(data)
    return <main>
        <section className="container">
            <h3>{people.length} birth days today</h3>
            <List people={people} />
            <button onClick={() => setPeople([])}>clear all</button>
        </section>
    </main>
}

export default App;