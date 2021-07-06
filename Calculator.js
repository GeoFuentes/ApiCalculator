//Type of operations to perform
const TypeOperation = {
    Add : "add",
    Sub : "sub",
    Mul : "mul",
    Div : "div"
};

//type of errors
const ErrorType = {
    NotDivisible : "Not divisible",
    NotNumber : "Not Number",
    IsEmpty : "Is Empty",
    NotValidOperation : "Not valid operation",
    NotRegistred : "Not Registred"
};

//numerical variables
var number1;
var number2;

/**
    This is the main function,
    in which the numerical values to be operated and also the type
    of operation to be performed are passed.
 */

function Operate(type, n1, n2) {
    var NumberOneCorrect = true;
    var NumberTwoCorrect = true;
    var response = "";
    number1 = n1;
    number2 = n2;

    if (number1 == "" || number1 == undefined || number1 == null)
    {
        NumberOneCorrect = false;
    }

    if (number2 == "" || number2 == undefined || number2 == null)
    {
        NumberTwoCorrect = false;
    }

    if (NumberOneCorrect && NumberTwoCorrect) {
        if (!isNaN(number1) && !isNaN(number2)) {
            switch (type) {
                case TypeOperation.Add:
                    response = Addition();
                    break;
                case TypeOperation.Sub:
                    response = Subtraction();
                    break;
                case TypeOperation.Mul:
                    response = Multiplication();
                    break;
                case TypeOperation.Div:
                    response = DividedBy();
                    break;
                default:
                    response = ErrorOperation(ErrorType.NotValidOperation);
                    break;
            }

            return response;
        }
        else {
            return ErrorOperation(ErrorType.NotNumber);
        }
    }
    else {
        return ErrorOperation(ErrorType.IsEmpty);
    }

}

function Addition() {
    try {
        return (parseFloat(number1) + parseFloat(number2));
    } catch (e) {
        console.log(e);
        ErrorOperation(ErrorType.NotRegistred);
    }
}

function Subtraction() {
    try {
        return (parseFloat(number1) - parseFloat(number2));
    } catch (e) {
        console.log(e);
        ErrorOperation(ErrorType.NotRegistred);
    }
}

function Multiplication() {
    try {
        return (parseFloat(number1) * parseFloat(number2))
    } catch (e) {
        console.log(e);
        ErrorOperation(ErrorType.NotRegistred);
    }
}

function DividedBy()
{

    if (number2 == 0 || number2 == "0")
    {
        return ErrorOperation(ErrorType.NotDivisible);    
    }
    else
    {
        try {
            return (parseFloat(number1) / parseFloat(number2));
        } catch (e) {
            console.log(e);
            ErrorOperation(ErrorType.NotRegistred);
        }
    }

}

function ErrorOperation(type) {
    var response;

    switch (type) {
        case ErrorType.NotDivisible:
            response = { typeError: type, ErrorMessage: "Cannot be divided by 0" };
            break;
        case ErrorType.NotNumber:
            response = { typeError: type, ErrorMessage: "Enter only numerical values" };
            break;
        case ErrorType.IsEmpty:
            response = { typeError: type, ErrorMessage: "Values cannot be empty" };
            break;
        case ErrorType.NotValidOperation:
            response = { typeError: type, ErrorMessage: "The selected operation is not valid" };
            break;
        case ErrorType.NotRegistred:
            response = { typeError: type, ErrorMessage: "The error is not logged, check the console for errors." };
            break;
    }

    return response;
}