import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

const App = () => {
    return (
        <div className='hello'>
            Hello World!
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
