function expandUserByAge(age) {
    const user = { name: "abc", email: "abc@example.com" };
    return { ...user, age: age }
}

console.log(expandUserByAge(30));
// output: { name: 'abc', email: 'abc@example.com', age: 30 }

function expandArray(newUserId) {
    const userIds = [201, 202, 203];
    return [...userIds, newUserId];
}

console.log(expandArray(205));
// [ 201, 202, 203, 205 ]
