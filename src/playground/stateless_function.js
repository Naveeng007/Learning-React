const Body=(props)=>{
    return (
        <div>
        <h2>I am from stateless function</h2>
        <p>my name is {props.name}</p>
        </div>
    )
}

<Body name="naveen"/>// works same as class based component