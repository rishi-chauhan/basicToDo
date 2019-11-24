import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ToDo extends React.Component{
    render(){
        return(
            <div>Hello World</div>
        )
    }
}

ReactDOM.render(<ToDo />, document.getElementById('app'))
