enum StatusType {
    REJECTED = 0,
    PENDING = 1,
    FULLFILLED = 3,
}

function CheckResponse() {
    if (StatusType.FULLFILLED === 3) {
        console.log("Request is Fullfulled")
    }
}

CheckResponse();