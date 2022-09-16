function Person(person_name,person_age,person_address,person_phone){
    this.name=person_name,
    this.age=person_age,
    this.address=person_address,
    this.phone=person_phone,
    this.all=function(){
        console.log('Hi'+ ' '+ this.name)
    }
}

const person1 = new Person('Rajesh', 25, 'Dhaka', 0171415)
person1.gender = 'male'
person1.greet=function(){
    console.log('Hello bangladesh');
}

console.log(person1,person1.greet(),person1.all())