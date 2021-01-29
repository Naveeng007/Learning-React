class Option extends React.Component{
    
    render(){
        var value="df";
        return (
        <div>
            <Header val={value}/>
            <Title kal="3434"/>
            / / jo call krega usi ki property this.props me ayega ..simple function jaisa sath me props as parameter jaega
        </div>
            
        )
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <p>Hello from header Component</p>
                <p>{this.props.val}</p>
                <Title val='234' />
            </div>
           
        )
    }
}
class Title extends React.Component{
    constructor(props){
        super(props);
        this.givealert=this.givealert.bind(this)//data binding else transfering to another object or variable this will not be used for this method
    }
     givealert () {

        console.log(this.props)
    }
    render(){
        return (
            <div>
                <p>Hello from Title Component</p>
                <button onClick={this.givealert}>Clik Here</button>
            </div>
            
        )
    }
}



const appRender=()=>{
    // var template=(
    //     <div id="root">
    //     <Header />
    //     </div>
    //     );
        var approot=document.getElementById('app')
        ReactDOM.render(<Option/>,approot)
}

appRender()
