// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email, role, age, gender){
        this.name = name
        this.id = id;
        this.email = email;
        this.role = role;
        this.age = age;
        this.gender = gender;
    }

    getName(){
        return this.name
    }
    
    getId(){
        return this.id
    }

    getEmail(){
       return this.email
    }     
    getRole(){
        return "Employee"
    }

    getAge(){
        return this.age
     }

     getGender(){
        return this.gender
     } 

     getProfile(data){
 
        const gender = () => {    
            if (this.gender === "Male") {
                return "m"
            }
            else {
                return "w"
            }
            }
        
        const age = () => {
            if (this.age === "18 - 25 years old") {
                return "01"
            }
            else if (this.age === "26 - 35 years old") {
                return "02"
            }
            else if (this.age === "36 - 50 years old") {
                return "03"
            }
            else {
                return "04"
            }
        }
    
        return `../assets/${this.role.toLowerCase()}${gender(data)}${age(data)}.jpg`;
    }

    }



module.exports = Employee;
