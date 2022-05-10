class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    // Method
    fullName() {
        return this.name + " " + this.email;
    }
}

const user = new User("Steve", "Steve@example.com");

console.log(user.name);

console.log(user.email);

console.log(user.fullName());



class Person extends User {
    constructor(name, email, age) {
        super(name, email);
        this.age = age;
    }

    get personDetails() {
        return this.name + " " + this.email + " " + this.age;
    }
}

const person = new Person("Steve", "Steve@example.com", 29);

console.log("person", person);