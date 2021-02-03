class Car{
    constructor(){
        this.name="Naveen"
        this.fun=this.fun.bind(this)
        this.name=this.name.bind(this)

    }
    fun(){
        return (`hello my name is ${this.name}`)
    }
}

const mercedez=new Car()
const bmw=mercedez//as we transfering..for merecedez 'this' is different and for  bmw 'this' is different...so we have to bind them together
console.log(bmw.fun())//will give error as there is no data binding occur here
//we just need to bind functions

class Car{
    name="val"//using class-properties plugins of bable this automatically binds everything if we write like this
    fun(){
        return (`hello my name is ${this.name}`)
    }
}

const mercedez=new Car()
const bmw=mercedez//as we transfering..for merecedez 'this' is different and for  bmw 'this' is different...so we have to bind them together
console.log(bmw.fun())//will give error as there is no data binding occur here