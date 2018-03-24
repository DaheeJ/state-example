import React from 'react'



export default class extends React.Component{
    render(){

        const sing1 = { name: "ayumi", country: "Japan" }
        const sing2 = { name: "Taeyang", country: "S. Korea" }
        const sing3 = { name: "Rouse", country: "S. Korea" }

        return(
            <div>
                <h1>Props Example 2</h1>    
                <hr/>

                <ChildComp singer={ sing1 } />
                <ChildComp singer={ sing2 } />
                <ChildComp singer={ sing3 } />

            </div>
        )
    }
}

// ================================================================

class ChildComp extends React.Component{
    render(){
        return(
            <div>
                <h3>Hello from Child Component</h3>
                <p>Name: { this.props.singer.name }</p>
                <p>Country: { this.props.singer.country } </p>
                <hr/>
            </div>
        )
    }
}