import User from "./User.js"

export default class Employee extends User{

    constructor(name, age, salary){
        //  Конструктор класса User
        super(name)
        this.age = age
        this.salary = salary
    }

    setSalary(salary){
        this.salary = salary
    }

    getSalary(){
        return this.salary
    }
    
    
    setAge(age){
        if(18 < age && 35 > age){
            this.age = age
        }
        else{
            throw new Error("incorect age")
        }
    }
}