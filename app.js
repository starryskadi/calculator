let equation = []


document.querySelectorAll(".number-btn").forEach(function(each) {
    each.addEventListener("click", function(ev) {
        ev.stopPropagation();
        const value = ev.target.value;

        if (value === "=") {
            try {
                let evalString = ""
                for (var i = 0; i < equation.length; i++) {
                    evalString += equation[i]
                }
                const total = eval(evalString)
                document.querySelector(".total").innerHTML = total
                equation = []
                equation.push(total)
                document.querySelector('.calculator').classList.remove("error")
            } catch (e) {
                document.querySelector('.calculator').classList.add("error")
            }
            return 
        }

        if (value === "clean") {
            equation = []
        } else if  (value === "back") {
            if (equation.length) {   
                const firstElement = String(equation[0]);
                if (firstElement.length > 1) {
                    equation.shift();
                    for (var i = firstElement.length - 1; i >= 0; i--) {
                        equation.unshift(firstElement[i])
                    }
                }
                equation.pop();
            }
        } else {
            equation.push(value)
        }

        let calulate = ""
        for (var i = 0; i < equation.length; i++) {
            calulate += equation[i]
        }

        if (calulate === "") {
            calulate = "0"
        }

        document.querySelector(".total").innerHTML = calulate
        
       
    })
})