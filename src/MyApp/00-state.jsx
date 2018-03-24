import React from 'react'

export default class extends React.Component{
    state = { name: '?????' }

    render(){

        const exe1 = () => {
            console.log("Button Cliked")
            this.setState({ name: 'Ayumi Hamasaki' })   
            
            setTimeout(() => { this.setState({ name: "?????" }) }, 2000)
        }

        return(
            <div>
                <h1>Change state 1</h1>

                <button onClick={ exe1 } >Click to know</button>
                <p>My fav singer is: </p>
                <p> { this.state.name } </p>
            </div>
        )
    }
}