// Write a function that returns a status message using a Status enum.
enum Status{
    Pending,
    Error,
    Success
}
function getStatusMsg(status:Status):string{
    if(status===Status.Success){
       return `Successfull`;
    }
    else if(status===Status.Error){
        return `Error`;
    }
    else{
        return `Pending`;
    }
}
console.log(getStatusMsg(Status.Error));//Error

// function getStatusMsg(status: Status): string {
//     switch (status) {
//         case Status.Success:
//             return "Operation completed successfully";
//         case Status.Error:
//             return "There was an error processing your request";
//         case Status.Pending:
//             return "Your request is still pending";
//         default:
//             return "Unknown status";
//     }
// }
