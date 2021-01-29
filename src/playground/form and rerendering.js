console.log('from source')

var Name="Naveen"
const obj={
    name:"naveen",
    title:["naveen","praveen","neha"],
    location:"New Delhi",
}
var input_val
const push_in=(e)=>{
    e.preventDefault()
    const val=e.target.elements.option.value;
    obj.title.push(val)
    e.target.elements.option.value=''
    console.log(val)
    input_val=val
    appRender()
}
var visiblity=true

const setVisiblity=()=>{
    visiblity=!visiblity
    appRender()
}

const appRender=()=>{
    var template=(
        <div id="root">
           <form onSubmit={push_in}>
                <input type="text" name="option"/>
                <button >Submit</button>
           </form>
           <h2>{input_val}</h2>
           <button onClick={setVisiblity}>{visiblity?"Hide Details":"Show Details"}</button>
           {visiblity&&(
               <div>
                    <p>These details were Hidden</p>
               </div>
           )}
        </div>
        );
        var approot=document.getElementById('app')
        ReactDOM.render(template,approot)
}

appRender()
