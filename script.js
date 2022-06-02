function catchValue(id) {

    let catchOne = document.getElementById(id).innerText;

    saveCurrent(catchOne);
    
    
}

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
    else if (catchOne == "+" || catchOne == "-" || catchOne == "*" || catchOne == "/" ){

        let catchTwo = document.getElementById("currentDisplay").innerText;

        catchTwo = catchTwo + catchOne;
        
        if (catchTwo == '+' || catchTwo == "-" || catchTwo == "*" || catchTwo == "/"  )
        {
            console.log("This is not allow");
        }
        else
        {

            document.getElementById("previous-dispaly").innerText = catchTwo;

            document.getElementById("currentDisplay").innerText = '';

        }

    
    }


    else {


        let catchTwo = document.getElementById("currentDisplay").innerText;

        catchTwo = catchTwo + catchOne;

        console.log("The catch Two value is:",catchTwo);

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
