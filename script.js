document.getElementById("deleteButton").addEventListener("click",
    function () {

        let catchOne = document.getElementById("deleteButton").innerText;

        if (catchOne == "DEL") {

            saveCurrent(catchOne)
        }
        else {

            catchOne = parseInt(catchOne)

            saveCurrent(catchOne);

        }
    })

document.getElementById("button-one").addEventListener("click",
    function () {

        let catchOne = document.getElementById("button-one").innerText;

        catchOne = parseInt(catchOne)

        saveCurrent(catchOne)
    })

document.getElementById("buttonTwo").addEventListener("click",
    function () {

        let catchOne = document.getElementById("buttonTwo").innerText;

        catchOne = parseInt(catchOne)

        saveCurrent(catchOne);

    })

document.getElementById("buttonThree").addEventListener("click",
    function () {

        let catchOne = document.getElementById("buttonThree").innerText;

        catchOne = parseInt(catchOne)

        saveCurrent(catchOne);

    })

document.getElementById("buttonFour").addEventListener("click",
    function () {

        let catchOne = document.getElementById("buttonFour").innerText;

        catchOne = parseInt(catchOne)

        saveCurrent(catchOne);

    })

document.getElementById("buttonFive").addEventListener("click",
    function () {

        let catchOne = document.getElementById("buttonFive").innerText;

        catchOne = parseInt(catchOne)

        saveCurrent(catchOne);

    })

document.getElementById("buttonSix").addEventListener("click",
    function () {

        let catchOne = document.getElementById("buttonSix").innerText;

        catchOne = parseInt(catchOne)

        saveCurrent(catchOne);

    })

document.getElementById("buttonSeven").addEventListener("click",
    function () {

        let catchOne = document.getElementById("buttonSeven").innerText;

        catchOne = parseInt(catchOne)

        saveCurrent(catchOne);

    })


document.getElementById("buttonEight").addEventListener("click",
    function () {

        let catchOne = document.getElementById("buttonEight").innerText;

        catchOne = parseInt(catchOne)

        saveCurrent(catchOne);

    })

document.getElementById("buttonNine").addEventListener("click",
    function () {

        let catchOne = document.getElementById("buttonNine").innerText;

        catchOne = parseInt(catchOne)

        saveCurrent(catchOne);

    })

    document.getElementById("zeroButton").addEventListener("click",
    function () {

        let catchOne = document.getElementById("zeroButton").innerText;

        catchOne = parseInt(catchOne)

        saveCurrent(catchOne);

    })

document.getElementById("fullStopButton").addEventListener("click",
    function () {

        let catchOne = document.getElementById("fullStopButton").innerText;

        console.log("The full Stop Button is ", catchOne);



        saveCurrent(catchOne);

    })



document.getElementById("plusButton").addEventListener("click",
    function () {

        let catchOne = document.getElementById("plusButton").innerText;

        if (catchOne == "+") {

            saveCurrent(catchOne)
        }
        else {

            catchOne = parseInt(catchOne)

            saveCurrent(catchOne);

        }

    })

document.getElementById("minusButton").addEventListener("click",
    function () {

        let catchOne = document.getElementById("minusButton").innerText;

        if (catchOne == "-") {

            saveCurrent(catchOne)
        }
        else {

            catchOne = parseInt(catchOne)

            saveCurrent(catchOne);

        }

    })

document.getElementById("multipleButton").addEventListener("click",
    function () {

        let catchOne = document.getElementById("multipleButton").innerText;

        console.log("The catchOne is", catchOne);

        if (catchOne == "*") {

            saveCurrent(catchOne)
        }
        else {

            catchOne = parseInt(catchOne)

            saveCurrent(catchOne);

        }

    })

document.getElementById("divisionButton").addEventListener("click",
    function () {

        let catchOne = document.getElementById("divisionButton").innerText;

        console.log("The catchOne is", catchOne);

        if (catchOne == "/") {

            saveCurrent(catchOne)
        }
        else {

            catchOne = parseInt(catchOne)

            saveCurrent(catchOne);

        }

    })


document.getElementById("equalButton").addEventListener("click",
    function () {

        let catchOne = document.getElementById("equalButton").innerText;

        if (catchOne == "=") {

            saveCurrent(catchOne)
        }
        else {

            catchOne = parseInt(catchOne)

            saveCurrent(catchOne);

        }

    })

