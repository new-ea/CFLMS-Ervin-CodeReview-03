/* Event waits all content of a page is loaded */
document.addEventListener('DOMContentLoaded', function (){
    const btn = document.querySelector(".btn");
    
    /* Starting click event */
    btn.addEventListener("click", function(){
        const name = document.querySelector("#name").value;
        const country = document.querySelector("#country").value;
        const age = document.querySelector("#age").value;
        const horsepower = document.querySelector("#horsepower").value;

        /* Gobal variable */
        output  = document.querySelector(".output");

        /* call finction for calculating */
        calculateInsurance(name, country, age, horsepower);  
    });
    
    calculateInsurance = (name, country, age, horsepower) => {    
        switch (country) {
            case "Austria":
            insurance = horsepower * 100 / age + 50;
            res = insurance.toFixed(2);
            output.innerHTML = `Hi ${name}, your calculated insurance fee is: <b>${res}€</b>`;
            break;
            case "Hungary":
            insurance = horsepower * 120 / age + 100;
            res = insurance.toFixed(2);
            output.innerHTML = `Hi ${name}, your calculated insurance fee is: <b>${res}€</b>`;
            break;
            case "Greece":
            insurance = horsepower * 150 / (age + 3) + 50;
            res = insurance.toFixed(2);
            output.innerHTML = `Hi ${name}, your calculated insurance fee is: <b>${res}€</b>`;
            break;
            default:
            prof_out.innerHTML = "UPPSS - An error has occured";  
        }
    }
});