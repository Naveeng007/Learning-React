// import React from 'react'
import ReactDOM from 'react-dom'
const React=require('react')
import Counter from './components/Counter'






class Visiblity extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visible:true
        }
        this.toggle=this.toggle.bind(this)
    }
    toggle(){
        this.setState((prevState)=>{
       return {
                visible: !prevState.visible
             }
        
    })
    }
    render(){
        return (
            <div>
            <button 
                onClick={this.toggle}
            >
            {this.state.visible?'show':'hide'}
            </button>
            {this.state.visible&&(
                <p>Hello buffallo</p>
            )}
            <Counter/>
            
            </div>
        )

    }
}

ReactDOM.render(<Visiblity/>,document.getElementById('app'))