document.getElementById("AcButton").addEventListener("click",
    function () {

        let catchOne = document.getElementById("AcButton").innerText;

        console.log("The Catch One is:", catchOne);

        if (catchOne == "AC") {

            saveCurrent(catchOne)
        }
        else {

            catchOne = parseInt(catchOne)

            saveCurrent(catchOne);

        }

    })




function saveCurrent(catchOne) {


    if (catchOne == "AC") {

        document.getElementById("currentDisplay").innerText = '';


        document.getElementById("previous-dispaly").innerText = '';

    }
    else if (catchOne == '=') {

        let previousValue = document.getElementById("previous-dispaly").innerText;

        console.log("The previous Value is", previousValue);

        let currentValue = document.getElementById("currentDisplay").innerText;

        currentValue = parseFloat(currentValue);

        if (previousValue[previousValue.length - 1] == '+') {

            previousValue = parseFloat(previousValue);

            let result = previousValue + currentValue;

            console.log("The result is ", result);

            document.getElementById("currentDisplay").innerText = result;


        }

        else if (previousValue[previousValue.length - 1] == '-') {

            previousValue = parseFloat(previousValue);

            let result = previousValue - currentValue;

            console.log("The result is ", result);

            document.getElementById("currentDisplay").innerText = result;

        }

        else if (previousValue[previousValue.length - 1] == '*') {



            previousValue = parseFloat(previousValue);

            let result = previousValue * currentValue;

            console.log("The result is ", result);

            document.getElementById("currentDisplay").innerText = result;

        }

        else if (previousValue[previousValue.length - 1] == '/') {



            previousValue = parseFloat(previousValue);

            let result = previousValue / currentValue;

            console.log("The result is ", result);

            document.getElementById("currentDisplay").innerText = result;

        }


    }
    else if (catchOne == "DEL") {

        let catchTwo = document.getElementById("currentDisplay").innerText;

        let newCurrentValue = catchTwo.slice(0, -1);

        document.getElementById("currentDisplay").innerText = newCurrentValue;

    }

    else if (catchOne == "+") {

        let catchTwo = document.getElementById("currentDisplay").innerText;

        catchTwo = catchTwo + catchOne;

        document.getElementById("previous-dispaly").innerText = catchTwo;

        document.getElementById("currentDisplay").innerText = '';

        console.log("The CatchTwo is ", catchTwo[catchTwo.length - 1]);

    }

    else if (catchOne == "-") {

        let catchTwo = document.getElementById("currentDisplay").innerText;

        catchTwo = catchTwo + catchOne;

        document.getElementById("previous-dispaly").innerText = catchTwo;

        document.getElementById("currentDisplay").innerText = '';

        console.log("The CatchTwo is ", typeof catchTwo[catchTwo.length - 1]);

    }
    else if (catchOne == "*") {

        let catchTwo = document.getElementById("currentDisplay").innerText;

        catchTwo = catchTwo + catchOne;

        document.getElementById("previous-dispaly").innerText = catchTwo;

        document.getElementById("currentDisplay").innerText = '';

        console.log("The CatchTwo is ", typeof catchTwo[catchTwo.length - 1]);

    }

    else if (catchOne == "/") {

        let catchTwo = document.getElementById("currentDisplay").innerText;

        catchTwo = catchTwo + catchOne;

        document.getElementById("previous-dispaly").innerText = catchTwo;

        document.getElementById("currentDisplay").innerText = '';

        console.log("The CatchTwo is ", typeof catchTwo[catchTwo.length - 1]);

    }

    else {


        let catchTwo = document.getElementById("currentDisplay").innerText;

        catchTwo = catchTwo + catchOne;

        let count = 0;

        for (let i = 0; i < catchTwo.length; i++) {
            const element = catchTwo[i];

            if (element == '.') {

                count = count + 1;

            }

        }


        if (count == 2) {

            console.log("Twice full stop not allow");

        }
        else {
            document.getElementById("currentDisplay").innerText = catchTwo;
        }





    }
}



const text = 'abcdef'
const editedText = text.slice(0, -1);

console.log("The text is:", editedText);
