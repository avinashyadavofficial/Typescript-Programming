// Write a function that returns a status message using a Status enum.
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Error"] = 1] = "Error";
    Status[Status["Success"] = 2] = "Success";
})(Status || (Status = {}));
function getStatusMsg(status) {
    if (status === Status.Success) {
        return "Successfull";
    }
    else if (status === Status.Error) {
        return "Error";
    }
    else {
        return "Pending";
    }
}
console.log(getStatusMsg(Status.Error));
