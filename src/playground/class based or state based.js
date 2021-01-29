class Counter extends React.Component{
    constructor(props){
        super(props);
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
        this.reset=this.reset.bind(this)
        this.state={
            count:0,
            naam:"naveen"
        }

    }

    increment(){
        this.setState((prevState)=>{
           return {
            count:prevState.count+1,
            naam:"praveen"
           } 
        })

    }
    decrement(){
        this.setState((prevState)=>{
            return {
             count:prevState.count-1,
             naam:"Neha"
            } 
         })
    }
    reset(){
        this.setState(()=>{
            return {
             count:0
            } 
         })
    }
    render (){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <h3>name:{this.state.naam}</h3>
                <button onClick={this.increment}>+1</button>
                <button onClick={this.decrement}>-1</button>
                <button onClick={this.reset}>reset</button>

            </div>
        )
    }
}

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


// <Body fun={this.funny}/>

// </div>
// )
// }
// }

// const Body=(props)=>{
// return (
// <div>
// <h2>I am from stateless function</h2>
// <p>my name is {props.name}</p>
// <button onClick={(e)=>{//this is how we can pass data to upward direction and we can use props as downward
// props.fun("hi")
// }}>show hello</button>
// </div>
// )
// }