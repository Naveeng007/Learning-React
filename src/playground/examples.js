

/****************************** */
console.log(obj.putData())
function getLocation(location){
    if(location)
    return <ul>{obj.putData()}</ul>
}
var count=0;
const addOne=()=>{
    count++;
    appRender()//re rendering to view updated count
}
const count_val=()=>{
    return count;
}



const appRender=()=>{
    var template=(
        <div id="root">
            <h1>Hello {obj.name?obj.name:"Anonymous"} from React source</h1>
            <h2>{obj.name=="navdeen"&&obj.name}</h2>
            <button id="button-1" className="class-button-1" onClick={addOne}>+{count}</button>
        </div>
        );
        var approot=document.getElementById('app')
        ReactDOM.render(template,approot)
}

appRender()

/********************************* */

/************* */

const push_in=(e)=>{
    e.preventDefault()
    const val=e.target.elements.option.value;
    obj.title.push(val)
    e.target.elements.option.value=''
    console.log(val)
}

const appRender=()=>{
    var template=(
        <div id="root">
           <form onSubmit={push_in}>
                <input type="text" name="option"/>
                <button >Submit</button>
           </form>
        </div>
        );
        var approot=document.getElementById('app')
        ReactDOM.render(template,approot)
}

appRender()

/********************************* */
