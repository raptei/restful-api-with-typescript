function user() {
    return { fullName: "abc", email: "abc@example.com" };
}

const { fullName, email } = user();
console.log(fullName, email);


function users() {
    const user1 = { name: "abc", email: "abc@example.com" };
    const user2 = { name: "xyz", email: "xyz@example.com" };
    return [user1, user2]
}

const [ user1, user2 ] = users();

console.log(user1);
console.log(user2);