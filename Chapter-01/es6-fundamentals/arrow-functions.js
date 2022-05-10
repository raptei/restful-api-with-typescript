
const wish = () => "Happy BirthDay";
console.log(wish());

const wish1 = (name) => `Happy BirthDay ${name}`;
console.log(wish1("Steve"));


const wish2 = (name, age) => `Happy ${age}th BirthDay ${name}`;
console.log(wish2("Steve", 29));

const users = () => {
    const user1 = { name: "abc", email: "abc@example.com" };
    const user2 = { name: "xyz", email: "xyz@example.com" };
    return [user1, user2]
}

console.log(users());

