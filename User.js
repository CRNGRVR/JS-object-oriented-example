export default class User{

    #surn   //Недоступен в наследниках  (Называется приватный)
    _gen    //Доступен в наследниках    (Называется защищённый)

    constructor(name){
        this.name = name
        this.#surn = "fff"
        this._gen = 1
    }

    setName(name){
        this.name = name
    }

    getName(){
        return this.name
    }


    setAge(age){
        this.age = age
    }

    getAge(){
        return this.age
    }


    getPr(){
        console.log(this.#surn)
        console.log(this._gen)
    }
}