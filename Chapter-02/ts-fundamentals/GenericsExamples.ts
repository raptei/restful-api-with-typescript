interface ResponseObjectType<T> {
    success: boolean;
    data: T;
    message: string;
}

interface Person {
    id: number;
    firstName: string;
    lastName: string;
}

interface Order {
    orderId: number;
    quantity: number;
}

const personResponse: ResponseObjectType<Person> = {
    success: true,
    data: {
        id: 12,
        firstName: "Steve",
        lastName: "Jobs"
    } as Person,
    message: "Fecthed Person Successfully",
}

console.log("personResponse", personResponse);
const orderResponse: ResponseObjectType<Order> = {
    success: true,
    data: {
        orderId: 12356,
        quantity: 5
    } as Order,
    message: "Fecthed Order Successfully"
}

console.log("orderResponse", orderResponse);